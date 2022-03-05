const CHANGEQUARTER = "CHANGEQUARTER";

export const changeQuarter = (number) => {
    return (dispatch) => {
        dispatch({
            type: CHANGEQUARTER,
            payload: number
        })
    }
}