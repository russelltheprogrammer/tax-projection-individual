import { useSelector } from "react-redux";
import { taxAssumptionsElements } from "./constants";

const UserTitleBox = () => {

const quarter = useSelector((state) => state.quarter);

    return ( 
        <div>
         <div id="user-title-box">
          <span>NAME:</span>
          <span>ID:</span> 
         </div>
        </div>
     );
}
 
export default UserTitleBox;