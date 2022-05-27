import { federalSingleTaxBrackets, federalMFJTaxBrackets, federalMFSTaxBrackets, federalHOHTaxBrackets, newYorkStateSingleTaxBrackets, 
    newYorkStateMFJTaxBrackets, newYorkStateMFSTaxBrackets, newYorkStateHOHTaxBrackets, newYorkCitySingleTaxBrackets, newYorkCityMFJTaxBrackets,
    newYorkCityMFSTaxBrackets, newYorkCityHOHTaxBrackets }
    from "../constants";
import taxBracketTaxFunction from "./taxBracketTaxFunction";

const taxCalcFunction = (taxableIncome, filingStatus, residency) => {
   
    let taxBracket;
    let taxBracket2 = null;
    let expr = filingStatus + " & " + residency;
    let calculatedTax = 0;

    if(taxableIncome < 1){
        return calculatedTax;
    }
    else if(residency === "NONE"){
        return calculatedTax;
    }
    else {
        switch(expr) {
            case "SINGLE & FEDERAL":
                taxBracket = federalSingleTaxBrackets;
                break;
            case "MFJ & FEDERAL":
                taxBracket = federalMFJTaxBrackets;
                break;
            case "MFS & FEDERAL":
                taxBracket = federalMFSTaxBrackets;
                break;
            case "HOH & FEDERAL":
                taxBracket = federalHOHTaxBrackets;
                break;
            case "SINGLE & NEW YORK":
                taxBracket = newYorkStateSingleTaxBrackets;
                break;
            case "MFJ & NEW YORK":
                taxBracket = newYorkStateMFJTaxBrackets;
                break;
            case "MFS & NEW YORK":
                taxBracket = newYorkStateMFSTaxBrackets;
                break;
            case "HOH & NEW YORK":
                taxBracket = newYorkStateHOHTaxBrackets;
                break;
            case "SINGLE & NEW YORK CITY":
                taxBracket = newYorkStateSingleTaxBrackets;
                taxBracket2 = newYorkCitySingleTaxBrackets;
                break;
            case "MFJ & NEW YORK CITY":
                taxBracket = newYorkStateMFJTaxBrackets;;
                taxBracket2 = newYorkCityMFJTaxBrackets;
                break;
            case "MFS & NEW YORK CITY":
                taxBracket = newYorkStateMFSTaxBrackets;
                taxBracket2 = newYorkCityMFSTaxBrackets;
                break;
            case "HOH & NEW YORK CITY":
                taxBracket = newYorkStateHOHTaxBrackets;
                taxBracket2 = newYorkCityHOHTaxBrackets;
                break;
            default:
                return console.log("no state selected, there is an erorr in the taxCalcfunction");
        }

    calculatedTax += taxBracketTaxFunction(taxBracket, taxableIncome, calculatedTax);
   
    if(taxBracket2 === null){
        return calculatedTax;
    }
    else if(taxBracket2 !== null){
        calculatedTax += taxBracketTaxFunction(taxBracket2, taxableIncome, calculatedTax);
        return calculatedTax;
    }
    return console.log("No tax calculated, there is an error in the the taxCalcFunction");
    }
}

export default taxCalcFunction;