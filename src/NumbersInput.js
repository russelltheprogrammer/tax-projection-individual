const NumbersInput = () => {
    return ( 
        <div>
            <div className="output-box-title">INCOME</div>
                <div className="d-flex align-content-around flex-wrap justify-content-start">
                    {taxIncomeElements.map((item) =>
                    <div className="p-3" key={item.id}>{item.element}: </div>
                    )}
                </div>
                <div className="output-box-title">ADJUSTMENTS</div>
                <div className="d-flex align-content-around flex-wrap justify-content-start">
                    {taxAdjustmentElements.map((item) =>
                    <div className="p-3" key={item.id}>{item.element}: </div>
                    )}
                </div>
            <div className="output-box-title">ITEMIZED DEDUCTIONS</div>
                <div className="d-flex align-content-around flex-wrap justify-content-start">
                    {taxItemizedDeductionElements.map((item) =>
                    <div className="p-3" key={item.id}>{item.element}: </div>
                    )}
                </div>
        </div>
     );
}
 
export default NumbersInput;