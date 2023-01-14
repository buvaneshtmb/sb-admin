import React from 'react'
import { useParams } from 'react-router-dom'

function EditUser() {
  let params=useParams()
  console.log(params) 
  return <>
  <div>The User is {params.id}</div></>
}

export default EditUser