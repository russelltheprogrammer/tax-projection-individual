const childTaxCreditFunction = (agi, dependents, filingStatus) => {

    if(dependents < 1){
        return 0;
    }

const maximumTaxCredit = dependents * 500; // Line 7
const agiThreshold = childTaxCreditAgiFilingStatusThresholdCalc(filingStatus); // Line 9
const agiOverThreshold = childTaxCreditAgiOverThresholdCalc(agiThreshold, agi); // Line 10
const agiOverThresholdTimesFivePercent = agiOverThreshold * .05; // Line 11
const minimumTaxCredit = agiOverThresholdTimesFivePercent - maximumTaxCredit > 0 ? agiOverThresholdTimesFivePercent - maximumTaxCredit : 0; // Line 12
const taxCreditAllowed = maximumTaxCredit > minimumTaxCredit ? minimumTaxCredit : maximumTaxCredit;

return -taxCreditAllowed;
  
};

export default childTaxCreditFunction;


const childTaxCreditAgiFilingStatusThresholdCalc = (filingStatus) => {
    if(filingStatus === "MFJ"){
        return 400000;
    }
    else {
        return 200000;
    }
};

const childTaxCreditAgiOverThresholdCalc = (agiThreshold, agi) => {
    
    let difference = agiThreshold - agi;
    let differenceRounded = Math.round(difference/1000)*1000;

    if(difference < 1 ){
        return 0;
    }
    else if(difference >= 1 && difference < 1000){
        return 1000;
    }
    else {
        return differenceRounded;
    }
};