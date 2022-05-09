import { maxSETaxThreshold } from "./constants";

const seTaxFunction = (businessIncome, wages) => {
    let businessIncomeParsed = parseInt(businessIncome);
    let wagesParsed = parseInt(wages);
    let netBusinessIncome = businessIncomeParsed * .9235;
    let wagesLessMaxSETaxThreshold = maxSETaxThreshold - wagesParsed;
    let seTax = 0;
    let addlSETax = 0;

    if( netBusinessIncome < 400 ) {
        return seTax;
    }

    else if (wagesLessMaxSETaxThreshold <= 0) {
        seTax = netBusinessIncome * .029;
    }
    else if (wagesLessMaxSETaxThreshold > 0) {
        if(netBusinessIncome <= wagesLessMaxSETaxThreshold) {
        seTax = netBusinessIncome * .153;
        }
        else{
            seTax = wagesLessMaxSETaxThreshold * .124;
            addlSETax = netBusinessIncome * .029;
            seTax += addlSETax;
        }
    }
    return Math.round(seTax);
}

export default seTaxFunction;
