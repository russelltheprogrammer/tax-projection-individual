const CHANGEQUARTER = "CHANGEQUARTER";

export const changeQuarter = (quarter) => {
    return (dispatch) => {
        dispatch({
            type: CHANGEQUARTER,
            payload: quarter
        })
    }
}