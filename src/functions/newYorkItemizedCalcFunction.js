import { addTotalNumbersForItemized } from "./addTotalNumbersForItemized";

const  newYorkItemizedCalcFunction = (agi, values) => {
    let agiToBeLimited = agi; //value to possibly use in the future for a more advance itemized deduction function

    let newYorkMedical = parseInt(values["medical"]) * (7.5/10);
 
    let total = addTotalNumbersForItemized(newYorkMedical, values["taxesPaidItemized"], values["interestPaidItemized"], values["charity"], 
    values["otherItemized"], values["stateSpecificItemized"]);
   
    return total;
 }
  
 export default newYorkItemizedCalcFunction;