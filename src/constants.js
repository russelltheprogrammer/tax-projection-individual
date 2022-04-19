
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
    { id: 1, element: "DEDUCTIBLE S/E TAX", hardValue: "deductibleSE" },
    { id: 2, element: "S/E INSURANCE", hardValue: "insurance" },
    { id: 3, element: "RETIREMENT DEDUCTION", hardValue: "retirementDeduction" },
    { id: 4, element: "STUDENT LOAN INTEREST", hardValue: "studentLoan" },
    { id: 5, element: "OTHER ADJUSTMENTS", hardValue: "otherAdjustments" }
];

const taxItemizedDeductionElements = [
    { id: 0, element: "MEDICAL", hardValue: "medical" },
    { id: 1, element: "TAXES PAID", hardValue: "taxesPaidItemized" },
    { id: 2, element: "INTEREST PAID", hardValue: "interestPaidItemized" },
    { id: 3, element: "CHARITY", hardValue: "charity" },
    { id: 4, element: "OTHER ITEMIZED DEDUCTIONS", hardValue: "otherItemized" },
];

const taxOtherFederal = [
    { id: 0, element: "QUALIFIED BUSINESS INCOME DEDUCTION", hardValue: "qbi" },
    { id: 1, element: "OTHER FEDERAL DEDUCTIONS", hardValue: "otherFedDeductions" },
    { id: 2, element: "OTHER FEDERAL TAXES", hardValue: "otherFedTaxes" }
];

const taxOtherNewYork = [
    { id: 0, element: "OTHER NEW YORK INCOME/DEDUCTIONS", hardValue: "otherNYIncomeDeductions" },
    { id: 1, element: "NEW YORK ADDITIONS", hardValue: "nyAdditions" },
    { id: 2, element: "NEW YORK SUBTRACTIONS", hardValue: "nySubtractions" },
    { id: 3, element: "OTHER NEW YORK TAXES", hardValue: "otherNYTaxes" }

];

export { taxAssumptionsElements, taxIncomeElements, taxAdjustmentElements, taxItemizedDeductionElements, taxOtherFederal, taxOtherNewYork };