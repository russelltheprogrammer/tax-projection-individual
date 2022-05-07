import React, { useState } from "react";
import { numbersInputInitialState, taxIncomeElements, taxAdjustmentElements, taxItemizedDeductionElements, taxOtherFederal, taxOtherState, paymentsFederal,
    paymentsState, otherTaxes } from "./constants";
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
                <h5 className="box-sub-title">All numbers should be input as year to date by quarter</h5>
                <NumbersInputComponent elementData={taxIncomeElements} title={"INCOME"} color={"primary"} numbersInputValuesState={numbersInputValuesState} 
                handleInputChange={handleInputChange} />
                <NumbersInputComponent elementData={taxAdjustmentElements} title={"ADJUSTMENTS (SHOULD BE NEGATIVE NUMBERS)"} color={"danger"} 
                numbersInputValuesState={numbersInputValuesState} handleInputChange={handleInputChange} />
                <NumbersInputComponent elementData={taxItemizedDeductionElements} title={"ITEMIZED DEDUCTIONS (SHOULD BE NEGATIVE NUMBERS)"} color={"danger"} 
                numbersInputValuesState={numbersInputValuesState} handleInputChange={handleInputChange} />
                <NumbersInputComponent elementData={taxOtherFederal} title={"FEDERAL OTHER"} color={"secondary"} numbersInputValuesState={numbersInputValuesState} 
                handleInputChange={handleInputChange} />
                <NumbersInputComponent elementData={taxOtherState} title={"STATE OTHER"} color={"secondary"} numbersInputValuesState={numbersInputValuesState} 
                handleInputChange={handleInputChange} />
                <NumbersInputComponent elementData={otherTaxes} title={"OTHER TAXES"} color={"secondary"} numbersInputValuesState={numbersInputValuesState} 
                handleInputChange={handleInputChange} />
                <NumbersInputComponent elementData={paymentsFederal} title={"FEDERAL TAX PAYMENTS"} color={"success"} numbersInputValuesState={numbersInputValuesState} 
                handleInputChange={handleInputChange} />
                <NumbersInputComponent elementData={paymentsState} title={"STATE TAX PAYMENTS"} color={"success"} numbersInputValuesState={numbersInputValuesState} 
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
                    paymentsFederal={paymentsFederal}
                    paymentsState={paymentsState}
                 />
            </div>
        </div>
     );
}
 
export default NumbersInput;