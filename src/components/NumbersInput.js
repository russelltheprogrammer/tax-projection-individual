import React, { useState } from "react";
import { numbersInputInitialState, paymentsInputInitialState, taxIncomeElements, taxAdjustmentElements, taxItemizedDeductionElements, taxStateItemizedDeductionElements, 
    taxOtherFederal, taxOtherState, paymentsFederal, paymentsState, otherTaxes } from "../constants";
import NumbersInputComponent from "./NumbersInputComponent";
import NumbersOutputWithTax from "./NumbersOutputWithTax";
import { useSelector, useDispatch } from "react-redux";
import { changeNumbersInput, changePaymentsInput } from "../redux/action-creators/actionsMaster";


const NumbersInput = () => {

    const numbersInputValues = useSelector((state) => state.numbersInputValues);
    const paymentsInputValues = useSelector((state) => state.paymentsInputValues);
    const dispatch = useDispatch();

    const [ numbersInputValuesState, setNumbersInputValuesState ] = useState(numbersInputInitialState);
    const [ paymentsInputValuesState, setPaymentsInputValuesState ] = useState(paymentsInputInitialState);

    const handleNumbersInputChange = (e) => {

        const { name, value } = e.target;
        const oldNumbersInputValuesState = numbersInputValuesState;

        setNumbersInputValuesState({
            ...oldNumbersInputValuesState,
            [name]: value
        });
    };

    const handlePaymentsInputChange = (e) => {

        const { name, value } = e.target;
        const oldPaymentsInputValuesState = paymentsInputValuesState;

        setPaymentsInputValuesState({
            ...oldPaymentsInputValuesState,
            [name]: value
        });
    };

    const resetNumbersValuesState = () => {

        dispatch(changeNumbersInput(numbersInputInitialState));
        dispatch(changePaymentsInput(paymentsInputInitialState));
        setNumbersInputValuesState({ ...numbersInputInitialState});
        setPaymentsInputValuesState({ ...paymentsInputInitialState});
    };

    const handleSubmit = () => {
       let tempNumbersInputValues = numbersInputValuesState;
       let tempPaymentsInputValues = paymentsInputValuesState;
    
        try {
            dispatch(changeNumbersInput(tempNumbersInputValues));
            dispatch(changePaymentsInput(tempPaymentsInputValues));
            setNumbersInputValuesState (tempNumbersInputValues);
            setPaymentsInputValuesState (tempPaymentsInputValues);
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
                <NumbersInputComponent elementData={taxIncomeElements} elementData2={null} title={"INCOME"} color={"primary"} numbersInputValuesState={numbersInputValuesState} 
                handleInputChange={handleNumbersInputChange} />
                <NumbersInputComponent elementData={taxAdjustmentElements} elementData2={null} title={"ADJUSTMENTS (SHOULD BE NEGATIVE NUMBERS)"} color={"danger"} 
                numbersInputValuesState={numbersInputValuesState} handleInputChange={handleNumbersInputChange} />
                <NumbersInputComponent elementData={taxItemizedDeductionElements} elementData2={taxStateItemizedDeductionElements} 
                title={"ITEMIZED DEDUCTIONS (SHOULD BE NEGATIVE NUMBERS) (SHOULD BE LIMITED NUMBERS)"} color={"danger"} 
                numbersInputValuesState={numbersInputValuesState} handleInputChange={handleNumbersInputChange} />
                <NumbersInputComponent elementData={taxOtherFederal} elementData2={null} title={"FEDERAL OTHER"} color={"secondary"} numbersInputValuesState={numbersInputValuesState} 
                handleInputChange={handleNumbersInputChange} />
                <NumbersInputComponent elementData={taxOtherState} elementData2={null} title={"STATE OTHER"} color={"secondary"} numbersInputValuesState={numbersInputValuesState} 
                handleInputChange={handleNumbersInputChange} />
                <NumbersInputComponent elementData={otherTaxes} elementData2={null} title={"OTHER TAXES"} color={"secondary"} numbersInputValuesState={numbersInputValuesState} 
                handleInputChange={handleNumbersInputChange} />
                <NumbersInputComponent elementData={paymentsFederal} elementData2={null} title={"FEDERAL TAX PAYMENTS"} color={"success"} numbersInputValuesState={paymentsInputValuesState} 
                handleInputChange={handlePaymentsInputChange} />
                <NumbersInputComponent elementData={paymentsState} elementData2={null} title={"STATE TAX PAYMENTS"} color={"success"} numbersInputValuesState={paymentsInputValuesState} 
                handleInputChange={handlePaymentsInputChange} />
                
                <button id="numbers-input-submit-button" className="submit-button" onClick={handleSubmit} type="submit">SUBMIT</button>
                <button id="numbers-input-reset-button" className="reset-button" onClick={resetNumbersValuesState}>RESET</button>
            </div>
            <div>
                <NumbersOutputWithTax numbersInputValuesState={numbersInputValuesState}
                    paymentsInputValuesState={paymentsInputValuesState} 
                    taxIncomeElements={taxIncomeElements}
                    taxAdjustmentElements={taxAdjustmentElements}
                    taxItemizedDeductionElements={taxItemizedDeductionElements}
                    taxStateItemizedDeductionElements={taxStateItemizedDeductionElements}
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