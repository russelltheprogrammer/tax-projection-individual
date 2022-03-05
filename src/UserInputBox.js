import { e } from "mathjs";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { changeQuarter } from "./redux/action-creators/actionsMaster";

const UserInputBox = () => {

const [ quarterState, setQuarterState ] = useState(1);

const quarter = useSelector((state) => state.quarter);
const dispatch = useDispatch();

const handleQuarterChange = () => {
    e.preventDefault();
    if(quarterState === 1 || 2 || 3 || 4){
    dispatch(changeQuarter(quarterState));
    }
    else {
        console.log("Not a quarter, change number to 1, 2, 3 or 4");
    }
};

const onChange = (e) => {
    let tempQuarter = e.target.quarterinput;
    setQuarterState(tempQuarter);
};

    return ( 
        <div>
            <form>
                <label htmlFor="quarterinput">Quarter:</label><br/>
                <input type="text" id="quarter-input" name="quarterinput" placeholder="Quarter" onChange={onChange}></input><br/>
            </form>
            <button type="submit" onSubmit={handleQuarterChange}>SUBMIT</button><br/>
            {quarter}
        </div>
     );
}
 
export default UserInputBox;