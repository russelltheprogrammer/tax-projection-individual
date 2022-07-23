import summationFunction from "../functions/summationFunction";
import annualizationFactorCalcFunction from "../functions/annualizationFactorCalcFunction";
import annualizeDataFunction from "../functions/annualizeDataFunction";
import childTaxCreditFunction from "../functions/childTaxCreditFunction";
import seTaxFunction from "../functions/seTaxFunction";
import standardFunction from "../functions/standardFunction";
import StandardOutput from "./StandardOutput";
import ItemizedOutput from "./ItemizedOutput";
import federalItemizedCalcFunction from "../functions/federalItemizedCalcFunction";
import newYorkItemizedCalcFunction from "../functions/newYorkItemizedCalcFunction";
import taxCalcFunction from "../functions/taxCalcFunction";
import capitalLossLimitationFunction from "../functions/capitalLossLimitationFunction";
import stateColumnView from "./stateColumnView";
import quarterFactorCalcFunction from "../functions/quarterFactorCalcFunction";
import { useSelector } from "react-redux";


const NumbersOuputWithTax = ({ numbersInputValuesState, paymentsInputValuesState, taxIncomeElements, taxAdjustmentElements, taxItemizedDeductionElements, taxStateItemizedDeductionElements,
     taxOtherFederal, taxOtherState, paymentsFederal, paymentsState }) => {

        
    const quarterFromStore = useSelector(store => store.quarter);
    const dependentsFromStore = useSelector(store => store.dependents);
    const filingStatusFromStore = useSelector(store => store.filingStatus);
    const standardOrItemizedFromStore = useSelector(store => store.standard);
    const residencyFromStore = useSelector(store => store.residency);
    const annualizationFactor = annualizationFactorCalcFunction(quarterFromStore);
    const quarterFactor = quarterFactorCalcFunction(quarterFromStore);
    const taxInputDataAnnualized = annualizeDataFunction(numbersInputValuesState, annualizationFactor);
    const totalIncome = summationFunction(taxInputDataAnnualized, taxIncomeElements);
    const totalAdjustmentsBeforeSETaxDed = summationFunction(taxInputDataAnnualized, taxAdjustmentElements);
    const seTax = seTaxFunction(taxInputDataAnnualized["businessIncome"], taxInputDataAnnualized["wages"]);
    const deductibleSETax = Math.round(seTax/-2);
    const capitalLossLimitation = capitalLossLimitationFunction(taxInputDataAnnualized["shortCapitalIncome"], taxInputDataAnnualized["longCapitalIncome"]);
    const totalAdjustmentsAfterSETaxDed = totalAdjustmentsBeforeSETaxDed + deductibleSETax;
    const totalStateOther = summationFunction(taxInputDataAnnualized, taxOtherState);
    const federalAdjustedGrossIncome = totalIncome + totalAdjustmentsAfterSETaxDed + capitalLossLimitation;
    const stateAdjustedGrossIncome = totalIncome + totalAdjustmentsAfterSETaxDed + capitalLossLimitation + totalStateOther;  
    const totalFederalItemized = federalItemizedCalcFunction(federalAdjustedGrossIncome, taxInputDataAnnualized);
    const totalStateItemized = newYorkItemizedCalcFunction(stateAdjustedGrossIncome, taxInputDataAnnualized);
    const federalStandard = standardFunction("federal", filingStatusFromStore);
    const stateStandard = standardFunction("newYork", filingStatusFromStore);
    const totalFederalOther = summationFunction(taxInputDataAnnualized, taxOtherFederal);
    const stateDependentExemptions = dependentsFromStore * -1000;
    const federalTaxableIncome = standardOrItemizedFromStore === "STANDARD" ? 
            federalAdjustedGrossIncome + federalStandard + totalFederalOther :
            federalAdjustedGrossIncome + totalFederalItemized + totalFederalOther;
    const stateTaxableIncome = standardOrItemizedFromStore === "STANDARD" ?
            parseInt(stateAdjustedGrossIncome + stateStandard + stateDependentExemptions) :
            parseInt(stateAdjustedGrossIncome + totalStateItemized + stateDependentExemptions);
    const federalOtherTaxes = parseInt(taxInputDataAnnualized["otherFedTaxes"]);
    const stateOtherTaxes = taxInputDataAnnualized["otherStateTaxes"];
    const federalChildTaxCredits = childTaxCreditFunction(federalAdjustedGrossIncome, dependentsFromStore, filingStatusFromStore);
    const federalTaxCalculated = Math.round(taxCalcFunction(federalTaxableIncome, filingStatusFromStore, "FEDERAL", parseInt(taxInputDataAnnualized["shortCapitalIncome"]), 
            parseInt(taxInputDataAnnualized["longCapitalIncome"]), parseInt(taxInputDataAnnualized["qualifiedDividends"])) + seTax);
    const stateTaxCalculated = Math.round(taxCalcFunction(stateTaxableIncome, filingStatusFromStore, residencyFromStore));
    const totalFederalTax = Math.round(federalOtherTaxes + federalTaxCalculated + federalChildTaxCredits);
    const totalStateTax = Math.round(stateOtherTaxes + stateTaxCalculated);
    const totalFederalQuarterTax = Math.round(totalFederalTax / quarterFactor);
    const totalStateQuarterTax = Math.round(totalStateTax / quarterFactor);
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
                        <tr className="table-row-item-regular" key={item.id}>
                            <th scope="row" className="table-description-item">{item.element}</th>
                            <td>{parseInt(taxInputDataAnnualized[item.hardValue])}</td>
                            {stateColumnView(residencyFromStore, NA, parseInt(taxInputDataAnnualized[item.hardValue]))}
                        </tr>
                        )}

                        <tr className="table-total-row">
                            <th scope="row">TOTAL INCOME</th>
                            <td>{totalIncome}</td>
                            {stateColumnView(residencyFromStore, NA, totalIncome)}
                        </tr>

                        {taxAdjustmentElements.map((item) => 
                        <tr className="table-row-item-regular" key={item.id}>
                            <th scope="row" className="table-description-item">{item.element}</th>
                            <td>{parseInt(taxInputDataAnnualized[item.hardValue])}</td>
                            {stateColumnView(residencyFromStore, NA, parseInt(taxInputDataAnnualized[item.hardValue]))}
                        </tr>
                        )}

                        <tr className="table-row-item-regular">
                            <th scope="row" className="table-description-item">DEDUCTIBLE S/E TAX</th>
                            <td>{deductibleSETax}</td>
                            {stateColumnView(residencyFromStore, NA, deductibleSETax)}
                        </tr>

                        <tr className="table-total-row">
                            <th scope="row" >TOTAL ADJUSTMENTS</th>
                            <td>{totalAdjustmentsAfterSETaxDed}</td>
                            {stateColumnView(residencyFromStore, NA, totalAdjustmentsAfterSETaxDed)}
                        </tr>

                        {taxOtherState.map((item) => 
                        <tr className="table-row-item-regular" key={item.id}>
                            <th scope="row" className="table-description-item">{item.element}</th>
                            <td className="table-na-section">{NA}</td>
                            {stateColumnView(residencyFromStore, NA, taxInputDataAnnualized[item.hardValue])}
                        </tr>
                        )}

                        <tr className="table-total-row">
                            <th scope="row">TOTAL STATE OTHER</th>
                            <td className="table-na-section">{NA}</td>
                            {stateColumnView(residencyFromStore, NA, totalStateOther)}
                        </tr>

                        <tr className="table-row-item-regular">
                            <th scope="row" className="table-description-item">CAPITAL LOSS LIMITATION</th>
                            <td>{capitalLossLimitation}</td>
                            {stateColumnView(residencyFromStore, NA, capitalLossLimitation)}
                        </tr>

                        <tr className="table-total-row">
                            <th scope="row">ADJUSTED GROSS INCOME</th>
                            <td>{federalAdjustedGrossIncome}</td>
                            {stateColumnView(residencyFromStore, NA, stateAdjustedGrossIncome)}
                        </tr>
                </tbody>
                            {standardOrItemizedFromStore === "STANDARD" ? 
                            <StandardOutput federalStandard={federalStandard} stateStandard={stateStandard} NA={NA} residencyFromStore={residencyFromStore} /> : 
                            <ItemizedOutput 
                                taxItemizedDeductionElements={taxItemizedDeductionElements}
                                taxStateItemizedDeductionElements={taxStateItemizedDeductionElements} 
                                taxInputDataAnnualized={taxInputDataAnnualized}
                                totalFederalItemized={totalFederalItemized}
                                totalStateItemized={totalStateItemized}
                                NA={NA}
                                residencyFromStore={residencyFromStore} 
                                />
                            }
                <tbody style={{borderTop: "none" }}>
                         {taxOtherFederal.map((item) => 
                        <tr className="table-row-item-regular" key={item.id}>
                            <th scope="row" className="table-description-item">{item.element}</th>
                            <td>{parseInt(taxInputDataAnnualized[item.hardValue])}</td>
                            <td className="table-na-section">{NA}</td>
                        </tr>
                        )}

                        <tr className="table-total-row">
                            <th scope="row">TOTAL FEDERAL OTHER</th>
                            <td>{totalFederalOther}</td>
                            <td className="table-na-section">{NA}</td>
                        </tr>

                        <tr className="table-row-item-regular">
                            <th scope="row" className="table-description-item">STATE DEPENDENT EXEMPTIONS</th>
                            <td className="table-na-section">{NA}</td>
                            {stateColumnView(residencyFromStore, NA, stateDependentExemptions)}
                        </tr>

                        <tr className="table-total-row">
                            <th scope="row">TAXABLE INCOME</th>
                            <td>{federalTaxableIncome}</td>
                            {stateColumnView(residencyFromStore, NA, stateTaxableIncome)}
                        </tr>

                        <tr className="table-total-row">
                            <th scope="row">TOTAL CALCULATED TAX</th>
                            <td>{federalTaxCalculated}</td>
                            {stateColumnView(residencyFromStore, NA, stateTaxCalculated)}
                        </tr>

                        <tr className="table-row-item-regular">
                            <th scope="row" className="table-description-item">TOTAL OTHER TAX</th>
                            <td>{federalOtherTaxes}</td>
                            {stateColumnView(residencyFromStore, NA, stateOtherTaxes)}
                        </tr>

                        <tr className="table-row-item-regular">
                            <th scope="row" className="table-description-item">FEDERAL CHILD TAX CREDITS</th>
                            <td>{federalChildTaxCredits}</td>
                            <td className="table-na-section">{NA}</td>
                        </tr>

                        <tr className="table-total-row">
                            <th scope="row">TOTAL ALL TAX</th>
                            <td>{totalFederalTax}</td>
                            {stateColumnView(residencyFromStore, NA, totalStateTax)}
                        </tr>

                        <tr className="table-total-row">
                            <th scope="row">TOTAL QUARTERLY TAX DUE</th>
                            <td>{totalFederalQuarterTax}</td>
                            {stateColumnView(residencyFromStore, NA, totalStateQuarterTax)}
                        </tr>

                        {/* This section can be re-factored at some point */}
                        <tr className="table-row-item-regular">
                            <th scope="row" className="table-description-item">{paymentsFederal[0]["element"]}</th>
                            <td>{paymentsInputValuesState["fedWagesWithholding"]}</td>
                            {stateColumnView(residencyFromStore, NA, paymentsInputValuesState["stateWagesWithholding"])}
                        </tr>
                        <tr className="table-row-item-regular">
                            <th scope="row" className="table-description-item">{paymentsFederal[1]["element"]}</th>
                            <td>{paymentsInputValuesState["fedPYOP"]}</td>
                            {stateColumnView(residencyFromStore, NA, paymentsInputValuesState["statePYOP"])}
                        </tr>
                        <tr className="table-row-item-regular">
                            <th scope="row" className="table-description-item">{paymentsFederal[2]["element"]}</th>
                            <td>{paymentsInputValuesState["fedQ1"]}</td>
                            {stateColumnView(residencyFromStore, NA, paymentsInputValuesState["stateQ1"])}
                        </tr>
                        <tr className="table-row-item-regular">
                            <th scope="row" className="table-description-item">{paymentsFederal[3]["element"]}</th>
                            <td>{paymentsInputValuesState["fedQ2"]}</td>
                            {stateColumnView(residencyFromStore, NA, paymentsInputValuesState["stateQ2"])}
                        </tr>
                        <tr className="table-row-item-regular">
                            <th scope="row" className="table-description-item">{paymentsFederal[4]["element"]}</th>
                            <td>{paymentsInputValuesState["fedQ3"]}</td>
                            {stateColumnView(residencyFromStore, NA, paymentsInputValuesState["stateQ3"])}
                        </tr>
                        <tr className="table-row-item-regular">
                            <th scope="row" className="table-description-item">{paymentsFederal[5]["element"]}</th>
                            <td>{paymentsInputValuesState["fedQ4"]}</td>
                            {stateColumnView(residencyFromStore, NA, paymentsInputValuesState["stateQ4"])}
                        </tr>
                        <tr className="table-row-item-regular">
                            <th scope="row" className="table-description-item">{paymentsFederal[6]["element"]}</th>
                            <td>{paymentsInputValuesState["fedCredits"]}</td>
                            {stateColumnView(residencyFromStore, NA, paymentsInputValuesState["stateCredits"])}
                        </tr>
                        {/* End section that can be re-factored at some point */}

                        <tr className="table-total-row">
                            <th scope="row">TOTAL PAYMENTS</th>
                            <td>{totalFederalPayments}</td>
                            {stateColumnView(residencyFromStore, NA, totalStatePayments)}
                        </tr>

                        <tr className="table-total-row">
                            <th scope="row">TOTAL TAX DUE/(OVERPAID)</th>
                            <td>{totalFedTaxDueOverpaid}</td>
                            {stateColumnView(residencyFromStore, NA, totalStateTaxDueOverpaid)}
                        </tr>

                </tbody>
            </table>
        </div>
     );
}
 
export default NumbersOuputWithTax;