// import React,{useState} from 'react'
// import Home from './Home.jsx'
// import Signup from './Signup.jsx';
// import Patients from './patients.jsx';


// function App(){
//   const[username,setUsername]=useState('Codegnan hospital');

//   return(
//     <>
//     <Patients/>
//     <Home hospitalname={username}/>
//     <Signup/><br/>
//     {/* <p>Hooks concept in react,state management system,Props,Event handling controlled input</p>
//     <h1>{username}</h1> */}
//     <button onClick={()=>setUsername('No1 hospital')}>update name</button>
//     </>
//   )
// }
// export default App
import React from 'react'
import Home from './Home'
import Patients from './patients'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import  Navigate  from './Navigate';
import  Doctors from './Doctors';
import SinglePatient from './SinglePatient';
import SingleDoctors from './SingleDoctor';
import NotFound from './NotFound';


function App() {
  return (
   <>
   <BrowserRouter>
   <Navigate/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/patients' element={<Patients/>}/>
    <Route path='/doctors' element={<Doctors/>}/>
    <Route path='/patients/:id' element={<SinglePatient/>}/>
    <Route path='/doctors/:id' element={<SingleDoctors/>}/>
    <Route path='*'element={<NotFound/>}/>

   </Routes>
   </BrowserRouter>
   </>
  )
}
export default App
