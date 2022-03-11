import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeQuarter } from "./redux/action-creators/actionsMaster";
import { quarterOptionsValues } from "./constants";

const UserInputBox = () => {

const quarter = useSelector((state) => state.quarter);
const dispatch = useDispatch();

const [ quarterState, setQuarterState ] = useState(1);

const handleQuarterSubmit = () => {
    let tempQuarter = parseInt(quarterState);

    if([1, 2, 3, 4].indexOf(tempQuarter) > -1){
    dispatch(changeQuarter(tempQuarter));
    setQuarterState(tempQuarter);
    }
    else {
        console.log("Error in code, why was a number not chosen?");
        setQuarterState(1);
    }
};

const onQuarterChange = (e) => {
    let tempQuarter = parseInt(e.target.value);
    setQuarterState(tempQuarter);
};

    return ( 
        <div id="input-box">
                <label htmlFor="quarterinput">Quarter:</label><br/>
                <select name="quarterinput" id="quarter-input" onChange={onQuarterChange} value={quarterState}>
                    {quarterOptionsValues.map((value) => 
                        <option key={value.id} value={value.quarter}>{value.quarter}</option>
                    )};
                </select><br/>
            <button type="submit" onClick={handleQuarterSubmit}>SUBMIT</button><br/>
        </div>
     );
}
 
export default UserInputBox;