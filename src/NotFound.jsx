import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const hello=useNavigate()
  return (
    <div>
      <center>
        
        <img src='https://img.magnific.com/premium-vector/404-page-found-search-error-web-illustration_585024-459.jpg?semt=ais_hybrid&w=740&q=80' alt=''width="40%"/>
        <button onClick={()=>hello('/')}>Go to the home page</button>
      </center>
    </div>
  )
}
export default NotFound
