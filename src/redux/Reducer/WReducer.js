import {AWTYPES} from "../Action/AwAction"
import {CWTYPES} from "../Action/CwAction"
import {WTYPES} from "../Action/WActions"

const initialState = []

const WReducer = (state=initialState, action)=>{
    console.log(action.payload)
    switch(action.type){
    case WTYPES.ADD_W:
        return [
            ...state,
            action.payload
        ]
    case WTYPES.RM_W:
        return ( 
            state.filter(x => x.title === action.payload.title)
            
        )
        default:
            return state    
}}

export default WReducer