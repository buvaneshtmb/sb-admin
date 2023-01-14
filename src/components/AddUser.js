import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function AddUser() {
  let navigate=useNavigate()
  return <div>
    <button className='btn btn-primary' onClick={()=>{
      alert("Data saved successfully")
      navigate('/dashboard')
    }}> 
          Submit
    </button>
  </div>
  
}

export default AddUser