const quarterOptionsValues = [
    { id: 0, quarter: 1 },
    { id: 1, quarter: 2 },
    { id: 2, quarter: 3 },
    { id: 3, quarter: 4 }
];

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
    ]},
    { id: 5, element: "QBI ELIGIBLE", 
    array: [
        { id: 0, arrayValue: "NO" },
        { id: 1, arrayValue: "YES" }
    ]}
];

const taxIncomeElements = [
    { id: 1, element: "WAGES (W-2)"},
    { id: 2, element: "INTEREST"},
    { id: 3, element: "DIVIDENDS"},
    { id: 4, element: "RETIREMENT INCOME"},
    { id: 5, element: "CAPITAL GAINS/(LOSSES)"},
    { id: 6, element: "BUSINESS INCOME (SCHEDULE C)"},
    { id: 7, element: "OTHER INCOME"}
];

const taxAdjustmentElements = [
    { id: 1, element: "HSA CONTRIBUTIONS"},
    { id: 2, element: "DEDUCTBILE S/E TAX"},
    { id: 3, element: "S/E INSURANCE"},
    { id: 4, element: "RETIREMENT DEDUCTION"},
    { id: 5, element: "STUDENT LOAN INTEREST"},
    { id: 6, element: "OTHER ADJUSTMENTS"}
];

const taxItemizedDeductionElements = [
    { id: 1, element: "MEDICAL"},
    { id: 2, element: "TAXES PAID"},
    { id: 3, element: "INTEREST PAID"},
    { id: 4, element: "CHARITY"},
    { id: 5, element: "OTHER DEDUCTIONS"},
];

export { taxAssumptionsElements, taxIncomeElements, taxAdjustmentElements, taxItemizedDeductionElements };