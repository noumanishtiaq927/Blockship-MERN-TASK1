import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Features,Images,Search} from "../constants/constants"
import {addW,rmW} from "../redux/Action/WActions"
import {addCW,rmCW} from "../redux/Action/CwAction"
import {addAW,rmAW} from "../redux/Action/AwAction"

function WantToWatch() {
    const dispatch = useDispatch()
    const {wanttowatched} = useSelector(state => state)
    const [wtw,setwtw]=useState([])

    useEffect(()=>{
            setwtw([...wtw,wanttowatched])
            console.log(wtw)
    },[])
    
    const wanttowatch = (dt ) => {
        dispatch(addW(dt))
       
        console.log(dt)
    }
    const alreadywatch = (dt ) => {
        dispatch(addAW(dt))
        dispatch(rmW(dt))
        console.log(dt)
    }
    const stillwatch = (dt ) => {
        dispatch(addCW(dt))
        dispatch(rmW(dt))
      
        console.log(dt)
    } 
    console.log({wanttowatched})
    return (
        <div>
            <h2  style={{backgroundColor:'rebeccapurple',color:'whitesmoke',textAlign:"center",  width:'90%',margin:'10px auto',height:'30px',borderRadius:'3px',padding:'10px'}}>Want TO Watching</h2> 
           {
               wanttowatched.length === 0 ? <h1 style={{textAlign:'center', color:'crimson'}}> No ITEM -    SCROLL DOWN TO SEARCH AND ADD   </h1>
               :
               <div  style={{display:'grid',gridTemplateColumns:"repeat(3,1fr)"}}>
               {  
               
               wanttowatched?.map(dt => (
                   <div style={{width:"300px", height:'300px', backgroundColor:'black',margin:'20px',borderRadius:'10px',border:'2px solid crimson'}} key={dt.id}>
                   <img style={{width:'90%',height:"50%",objectFit:"cover",margin:'15px  14px 0 14px',border:'2px solid salmon',borderRadius:'20px', padding:'2px'}} src={dt.poster_path ? Images + `${dt.poster_path}` : " "} alt=""/>
                   <h6 style={{color:"white",textAlign:'center'}}>{dt.title}</h6>
                   <button disabled style={{color:'white',outline:'none',border:'1px solid wheat',width:'60%',maxWidth:'100%',  borderRadius:'3px',  height:'20px',margin:'0px 60px',transform:'translateY(-50%)' }}>Want TO Watch</button>
                   <div style={{display:'flex',justifyContent:'space-around'}}>
                       <button   style={{backgroundColor:'teal',color:'white',outline:'none',border:'1px solid wheat',width:'40%',  borderRadius:'3px',  height:'20px',margin:'5px 30px'}} onClick={()=>alreadywatch(dt)} >Watched</button>
                       <button   style={{backgroundColor:'teal',color:'white',outline:'none',border:'1px solid wheat',width:'40%', borderRadius:'3px',  height:'20px',margin:'5px 30px'}} onClick={()=>stillwatch(dt)}>Watching</button>
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
