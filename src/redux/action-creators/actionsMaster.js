const CHANGEQUARTER = "CHANGEQUARTER";
const CHANGEFILINGSTATUS = "CHANGEFILINGSTATUS";
const CHANGESTANDARD = "CHANGESTANDARD";
const CHANGEDEPENDENTS = "CHANGEDEPENDENTS";
const CHANGERESIDENCY = "CHANGERESIDENCY";
const CHANGEQBI = "CHANGEQBI";

export const changeQuarter = (quarter) => {
    return (dispatch) => {
        dispatch({
            type: CHANGEQUARTER,
            payload: quarter
        })
    }
};

export const changeFilingStatus = (filingStatus) => {
    return (dispatch) => {
        dispatch({
            type: CHANGEFILINGSTATUS,
            payload: filingStatus
        })
    }
};

export const changeStandard = (standard) => {
    return (dispatch) => {
        dispatch({
            type: CHANGESTANDARD,
            payload: standard
        })
    }
};

export const changeDependents = (dependents) =>{
    return (dispatch) => {
        dispatch({
            type: CHANGEDEPENDENTS,
            payload: dependents
        })
    }
};

export const changeResidency = (residency) =>{
    return (dispatch) => {
        dispatch({
            type: CHANGERESIDENCY,
            payload: residency
        })
    }
};

export const changeQbi = (qbi) =>{
    return (dispatch) => {
        dispatch({
            type: CHANGEQBI,
            payload: qbi
        })
    }
};