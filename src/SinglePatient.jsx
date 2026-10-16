import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
function Patients(){
    const[data,setData]=useState([])
    const{id}=useParams()
    async function getPatients() {
        try{
            const res=await axios.get(`https://doc-back.onrender.com/patients/${id}`)
            console.log(res.data);//200
            setData(res.data)
        }
        catch(error){

            console.log('patients details not allowed',error);
        }
        finally{
            console.log('patients details')
        }
        
    }
    //useeffect(function,dependency)
    useEffect(()=>{
        getPatients()
    },[])
    return(
        <div>
            {
    
                data.length===0?
                <>
                <h1>Patients not found</h1>
                </>:
                <>
                <h1> Single Patients information</h1>
                <div>
                    
                        
                                <h2>Patient Name:{data.name}</h2>
                                <h3>Disease:{data.disease}</h3>
                                <h4>wieght:{data.weight}</h4>
                                <h4>Age:{data.age}</h4>
                                <h4>Email:{data.email}</h4>
                                <h4>gender:{data.gender}</h4>
                                <h4>doctorname:{data.doctor.name}</h4>
                            </div>
                       
                    
              
                </>
            }

        </div>
    )
}
export default Patients