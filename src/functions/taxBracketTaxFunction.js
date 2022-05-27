const taxBracketTaxFunction = (taxBracket, taxableIncome, tax) => {
    for(let i = 0; i < taxBracket.length; i++){
     if(taxableIncome <= taxBracket[i]["taxBracketCeiling"] && taxBracket[i]["taxBracketFloor"] === null){
         tax += taxableIncome * taxBracket[i]["rate"];
     }
     else if(taxableIncome <= taxBracket[i]["taxBracketCeiling"] && taxableIncome >= taxBracket[i]["taxBracketFloor"]){
         tax += ((taxableIncome - taxBracket[i]["taxBracketFloor"]) * taxBracket[i]["rate"]) + taxBracket[i]["totalTaxBelowBracket"];
     }
     else if(taxableIncome >= taxBracket[i]["taxBracketFloor"] && taxBracket[i]["taxBracketCeiling"] === null){
         tax += ((taxableIncome - taxBracket[i]["taxBracketFloor"]) * taxBracket[i]["rate"]) + taxBracket[i]["totalTaxBelowBracket"];
     }
    }
    return tax;
}

export default taxBracketTaxFunction;