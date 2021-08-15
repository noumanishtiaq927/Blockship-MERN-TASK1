import {AWTYPES} from "../Action/AwAction"
import {CWTYPES} from "../Action/CwAction"
import {WTYPES} from "../Action/WActions"

const initialState = []

const AWReducer = (state=initialState, action)=>{
    console.log(action.payload)
    switch(action.type){
    case AWTYPES.ADD_AW:
        return [
            ...state,
            action.payload
        ]
    case AWTYPES.RM_AW:
        return state.filter(x => x.title === action.payload.title)
        default:
            return state     
}}

export default AWReducer