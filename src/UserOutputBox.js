import { useSelector } from "react-redux";
import { taxInfoElements, taxIncomeElements, taxAdjustmentElements, taxItemizedDeductionElements } from "./constants";

const UserOutputBox = () => {

const quarter = useSelector((state) => state.quarter);

    return ( 
        <div>
         <div id="output-name-box">
          <span>NAME:</span>
          <span>ID:</span>
          {quarter} 
         </div>
         <div id="output-box">
             <div className="container-fluid">
                <div className="d-flex align-content-around flex-wrap justify-content-start">
                    <div>TAX INFO</div>
                    {taxInfoElements.map((item) =>
                    <div className="p-3" key={item.id}>{item.element}: </div>
                    )}
                </div>
                <div className="d-flex align-content-around flex-wrap justify-content-start">
                    <div>INCOME</div>
                    {taxIncomeElements.map((item) =>
                    <div className="p-3" key={item.id}>{item.element}: </div>
                    )}
                </div>
                <div className="d-flex align-content-around flex-wrap justify-content-start">
                    <div>ADJUSTMENT</div>
                    {taxAdjustmentElements.map((item) =>
                    <div className="p-3" key={item.id}>{item.element}: </div>
                    )}
                </div>
                <div className="d-flex align-content-around flex-wrap justify-content-start">
                    <div>DEDUCTIONS</div>
                    {taxItemizedDeductionElements.map((item) =>
                    <div className="p-3" key={item.id}>{item.element}: </div>
                    )}
                </div>
             </div>
            </div>
        </div>
     );
}
 
export default UserOutputBox;