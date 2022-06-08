import { federalSingleTaxBrackets, federalMFJTaxBrackets, federalMFSTaxBrackets, federalHOHTaxBrackets, newYorkStateSingleTaxBrackets, 
    newYorkStateMFJTaxBrackets, newYorkStateMFSTaxBrackets, newYorkStateHOHTaxBrackets, newYorkCitySingleTaxBrackets, newYorkCityMFJTaxBrackets,
    newYorkCityMFSTaxBrackets, newYorkCityHOHTaxBrackets }
    from "../constants";
import taxBracketTaxFunction from "./taxBracketTaxFunction";
import schDTaxWorksheetLineThresholdCalculation from "./schDTaxWorksheetLineThresholdCalculation";
import enterSmallerNumberFunction from "./enterSmallerNumberFunction";

const taxCalcFunction = (taxableIncome, filingStatus, residency, shortTermCapital, longTermCapital, qualifiedDividends) => {
   
    let taxBracket;
    let taxBracket2 = null;
    let expr = filingStatus + " & " + residency;
    let calculatedTax = 0;

    // refactor capital gains into its own function?
    // Sch D Line 1 is taxableIncome
    // Sch D Line 2 is qualifiedDividends
    let totalCapitalGains = shortTermCapital + longTermCapital;
    let schDLineThree = 0;
    let capitalGainsPlusQualifiedDividends = 0; // Sch D Line 4
    let taxableIncomeLessQualDivAndCapGains = 0; // Sch D Line 5
    let schDLineSixThreshold = schDTaxWorksheetLineThresholdCalculation(filingStatus, "SchDLineSix");
    let schDLineSeven = 0;
    let schDLineEight = 0;
    let schDLineNine = 0;
    let schDLineTen = 0;
    let schDLineEleven = schDLineNine;
    let schDLineTwelve = 0;
    let schDLineThirteenThreshold = schDTaxWorksheetLineThresholdCalculation(filingStatus, "SchDLineThirteen");
    let schDLineFourteen = 0;
    let schDLineFifteen = 0;
    let schDLineSixteen = 0;
    let schDLineSeventeen = 0;
    let schDLineEighteen = 0;
    let schDLineNineteen = 0;
    let schDLineTwenty = 0;
    let schDLineTwentyOne = 0;
    let calculatedTaxOfTaxableIncomeLessQualDivAndCapGains = 0; // Schd D Line 22
    let totalCapitalGainsTax = 0; // Sch D Line 23 Part 1
    let totalCalculatedTaxBenefittedFromCapGainsRate = 0; // Sch D Line 23 Part 2 TOTAL


    if(taxableIncome < 1){
        return calculatedTax;
    }
    else if(residency === "NONE"){
        return calculatedTax;
    }
    else if(residency === "FEDERAL") {
        if(longTermCapital >= totalCapitalGains){
            if(totalCapitalGains <= 0){
                schDLineThree = 0;
            }
            else {
                schDLineThree = totalCapitalGains;
            }
        }
        else {
            if(longTermCapital <= 0){
                schDLineThree = 0;
            }
            else {
                schDLineThree = longTermCapital;
            }
        }
    
    capitalGainsPlusQualifiedDividends += schDLineThree + qualifiedDividends;
    taxableIncomeLessQualDivAndCapGains = taxableIncome - capitalGainsPlusQualifiedDividends;
    schDLineSeven = enterSmallerNumberFunction(schDLineSixThreshold, taxableIncome);
    schDLineEight = enterSmallerNumberFunction(taxableIncomeLessQualDivAndCapGains, schDLineSeven);
    schDLineNine = schDLineSeven - schDLineEight;
    schDLineTen = enterSmallerNumberFunction(taxableIncome, capitalGainsPlusQualifiedDividends);
    schDLineTwelve = schDLineTen - schDLineEleven;
    schDLineFourteen = enterSmallerNumberFunction(taxableIncome, schDLineThirteenThreshold);
    schDLineFifteen += taxableIncomeLessQualDivAndCapGains + schDLineNine;
    schDLineSixteen = schDLineFourteen - schDLineFifteen;

    if(schDLineSixteen < 1){
        schDLineSixteen = 0;
    }
    // else{
    //     console.log("no Sch D Line Sixteen adjustment needed");
    // }

    schDLineSeventeen = enterSmallerNumberFunction(schDLineTwelve, schDLineSixteen);
    schDLineEighteen = Math.round(schDLineSeventeen *.15);
    schDLineNineteen += schDLineNine + schDLineSeventeen;
    schDLineTwenty = schDLineTen - schDLineNineteen;
    schDLineTwentyOne = Math.round(schDLineTwenty *.20);
    totalCapitalGainsTax += schDLineEighteen + schDLineTwentyOne;
    }
    // else{
    //     console.log("proceed with tax caculation function without cap gains tax rate");
    // }
   
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

    calculatedTax += taxBracketTaxFunction(taxBracket, taxableIncome);

    if(residency === "FEDERAL"){
        calculatedTaxOfTaxableIncomeLessQualDivAndCapGains += taxBracketTaxFunction(taxBracket, taxableIncomeLessQualDivAndCapGains);
    }
    // else {
    //     console.log("Federal residency not selected");
    // }

    totalCalculatedTaxBenefittedFromCapGainsRate += totalCapitalGainsTax + calculatedTaxOfTaxableIncomeLessQualDivAndCapGains;
   
    if(residency === "FEDERAL"){
        calculatedTax = enterSmallerNumberFunction(calculatedTax, totalCalculatedTaxBenefittedFromCapGainsRate);
    }
    // else{
    //     console.log("Federal residency not selected");
    // }

    if(taxBracket2 === null){
        return calculatedTax;
    }
    else if(taxBracket2 !== null){
        calculatedTax += taxBracketTaxFunction(taxBracket2, taxableIncome);
        return calculatedTax;
    }
    return console.log("No tax calculated, there is an error in the the taxCalcFunction");
    
}

export default taxCalcFunction;