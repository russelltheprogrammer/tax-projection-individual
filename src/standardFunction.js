import { federalStandardDeduction, newYorkStandardDeduction } from "./constants"

const standardFunction = (jurisdiction, filingStatus) => {
    let dependentData;

    if(jurisdiction === "federal"){
        dependentData = federalStandardDeduction;
    }
    else if(jurisdiction === "newYork"){
        dependentData = newYorkStandardDeduction;
    }
    else{
        console.log("no jurisdiction selected in standardFunction");
    }

    for(let i = 0; i < dependentData.length; i++){
        if(dependentData[i]["filingStatus"] === filingStatus){
            return dependentData[i].standardDeduction;
        }
    }
    return console.log("error in standardFunction");
};

export default standardFunction;