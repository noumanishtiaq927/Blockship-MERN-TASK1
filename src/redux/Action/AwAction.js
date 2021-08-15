export const AWTYPES = {
    ADD_AW :"ADD_AW",
    RM_AW : "RM_AW"
}


export const addAW = (dt) => dispatch => {
console.log(dt)
dispatch({type:AWTYPES.ADD_AW,payload:dt})
}

export const rmAW = (dt) => dispatch => {
dispatch({type:AWTYPES.RM_AW,payload:dt})
}