import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";


function Doctors() {
  const[data,setData]=useState([])
  const[search,setSearch]=useState('');
  async function getDoctors() {
    try{
      const res=await axios.get('https://doc-back.onrender.com/doctors')
      console.log(res.data);
      setData(res.data)
    }
    catch(error)
    {
      console.log(error)
    }
    finally{
      console.log("loading a doctor details")
    }
    
  }
  useEffect(()=>{
    getDoctors()
  },[])
   const filteredDoctors =data.filter((Doctors)=>{
        console.log(search)
        return Doctors.name.toLowerCase().includes(search.toLowerCase())||
        Doctors.specialization.includes(search)
    })

  return (
    <div>
       <input 
            type="text"
            placeholder="Enter doctors information"
            name="search"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}/>
            {
                filteredDoctors.length===0?
        <>
        <h1>Doctors not found</h1>
        </>:
        <>
        <h1>
          Doctors information
        </h1>
        <div className='card'>
          {
            filteredDoctors.map((v,i)=>(
              <div key={v.id}>
                <h1>Doctorname:{v.name}</h1>
                <h2>Specialization:{v.specialization}</h2>
                <Link to ={`/doctors/${v.id}`}>View doctor</Link>
        </div>
            ))
          }
          </div>
        </>
      }
    </div>
  )
}
export default Doctors
