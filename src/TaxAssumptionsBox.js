import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeQuarter } from "./redux/action-creators/actionsMaster";
import { taxAssumptionsElements } from "./constants";

const TaxAssumptionsBox = () => {

const quarter = useSelector((state) => state.quarter);
const dispatch = useDispatch();

const [ quarterState, setQuarterState ] = useState(1);
const [ filingStatusState, setFilingStatusState ] = useState("SINGLE");
const [ standardState, setStandardState ] = useState("STANDARD");
const [ dependentsState, setDependentsState ] = useState(1);
const [ residencyState, setResidencyState ] = useState("NONE");
const [ qbiState, setQbiState ] = useState("NO");

const handleQuarterSubmit = () => {
    let tempQuarter = parseInt(quarterState);

    if([1, 2, 3, 4].indexOf(tempQuarter) > -1){
    dispatch(changeQuarter(tempQuarter));
    setQuarterState(tempQuarter);
    }
    else {
        console.log("Error in code, why was a number not chosen?");
    }
};

const handleChange = (elementId, e) => {
    let tempValue = "";
    // If a value from TaxAssumptionsElements is a number it needs to be parsed to a number as the map function makes it a string, see TaxAssumptionsElements 
    // in constants to identify what data are numbers.
    if(elementId == 0 || elementId == 3){
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
        {/* <div id="input-box">
                <select name="quarterinput" id="quarter-input" onChange={onQuarterChange} value={quarterState}>
                    {quarterOptionsValues.map((value) => 
                        <option key={value.id} value={value.quarter}>{value.quarter}</option>
                    )};
                </select>
        </div> */}
        <div id="tax-assumptions-box">
        <div className="container-fluid">
           <div className="tax-assumptions-box-title">TAX ASSUMPTIONS</div>
           <div className="d-flex align-content-around flex-wrap justify-content-start">
               {taxAssumptionsElements.map((item) =>
               <div className="p-3 tax-assumption-title" key={item.id}>{item.element}:&nbsp; 
                <select name={item.element} className="tax-assumption-select" id="tax-assumption-item" onChange={(e) => handleChange(item.id, e)}>
                {item.array.map((value) => 
                    <option key={value.id} value={value.arrayValue}>{value.arrayValue}</option>
                )};
                </select> 
              </div>
               )}
               
           </div>
            <button className="tax-assumption-submit-button" type="submit" onClick={handleQuarterSubmit}>SUBMIT</button><br/>
            {quarter}
            {filingStatusState}
            {standardState}
            {dependentsState}
            {residencyState}
            {qbiState}
        </div>
       </div>
       </div>
     );
}
 
export default TaxAssumptionsBox;