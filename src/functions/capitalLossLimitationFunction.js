const capitalLossLimitationFunction = (shortTermCapitalGainLoss, longTermCapitalGainLoss) => {
    let total = 0;
    let st = parseInt(shortTermCapitalGainLoss);
    let lt = parseInt(longTermCapitalGainLoss);
    let limitation = 0;
    total += st + lt;

    if(total > -3001){
        return 0;
    }
   else {
       limitation += -total - 3000;
       return limitation;
   }
};

export default capitalLossLimitationFunction;