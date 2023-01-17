import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom'
import { getDefaultNormalizer } from '@testing-library/react';
import { ToastContainer,toast } from 'react-toastify';



function EditUser({ students, setStudents }) {
  let params = useParams()
  let navigate = useNavigate()

  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [mobile, setMobile] = useState("")
  let [batch, setBatch] = useState("")
  let [sessionTime, setSessionTime] = useState("10am to 12pm")

  let getdata=()=>{
    setName(students[params.id].name)
    setEmail(students[params.id].email)
    setMobile(students[params.id].mobile)
    setBatch(students[params.id].batch)
    setSessionTime(students[params.id].sessionTime)
    toast.success("Data Fetched Success")
  }

  //withot dependency array - it will load for the first time and every statechanges(this will triggered for everything(any state change this will get triggered))
  useEffect(() => {
    getdata()
    },[])

  //with empty dependency array - it will run for the first time alone(this will triggered for first time)
  // useEffect(()=>{
  //   console.log("useEffect wil triggered")
  // },[])

  //with state variables in dependency array - it will run for the first time and for every specified state changes(if name or email getting changed this will get triggered)
  // useEffect(()=>{
  //   console.log("useEffect wil triggered")
  // },[name,email])

  let handleSubmit = () => {
    let newArray = [...students]
    newArray.splice(params.id, 1, {
      name,
      email,
      mobile,
      batch,
      sessionTime
    })
    setStudents(newArray)
    navigate('/dashboard')
  }

  return <div className='container-fluid'>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Gmail" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Enter Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" placeholder="Enter Batch" value={batch} onChange={(e) => setBatch(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">

        <Form.Select onChange={(e) => setSessionTime(e.target.value)} defaultValue={sessionTime}>
          <option value="0" disabled>Session Time</option>
          <option value={"10am to 12pm"}>10am to 12pm</option>
          <option value={"12pm to 2pm"}>12pm to 2pm</option>
          <option value={"2pm to 4pm"}>2pm to 4pm</option>
          <option value={"4pm to 6pm"}>4pm to 6pm</option>
        </Form.Select>
      </Form.Group>

      <Button variant="primary" onClick={() => handleSubmit()}>
        Submit
      </Button>
    </Form>
    <ToastContainer/>
  </div>

}

export default EditUser