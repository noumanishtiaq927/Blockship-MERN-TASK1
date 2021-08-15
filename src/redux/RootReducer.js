import { combineReducers } from 'redux';

import alreadywatched from "../redux/Reducer/AwReducer"
import currentwatching from "../redux/Reducer/CwReducer"
import wanttowatched from "../redux/Reducer/WReducer"



const RootReducer = combineReducers({

   alreadywatched,
   wanttowatched,
   currentwatching

});

export default RootReducer;