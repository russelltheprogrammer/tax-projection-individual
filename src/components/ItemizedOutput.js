const ItemizedOutput = ({ taxItemizedDeductionElements, taxStateItemizedDeductionElements, taxInputDataAnnualized, totalFederalItemized, totalStateItemized, NA }) => {

    return (
            <tbody style={{borderTop: "none" }}>
            {taxItemizedDeductionElements.map((item) => 
                <tr key={item.id}>
                    <th scope="row" className="table-description-item">{item.element}</th>
                    <td>{taxInputDataAnnualized[item.hardValue]}</td>
                    <td>{taxInputDataAnnualized[item.hardValue]}</td>
                </tr>
                )}

                <tr>
                    <th scope="row" className="table-description-item">{taxStateItemizedDeductionElements[0]["element"]}</th>
                    <td className="table-na-section">{NA}</td>
                    <td>{taxInputDataAnnualized["stateSpecificItemized"]}</td>
                </tr>


                <tr className="table-total-row">
                    <th scope="row">TOTAL ITEMIZED</th>
                    <td>{totalFederalItemized}</td>
                    <td>{totalStateItemized}</td>
                </tr>
            </tbody>
);
}
 
export default ItemizedOutput;