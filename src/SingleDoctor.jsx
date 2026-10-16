import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
function SingleDoctors(){
    const[data,setData]=useState([])
    const{id}=useParams()
    async function getDoctors() {
        try{
            const res=await axios.get(`https://doc-back.onrender.com/doctors/${id}`)
            console.log(res.data);//200
            setData(res.data)
        }
        catch(error){

            console.log('doctors details not allowed',error);
        }
        finally{
            console.log('doctors details')
        }
        
    }
    //useeffect(function,dependency)
    useEffect(()=>{
        getDoctors()
    },[])
    return(
        <div>
            {
    
                data.length===0?
                <>
                <h1>Doctors not found</h1>
                </>:
                <>
                <h1> Single doctor information</h1>
                <div>
                    
                        
                                <h2>Doctor Name:{data.name}</h2>
                                <h3>salary:{data.salary}</h3>
                                <h4>specialization:{data.specialization}</h4>
                                <h4>Age:{data.age}</h4>
                                <h4>gender:{data.gender}</h4>
                                
                            </div>
                       
                    
              
                </>
            }

        </div>
    )
}
export default SingleDoctors