const stateColumnView = (residency, NAValue, outputValue) => {
    if(residency === "NONE"){
        return <td className="table-na-section">{NAValue}</td>
    }
    else {
        return <td>{outputValue}</td>
    }
}
 
export default stateColumnView;