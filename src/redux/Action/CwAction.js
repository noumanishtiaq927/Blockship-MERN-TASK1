export const CWTYPES = {
    ADD_CW :"ADD_CW",
    RM_CW : "RM_CW"
}


export const addCW = (dt) => dispatch => {
console.log(dt)
dispatch({type:CWTYPES.ADD_CW, payload:dt})
}

export const rmCW = (dt) => dispatch => {
dispatch({type:CWTYPES.RM_CW,payload:dt})
}