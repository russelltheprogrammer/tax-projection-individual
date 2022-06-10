import React, { useEffect, useRef, useState } from "react";

const UserTitleBox = () => {

    const [ width, setWidth ] = useState(window.innerWidth);
    const breakPoint = 1100;

    const inputEl = useRef(null);

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        }
    }, []);

    useEffect(()=>{
        inputEl.current.focus();
    },[]);
    
    return ( 
        <div>
         <div id="user-title-box">
             <form>
                 <label htmlFor="username">NAME:&nbsp;</label>
                 <input ref={inputEl} type="text" className="user-input-box" id="username" name="username" />
                 { width < breakPoint ? <br/> : null }
                 <label htmlFor="userid">ID:&nbsp;</label>
                 <input type="text" className="user-input-box" id="userid" name="userid" />
             </form>
         </div>
        </div>
     );
}
 
export default UserTitleBox;