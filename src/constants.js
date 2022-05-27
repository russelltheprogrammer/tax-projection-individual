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
        { id: 0, arrayValue: 0 },
        { id: 1, arrayValue: 1 },
        { id: 2, arrayValue: 2 },
        { id: 3, arrayValue: 3 },
        { id: 4, arrayValue: 4 },
        { id: 5, arrayValue: 5 },
        { id: 6, arrayValue: 6 },
        { id: 7, arrayValue: 7 },
        { id: 8, arrayValue: 8 },
        { id: 9, arrayValue: 9 }
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
    ordinaryDividends: "0",
    qualifiedDividends: "0",
    retirementIncome: "0",
    shortCapitalIncome: "0",
    longCapitalIncome: "0",
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
    stateSpecificItemized: "0",
    qbi: "0",
    otherFedDeductions: "0",
    otherFedTaxes: "0",
    otherStateIncomeDeductions: "0",
    stateAdditions: "0",
    stateSubtractions: "0",
    otherStateTaxes: "0"
}

const paymentsInputInitialState = {
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
    { id: 2, element: "ORDINARY DIVIDENDS", hardValue: "ordinaryDividends"  },
    { id: 3, element: "QUALIFIED DIVIDENDS", hardValue: "qualifiedDividends" },
    { id: 4, element: "RETIREMENT INCOME", hardValue: "retirementIncome" },
    { id: 5, element: "SHORT-TERM CAPITAL GAINS/(LOSSES)", hardValue: "shortCapitalIncome"},
    { id: 6, element: "LONG-TERM CAPITAL GAINS/(LOSSES)", hardValue: "longCapitalIncome"},
    { id: 7, element: "BUSINESS INCOME (SCHEDULE C)", hardValue: "businessIncome"},
    { id: 8, element: "OTHER INCOME", hardValue: "otherIncome"}
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
    { id: 4, element: "OTHER ITEMIZED DEDUCTIONS", hardValue: "otherItemized" }
];

const taxStateItemizedDeductionElements = [
    { id: 0, element: "STATE SPECIFIC ITEMIZED DEDUCTIONS", hardValue: "stateSpecificItemized"}
]

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
    { id: 0, bracket: "10%", rate: .10, totalTaxBelowBracket: 0, taxBracketFloor: null, taxBracketCeiling: 10275 },
    { id: 1, bracket: "12%", rate: .12, totalTaxBelowBracket: 1028, taxBracketFloor: 10276, taxBracketCeiling: 41775 },
    { id: 2, bracket: "22%", rate: .22, totalTaxBelowBracket: 4808, taxBracketFloor: 41776, taxBracketCeiling: 89075 },
    { id: 3, bracket: "24%", rate: .24, totalTaxBelowBracket: 15214, taxBracketFloor: 89076, taxBracketCeiling: 170050 },
    { id: 4, bracket: "32%", rate: .32, totalTaxBelowBracket: 34648, taxBracketFloor: 170051, taxBracketCeiling: 215950 },
    { id: 5, bracket: "35%", rate: .35, totalTaxBelowBracket: 49336, taxBracketFloor: 215951, taxBracketCeiling: 539900 },
    { id: 6, bracket: "37%", rate: .37, totalTaxBelowBracket: 162718, taxBracketFloor: 539901, taxBracketCeiling: null }
];

const federalMFJTaxBrackets = [
    { id: 0, bracket: "10%", rate: .10, totalTaxBelowBracket: 0, taxBracketFloor: null, taxBracketCeiling: 20550 },
    { id: 1, bracket: "12%", rate: .12, totalTaxBelowBracket: 2055, taxBracketFloor: 20551, taxBracketCeiling: 83550 },
    { id: 2, bracket: "22%", rate: .22, totalTaxBelowBracket: 9615, taxBracketFloor: 83551, taxBracketCeiling: 178150 },
    { id: 3, bracket: "24%", rate: .24, totalTaxBelowBracket: 30427, taxBracketFloor: 178151, taxBracketCeiling: 340100 },
    { id: 4, bracket: "32%", rate: .32, totalTaxBelowBracket: 69295, taxBracketFloor: 340101, taxBracketCeiling: 431900 },
    { id: 5, bracket: "35%", rate: .35, totalTaxBelowBracket: 98671, taxBracketFloor: 431901, taxBracketCeiling: 647850 },
    { id: 6, bracket: "37%", rate: .37, totalTaxBelowBracket: 174254, taxBracketFloor: 647851, taxBracketCeiling: null }
];

const federalMFSTaxBrackets = [
    { id: 0, bracket: "10%", rate: .10, totalTaxBelowBracket: 0, taxBracketFloor: null, taxBracketCeiling: 10275 },
    { id: 1, bracket: "12%", rate: .12, totalTaxBelowBracket: 1028, taxBracketFloor: 10276, taxBracketCeiling: 41775 },
    { id: 2, bracket: "22%", rate: .22, totalTaxBelowBracket: 4808, taxBracketFloor: 41776, taxBracketCeiling: 89075 },
    { id: 3, bracket: "24%", rate: .24, totalTaxBelowBracket: 15214, taxBracketFloor: 89076, taxBracketCeiling: 170050 },
    { id: 4, bracket: "32%", rate: .32, totalTaxBelowBracket: 34648, taxBracketFloor: 170051, taxBracketCeiling: 215950 },
    { id: 5, bracket: "35%", rate: .35, totalTaxBelowBracket: 49336, taxBracketFloor: 215951, taxBracketCeiling: 323925 },
    { id: 6, bracket: "37%", rate: .37, totalTaxBelowBracket: 87127, taxBracketFloor: 323926, taxBracketCeiling: null }
];

const federalHOHTaxBrackets = [
    { id: 0, bracket: "10%", rate: .10, totalTaxBelowBracket: 0, taxBracketFloor: null, taxBracketCeiling: 14650 },
    { id: 1, bracket: "12%", rate: .12, totalTaxBelowBracket: 1465, taxBracketFloor: 14651, taxBracketCeiling: 55900 },
    { id: 2, bracket: "22%", rate: .22, totalTaxBelowBracket: 6415, taxBracketFloor: 55901, taxBracketCeiling: 89050 },
    { id: 3, bracket: "24%", rate: .24, totalTaxBelowBracket: 13708, taxBracketFloor: 89051, taxBracketCeiling: 170050 },
    { id: 4, bracket: "32%", rate: .32, totalTaxBelowBracket: 33148, taxBracketFloor: 170051, taxBracketCeiling: 215950 },
    { id: 5, bracket: "35%", rate: .35, totalTaxBelowBracket: 47836, taxBracketFloor: 215951, taxBracketCeiling: 539900 },
    { id: 6, bracket: "37%", rate: .37, totalTaxBelowBracket: 161219, taxBracketFloor: 539901, taxBracketCeiling: null }
];

const newYorkStateSingleTaxBrackets = [
    { id: 0, bracket: "4%", rate: .04, totalTaxBelowBracket: 0, taxBracketFloor: null, taxBracketCeiling: 8500 },
    { id: 1, bracket: "4.5%", rate: .045, totalTaxBelowBracket: 340, taxBracketFloor: 8501, taxBracketCeiling: 11700 },
    { id: 2, bracket: "5.25%", rate: .0525, totalTaxBelowBracket: 484, taxBracketFloor: 11701, taxBracketCeiling: 13900 },
    { id: 3, bracket: "5.9%", rate: .059, totalTaxBelowBracket: 600, taxBracketFloor: 13901, taxBracketCeiling: 21400 },
    { id: 4, bracket: "5.97%", rate: .0597, totalTaxBelowBracket: 1042, taxBracketFloor: 21401, taxBracketCeiling: 80650 },
    { id: 5, bracket: "6.33%", rate: .0633, totalTaxBelowBracket: 4579, taxBracketFloor: 80651, taxBracketCeiling: 215400 },
    { id: 6, bracket: "6.85%", rate: .0685, totalTaxBelowBracket: 13109, taxBracketFloor: 215401, taxBracketCeiling: 1077550 },
    { id: 7, bracket: "9.65%", rate: .0965, totalTaxBelowBracket: 72166, taxBracketFloor: 1077550, taxBracketCeiling: 5000000 },
    { id: 8, bracket: "10.3%", rate: .103, totalTaxBelowBracket: 450683, taxBracketFloor: 5000001, taxBracketCeiling: 25000000 },
    { id: 9, bracket: "10.9%", rate: .109, totalTaxBelowBracket: 2510683, taxBracketFloor: 25000001, taxBracketCeiling: null }
];

const newYorkStateMFJTaxBrackets = [
    { id: 0, bracket: "4%", rate: .04, totalTaxBelowBracket: 0, taxBracketFloor: null, taxBracketCeiling: 17150 },
    { id: 1, bracket: "4.5%", rate: .045, totalTaxBelowBracket: 686, taxBracketFloor: 17151, taxBracketCeiling: 23600 },
    { id: 2, bracket: "5.25%", rate: .0525, totalTaxBelowBracket: 976, taxBracketFloor: 23601, taxBracketCeiling: 27900 },
    { id: 3, bracket: "5.9%", rate: .059, totalTaxBelowBracket: 1202, taxBracketFloor: 27901, taxBracketCeiling: 43000 },
    { id: 4, bracket: "5.97%", rate: .0597, totalTaxBelowBracket: 2093, taxBracketFloor: 43001, taxBracketCeiling: 161550 },
    { id: 5, bracket: "6.33%", rate: .0633, totalTaxBelowBracket: 9170, taxBracketFloor: 161551, taxBracketCeiling: 323200 },
    { id: 6, bracket: "6.85%", rate: .0685, totalTaxBelowBracket: 19403, taxBracketFloor: 323201, taxBracketCeiling: 2155350 },
    { id: 7, bracket: "9.65%", rate: .0965, totalTaxBelowBracket: 144905, taxBracketFloor: 2155351, taxBracketCeiling: 5000000 },
    { id: 8, bracket: "10.3%", rate: .103, totalTaxBelowBracket: 419414, taxBracketFloor: 5000001, taxBracketCeiling: 25000000 },
    { id: 9, bracket: "10.9%", rate: .109, totalTaxBelowBracket: 2479414, taxBracketFloor: 25000001, taxBracketCeiling: null }
];

const newYorkStateMFSTaxBrackets = [
    { id: 0, bracket: "4%", rate: .04, totalTaxBelowBracket: 0, taxBracketFloor: null, taxBracketCeiling: 8500 },
    { id: 1, bracket: "4.5%", rate: .045, totalTaxBelowBracket: 340, taxBracketFloor: 8501, taxBracketCeiling: 11700 },
    { id: 2, bracket: "5.25%", rate: .0525, totalTaxBelowBracket: 484, taxBracketFloor: 11701, taxBracketCeiling: 13900 },
    { id: 3, bracket: "5.9%", rate: .059, totalTaxBelowBracket: 600, taxBracketFloor: 13901, taxBracketCeiling: 21400 },
    { id: 4, bracket: "5.97%", rate: .0597, totalTaxBelowBracket: 1042, taxBracketFloor: 21401, taxBracketCeiling: 80650 },
    { id: 5, bracket: "6.33%", rate: .0633, totalTaxBelowBracket: 4579, taxBracketFloor: 80651, taxBracketCeiling: 215400 },
    { id: 6, bracket: "6.85%", rate: .0685, totalTaxBelowBracket: 13109, taxBracketFloor: 215401, taxBracketCeiling: 1077550 },
    { id: 7, bracket: "9.65%", rate: .0965, totalTaxBelowBracket: 72166, taxBracketFloor: 1077550, taxBracketCeiling: 5000000 },
    { id: 8, bracket: "10.3%", rate: .103, totalTaxBelowBracket: 450683, taxBracketFloor: 5000001, taxBracketCeiling: 25000000 },
    { id: 9, bracket: "10.9%", rate: .109, totalTaxBelowBracket: 2510683, taxBracketFloor: 25000001, taxBracketCeiling: null }
];

const newYorkStateHOHTaxBrackets = [
    { id: 0, bracket: "4%", rate: .04, totalTaxBelowBracket: 0, taxBracketFloor: null, taxBracketCeiling: 12800 },
    { id: 1, bracket: "4.5%", rate: .045, totalTaxBelowBracket: 512, taxBracketFloor: 12801, taxBracketCeiling: 17650 },
    { id: 2, bracket: "5.25%", rate: .0525, totalTaxBelowBracket: 730, taxBracketFloor: 17651, taxBracketCeiling: 20900 },
    { id: 3, bracket: "5.9%", rate: .059, totalTaxBelowBracket: 901, taxBracketFloor: 20901, taxBracketCeiling: 32200 },
    { id: 4, bracket: "5.97%", rate: .0597, totalTaxBelowBracket: 1568, taxBracketFloor: 32201, taxBracketCeiling: 107650 },
    { id: 5, bracket: "6.33%", rate: .0633, totalTaxBelowBracket: 6072, taxBracketFloor: 107651, taxBracketCeiling: 269300 },
    { id: 6, bracket: "6.85%", rate: .0685, totalTaxBelowBracket: 16304, taxBracketFloor: 269301, taxBracketCeiling: 1616450 },
    { id: 7, bracket: "9.65%", rate: .0965, totalTaxBelowBracket: 108584, taxBracketFloor: 1616451, taxBracketCeiling: 5000000 },
    { id: 8, bracket: "10.3%", rate: .103, totalTaxBelowBracket: 435097, taxBracketFloor: 5000001, taxBracketCeiling: 25000000 },
    { id: 9, bracket: "10.9%", rate: .109, totalTaxBelowBracket: 2495097, taxBracketFloor: 25000001, taxBracketCeiling: null }
];

const newYorkCitySingleTaxBrackets = [
    { id: 0, bracket: "3.078%", rate: .03078, totalTaxBelowBracket: 0, taxBracketFloor: null, taxBracketCeiling: 12000 },
    { id: 1, bracket: "3.762%", rate: .03762, totalTaxBelowBracket: 369, taxBracketFloor: 12001, taxBracketCeiling: 25000 },
    { id: 2, bracket: "3.819%", rate: .03819, totalTaxBelowBracket: 858, taxBracketFloor: 25001, taxBracketCeiling: 50000 },
    { id: 3, bracket: "3.876%", rate: .03876, totalTaxBelowBracket: 1813, taxBracketFloor: 50001, taxBracketCeiling: null }
];

const newYorkCityMFJTaxBrackets = [
    { id: 0, bracket: "3.078%", rate: .03078, totalTaxBelowBracket: 0, taxBracketFloor: null, taxBracketCeiling: 21600 },
    { id: 1, bracket: "3.762%", rate: .03762, totalTaxBelowBracket: 665, taxBracketFloor: 21601, taxBracketCeiling: 45000 },
    { id: 2, bracket: "3.819%", rate: .03819, totalTaxBelowBracket: 1545, taxBracketFloor: 45001, taxBracketCeiling: 90000 },
    { id: 3, bracket: "3.876%", rate: .03876, totalTaxBelowBracket: 3264, taxBracketFloor: 90001, taxBracketCeiling: null }
];

const newYorkCityMFSTaxBrackets = [
    { id: 0, bracket: "3.078%", rate: .03078, totalTaxBelowBracket: 0, taxBracketFloor: null, taxBracketCeiling: 12000 },
    { id: 1, bracket: "3.762%", rate: .03762, totalTaxBelowBracket: 369, taxBracketFloor: 12001, taxBracketCeiling: 25000 },
    { id: 2, bracket: "3.819%", rate: .03819, totalTaxBelowBracket: 858, taxBracketFloor: 25001, taxBracketCeiling: 50000 },
    { id: 3, bracket: "3.876%", rate: .03876, totalTaxBelowBracket: 1813, taxBracketFloor: 50001, taxBracketCeiling: null }
];

const newYorkCityHOHTaxBrackets = [
    { id: 0, bracket: "3.078%", rate: .03078, totalTaxBelowBracket: 0, taxBracketFloor: null, taxBracketCeiling: 14400 },
    { id: 1, bracket: "3.762%", rate: .03762, totalTaxBelowBracket: 443, taxBracketFloor: 14401, taxBracketCeiling: 30000 },
    { id: 2, bracket: "3.819%", rate: .03819, totalTaxBelowBracket: 1030, taxBracketFloor: 30001, taxBracketCeiling: 60000 },
    { id: 3, bracket: "3.876%", rate: .03876, totalTaxBelowBracket: 2176, taxBracketFloor: 60001, taxBracketCeiling: null }
];

const federalStandardDeduction = [
    { id: 0, standardDeduction: -12950, filingStatus: "SINGLE" },
    { id: 1, standardDeduction: -12950, filingStatus: "MFS" },
    { id: 2, standardDeduction: -25900, filingStatus: "MFJ" },
    { id: 3, standardDeduction: -19400, filingStatus: "HOH" }
];

const newYorkStandardDeduction = [
    { id: 0, standardDeduction: -8000, filingStatus: "SINGLE" },
    { id: 1, standardDeduction: -8000, filingStatus: "MFS" },
    { id: 2, standardDeduction: -16050, filingStatus: "MFJ" },
    { id: 3, standardDeduction: -11200, filingStatus: "HOH" }
];


export { numbersInputInitialState, paymentsInputInitialState, taxAssumptionsElements, 
    taxIncomeElements, taxAdjustmentElements, taxItemizedDeductionElements, taxStateItemizedDeductionElements, taxOtherFederal, taxOtherState, 
    paymentsFederal, paymentsState, otherTaxes, maxSETaxThreshold, federalSingleTaxBrackets, federalMFJTaxBrackets, federalMFSTaxBrackets, federalHOHTaxBrackets,
    newYorkStateSingleTaxBrackets, newYorkStateMFJTaxBrackets, newYorkStateMFSTaxBrackets, newYorkStateHOHTaxBrackets, newYorkCitySingleTaxBrackets, newYorkCityMFJTaxBrackets,
    newYorkCityMFSTaxBrackets, newYorkCityHOHTaxBrackets, federalStandardDeduction, newYorkStandardDeduction };