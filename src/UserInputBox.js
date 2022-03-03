import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/quarter";

const UserInputBox = () => {

const { quarter } = useSelector(state => state.quarter);
const dispatch = useDispatch();


    return ( 
        <div>
            {quarter}
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
        </div>
     );
}
 
export default UserInputBox;