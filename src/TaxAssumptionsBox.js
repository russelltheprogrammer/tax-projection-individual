import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeQuarter, changeFilingStatus, changeStandard, changeDependents, changeResidency, changeQbi } from "./redux/action-creators/actionsMaster";
import { taxAssumptionsElements } from "./constants";

const TaxAssumptionsBox = () => {

const quarter = useSelector((state) => state.quarter);
const filingStatus = useSelector((state) => state.filingStatus);
const standard = useSelector((state) => state.standard);
const dependents = useSelector((state) => state.dependents);
const residency = useSelector((state) => state.residency);
const qbi = useSelector((state) => state.qbi);
const dispatch = useDispatch();

const [ quarterState, setQuarterState ] = useState(1);
const [ filingStatusState, setFilingStatusState ] = useState("SINGLE");
const [ standardState, setStandardState ] = useState("STANDARD");
const [ dependentsState, setDependentsState ] = useState(1);
const [ residencyState, setResidencyState ] = useState("NONE");
const [ qbiState, setQbiState ] = useState("NO");

const handleSubmit = () => {
    // have to parseInt numbers
    let tempQuarter = parseInt(quarterState);
    let tempFilingStatus = filingStatusState;
    let tempStandard = standardState;
    let tempDependents = parseInt(dependentsState);
    let tempResidency = residencyState;
    let tempQbi = qbiState;

    try {
        dispatch(changeQuarter(tempQuarter));
        dispatch(changeFilingStatus(tempFilingStatus));
        dispatch(changeStandard(tempStandard));
        dispatch(changeDependents(tempDependents));
        dispatch(changeResidency(tempResidency));
        dispatch(changeQbi(tempQbi));
        setQuarterState(tempQuarter);
        setFilingStatusState(tempFilingStatus);
        setStandardState(tempStandard);
        setDependentsState(tempDependents);
        setResidencyState(tempResidency);
        setQbiState(tempQbi);
    }
    
    catch(err) {
        console.log(err);
    }
};

const handleChange = (elementId, e) => {
    let tempValue = "";
    // If a value from TaxAssumptionsElements is a number it needs to be parsed to a number as the map function makes it a string, see TaxAssumptionsElements 
    // in constants to identify what data are numbers.
    if(elementId === 0 || elementId === 3){
        tempValue = parseInt(e.target.value);
    }
    else{
        tempValue = e.target.value;
    }
    // Each case goes in order from the TaxAssumptionsElements Element value from constants. If you break the order, the function will not perform properly.
    switch(elementId){
        case 0:
            setQuarterState(tempValue);
            break;
        case 1:
            setFilingStatusState(tempValue);
            break;  
        case 2:
            setStandardState(tempValue);
            break; 
        case 3:
            setDependentsState(tempValue);
            break;
        case 4:
            setResidencyState(tempValue);
            break; 
        case 5:
            setQbiState(tempValue);
            break;
        default:
            console.log("No case was selected");    
    };
};

    return ( 
        <div>
        <div id="tax-assumptions-box">
        <div className="container-fluid">
           <div className="tax-assumptions-box-title">TAX ASSUMPTIONS</div>
           <div className="d-flex align-content-around flex-wrap justify-content-start">
               {taxAssumptionsElements.map((item) =>
               <div className="p-3 tax-assumptions-title" key={item.id}>{item.element}:&nbsp; 
                <select name={item.element} className="tax-assumptions-select" id="tax-assumption-item" onChange={(e) => handleChange(item.id, e)}>
                {item.array.map((value) => 
                    <option key={value.id} value={value.arrayValue}>{value.arrayValue}</option>
                )};
                </select> 
              </div>
               )}
               
           </div>
            <button className="tax-assumptions-submit-button" type="submit" onClick={handleSubmit}>SUBMIT</button><br/>
            {quarter}
            {filingStatus}
            {standard}
            {dependents}
            {residency}
            {qbi}
        </div>
       </div>
       </div>
     );
}
 
export default TaxAssumptionsBox;