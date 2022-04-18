import React, { useState } from "react";
import { taxIncomeElements, taxAdjustmentElements, taxItemizedDeductionElements, taxOtherFederal, taxOtherNewYork } from "./constants";


const NumbersInput = () => {

// numbersValues within each type of income, adjustment, deduction must match constants.js hardValue
const [ numbersValues, setNumbersValues ] = useState({
    income: {
        wages: 0,
        interest: 0,
        dividends: 0,
        retirementIncome: 0,
        capital: 0,
        business: 0,
        otherIncome: 0
    },
    adjustments: {
        hsa: 0,
        deductibleSE: 0,
        insurance: 0,
        retirementDeduction: 0,
        studentloan: 0,
        otherAdjustments: 0
    },
    itemized: {
        medical: 0,
        taxesPaid: 0,
        interestPaid: 0,
        charity: 0,
        otherItemized: 0
    },
    otherFederal: {
        qbi: 0,
        otherFedDeductions: 0,
        otherFedTaxes: 0,
    },
    otherNewYork: {
        otherNYDeductions: 0,
        nyAdditions: 0,
        nySubtractions: 0,
        otherNYTaxes: 0
    }
});

const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    console.log(e.target)

    const oldNumbersValues = numbersValues;

    setNumbersValues({
        ...oldNumbersValues,
        [name]: value
    });
};

    return ( 
        <div id="numbers-input-box">
            <div className="numbers-input-title">INCOME</div>
                <ul className="list-group list-group-flush">
                    {taxIncomeElements.map((item) =>
                    <li className="list-group-item list-group-item-primary numbers-list-element" key={item.id}>{item.element}:
                    <input type="number" className="numbers-input-element" name={item.hardValue} value={numbersValues.income[item.hardValue]} onChange={handleInputChange}/></li>
                    )}
                </ul>
                <div className="numbers-input-title">ADJUSTMENTS</div>
                <ul className="list-group list-group-flush">
                    {taxAdjustmentElements.map((item) =>
                    <li className="list-group-item list-group-item-danger numbers-list-element" key={item.id}>{item.element}:
                    <input type="number" className="numbers-input-element" name={item.hardValue} /></li>
                    )}
                </ul>
            <div className="numbers-input-title">ITEMIZED DEDUCTIONS</div>
                <ul className="list-group list-group-flush">
                    {taxItemizedDeductionElements.map((item) =>
                    <li className="list-group-item list-group-item-danger numbers-list-element" key={item.id}>{item.element}:
                    <input type="number" className="numbers-input-element" name={item.hardValue} /></li>
                    )}
                </ul>
            <div className="numbers-input-title">FEDERAL OTHER</div>
                <ul className="list-group list-group-flush">
                    {taxOtherFederal.map((item) =>
                    <li className="list-group-item list-group-item-secondary numbers-list-element" key={item.id}>{item.element}:
                    <input type="number" className="numbers-input-element" name={item.hardValue} /></li>
                    )}
                </ul>
            <div className="numbers-input-title">NEW YORK OTHER</div>
                <ul className="list-group list-group-flush">
                    {taxOtherNewYork.map((item) =>
                    <li className="list-group-item list-group-item-secondary numbers-list-element" key={item.id}>{item.element}:
                    <input type="number" className="numbers-input-element" name={item.hardValue} /></li>
                    )}
                </ul>
        </div>
     );
}
 
export default NumbersInput;