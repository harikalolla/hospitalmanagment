import React, { useState } from "react"

function Signup(){
    const[username, setUsername]=useState('')
    function handlerSubmit(){
        alert("Form submitted successfully")
    }
    return(
        <>
        <form onSubmit={handlerSubmit}>
            <label>Username</label>
            <input type="text"
            placeholder="Enter username" name='username'
            value={username}
            onChange={(e)=>setUsername(e.target.value)} />
            <button>Submit</button>
        </form> <br />
        <h1>{username}</h1>
        </>
    )
}
export default Signup