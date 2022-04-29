
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

export { numbersInputInitialState, taxAssumptionsElements, taxIncomeElements, taxAdjustmentElements, taxItemizedDeductionElements, taxOtherFederal, taxOtherState, 
    paymentsFederal, paymentsState, otherTaxes };