export const WTYPES = {
    ADD_W :"ADD_W",
    RM_W : "RM_W"
}


export const addW = (dt) => dispatch => {
console.log(dt)
dispatch({type: WTYPES.ADD_W, payload:dt})
}

export const rmW = (dt) => dispatch => {
    console.log(dt)
dispatch({type:WTYPES.RM_W,payload:dt})
}