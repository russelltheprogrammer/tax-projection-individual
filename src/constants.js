
const taxAssumptionsElements = [
    { id: 0, element: "QUARTER", 
    array: [
        { id: 0, arrayValue: 1 },
        { id: 1, arrayValue: 2 },
        { id: 2, arrayValue: 3 },
        { id: 3, arrayValue: 4 }
    ]},
    { id: 1, element: "FILING STATUS", 
    array: [
        { id: 0, arrayValue: "SINGLE" },
        { id: 1, arrayValue: "MFJ" },
        { id: 2, arrayValue: "MFS" },
        { id: 3, arrayValue: "HOH" }
    ]},
    { id: 2, element: "STANDARD/ITEMIZED", 
    array: [
        { id: 0, arrayValue: "STANDARD" },
        { id: 1, arrayValue: "ITEMIZED" }
    ]},
    { id: 3, element: "DEPENDENTS", 
    array: [
        { id: 0, arrayValue: 1 },
        { id: 1, arrayValue: 2 },
        { id: 2, arrayValue: 3 },
        { id: 3, arrayValue: 4 },
        { id: 4, arrayValue: 5 },
        { id: 5, arrayValue: 6 },
        { id: 6, arrayValue: 7 },
        { id: 7, arrayValue: 8 },
        { id: 8, arrayValue: 9 }
    ]},
    { id: 4, element: "STATE RESIDENCY", 
    array: [
        { id: 0, arrayValue: "NONE" },
        { id: 1, arrayValue: "NEW YORK" },
        { id: 2, arrayValue: "NEW YORK CITY" }
    ]}
];

// numbersInputInitialState for each description key must match respective constants.js hardValue
const numbersInputInitialState = {
    wages: "0",
    interest: "0",
    dividends: "0",
    retirementIncome: "0",
    capitalIncome: "0",
    businessIncome: "0",
    otherIncome: "0",
    hsa: "0",
    insurance: "0",
    retirementDeduction: "0",
    studentLoan: "0",
    otherAdjustments: "0",
    medical: "0",
    taxesPaidItemized: "0",
    interestPaidItemized: "0",
    charity: "0",
    otherItemized: "0",
    qbi: "0",
    otherFedDeductions: "0",
    otherFedTaxes: "0",
    otherStateIncomeDeductions: "0",
    stateAdditions: "0",
    stateSubtractions: "0",
    otherStateTaxes: "0",
    fedWagesWithholding: "0",
    fedPYOP: "0",
    fedQ1: "0",
    fedQ2: "0",
    fedQ3: "0",
    fedQ4: "0",
    fedCredits: "0",
    stateWagesWithholding: "0",
    statePYOP: "0",
    stateQ1: "0",
    stateQ2: "0",
    stateQ3: "0",
    stateQ4: "0",
    stateCredits: "0"
}

const taxIncomeElements = [
    { id: 0, element: "WAGES (W-2)", hardValue: "wages" },
    { id: 1, element: "INTEREST", hardValue: "interest" },
    { id: 2, element: "DIVIDENDS", hardValue: "dividends"  },
    { id: 3, element: "RETIREMENT INCOME", hardValue: "retirementIncome" },
    { id: 4, element: "CAPITAL GAINS/(LOSSES)", hardValue: "capitalIncome"},
    { id: 5, element: "BUSINESS INCOME (SCHEDULE C)", hardValue: "businessIncome"},
    { id: 6, element: "OTHER INCOME", hardValue: "otherIncome"}
];


const taxAdjustmentElements = [
    { id: 0, element: "HSA CONTRIBUTIONS", hardValue: "hsa" },
    { id: 1, element: "S/E INSURANCE", hardValue: "insurance" },
    { id: 2, element: "RETIREMENT DEDUCTION", hardValue: "retirementDeduction" },
    { id: 3, element: "STUDENT LOAN INTEREST", hardValue: "studentLoan" },
    { id: 4, element: "OTHER ADJUSTMENTS", hardValue: "otherAdjustments" }
];

const taxItemizedDeductionElements = [
    { id: 0, element: "MEDICAL", hardValue: "medical" },
    { id: 1, element: "TAXES PAID", hardValue: "taxesPaidItemized" },
    { id: 2, element: "INTEREST PAID", hardValue: "interestPaidItemized" },
    { id: 3, element: "CHARITY", hardValue: "charity" },
    { id: 4, element: "OTHER ITEMIZED DEDUCTIONS", hardValue: "otherItemized" },
];

const taxOtherFederal = [
    { id: 0, element: "QUALIFIED BUSINESS INCOME DEDUCTION (NEGATIVE)", hardValue: "qbi" },
    { id: 1, element: "OTHER FEDERAL INCOME/(DEDUCTIONS)", hardValue: "otherFedDeductions" }
];

const taxOtherState = [
    { id: 0, element: "OTHER STATE INCOME/(DEDUCTIONS)", hardValue: "otherStateIncomeDeductions" },
    { id: 1, element: "STATE ADDITIONS", hardValue: "stateAdditions" },
    { id: 2, element: "STATE SUBTRACTIONS (NEGATIVE)", hardValue: "stateSubtractions" }
];

const paymentsFederal = [
    { id: 0, element: "WAGES WITHHOLDING", hardValue: "fedWagesWithholding" },
    { id: 1, element: "PRIOR YEAR OVERPAYMENT", hardValue: "fedPYOP" },
    { id: 2, element: "FIRST QUARTER ESTIMATE", hardValue: "fedQ1" },
    { id: 3, element: "SECOND QUARTER ESTIMATE", hardValue: "fedQ2" },
    { id: 4, element: "THIRD QUARTER ESTIMATE", hardValue: "fedQ3" },
    { id: 5, element: "FOURTH QUARTER ESTIMATE", hardValue: "fedQ4" },
    { id: 6, element: "CREDITS", hardValue: "fedCredits" },
];

const paymentsState = [
    { id: 0, element: "WAGES WITHHOLDING", hardValue: "stateWagesWithholding" },
    { id: 1, element: "PRIOR YEAR OVERPAYMENT", hardValue: "statePYOP" },
    { id: 2, element: "FIRST QUARTER ESTIMATE", hardValue: "stateQ1" },
    { id: 3, element: "SECOND QUARTER ESTIMATE", hardValue: "stateQ2" },
    { id: 4, element: "THIRD QUARTER ESTIMATE", hardValue: "stateQ3" },
    { id: 5, element: "FOURTH QUARTER ESTIMATE", hardValue: "stateQ4" },
    { id: 6, element: "CREDITS", hardValue: "stateCredits" },
];

const otherTaxes = [
    { id: 0, element: "OTHER FEDERAL TAXES", hardValue: "otherFedTaxes" },
    { id: 1, element: "OTHER STATE TAXES", hardValue: "otherStateTaxes" },
]

// all numbers below this will change from year to year, currently constants are for 2022
const maxSETaxThreshold = 147000;

const federalSingleTaxBrackets = [
    { id: 0, bracket: "10%", rate: .10, totalTaxBelowBracket: 0, taxableIncomeBracketFloor: null, taxableIncomeBracketCeiling: 10275 },
    { id: 1, bracket: "12%", rate: .12, totalTaxBelowBracket: 1028, taxableIncomeBracketFloor: 10276, taxableIncomeBracketCeiling: 41775 },
    { id: 2, bracket: "22%", rate: .22, totalTaxBelowBracket: 4808, taxableIncomeBracketFloor: 41776, taxableIncomeBracketCeiling: 89075 },
    { id: 3, bracket: "24%", rate: .24, totalTaxBelowBracket: 15214, taxableIncomeBracketFloor: 89076, taxableIncomeBracketCeiling: 170050 },
    { id: 4, bracket: "32%", rate: .32, totalTaxBelowBracket: 34648, taxableIncomeBracketFloor: 170051, taxableIncomeBracketCeiling: 2215950 },
    { id: 5, bracket: "35%", rate: .35, totalTaxBelowBracket: 49336, taxableIncomeBracketFloor: 215951, taxableIncomeBracketCeiling: 539900 },
    { id: 6, bracket: "37%", rate: .37, totalTaxBelowBracket: 162718, taxableIncomeBracketFloor: 539901, taxableIncomeBracketCeiling: null }
];

const federalMFJTaxBrackets = [
    { id: 0, bracket: "10%", rate: .10, totalTaxBelowBracket: 0, taxableIncomeBracketFloor: null, taxableIncomeBracketCeiling: 20550 },
    { id: 1, bracket: "12%", rate: .12, totalTaxBelowBracket: 2055, taxableIncomeBracketFloor: 20551, taxableIncomeBracketCeiling: 83550 },
    { id: 2, bracket: "22%", rate: .22, totalTaxBelowBracket: 9615, taxableIncomeBracketFloor: 83551, taxableIncomeBracketCeiling: 178150 },
    { id: 3, bracket: "24%", rate: .24, totalTaxBelowBracket: 30427, taxableIncomeBracketFloor: 178151, taxableIncomeBracketCeiling: 340100 },
    { id: 4, bracket: "32%", rate: .32, totalTaxBelowBracket: 69295, taxableIncomeBracketFloor: 340101, taxableIncomeBracketCeiling: 431900 },
    { id: 5, bracket: "35%", rate: .35, totalTaxBelowBracket: 98671, taxableIncomeBracketFloor: 431901, taxableIncomeBracketCeiling: 647850 },
    { id: 6, bracket: "37%", rate: .37, totalTaxBelowBracket: 174254, taxableIncomeBracketFloor: 647851, taxableIncomeBracketCeiling: null }
];

const federalMFSTaxBrackets = [
    { id: 0, bracket: "10%", rate: .10, totalTaxBelowBracket: 0, taxableIncomeBracketFloor: null, taxableIncomeBracketCeiling: 10275 },
    { id: 1, bracket: "12%", rate: .12, totalTaxBelowBracket: 1028, taxableIncomeBracketFloor: 10276, taxableIncomeBracketCeiling: 41775 },
    { id: 2, bracket: "22%", rate: .22, totalTaxBelowBracket: 4808, taxableIncomeBracketFloor: 41776, taxableIncomeBracketCeiling: 89075 },
    { id: 3, bracket: "24%", rate: .24, totalTaxBelowBracket: 15214, taxableIncomeBracketFloor: 89076, taxableIncomeBracketCeiling: 170050 },
    { id: 4, bracket: "32%", rate: .32, totalTaxBelowBracket: 34648, taxableIncomeBracketFloor: 170051, taxableIncomeBracketCeiling: 215950 },
    { id: 5, bracket: "35%", rate: .35, totalTaxBelowBracket: 49336, taxableIncomeBracketFloor: 215951, taxableIncomeBracketCeiling: 323925 },
    { id: 6, bracket: "37%", rate: .37, totalTaxBelowBracket: 87127, taxableIncomeBracketFloor: 323926, taxableIncomeBracketCeiling: null }
];

const federalHOHTaxBrackets = [
    { id: 0, bracket: "10%", rate: .10, totalTaxBelowBracket: 0, taxableIncomeBracketFloor: null, taxableIncomeBracketCeiling: 14650 },
    { id: 1, bracket: "12%", rate: .12, totalTaxBelowBracket: 1465, taxableIncomeBracketFloor: 14651, taxableIncomeBracketCeiling: 55900 },
    { id: 2, bracket: "22%", rate: .22, totalTaxBelowBracket: 6415, taxableIncomeBracketFloor: 55901, taxableIncomeBracketCeiling: 89050 },
    { id: 3, bracket: "24%", rate: .24, totalTaxBelowBracket: 13708, taxableIncomeBracketFloor: 89051, taxableIncomeBracketCeiling: 170050 },
    { id: 4, bracket: "32%", rate: .32, totalTaxBelowBracket: 33148, taxableIncomeBracketFloor: 170051, taxableIncomeBracketCeiling: 215950 },
    { id: 5, bracket: "35%", rate: .35, totalTaxBelowBracket: 47836, taxableIncomeBracketFloor: 215951, taxableIncomeBracketCeiling: 539900 },
    { id: 6, bracket: "37%", rate: .37, totalTaxBelowBracket: 161219, taxableIncomeBracketFloor: 539901, taxableIncomeBracketCeiling: null }
];

const newYorkStateSingleTaxBrackets = [
    { id: 0, bracket: "4%", rate: .04, totalTaxBelowBracket: 0, taxableIncomeBracketFloor: null, taxableIncomeBracketCeiling: 8500 },
    { id: 1, bracket: "4.5%", rate: .045, totalTaxBelowBracket: 340, taxableIncomeBracketFloor: 8501, taxableIncomeBracketCeiling: 11700 },
    { id: 2, bracket: "5.25%", rate: .0525, totalTaxBelowBracket: 484, taxableIncomeBracketFloor: 11701, taxableIncomeBracketCeiling: 13900 },
    { id: 3, bracket: "5.9%", rate: .059, totalTaxBelowBracket: 600, taxableIncomeBracketFloor: 13901, taxableIncomeBracketCeiling: 21400 },
    { id: 4, bracket: "5.97%", rate: .0597, totalTaxBelowBracket: 1042, taxableIncomeBracketFloor: 21401, taxableIncomeBracketCeiling: 80650 },
    { id: 5, bracket: "6.33%", rate: .0633, totalTaxBelowBracket: 4579, taxableIncomeBracketFloor: 80651, taxableIncomeBracketCeiling: 215400 },
    { id: 6, bracket: "6.85%", rate: .0685, totalTaxBelowBracket: 13109, taxableIncomeBracketFloor: 215401, taxableIncomeBracketCeiling: 1077550 },
    { id: 7, bracket: "9.65%", rate: .0965, totalTaxBelowBracket: 72166, taxableIncomeBracketFloor: 1077550, taxableIncomeBracketCeiling: 5000000 },
    { id: 8, bracket: "10.3%", rate: .103, totalTaxBelowBracket: 450683, taxableIncomeBracketFloor: 5000001, taxableIncomeBracketCeiling: 25000000 },
    { id: 9, bracket: "10.9%", rate: .109, totalTaxBelowBracket: 2510683, taxableIncomeBracketFloor: 25000001, taxableIncomeBracketCeiling: null }
];

const newYorkStateMFJTaxBrackets = [
    { id: 0, bracket: "4%", rate: .04, totalTaxBelowBracket: 0, taxableIncomeBracketFloor: null, taxableIncomeBracketCeiling: 17150 },
    { id: 1, bracket: "4.5%", rate: .045, totalTaxBelowBracket: 686, taxableIncomeBracketFloor: 17151, taxableIncomeBracketCeiling: 23600 },
    { id: 2, bracket: "5.25%", rate: .0525, totalTaxBelowBracket: 976, taxableIncomeBracketFloor: 23601, taxableIncomeBracketCeiling: 27900 },
    { id: 3, bracket: "5.9%", rate: .059, totalTaxBelowBracket: 1202, taxableIncomeBracketFloor: 27901, taxableIncomeBracketCeiling: 43000 },
    { id: 4, bracket: "5.97%", rate: .0597, totalTaxBelowBracket: 2093, taxableIncomeBracketFloor: 43001, taxableIncomeBracketCeiling: 161550 },
    { id: 5, bracket: "6.33%", rate: .0633, totalTaxBelowBracket: 9170, taxableIncomeBracketFloor: 161551, taxableIncomeBracketCeiling: 323200 },
    { id: 6, bracket: "6.85%", rate: .0685, totalTaxBelowBracket: 19403, taxableIncomeBracketFloor: 323201, taxableIncomeBracketCeiling: 2155350 },
    { id: 7, bracket: "9.65%", rate: .0965, totalTaxBelowBracket: 144905, taxableIncomeBracketFloor: 2155351, taxableIncomeBracketCeiling: 5000000 },
    { id: 8, bracket: "10.3%", rate: .103, totalTaxBelowBracket: 419414, taxableIncomeBracketFloor: 5000001, taxableIncomeBracketCeiling: 25000000 },
    { id: 9, bracket: "10.9%", rate: .109, totalTaxBelowBracket: 2479414, taxableIncomeBracketFloor: 25000001, taxableIncomeBracketCeiling: null }
];

const newYorkStateMFSTaxBrackets = [
    { id: 0, bracket: "4%", rate: .04, totalTaxBelowBracket: 0, taxableIncomeBracketFloor: null, taxableIncomeBracketCeiling: 8500 },
    { id: 1, bracket: "4.5%", rate: .045, totalTaxBelowBracket: 340, taxableIncomeBracketFloor: 8501, taxableIncomeBracketCeiling: 11700 },
    { id: 2, bracket: "5.25%", rate: .0525, totalTaxBelowBracket: 484, taxableIncomeBracketFloor: 11701, taxableIncomeBracketCeiling: 13900 },
    { id: 3, bracket: "5.9%", rate: .059, totalTaxBelowBracket: 600, taxableIncomeBracketFloor: 13901, taxableIncomeBracketCeiling: 21400 },
    { id: 4, bracket: "5.97%", rate: .0597, totalTaxBelowBracket: 1042, taxableIncomeBracketFloor: 21401, taxableIncomeBracketCeiling: 80650 },
    { id: 5, bracket: "6.33%", rate: .0633, totalTaxBelowBracket: 4579, taxableIncomeBracketFloor: 80651, taxableIncomeBracketCeiling: 215400 },
    { id: 6, bracket: "6.85%", rate: .0685, totalTaxBelowBracket: 13109, taxableIncomeBracketFloor: 215401, taxableIncomeBracketCeiling: 1077550 },
    { id: 7, bracket: "9.65%", rate: .0965, totalTaxBelowBracket: 72166, taxableIncomeBracketFloor: 1077550, taxableIncomeBracketCeiling: 5000000 },
    { id: 8, bracket: "10.3%", rate: .103, totalTaxBelowBracket: 450683, taxableIncomeBracketFloor: 5000001, taxableIncomeBracketCeiling: 25000000 },
    { id: 9, bracket: "10.9%", rate: .109, totalTaxBelowBracket: 2510683, taxableIncomeBracketFloor: 25000001, taxableIncomeBracketCeiling: null }
];

const newYorkStateHOHTaxBrackets = [
    { id: 0, bracket: "4%", rate: .04, totalTaxBelowBracket: 0, taxableIncomeBracketFloor: null, taxableIncomeBracketCeiling: 12800 },
    { id: 1, bracket: "4.5%", rate: .045, totalTaxBelowBracket: 512, taxableIncomeBracketFloor: 12801, taxableIncomeBracketCeiling: 17650 },
    { id: 2, bracket: "5.25%", rate: .0525, totalTaxBelowBracket: 730, taxableIncomeBracketFloor: 17651, taxableIncomeBracketCeiling: 20900 },
    { id: 3, bracket: "5.9%", rate: .059, totalTaxBelowBracket: 901, taxableIncomeBracketFloor: 20901, taxableIncomeBracketCeiling: 32200 },
    { id: 4, bracket: "5.97%", rate: .0597, totalTaxBelowBracket: 1568, taxableIncomeBracketFloor: 32201, taxableIncomeBracketCeiling: 107650 },
    { id: 5, bracket: "6.33%", rate: .0633, totalTaxBelowBracket: 6072, taxableIncomeBracketFloor: 107651, taxableIncomeBracketCeiling: 269300 },
    { id: 6, bracket: "6.85%", rate: .0685, totalTaxBelowBracket: 16304, taxableIncomeBracketFloor: 269301, taxableIncomeBracketCeiling: 1616450 },
    { id: 7, bracket: "9.65%", rate: .0965, totalTaxBelowBracket: 108584, taxableIncomeBracketFloor: 1616451, taxableIncomeBracketCeiling: 5000000 },
    { id: 8, bracket: "10.3%", rate: .103, totalTaxBelowBracket: 435097, taxableIncomeBracketFloor: 5000001, taxableIncomeBracketCeiling: 25000000 },
    { id: 9, bracket: "10.9%", rate: .109, totalTaxBelowBracket: 2495097, taxableIncomeBracketFloor: 25000001, taxableIncomeBracketCeiling: null }
];

const newYorkCitySingleTaxBrackets = [
    { id: 0, bracket: "3.078%", rate: .03078, totalTaxBelowBracket: 0, taxableIncomeBracketFloor: null, taxableIncomeBracketCeiling: 12000 },
    { id: 1, bracket: "3.762%", rate: .03762, totalTaxBelowBracket: 369, taxableIncomeBracketFloor: 12001, taxableIncomeBracketCeiling: 25000 },
    { id: 2, bracket: "3.819%", rate: .03819, totalTaxBelowBracket: 858, taxableIncomeBracketFloor: 25001, taxableIncomeBracketCeiling: 50000 },
    { id: 3, bracket: "3.876%", rate: .03876, totalTaxBelowBracket: 1813, taxableIncomeBracketFloor: 50001, taxableIncomeBracketCeiling: null }
];

const newYorkCityMFJTaxBrackets = [
    { id: 0, bracket: "3.078%", rate: .03078, totalTaxBelowBracket: 0, taxableIncomeBracketFloor: null, taxableIncomeBracketCeiling: 21600 },
    { id: 1, bracket: "3.762%", rate: .03762, totalTaxBelowBracket: 665, taxableIncomeBracketFloor: 21601, taxableIncomeBracketCeiling: 45000 },
    { id: 2, bracket: "3.819%", rate: .03819, totalTaxBelowBracket: 1545, taxableIncomeBracketFloor: 45001, taxableIncomeBracketCeiling: 90000 },
    { id: 3, bracket: "3.876%", rate: .03876, totalTaxBelowBracket: 3264, taxableIncomeBracketFloor: 90001, taxableIncomeBracketCeiling: null }
];

const newYorkCityMFSTaxBrackets = [
    { id: 0, bracket: "3.078%", rate: .03078, totalTaxBelowBracket: 0, taxableIncomeBracketFloor: null, taxableIncomeBracketCeiling: 12000 },
    { id: 1, bracket: "3.762%", rate: .03762, totalTaxBelowBracket: 369, taxableIncomeBracketFloor: 12001, taxableIncomeBracketCeiling: 25000 },
    { id: 2, bracket: "3.819%", rate: .03819, totalTaxBelowBracket: 858, taxableIncomeBracketFloor: 25001, taxableIncomeBracketCeiling: 50000 },
    { id: 3, bracket: "3.876%", rate: .03876, totalTaxBelowBracket: 1813, taxableIncomeBracketFloor: 50001, taxableIncomeBracketCeiling: null }
];

const newYorkCityHOHTaxBrackets = [
    { id: 0, bracket: "3.078%", rate: .03078, totalTaxBelowBracket: 0, taxableIncomeBracketFloor: null, taxableIncomeBracketCeiling: 14400 },
    { id: 1, bracket: "3.762%", rate: .03762, totalTaxBelowBracket: 443, taxableIncomeBracketFloor: 14401, taxableIncomeBracketCeiling: 30000 },
    { id: 2, bracket: "3.819%", rate: .03819, totalTaxBelowBracket: 1030, taxableIncomeBracketFloor: 30001, taxableIncomeBracketCeiling: 60000 },
    { id: 3, bracket: "3.876%", rate: .03876, totalTaxBelowBracket: 2176, taxableIncomeBracketFloor: 60001, taxableIncomeBracketCeiling: null }
];


export { numbersInputInitialState, taxAssumptionsElements, taxIncomeElements, taxAdjustmentElements, taxItemizedDeductionElements, taxOtherFederal, taxOtherState, 
    paymentsFederal, paymentsState, otherTaxes, maxSETaxThreshold, federalSingleTaxBrackets, federalMFJTaxBrackets, federalMFSTaxBrackets, federalHOHTaxBrackets,
    newYorkStateSingleTaxBrackets, newYorkStateMFJTaxBrackets, newYorkStateMFSTaxBrackets, newYorkStateHOHTaxBrackets, newYorkCitySingleTaxBrackets, newYorkCityMFJTaxBrackets,
    newYorkCityMFSTaxBrackets, newYorkCityHOHTaxBrackets };