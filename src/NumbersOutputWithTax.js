import summationFunction from "./summationFunction";

const NumbersOuputWithTax = ({ numbersInputValuesState, taxIncomeElements, taxAdjustmentElements, taxItemizedDeductionElements, taxOtherFederal, 
    taxOtherState }) => {

    const totalIncome = summationFunction(numbersInputValuesState, taxIncomeElements);
    const totalAdjustments = summationFunction(numbersInputValuesState, taxAdjustmentElements);
    const adjustedGrossIncome = 0;
    const totalItemized = summationFunction(numbersInputValuesState, taxItemizedDeductionElements);
    const totalFederalOther = summationFunction(numbersInputValuesState, taxOtherFederal);
    const totalStateOther = summationFunction(numbersInputValuesState, taxOtherState);
    const federalTaxableIncome = 0;
    const stateTaxableIncome = 0;

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
                        {taxIncomeElements.map((item) => 
                        <tr>
                        <th scope="row" key={item.id}>{item.element}</th>
                        <td>{numbersInputValuesState[item.hardValue]}</td>
                        <td>{numbersInputValuesState[item.hardValue]}</td>
                        </tr>
                        )}

                        <tr>
                        <th scope="row">TOTAL INCOME</th>
                        <td>{totalIncome}</td>
                        <td>{totalIncome}</td>
                        </tr>

                        {taxAdjustmentElements.map((item) => 
                        <tr>
                        <th scope="row" key={item.id}>{item.element}</th>
                        <td>{numbersInputValuesState[item.hardValue]}</td>
                        <td>{numbersInputValuesState[item.hardValue]}</td>
                        </tr>
                        )}

                        <tr>
                        <th scope="row">TOTAL ADJUSTMENTS</th>
                        <td>{totalAdjustments}</td>
                        <td>{totalAdjustments}</td>
                        </tr>
                        <tr>
                        <th scope="row">ADJUSTED GROSS INCOME</th>
                        <td>{adjustedGrossIncome}</td>
                        <td>{adjustedGrossIncome}</td>
                        </tr>

                         {taxItemizedDeductionElements.map((item) => 
                        <tr>
                        <th scope="row" key={item.id}>{item.element}</th>
                        <td>{numbersInputValuesState[item.hardValue]}</td>
                        <td>{numbersInputValuesState[item.hardValue]}</td>
                        </tr>
                        )}

                        <tr>
                        <th scope="row">TOTAL ITEMIZED</th>
                        <td>{totalItemized}</td>
                        <td>{totalItemized}</td>
                        </tr>

                         {taxOtherFederal.map((item) => 
                        <tr>
                        <th scope="row" key={item.id}>{item.element}</th>
                        <td>{numbersInputValuesState[item.hardValue]}</td>
                        <td>N/A</td>
                        </tr>
                        )}

                        <tr>
                        <th scope="row">TOTAL FEDERAL OTHER</th>
                        <td>{totalFederalOther}</td>
                        <td>N/A</td>
                        </tr>

                         {taxOtherState.map((item) => 
                        <tr>
                        <th scope="row" key={item.id}>{item.element}</th>
                        <td>N/A</td>
                        <td>{numbersInputValuesState[item.hardValue]}</td>
                        </tr>
                        )}

                        <tr>
                        <th scope="row">TOTAL STATE OTHER</th>
                        <td>N/A</td>
                        <td>{totalStateOther}</td>
                        </tr>
                        <tr>
                        <th scope="row">TAXABLE INCOME</th>
                        <td>{federalTaxableIncome}</td>
                        <td>{stateTaxableIncome}</td>
                        </tr>
                        
                </tbody>

            </table>
            
        </div>
     );
}
 
export default NumbersOuputWithTax;