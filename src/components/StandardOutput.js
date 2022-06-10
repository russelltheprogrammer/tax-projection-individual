import stateColumnView from "./stateColumnView";

const StandardOutput = ({ federalStandard, stateStandard, NA, residencyFromStore }) => {

    return ( 
        <tbody style={{borderTop: "none" }}>
            <tr className="table-total-row">
                <th scope="row">STANDARD DEDUCTION</th>
                <td>{federalStandard}</td>
                {stateColumnView(residencyFromStore, NA, stateStandard)}
            </tr>
        </tbody>
    );
}
 
export default StandardOutput;