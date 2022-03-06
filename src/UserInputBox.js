import { e } from "mathjs";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { changeQuarter } from "./redux/action-creators/actionsMaster";

const UserInputBox = () => {

const [ quarterState, setQuarterState ] = useState(1);

const quarter = useSelector((state) => state.quarter);
const dispatch = useDispatch();

const handleQuarterChange = () => {
    let tempQuarter = quarterState;
    e.preventDefault();
    if(tempQuarter === 1 || 2 || 3 || 4){
    dispatch(changeQuarter(tempQuarter));
    }
    else {
        console.log("Not a quarter, change number to 1, 2, 3 or 4");
    }
};

const onChange = (e) => {
    let tempQuarter = e.target.value;
    setQuarterState(tempQuarter);
};

    return ( 
        <div>
            <form onSubmit={handleQuarterChange}> 
                <label htmlFor="quarterinput">Quarter:</label><br/>
                <input type="text" id="quarter-input" name="quarterinput" placeholder="Quarter" onChange={onChange} value={quarterState}></input><br/>
            </form>
            <button type="submit">SUBMIT</button><br/>
            {quarter}<br/>
            {quarterState}
        </div>
     );
}
 
export default UserInputBox;