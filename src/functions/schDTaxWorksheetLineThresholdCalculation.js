import { SchDLineSix, SchDLineThirteen } from "../constants";

const schDTaxWorksheetLineThresholdCalculation = (filingStatus, schDLineNumber) => {
    let array = null;

    if(schDLineNumber === "SchDLineSix"){
        array = SchDLineSix;
    }
    else{ 
        array = SchDLineThirteen;
    }

    for(let i = 0; i < array.length; i++){
        if(filingStatus === array[i]["filingStatus"]){
            return array[i]["value"];
        }
    }

    return console.log("There is an error in the schDTaxWorksheetLineThresholdCalculation");
}

export default schDTaxWorksheetLineThresholdCalculation;