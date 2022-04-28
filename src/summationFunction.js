// dataToSummate single nested object with a string value number
// constantElement is an array with single nested objects, each hardValue value matches the key to the dataToSummate object

const summationFunction = ( dataToSummate, constantElement ) => {
    let resultsArray = [];

    for(let i = 0; i < constantElement.length; i++){
        if(constantElement[i]["hardValue"] === dataToSummate[constantElement[i]["hardValue"]]){
            resultsArray.push(parseInt(dataToSummate[constantElement[i]["hardValue"]]));
    }
        else {
            return "0";
        }
    }
    return resultsArray.reduce((prevValue, currentValue) => prevValue + currentValue);
};

export default summationFunction;


// const numbersInputInitialState = {
//     wages: "0",
//     interest: "0",
//     dividends: "0",
//     retirementIncome: "0",
//     capitalIncome: "0",
//     businessIncome: "0",
//     otherIncome: "0",
//     hsa: "0",
//     deductibleSE: "0",
//     insurance: "0",
//     retirementDeduction: "0",
//     studentLoan: "0",
//     otherAdjustments: "0",
//     medical: "0",
//     taxesPaidItemized: "0",
//     interestPaidItemized: "0",
//     charity: "0",
//     otherItemized: "0",
//     qbi: "0",
//     otherFedDeductions: "0",
//     otherFedTaxes: "0",
//     otherStateIncomeDeductions: "0",
//     stateAdditions: "0",
//     stateSubtractions: "0",
//     otherStateTaxes: "0"
// }

// const taxIncomeElements = [
//     { id: 0, element: "WAGES (W-2)", hardValue: "wages" },
//     { id: 1, element: "INTEREST", hardValue: "interest" },
//     { id: 2, element: "DIVIDENDS", hardValue: "dividends"  },
//     { id: 3, element: "RETIREMENT INCOME", hardValue: "retirementIncome" },
//     { id: 4, element: "CAPITAL GAINS/(LOSSES)", hardValue: "capitalIncome"},
//     { id: 5, element: "BUSINESS INCOME (SCHEDULE C)", hardValue: "businessIncome"},
//     { id: 6, element: "OTHER INCOME", hardValue: "otherIncome"}
// ];

// const object = {
//     wages: "5",
//     interest: "7",
//     dividends: "5",
//     retirementIncome: "0",
//     capitalIncome: "3",
//     businessIncome: "0",
//     otherIncome: "0",
//     hsa: "0",
//     deductibleSE: "0",
//     insurance: "0",
//     retirementDeduction: "0",
//     studentLoan: "0",
//     otherAdjustments: "0",
//     medical: "0",
//     taxesPaidItemized: "0",
//     interestPaidItemized: "0",
//     charity: "0",
//     otherItemized: "0",
//     qbi: "0",
//     otherFedDeductions: "0",
//     otherFedTaxes: "0",
//     otherStateIncomeDeductions: "0",
//     stateAdditions: "0",
//     stateSubtractions: "0",
//     otherStateTaxes: "0"
// }

// const array = [
//     { id: 0, element: "WAGES (W-2)", hardValue: "wages" },
//     { id: 1, element: "INTEREST", hardValue: "interest" },
//     { id: 2, element: "DIVIDENDS", hardValue: "dividends"  },
//     { id: 3, element: "RETIREMENT INCOME", hardValue: "retirementIncome" },
//     { id: 4, element: "CAPITAL GAINS/(LOSSES)", hardValue: "capitalIncome"},
//     { id: 5, element: "BUSINESS INCOME (SCHEDULE C)", hardValue: "businessIncome"},
//     { id: 6, element: "OTHER INCOME", hardValue: "otherIncome"}
// ];


// const summationFunction = ( dataToSummate, constantElement ) => {
//     let resultsArray = [];

//     for(let i = 0; i < constantElement.length; i++){
//      console.log(constantElement[i]["hardValue"]);
//      console.log(dataToSummate[constantElement[i]["hardValue"]]);
//         if(constantElement[i]["hardValue"] === dataToSummate[constantElement[i]["hardValue"]]){
        
//             resultsArray.push(parseInt(dataToSummate[constantElement[i]["hardValue"]]));
//     }
//         else {
//             return "0"
//         }
//     }
//     return resultsArray.reduce((prevValue, currentValue) => prevValue + currentValue);
// };

// console.log(summationFunction( object, array ));


