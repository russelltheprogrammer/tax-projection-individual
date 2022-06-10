const quarterFactorCalcFunction = (quarter) => {
    
    if(quarter == 1) {
        return 4;
    }
    else if(quarter == 2) {
        return 2;
    }
    else if(quarter == 3) {
        return 1.33;
    }
    else if (quarter == 4) {
        return 1;
    }
    else {
        return console.log("error from annualizationFactorCalcFunction");
    }
};

export default quarterFactorCalcFunction;