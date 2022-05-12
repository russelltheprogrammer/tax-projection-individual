import summationFunction from "./summationFunction";
import annualizationFactorCalcFunction from "./annualizationFactorCalcFunction";
import annualizeDataFunction from "./annualizeDataFunction";
import childTaxCreditFunction from "./childTaxCreditFunction";
import seTaxFunction from "./seTaxFunction";
import { useSelector } from "react-redux";


const NumbersOuputWithTax = ({ numbersInputValuesState, paymentsInputValuesState, taxIncomeElements, taxAdjustmentElements, taxItemizedDeductionElements, taxOtherFederal, 
    taxOtherState, paymentsFederal, paymentsState }) => {

   
    const quarterFromStore = useSelector(store => store.quarter);
    const dependentsFromStore = useSelector(store => store.dependents);
    const filingStatusFromStore = useSelector(store => store.filingStatus);
    const annualizationFactor = annualizationFactorCalcFunction(quarterFromStore);
    const taxInputDataAnnualized = annualizeDataFunction(numbersInputValuesState, annualizationFactor);
    const totalIncome = summationFunction(taxInputDataAnnualized, taxIncomeElements);
    const totalAdjustmentsBeforeSETaxDed = summationFunction(taxInputDataAnnualized, taxAdjustmentElements);
    const seTax = seTaxFunction(taxInputDataAnnualized["businessIncome"], taxInputDataAnnualized["wages"]);
    const deductibleSETax = Math.round(seTax/-2);
    const totalAdjustmentsAfterSETaxDed = totalAdjustmentsBeforeSETaxDed + deductibleSETax;
    const totalStateOther = summationFunction(taxInputDataAnnualized, taxOtherState);
    const federalAdjustedGrossIncome = totalIncome + totalAdjustmentsAfterSETaxDed;
    const stateAdjustedGrossIncome = totalIncome + totalAdjustmentsAfterSETaxDed + totalStateOther;
    const totalItemized = summationFunction(taxInputDataAnnualized, taxItemizedDeductionElements);
    const totalFederalOther = summationFunction(taxInputDataAnnualized, taxOtherFederal);
    const stateDependentExemptions = dependentsFromStore * -1000;
    const federalTaxableIncome = federalAdjustedGrossIncome + totalItemized + totalFederalOther;
    const stateTaxableIncome = parseInt(stateAdjustedGrossIncome + totalItemized + stateDependentExemptions);
    const federalOtherTaxes = parseInt(taxInputDataAnnualized["otherFedTaxes"]);
    const stateOtherTaxes = taxInputDataAnnualized["otherStateTaxes"];
    const federalChildTaxCredits = childTaxCreditFunction(federalAdjustedGrossIncome, dependentsFromStore, filingStatusFromStore);
    const federalTaxCalculated = 0 + seTax;
    const stateTaxCalculated = 0;
    const totalFederalTax = Math.round(federalOtherTaxes + federalTaxCalculated + federalChildTaxCredits);
    const totalStateTax = Math.round(stateOtherTaxes + stateTaxCalculated);
    const totalFederalQuarterTax = Math.round(totalFederalTax / annualizationFactor);
    const totalStateQuarterTax = Math.round(totalStateTax / annualizationFactor);
    const totalFederalPayments = summationFunction(paymentsInputValuesState, paymentsFederal);
    const totalStatePayments = summationFunction(paymentsInputValuesState, paymentsState);
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
                            <td>{taxInputDataAnnualized[item.hardValue]}</td>
                            <td>{taxInputDataAnnualized[item.hardValue]}</td>
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
                            <td>{taxInputDataAnnualized[item.hardValue]}</td>
                            <td>{taxInputDataAnnualized[item.hardValue]}</td>
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

                        {taxOtherState.map((item) => 
                        <tr key={item.id}>
                            <th scope="row" className="table-description-item">{item.element}</th>
                            <td className="table-na-section">{NA}</td>
                            <td>{taxInputDataAnnualized[item.hardValue]}</td>
                        </tr>
                        )}

                        <tr className="table-total-row">
                            <th scope="row">ADJUSTED GROSS INCOME</th>
                            <td>{federalAdjustedGrossIncome}</td>
                            <td>{stateAdjustedGrossIncome}</td>
                        </tr>

                         {taxItemizedDeductionElements.map((item) => 
                        <tr key={item.id}>
                            <th scope="row" className="table-description-item">{item.element}</th>
                            <td>{taxInputDataAnnualized[item.hardValue]}</td>
                            <td>{taxInputDataAnnualized[item.hardValue]}</td>
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
                            <td>{taxInputDataAnnualized[item.hardValue]}</td>
                            <td className="table-na-section">{NA}</td>
                        </tr>
                        )}

                        <tr className="table-total-row">
                            <th scope="row">TOTAL FEDERAL OTHER</th>
                            <td>{totalFederalOther}</td>
                            <td className="table-na-section">{NA}</td>
                        </tr>

                        <tr >
                            <th scope="row" className="table-description-item">STATE DEPENDENT EXEMPTIONS</th>
                            <td className="table-na-section">{NA}</td>
                            <td>{stateDependentExemptions}</td>
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

                        <tr>
                            <th scope="row">FED CHILD TAX CREDITS</th>
                            <td>{federalChildTaxCredits}</td>
                            <td className="table-na-section">{NA}</td>
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
                            <td>{paymentsInputValuesState["fedWagesWithholding"]}</td>
                            <td>{paymentsInputValuesState["stateWagesWithholding"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">{paymentsFederal[1]["element"]}</th>
                            <td>{paymentsInputValuesState["fedPYOP"]}</td>
                            <td>{paymentsInputValuesState["statePYOP"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">{paymentsFederal[2]["element"]}</th>
                            <td>{paymentsInputValuesState["fedQ1"]}</td>
                            <td>{paymentsInputValuesState["stateQ1"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">{paymentsFederal[3]["element"]}</th>
                            <td>{paymentsInputValuesState["fedQ2"]}</td>
                            <td>{paymentsInputValuesState["stateQ2"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">{paymentsFederal[4]["element"]}</th>
                            <td>{paymentsInputValuesState["fedQ3"]}</td>
                            <td>{paymentsInputValuesState["stateQ3"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">{paymentsFederal[5]["element"]}</th>
                            <td>{paymentsInputValuesState["fedQ4"]}</td>
                            <td>{paymentsInputValuesState["stateQ4"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">{paymentsFederal[6]["element"]}</th>
                            <td>{paymentsInputValuesState["fedCredits"]}</td>
                            <td>{paymentsInputValuesState["stateCredits"]}</td>
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