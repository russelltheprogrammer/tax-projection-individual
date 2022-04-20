import React, { useState } from "react";
import { taxIncomeElements, taxAdjustmentElements, taxItemizedDeductionElements, taxOtherFederal, taxOtherState } from "./constants";
import NumbersInputComponent from "./NumbersInputComponent";


const NumbersInput = () => {

    // numbersValues within each type of income, adjustment, deduction must match constants.js hardValue
    const [ numbersValues, setNumbersValues ] = useState({
        wages: "0",
        interest: "0",
        dividends: "0",
        retirementIncome: "0",
        capitalIncome: "0",
        businessIncome: "0",
        otherIncome: "0",
        hsa: "0",
        deductibleSE: "0",
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
        otherStateTaxes: "0"
    });

    const handleInputChange = (e) => {

    const { name, value } = e.target;
    const oldNumbersValues = numbersValues;

    setNumbersValues({
        ...oldNumbersValues,
        [name]: value
    });
    };

    // Need to complete
    const resetNumbersValuesState = () => {

    setNumbersValues();
    }

    return ( 
        <div id="numbers-input-box">
            <NumbersInputComponent elementData={taxIncomeElements} title={"INCOME"} color={"primary"} numbersValues={numbersValues} 
            handleInputChange={handleInputChange} />
            <NumbersInputComponent elementData={taxAdjustmentElements} title={"ADJUSTMENTS"} color={"danger"} numbersValues={numbersValues} 
            handleInputChange={handleInputChange} />
            <NumbersInputComponent elementData={taxItemizedDeductionElements} title={"ITEMIZED DEDUCTIONS"} color={"danger"} numbersValues={numbersValues} 
            handleInputChange={handleInputChange} />
            <NumbersInputComponent elementData={taxOtherFederal} title={"FEDERAL OTHER"} color={"secondary"} numbersValues={numbersValues} 
            handleInputChange={handleInputChange} />
            <NumbersInputComponent elementData={taxOtherState} title={"STATE OTHER"} color={"secondary"} numbersValues={numbersValues} 
            handleInputChange={handleInputChange} />
            <button id="numbers-input-reset-button" onClick={resetNumbersValuesState}>RESET</button>
            
        </div>
     );
}
 
export default NumbersInput;