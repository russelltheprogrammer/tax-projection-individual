import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeQuarter, changeFilingStatus, changeStandard, changeDependents, changeResidency } from "./redux/action-creators/actionsMaster";
import { taxAssumptionsElements } from "./constants";

const TaxAssumptionsBox = () => {

const quarter = useSelector((state) => state.quarter);
const filingStatus = useSelector((state) => state.filingStatus);
const standard = useSelector((state) => state.standard);
const dependents = useSelector((state) => state.dependents);
const residency = useSelector((state) => state.residency);
const dispatch = useDispatch();

const [ quarterState, setQuarterState ] = useState("1");
const [ filingStatusState, setFilingStatusState ] = useState("SINGLE");
const [ standardState, setStandardState ] = useState("STANDARD");
const [ dependentsState, setDependentsState ] = useState("1");
const [ residencyState, setResidencyState ] = useState("NONE");

const handleSubmit = () => {
    let tempQuarter = quarterState;
    let tempFilingStatus = filingStatusState;
    let tempStandard = standardState;
    let tempDependents = dependentsState;
    let tempResidency = residencyState;

    try {
        dispatch(changeQuarter(tempQuarter));
        dispatch(changeFilingStatus(tempFilingStatus));
        dispatch(changeStandard(tempStandard));
        dispatch(changeDependents(tempDependents));
        dispatch(changeResidency(tempResidency));
        setQuarterState(tempQuarter);
        setFilingStatusState(tempFilingStatus);
        setStandardState(tempStandard);
        setDependentsState(tempDependents);
        setResidencyState(tempResidency);
    }
    
    catch(err) {
        console.log(err);
    }
};

const handleChange = (elementId, e) => {
    let tempValue = e.target.value;

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
        default:
            console.log("No case was selected");    
    };
};

    return ( 
        <div>
        <div id="tax-assumptions-box">
        <div className="container-fluid">
           <div className="box-title">TAX ASSUMPTIONS</div>
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
            <button id="tax-assumptions-submit-button" className="submit-button" type="submit" onClick={handleSubmit}>SUBMIT</button><br/>
            {quarter}
            {filingStatus}
            {standard}
            {dependents}
            {residency}
        </div>
       </div>
       </div>
     );
}
 
export default TaxAssumptionsBox;