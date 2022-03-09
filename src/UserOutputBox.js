import { useSelector } from "react-redux";

const UserOutputBox = () => {

const quarter = useSelector((state) => state.quarter);

    return ( 
        <div>
            {quarter}
            <br/>
            &nbsp;<br/>
           
        </div>
     );
}
 
export default UserOutputBox;