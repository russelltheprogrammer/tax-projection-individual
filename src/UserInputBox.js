import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { changeQuarter } from "./redux/action-creators/actionsMaster";

const UserInputBox = () => {

const [ quarterState, setQuarterState ] = useState(1);

const quarter = useSelector((state) => state.quarter);
const dispatch = useDispatch();

const handleQuarterSubmit = () => {
    let tempQuarter = quarterState;
    
    if([1, 2, 3, 4].indexOf(tempQuarter) > -1){
    dispatch(changeQuarter(tempQuarter));
    setQuarterState(tempQuarter);
    }
    else {
        console.log("Not a quarter, change number to 1, 2, 3 or 4");
        setQuarterState(1);
        console.log(tempQuarter);
    }
};

const onQuarterChange = (e) => {
    let tempQuarter = e.target.value;
    setQuarterState(tempQuarter);
};

    return ( 
        <div>
                <label htmlFor="quarterinput">Quarter:</label><br/>
                <select name="quarterinput" id="quarter-input" onChange={onQuarterChange} value={quarterState}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select><br/>
            <button type="submit" onClick={handleQuarterSubmit}>SUBMIT</button><br/>
            {quarter}<br/>
            {quarterState}
        </div>
     );
}
 
export default UserInputBox;