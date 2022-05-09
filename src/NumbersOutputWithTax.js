import summationFunction from "./summationFunction";
import quarterDivisionFunction from "./quarterDivisionFunction";
import seTaxFunction from "./seTaxFunction";
import { useSelector } from "react-redux";


const NumbersOuputWithTax = ({ numbersInputValuesState, taxIncomeElements, taxAdjustmentElements, taxItemizedDeductionElements, taxOtherFederal, 
    taxOtherState, paymentsFederal, paymentsState }) => {

    
    const quarterFromStore = useSelector(store => store.quarter);
    const quarterToDivideTotalTax = quarterDivisionFunction(quarterFromStore);
    const totalIncome = summationFunction(numbersInputValuesState, taxIncomeElements);
    const totalAdjustmentsBeforeSETaxDed = summationFunction(numbersInputValuesState, taxAdjustmentElements);
    const seTax = seTaxFunction(numbersInputValuesState["businessIncome"], numbersInputValuesState["wages"]);
    const deductibleSETax = Math.round(seTax/-2);
    const totalAdjustmentsAfterSETaxDed = totalAdjustmentsBeforeSETaxDed + deductibleSETax;
    const adjustedGrossIncome = totalIncome + totalAdjustmentsAfterSETaxDed;
    const totalItemized = summationFunction(numbersInputValuesState, taxItemizedDeductionElements);
    const totalFederalOther = summationFunction(numbersInputValuesState, taxOtherFederal);
    const totalStateOther = summationFunction(numbersInputValuesState, taxOtherState);
    const federalTaxableIncome = adjustedGrossIncome + totalItemized + totalFederalOther;
    const stateTaxableIncome = adjustedGrossIncome + totalItemized + totalStateOther;
    const federalOtherTaxes = numbersInputValuesState["otherFedTaxes"];
    const stateOtherTaxes = numbersInputValuesState["otherStateTaxes"];
    const federalTaxCalculated = 0 + seTax;
    const stateTaxCalculated = 0;
    const totalFederalTax = Math.round(federalOtherTaxes + federalTaxCalculated);
    const totalStateTax = Math.round(stateOtherTaxes + stateTaxCalculated);
    const totalFederalQuarterTax = Math.round(totalFederalTax / quarterToDivideTotalTax);
    const totalStateQuarterTax = Math.round(totalStateTax / quarterToDivideTotalTax);
    const totalFederalPayments = summationFunction(numbersInputValuesState, paymentsFederal);
    const totalStatePayments = summationFunction(numbersInputValuesState, paymentsState);
    const totalFedTaxDueOverpaid = totalFederalQuarterTax - totalFederalPayments;
    const totalStateTaxDueOverpaid = totalStateQuarterTax - totalStatePayments;
    const NA = "X";

    return (
        <div id="numbers-output-with-tax">
            <header className="box-title">INCOME, DEDUCTION, AND TAX SUMMARY</header>
            <table className="table">
                <thead className="table-header">
                    <tr>
                        <th scope="col">DESCRIPTION</th>
                        <th scope="col">FEDERAL</th>
                        <th scope="col">STATE</th>
                    </tr>
                </thead>
                <tbody>
                        {taxIncomeElements.map((item) => 
                        <tr key={item.id}>
                            <th scope="row" className="table-description-item">{item.element}</th>
                            <td>{numbersInputValuesState[item.hardValue]}</td>
                            <td>{numbersInputValuesState[item.hardValue]}</td>
                        </tr>
                        )}

                        <tr className="table-total-row">
                            <th scope="row">TOTAL INCOME</th>
                            <td>{totalIncome}</td>
                            <td>{totalIncome}</td>
                        </tr>

                        {taxAdjustmentElements.map((item) => 
                        <tr key={item.id}>
                            <th scope="row" className="table-description-item">{item.element}</th>
                            <td>{numbersInputValuesState[item.hardValue]}</td>
                            <td>{numbersInputValuesState[item.hardValue]}</td>
                        </tr>
                        )}

                        <tr>
                            <th scope="row" className="table-description-item">DEDUCTIBLE S/E TAX</th>
                            <td>{deductibleSETax}</td>
                            <td>{deductibleSETax}</td>
                        </tr>

                        <tr className="table-total-row">
                            <th scope="row" >TOTAL ADJUSTMENTS</th>
                            <td>{totalAdjustmentsAfterSETaxDed}</td>
                            <td>{totalAdjustmentsAfterSETaxDed}</td>
                        </tr>
                        <tr className="table-total-row">
                            <th scope="row">ADJUSTED GROSS INCOME</th>
                            <td>{adjustedGrossIncome}</td>
                            <td>{adjustedGrossIncome}</td>
                        </tr>

                         {taxItemizedDeductionElements.map((item) => 
                        <tr key={item.id}>
                            <th scope="row" className="table-description-item">{item.element}</th>
                            <td>{numbersInputValuesState[item.hardValue]}</td>
                            <td>{numbersInputValuesState[item.hardValue]}</td>
                        </tr>
                        )}

                        <tr className="table-total-row">
                            <th scope="row">TOTAL ITEMIZED</th>
                            <td>{totalItemized}</td>
                            <td>{totalItemized}</td>
                        </tr>

                         {taxOtherFederal.map((item) => 
                        <tr key={item.id}>
                            <th scope="row" className="table-description-item">{item.element}</th>
                            <td>{numbersInputValuesState[item.hardValue]}</td>
                            <td className="table-na-section">{NA}</td>
                        </tr>
                        )}

                        <tr className="table-total-row">
                            <th scope="row">TOTAL FEDERAL OTHER</th>
                            <td>{totalFederalOther}</td>
                            <td className="table-na-section">{NA}</td>
                        </tr>

                         {taxOtherState.map((item) => 
                        <tr key={item.id}>
                            <th scope="row" className="table-description-item">{item.element}</th>
                            <td className="table-na-section">{NA}</td>
                            <td>{numbersInputValuesState[item.hardValue]}</td>
                        </tr>
                        )}

                        <tr className="table-total-row">
                            <th scope="row">TOTAL STATE OTHER</th>
                            <td className="table-na-section">{NA}</td>
                            <td>{totalStateOther}</td>
                        </tr>
                        <tr className="table-total-row">
                            <th scope="row">TAXABLE INCOME</th>
                            <td>{federalTaxableIncome}</td>
                            <td>{stateTaxableIncome}</td>
                        </tr>

                        <tr className="table-total-row">
                            <th scope="row">TOTAL CALCULATED TAX</th>
                            <td>{federalTaxCalculated}</td>
                            <td>{stateTaxCalculated}</td>
                        </tr>

                        <tr>
                            <th scope="row">TOTAL OTHER TAX</th>
                            <td>{federalOtherTaxes}</td>
                            <td>{stateOtherTaxes}</td>
                        </tr>

                        <tr className="table-total-row">
                            <th scope="row">TOTAL ALL TAX</th>
                            <td>{totalFederalTax}</td>
                            <td>{totalStateTax}</td>
                        </tr>

                        <tr className="table-total-row">
                            <th scope="row">TOTAL QUARTERLY TAX DUE</th>
                            <td>{totalFederalQuarterTax}</td>
                            <td>{totalStateQuarterTax}</td>
                        </tr>

                        {/* This section can be re-factored at some point */}
                        <tr>
                            <th scope="row">{paymentsFederal[0]["element"]}</th>
                            <td>{numbersInputValuesState["fedWagesWithholding"]}</td>
                            <td>{numbersInputValuesState["stateWagesWithholding"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">{paymentsFederal[1]["element"]}</th>
                            <td>{numbersInputValuesState["fedPYOP"]}</td>
                            <td>{numbersInputValuesState["statePYOP"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">{paymentsFederal[2]["element"]}</th>
                            <td>{numbersInputValuesState["fedQ1"]}</td>
                            <td>{numbersInputValuesState["stateQ1"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">{paymentsFederal[3]["element"]}</th>
                            <td>{numbersInputValuesState["fedQ2"]}</td>
                            <td>{numbersInputValuesState["stateQ2"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">{paymentsFederal[4]["element"]}</th>
                            <td>{numbersInputValuesState["fedQ3"]}</td>
                            <td>{numbersInputValuesState["stateQ3"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">{paymentsFederal[5]["element"]}</th>
                            <td>{numbersInputValuesState["fedQ4"]}</td>
                            <td>{numbersInputValuesState["stateQ4"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">{paymentsFederal[6]["element"]}</th>
                            <td>{numbersInputValuesState["fedCredits"]}</td>
                            <td>{numbersInputValuesState["stateCredits"]}</td>
                        </tr>
                        {/* End section that can be re-factored at some point */}

                        <tr className="table-total-row">
                            <th scope="row">TOTAL PAYMENTS</th>
                            <td>{totalFederalPayments}</td>
                            <td>{totalStatePayments}</td>
                        </tr>

                        <tr className="table-total-row">
                            <th scope="row">TOTAL TAX DUE/(OVERPAID)</th>
                            <td>{totalFedTaxDueOverpaid}</td>
                            <td>{totalStateTaxDueOverpaid}</td>
                        </tr>

                </tbody>
            </table>
        </div>
     );
}
 
export default NumbersOuputWithTax;