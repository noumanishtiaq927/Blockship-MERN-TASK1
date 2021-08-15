import {AWTYPES} from "../Action/AwAction"
import {CWTYPES} from "../Action/CwAction"
import {WTYPES} from "../Action/WActions"

const initialState = []

const CWReducer = (state=initialState, action)=>{
    console.log(action.payload)
    switch(action.type){
    case CWTYPES.ADD_CW:
        return [
            ...state,
            action.payload
        ]
    case CWTYPES.RM_CW:
        return state.filter(x => x.title === action.payload.title)
    default:
        return state  
}}

export default CWReducer