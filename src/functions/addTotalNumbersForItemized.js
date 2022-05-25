export function addTotalNumbersForItemized(...numbers) {
    let array = [];
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        array.push(parseInt(numbers[i]));
    }

    sum = array.reduce((prevValue, currentValue) => {
        return prevValue + currentValue
    });
   
    return parseInt(sum);
};