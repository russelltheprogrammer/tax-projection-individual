const  federalItemizedCalcFunction = (agi, values) => {
   let agiToBeLimited = agi; //value to possibly use in the future for a more advance itemized deduction function

   let total = addTotal(values["medical"], values["taxesPaidItemized"], values["interestPaidItemized"], values["charity"], 
   values["otherItemized"]);
  
   return total;
}
 
export default federalItemizedCalcFunction;


function addTotal() {
    let array = [];
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        array.push(arguments[i]);
    }

    sum = array.reduce((prevValue, currentValue) => {
        return prevValue + currentValue
    });
    return parseInt(sum);
};