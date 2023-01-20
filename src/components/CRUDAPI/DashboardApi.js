import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function DashboardApi() {

    let [data, setData] = useState([])
    let navigate = useNavigate()

    let getData = async () => {
        // fetch('https://63ca2d1a4f53a004201e0d06.mockapi.io/students')
        // .then((response)=>response.json())
        // .then((res)=>console.log(res))
        // .catch((err)=>console.log(err))
        try {
            let res = await axios.get('https://63ca2d1a4f53a004201e0d06.mockapi.io/students')
            console.log(res)
            console.log(res.data)
            if (res.status === 200) {
                setData(res.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    let handleDelete = async (id) => {
        try {
            let res=await axios.delete(`https://63ca2d1a4f53a004201e0d06.mockapi.io/students/${id}`)
            if(res.status===200){
                console.log(res.data)
                getData()
            }            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return <div className='container-fluid'>

        <div className='row'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Batch</th>
                        <th>DOB</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((e) => {
                            return <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.firstName}</td>
                                <td>{e.lastName}</td>
                                <td>{e.email}</td>
                                <td>{e.mobile}</td>
                                <td>{e.dob}</td>
                                <td>{e.batch}</td>
                                <td>
                                    <Button variant="primary" onClick={() => navigate(`/add-users/${e.id}`)}>
                                        <i className="fa-solid fa-user-pen"></i>Edit</Button>
                                    &nbsp;&nbsp;&nbsp;
                                    <Button variant="danger" onClick={() => handleDelete(e.id)}>
                                        <i className="fa-solid fa-trash"></i>Delete</Button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </div>

    </div>

}

export default DashboardApi