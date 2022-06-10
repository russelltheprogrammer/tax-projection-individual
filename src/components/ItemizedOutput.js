import stateColumnView from "./stateColumnView";

const ItemizedOutput = ({ taxItemizedDeductionElements, taxStateItemizedDeductionElements, taxInputDataAnnualized, totalFederalItemized, totalStateItemized, NA, 
    residencyFromStore }) => {

    return (
            <tbody style={{borderTop: "none" }}>
            {taxItemizedDeductionElements.map((item) => 
                <tr key={item.id}>
                    <th scope="row" className="table-description-item">{item.element}</th>
                    <td>{taxInputDataAnnualized[item.hardValue]}</td>
                    {stateColumnView(residencyFromStore, NA, taxInputDataAnnualized[item.hardValue])}
                </tr>
                )}

                <tr>
                    <th scope="row" className="table-description-item">{taxStateItemizedDeductionElements[0]["element"]}</th>
                    <td className="table-na-section">{NA}</td>
                    {stateColumnView(residencyFromStore, NA, taxInputDataAnnualized["stateSpecificItemized"])}
                </tr>


                <tr className="table-total-row">
                    <th scope="row">TOTAL ITEMIZED</th>
                    <td>{totalFederalItemized}</td>
                    {stateColumnView(residencyFromStore, NA, totalStateItemized)}
                </tr>
            </tbody>
);
}
 
export default ItemizedOutput;