import React, { useState } from "react";
import { taxIncomeElements, taxAdjustmentElements, taxItemizedDeductionElements, taxOtherFederal, taxOtherNewYork } from "./constants";


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
        otherNYIncomeDeductions: "0",
        nyAdditions: "0",
        nySubtractions: "0",
        otherNYTaxes: "0"
});

    const handleInputChange = (e) => {

    const { name, value } = e.target;
    const oldNumbersValues = numbersValues;

    setNumbersValues({
        ...oldNumbersValues,
        [name]: value
    });
};

// DRY COMMENT --- make the below return into separate components, or map inside of map, or one large map of all by editing code below?
// Separate components doesn't seem to make sense because it separates my data.

    return ( 
        <div id="numbers-input-box">
            <div className="numbers-input-title">INCOME</div>
                <ul className="list-group list-group-flush">
                    {taxIncomeElements.map((item) =>
                    <li className="list-group-item list-group-item-primary numbers-list-element" key={item.id}>{item.element}:
                    <input type="text" className="numbers-input-element" name={item.hardValue} value={numbersValues[item.hardValue]} 
                    onChange={handleInputChange}/></li>
                    )}
                </ul>
                <div className="numbers-input-title">ADJUSTMENTS</div>
                <ul className="list-group list-group-flush">
                    {taxAdjustmentElements.map((item) =>
                    <li className="list-group-item list-group-item-danger numbers-list-element" key={item.id}>{item.element}:
                    <input type="text" className="numbers-input-element"  name={item.hardValue} value={numbersValues[item.hardValue]} 
                    onChange={handleInputChange}/></li>
                    )}
                </ul>
            <div className="numbers-input-title">ITEMIZED DEDUCTIONS</div>
                <ul className="list-group list-group-flush">
                    {taxItemizedDeductionElements.map((item) =>
                    <li className="list-group-item list-group-item-danger numbers-list-element" key={item.id}>{item.element}:
                    <input type="text" className="numbers-input-element"  name={item.hardValue} value={numbersValues[item.hardValue]} 
                    onChange={handleInputChange}/></li>
                    )}
                </ul>
            <div className="numbers-input-title">FEDERAL OTHER</div>
                <ul className="list-group list-group-flush">
                    {taxOtherFederal.map((item) =>
                    <li className="list-group-item list-group-item-secondary numbers-list-element" key={item.id}>{item.element}:
                    <input type="text" className="numbers-input-element"  name={item.hardValue} value={numbersValues[item.hardValue]} 
                    onChange={handleInputChange}/></li>
                    )}
                </ul>
            <div className="numbers-input-title">NEW YORK OTHER</div>
                <ul className="list-group list-group-flush">
                    {taxOtherNewYork.map((item) =>
                    <li className="list-group-item list-group-item-secondary numbers-list-element" key={item.id}>{item.element}:
                    <input type="text" className="numbers-input-element" name={item.hardValue} value={numbersValues[item.hardValue]} 
                    onChange={handleInputChange} /></li>
                    )}
                </ul>
        </div>
     );
}
 
export default NumbersInput;