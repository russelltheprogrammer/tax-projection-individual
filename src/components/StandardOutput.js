const StandardOutput = ({ federalStandard, stateStandard }) => {

    return ( 
        <tbody style={{borderTop: "none" }}>
            <tr className="table-total-row">
                <th scope="row">STANDARD DEDUCTION</th>
                <td>{federalStandard}</td>
                <td>{stateStandard}</td>
            </tr>
        </tbody>
    );
}
 
export default StandardOutput;