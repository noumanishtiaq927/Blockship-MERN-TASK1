import React ,{useEffect, useState} from 'react'
import axios from "axios"
import {Features,Images,SEARCH} from "../constants/constants"
import {useDispatch, useSelector} from "react-redux"
import {addW,rmW} from "../redux/Action/WActions"
import {addCW,rmCW} from "../redux/Action/CwAction"
import {addAW,rmAW} from "../redux/Action/AwAction"

function SearchPage() {
    const [data,setData]=useState([])
    const [search,setsearch]=useState([])
    const [error,setError]=useState(false)
    const dispatch = useDispatch()
    const s = useSelector(state => state)
    console.log(s)

    const wanttowatch = (dt ) => {
        dispatch(addW(dt))
       
        console.log(dt)
    }
    const alreadywatch = (dt ) => {
        dispatch(addAW(dt))
        
        console.log(dt)
    }
    const stillwatch = (dt ) => {
        dispatch(addCW(dt))
      
        console.log(dt)
    }

    useEffect(() => {
        if(search){
            axios.get(`${SEARCH}${search}`)
            .then(res=>setData(res.data.results))
            .catch(err=>console.log(err))
        } 
        axios.get(Features)
        .then(res=>setData(res.data.results))
        .catch(err=>setError(true))
        
    }, [search])

    return (
        <div>
            <nav style={{backgroundColor:'rebeccapurple',width:'80%',margin:'20px auto',height:'40px',borderRadius:'30px',  display:'flex',justifyContent:'space-between',alignItems:'center',padding:'20px'}}>
                <h3>Search For Movie</h3>
                <input style={{backgroundColor:"purple", flex:'1', color:'white',fontSize:'20px',fontWeight:'500',  margin:'0 40px',height:'30px',outline:'none',border:'2px solid black'}} type="text"  placeholder="Type and Wait ...." value={search} onChange={(e)=>setsearch(e.target.value)}/>


            </nav>
            <main style={{margin:'20px 10px', padding:'20px 10px'}}>
                <section >
                    {
                        error ? <h3>Failed Request</h3> : 
                        <div  style={{display:'grid',gridTemplateColumns:"repeat(3,1fr)"}}>
                        {  
                        
                        data.map(dt => (
                            <div style={{width:"350px", height:'450px', backgroundColor:'black',margin:'20px',borderRadius:'10px',border:'2px solid crimson'}}>
                            <img style={{width:'90%',height:"60%",objectFit:"cover",margin:'15px 14px',border:'2px solid salmon',borderRadius:'20px', padding:'2px'}} src={dt.poster_path ? Images + `${dt.poster_path}` : " "} alt=""/>
                            <h6 style={{color:"white",textAlign:'center',fontSize:'10px',fontWeight:'bold'}}>{dt.title}</h6>
                            <button onClick={()=>wanttowatch(dt)}  style={{backgroundColor:'teal',color:'white',outline:'none',border:'1px solid wheat',width:'60%',maxWidth:'100%',  borderRadius:'3px',  height:'30px',margin:'0px 60px'}}>Want TO Watch</button>
                            <div style={{display:'flex',justifyContent:'space-around'}}>
                                <button onClick={()=>alreadywatch(dt)}  style={{backgroundColor:'teal',color:'white',outline:'none',border:'1px solid wheat',width:'40%',  borderRadius:'3px',  height:'30px',margin:'5px 30px'}}>Watched</button>
                                <button onClick={()=>stillwatch(dt)}  style={{backgroundColor:'teal',color:'white',outline:'none',border:'1px solid wheat',width:'40%', borderRadius:'3px',  height:'30px',margin:'5px 30px'}}>Watching</button>
                            </div>
                            </div>
                        ))

                         }
                         </div>
}
                </section>
            </main>
        </div>
    )
}

export default SearchPage
