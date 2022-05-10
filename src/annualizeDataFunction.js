const annualizeDataFunction = (data, annualizationFactor) => {
    let dataToChange = Object.assign({}, data);

    Object.keys(dataToChange).forEach(key => {
        if(key !== "capitalIncome") {
            dataToChange[key] = (dataToChange[key] * annualizationFactor).toString();
        }
    });
    
    return dataToChange;
};

export default annualizeDataFunction;