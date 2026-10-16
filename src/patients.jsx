import React, { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom";
function Patients(){
    const[data,setData]=useState([])
    const[search,setSearch]=useState('');
    async function getPatients() {
        try{
            const res=await axios.get('https://doc-back.onrender.com/patients')
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
    const filteredPatients=data.filter((patient)=>{
        console.log(search)
        return patient.name.toLowerCase().includes(search.toLowerCase())||
        patient.disease.includes(search)
    })
    return(
        <div>
            <input 
            type="text"
            placeholder="Enter patients information"
            name="search"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}/>
            {
                filteredPatients.length===0?
                <>
                <h1>Patients not found</h1>
                </>:
                <>
                <h1>Patients information</h1>
                <div className="card">
                    {
                        filteredPatients.map((v,i)=>(
                            <div key={v.id}>
                                <h2>Patient Name:{v.name}</h2>
                                <h3>Disease:{v.disease}</h3>
                                <h4>wieght:{v.weight}</h4>
                                <h4>Age:{v.age}</h4>
                                <h4>Email:{v.email}</h4>
                                <h4>gender:{v.gender}</h4>
                                <h4>doctorname:{v.doctor.name}</h4>
                                <Link to ={`/patients/${v.id}`}>View Patient</Link>
                            </div>
                        ))
                    }
                </div>
                </>
            }

        </div>
    )
}
export default Patients