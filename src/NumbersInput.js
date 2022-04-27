import React, { useState } from "react";
import { taxIncomeElements, taxAdjustmentElements, taxItemizedDeductionElements, taxOtherFederal, taxOtherState, numbersInputInitialState } from "./constants";
import NumbersInputComponent from "./NumbersInputComponent";
import NumbersOutputWithTax from "./NumbersOutputWithTax";
import { useSelector, useDispatch } from "react-redux";
import { changeNumbersInput } from "./redux/action-creators/actionsMaster";


const NumbersInput = () => {

    const numbersInputValues = useSelector((state) => state.numbersInputValues);
    const dispatch = useDispatch();

    const [ numbersInputValuesState, setNumbersInputValuesState ] = useState(numbersInputInitialState);

    const handleInputChange = (e) => {

        const { name, value } = e.target;
        const oldNumbersInputValuesState = numbersInputValuesState;

        setNumbersInputValuesState({
            ...oldNumbersInputValuesState,
            [name]: value
        });
    };

    const resetNumbersValuesState = () => {

        dispatch(changeNumbersInput(numbersInputInitialState));
        setNumbersInputValuesState({ ...numbersInputInitialState});
    };

    const handleSubmit = () => {
       let tempNumbersInputValues = numbersInputValuesState;
    
        try {
            dispatch(changeNumbersInput(tempNumbersInputValues));
            setNumbersInputValuesState (tempNumbersInputValues);
        }
        catch(err) {
            console.log(err);
        }
    };

    return ( 
        <div>
            <div id="numbers-input-box">
                <header className="box-title">INPUT NUMBERS</header>
                <NumbersInputComponent elementData={taxIncomeElements} title={"INCOME"} color={"primary"} numbersInputValuesState={numbersInputValuesState} 
                handleInputChange={handleInputChange} />
                <NumbersInputComponent elementData={taxAdjustmentElements} title={"ADJUSTMENTS"} color={"danger"} numbersInputValuesState={numbersInputValuesState} 
                handleInputChange={handleInputChange} />
                <NumbersInputComponent elementData={taxItemizedDeductionElements} title={"ITEMIZED DEDUCTIONS"} color={"danger"} numbersInputValuesState={numbersInputValuesState} 
                handleInputChange={handleInputChange} />
                <NumbersInputComponent elementData={taxOtherFederal} title={"FEDERAL OTHER"} color={"secondary"} numbersInputValuesState={numbersInputValuesState} 
                handleInputChange={handleInputChange} />
                <NumbersInputComponent elementData={taxOtherState} title={"STATE OTHER"} color={"secondary"} numbersInputValuesState={numbersInputValuesState} 
                handleInputChange={handleInputChange} />
                <button id="numbers-input-submit-button" className="submit-button" onClick={handleSubmit} type="submit">SUBMIT</button><br/>
                <button id="numbers-input-reset-button" className="reset-button" onClick={resetNumbersValuesState}>RESET</button>
            </div>
            <div>
                <NumbersOutputWithTax numbersInputValuesState={numbersInputValuesState}
                    taxIncomeElements={taxIncomeElements}
                    taxAdjustmentElements={taxAdjustmentElements}
                    taxItemizedDeductionElements={taxItemizedDeductionElements}
                    taxOtherFederal={taxOtherFederal}
                    taxOtherState={taxOtherState}
                 />
            </div>
        </div>
     );
}
 
export default NumbersInput;