import { addTotalNumbersForItemized } from "./addTotalNumbersForItemized";

const  federalItemizedCalcFunction = (agi, values) => {
   let agiToBeLimited = agi; //value to possibly use in the future for a more advance itemized deduction function

   let total = addTotalNumbersForItemized(values["medical"], values["taxesPaidItemized"], values["interestPaidItemized"], values["charity"], 
   values["otherItemized"]);
  
   return total;
}
 
export default federalItemizedCalcFunction;