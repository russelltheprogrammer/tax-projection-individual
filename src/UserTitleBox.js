import React, { useEffect, useRef } from "react";


const UserTitleBox = () => {

    const inputEl = useRef(null);

    useEffect(()=>{
        inputEl.current.focus();
    },[]);
    
    
    return ( 
        <div>
         <div id="user-title-box">
             <form>
                 <label htmlFor="username">NAME:&nbsp;</label>
                 <input ref={inputEl} type="text" className="user-input-box" id="username" name="username" />
                 <label htmlFor="userid">ID:&nbsp;</label>
                 <input type="text" className="user-input-box" id="userid" name="userid" />
             </form>
         </div>
        </div>
     );
}
 
export default UserTitleBox;