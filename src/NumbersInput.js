import { taxIncomeElements, taxAdjustmentElements, taxItemizedDeductionElements } from "./constants";

const NumbersInput = () => {
    return ( 
        <div id="numbers-input-box">
            <div className="numbers-input-title">INCOME</div>
                <ul className="list-group list-group-flush">
                    {taxIncomeElements.map((item) =>
                    <li className="list-group-item list-group-item-primary numbers-list-element" key={item.id}>{item.element}: </li>
                    )}
                </ul>
                <div className="numbers-input-title">ADJUSTMENTS</div>
                <ul className="list-group list-group-flush">
                    {taxAdjustmentElements.map((item) =>
                    <li className="list-group-item list-group-item-danger numbers-list-element" key={item.id}>{item.element}: </li>
                    )}
                </ul>
            <div className="numbers-input-title">ITEMIZED DEDUCTIONS</div>
                <ul className="list-group list-group-flush">
                    {taxItemizedDeductionElements.map((item) =>
                    <li className="list-group-item list-group-item-danger numbers-list-element" key={item.id}>{item.element}: </li>
                    )}
                </ul>
        </div>
     );
}
 
export default NumbersInput;