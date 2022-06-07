import { federalSingleTaxBrackets, federalMFJTaxBrackets, federalMFSTaxBrackets, federalHOHTaxBrackets, newYorkStateSingleTaxBrackets, 
    newYorkStateMFJTaxBrackets, newYorkStateMFSTaxBrackets, newYorkStateHOHTaxBrackets, newYorkCitySingleTaxBrackets, newYorkCityMFJTaxBrackets,
    newYorkCityMFSTaxBrackets, newYorkCityHOHTaxBrackets }
    from "../constants";
import taxBracketTaxFunction from "./taxBracketTaxFunction";
import schDTaxWorksheetLineThresholdCalculation from "./schDTaxWorksheetLineThresholdCalculation";

const taxCalcFunction = (taxableIncome, filingStatus, residency, shortTermCapital, longTermCapital, qualifiedDividends) => {
   
    let taxBracket;
    let taxBracket2 = null;
    let expr = filingStatus + " & " + residency;
    let calculatedTax = 0;

    // refactor capital gains into its own function?
    let schDLineSixThreshold = schDTaxWorksheetLineThresholdCalculation(filingStatus, "SchDLineSix");
    let schDLineThirteenThreshold = schDTaxWorksheetLineThresholdCalculation(filingStatus, "SchDLineThirteen");
    let totalCapitalGains = shortTermCapital + longTermCapital;
    let SchDLineThree = 0;
    let capitalGainsPlusQualifiedDividends = 0;
    let schDLineFive = 0;
    let schDLineSeven = 0;
    let schDLineEight = 0;
    let schDLineNine = 0;

    if(taxableIncome < 1){
        return calculatedTax;
    }
    else if(residency === "NONE"){
        return calculatedTax;
    }
    else {
        if(longTermCapital >= totalCapitalGains){
            if(totalCapitalGains <= 0){
                SchDLineThree = 0;
            }
            else {
                SchDLineThree = totalCapitalGains;
            }
        }
        else {
            if(longTermCapital <= 0){
                SchDLineThree = 0;
            }
            else {
                SchDLineThree = longTermCapital;
            }
        }
    }

    capitalGainsPlusQualifiedDividends += SchDLineThree + qualifiedDividends;
    schDLineFive = taxableIncome - capitalGainsPlusQualifiedDividends;

    if(schDLineSixThreshold <= taxableIncome){
        schDLineSeven = schDLineSixThreshold;
    }
    else {
        schDLineSeven = taxableIncome;
    }

    if(schDLineFive <=  schDLineSeven){
        schDLineEight = schDLineFive;
    }
    else {
        schDLineEight = schDLineSeven;
    }

   schDLineNine = schDLineSeven - schDLineEight;

    

   

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

export default taxCalcFunction;