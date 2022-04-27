const NumbersOuputWithTax = ({ numbersInputValuesState, taxIncomeElements, taxAdjustmentElements, taxItemizedDeductionElements, taxOtherFederal, 
    taxOtherState }) => {

    return (
        <div id="numbers-output-with-tax">
            <header className="box-title">INCOME, DEDUCTION, AND TAX SUMMARY</header>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">DESCRIPTION</th>
                        <th scope="col">FEDERAL</th>
                        <th scope="col">STATE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* {taxIncomeElements.map((item) => {
                        <th scope="row" key={item.id}>{item.element}</th>
                        <td>VALUE</td>
                        <td>VALUE </td>
                        }
                        )} */}

                        <th scope="row">WAGES</th>
                        <td>IRS VALUE</td>
                        <td>STATE VALUE</td>
                    </tr>

                </tbody>

            </table>
            
        </div>
     );
}
 
export default NumbersOuputWithTax;