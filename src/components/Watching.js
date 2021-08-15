import React from 'react'
import {useDispatch, useSelector} from "react-redux"
function Watching() {
    const dispatch = useDispatch()
    const {currentwatching} = useSelector(state => state)
    console.log({currentwatching})
    return (
        <div>
           <h1>Watching</h1> 
        </div>
    )
}

export default Watching
