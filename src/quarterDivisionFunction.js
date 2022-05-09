const quarterDivisionFunction = (quarter) => {
    
    if(quarter == 1) {
        return 4;
    }
    else if(quarter == 2) {
        return 2.4;
    }
    else if(quarter == 3) {
        return 1.5;
    }
    else if (quarter == 4) {
        return 1;
    }
    else {
        return console.log("error from quarterDivisionFunction");
    }
};

export default quarterDivisionFunction;