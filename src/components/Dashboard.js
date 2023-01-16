import React from 'react'
import BasicCard from './Card';
import { ProgressCard } from './Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Dashboard({data,students,setStudents}) {
  console.log(data)
  let navigate=useNavigate()
  let handleDelete=(i)=>{
    let newArray=[...students]//deep copy or clone the state
    newArray.splice(i,1)//delete the element in the newArray
    setStudents(newArray)//update the state with the newArray
  }
  return <>
    <div id="content-wrapper" className="d-flex flex-column">

      {/* <!-- Main Content --> */}
      <div id="content">

        {/* <!-- Begin Page Content --> */}
        <div className="container-fluid">

          {/* <!-- Page Heading --> */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
              className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
          </div>

          <div className="row">
            <BasicCard data={{ value: data.earningsMonthly, icon: 'fa-calender', cardBorder: 'primary' }} />
            <BasicCard data={{ value: data.earningsAnnual, icon: 'fa-calender', cardBorder: 'success' }} />
            <ProgressCard value={data.taskCompletion} icon={'fa-clipboard-list'} cardBorder={'info'}/>
            <BasicCard data={{ value: data.pendingRequests, icon: 'fa-comments', cardBorder: 'warning' }} />

          </div>
          <div>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Batch</th>
          <th>Session Time</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          students.map((e,i)=>{
            return <tr key={i}>
              <td>{i+1}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.mobile}</td>
              <td>{e.batch}</td>
              <td>{e.sessionTime}</td>
              <td>
              <Button variant="primary" onClick={()=>navigate(`/edit-user/${i}`)}><i className="fa-solid fa-user-pen"></i>Edit</Button>
              &nbsp;&nbsp;&nbsp;
              <Button variant="danger" onClick={()=>handleDelete(i)}><i className="fa-solid fa-trash"></i>Delete</Button>
              </td>
            </tr>
          })
        } 
      </tbody>
    </Table>
          </div>

        </div>

      </div>

      {/* <!-- Footer --> */}
      <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>Copyright &copy; Your Website 2021</span>
          </div>
        </div>
      </footer>
      {/* <!-- End of Footer --> */}

    </div></>
}

export default Dashboard; 