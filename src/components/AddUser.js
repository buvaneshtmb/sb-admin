import React, { useState,useContext } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer,toast } from 'react-toastify';
import { StudentContext } from '../App';


function AddUser() {
  let navigate = useNavigate()
  let context=useContext(StudentContext)
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [mobile, setMobile] = useState("")
  let [batch, setBatch] = useState("")
  let [sessionTime, setSessionTime] = useState("10am to 12pm")

  let handleSubmit = () => {
    let newArray =[...context.students]
    newArray.push({
      name,
      email,
      mobile,
      batch,
      sessionTime
    })
    context.setStudents(newArray)
    navigate('/dashboard')
    toast.success(`${name} added Successfully`)
  }

  return <div className='container-fluid'>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Gmail" onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Enter Mobile" onChange={(e) => setMobile(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" placeholder="Enter Batch" onChange={(e) => setBatch(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">

        <Form.Select onChange={(e) => setSessionTime(e.target.value)} defaultValue='0'>
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
  </div>

}

export default AddUser