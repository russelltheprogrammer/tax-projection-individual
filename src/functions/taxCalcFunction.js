import { federalSingleTaxBrackets, federalMFJTaxBrackets, federalMFSTaxBrackets, federalHOHTaxBrackets, newYorkStateSingleTaxBrackets, 
    newYorkStateMFJTaxBrackets, newYorkStateMFSTaxBrackets, newYorkStateHOHTaxBrackets, newYorkCitySingleTaxBrackets, newYorkCityMFJTaxBrackets,
    newYorkCityMFSTaxBrackets, newYorkCityHOHTaxBrackets }
    from "../constants";

const taxCalcFunction = (taxableIncome, filingStatus, residency) => {
   
    let taxBracket;
    let parsedTaxableIncome = parseInt(taxableIncome);
    let expr = filingStatus + " & " + residency;

    if(parsedTaxableIncome < 1){
        return 0;
    }
    else if(residency === "NONE"){
        return 0;
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
            case "SINGLE & NEW YORK  CITY":
                taxBracket = newYorkCitySingleTaxBrackets;
                break;
            case "MFJ & NEW YORK CITY":
                taxBracket = newYorkCityMFJTaxBrackets;
                break;
            case "MFS & NEW YORK CITY":
                taxBracket = newYorkCityMFSTaxBrackets;
                break;
            case "HOH & NEW YORK CITY":
                taxBracket = newYorkCityHOHTaxBrackets;
                break;
            default:
                return console.log("no state selected, there is an erorr in the taxCalcfunction");
        }
    
    for(let i = 0; i < taxBracket.length; i++){
        if(parsedTaxableIncome <= taxBracket[i]["taxBracketCeiling"] && taxBracket[i]["taxBracketFloor"] === null){
            return parseInt(parsedTaxableIncome * taxBracket[i]["rate"]);
        }
        else if(parsedTaxableIncome <= taxBracket[i]["taxBracketCeiling"] && parsedTaxableIncome >= taxBracket[i]["taxBracketFloor"]){
            return parseInt(((parsedTaxableIncome - taxBracket[i]["taxBracketFloor"]) * taxBracket[i]["rate"]) + taxBracket[i]["totalTaxBelowBracket"]);
        }
        else if(parsedTaxableIncome >= taxBracket[i]["taxBracketFloor"] && taxBracket[i]["taxBracketCeiling"] === null){
            return parseInt(((parsedTaxableIncome - taxBracket[i]["taxBracketFloor"]) * taxBracket[i]["rate"]) + taxBracket[i]["totalTaxBelowBracket"]);
        }
        else{
            return console.log("there is an error in the taxCalcFunction");
        }
        }
    }
}

export default taxCalcFunction;