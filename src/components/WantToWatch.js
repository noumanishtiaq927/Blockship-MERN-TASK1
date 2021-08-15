import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Features,Images,Search} from "../constants/constants"

function WantToWatch() {
    const dispatch = useDispatch()
    const {wanttowatched} = useSelector(state => state)
    console.log({wanttowatched})
    return (
        <div>
           {
               wanttowatched.length === 0 ? <h1> No ITEM </h1>
               :
               <div  style={{display:'grid',gridTemplateColumns:"repeat(3,1fr)"}}>
               {  
               
               wanttowatched.map(dt => (
                   <div style={{width:"350px", height:'450px', backgroundColor:'black',margin:'20px',borderRadius:'10px',border:'2px solid crimson'}}>
                   <img style={{width:'90%',height:"60%",objectFit:"cover",margin:'15px 14px',border:'2px solid salmon',borderRadius:'20px', padding:'2px'}} src={dt.poster_path ? Images + `${dt.poster_path}` : " "} alt=""/>
                   <h6 style={{color:"white"}}>{dt.title}</h6>
                   <button  style={{backgroundColor:'teal',color:'white',outline:'none',border:'1px solid wheat',width:'60%',maxWidth:'100%',  borderRadius:'3px',  height:'30px',margin:'0px 60px'}}>Want TO Watch</button>
                   <div style={{display:'flex',justifyContent:'space-around'}}>
                       <button   style={{backgroundColor:'teal',color:'white',outline:'none',border:'1px solid wheat',width:'40%',  borderRadius:'3px',  height:'30px',margin:'5px 30px'}}>Watched</button>
                       <button   style={{backgroundColor:'teal',color:'white',outline:'none',border:'1px solid wheat',width:'40%', borderRadius:'3px',  height:'30px',margin:'5px 30px'}}>Watching</button>
                   </div>
                   </div>
               ))

                }
                </div>
}
               
        </div>
    )
}

export default WantToWatch
