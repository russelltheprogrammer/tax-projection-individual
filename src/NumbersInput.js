import React, { useState } from "react";
import { taxIncomeElements, taxAdjustmentElements, taxItemizedDeductionElements, taxOtherFederal, taxOtherState, numbersInputInitialState } from "./constants";
import NumbersInputComponent from "./NumbersInputComponent";


const NumbersInput = () => {

    const [ numbersValues, setNumbersValues ] = useState(numbersInputInitialState);

    const handleInputChange = (e) => {

        const { name, value } = e.target;
        const oldNumbersValues = numbersValues;

        setNumbersValues({
            ...oldNumbersValues,
            [name]: value
        });
    };

    const resetNumbersValuesState = () => setNumbersValues({ ...numbersInputInitialState});

    const handleSubmit = () => {
       
    
        try {
          
        }
        
        catch(err) {
            console.log(err);
        }
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
             <button id="numbers-input-submit-button" className="submit-button" onClick={handleSubmit} type="submit">SUBMIT</button><br/>
            <button id="numbers-input-reset-button" className="reset-button" onClick={resetNumbersValuesState}>RESET</button>
        </div>
     );
}
 
export default NumbersInput;