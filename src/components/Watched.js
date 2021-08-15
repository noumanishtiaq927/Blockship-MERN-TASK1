import React from 'react'
import {useDispatch, useSelector} from "react-redux"

function Watched() {
    const dispatch = useDispatch()
    const {alreadywatched} = useSelector(state => state)
    console.log({alreadywatched})
    return (
        <div>
            <h1>Watched</h1>
        </div>
    )
}

export default Watched
