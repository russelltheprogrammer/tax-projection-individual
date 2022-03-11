import { useSelector } from "react-redux";

const UserOutputBox = () => {

const quarter = useSelector((state) => state.quarter);

    return ( 
        <div id="output-box">
            <div className="d-flex justify-content-start">
                <div>QUARTER: {quarter}</div>
                <div>W-2:</div>
                <div>Interest:</div>
                <div>Dividends:</div>
           
                <div>Capital Gains:</div>
                <div>Business Income:</div>
                <div>Other Income:</div>

                <div>HSA Contributions:</div>
                <div>Deductible S/E Tax:</div>
                <div>S/E Insurance:</div>
                <div>Retirement Deduction:</div>
            </div>
        </div>
     );
}
 
export default UserOutputBox;