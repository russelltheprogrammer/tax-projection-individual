// dataToSummate single nested object with a string value number
// constantElement is an array with single nested objects, each hardValue value matches the key to the dataToSummate object

const summationFunction = ( dataToSummate, constantElement ) => {
    let resultsArray = [];

    for(let i = 0; i < constantElement.length; i++){
        if(dataToSummate[constantElement[i]["hardValue"]]){
            resultsArray.push(parseInt(dataToSummate[constantElement[i]["hardValue"]]));
        }
        else {
            return "0";
        }
    }
    return resultsArray.reduce((prevValue, currentValue) => prevValue + currentValue);
};

export default summationFunction;