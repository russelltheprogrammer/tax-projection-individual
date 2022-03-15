const quarterOptionsValues = [
    { id: 0, quarter: 1 },
    { id: 1, quarter: 2 },
    { id: 2, quarter: 3 },
    { id: 3, quarter: 4 }
];

const taxInfoElements = [
    { id: 0, element: "QUARTER"},
    { id: 1, element: "FILING STATUS"},
    { id: 2, element: "ITEMIZED OR STANDARD"},
    { id: 3, element: "DEPENDENTS"},
    { id: 4, element: "STATE RESIDENCY"},
    { id: 5, element: "QBI ELIGIBLE"}
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

export { quarterOptionsValues, taxInfoElements, taxIncomeElements, taxAdjustmentElements, taxItemizedDeductionElements };