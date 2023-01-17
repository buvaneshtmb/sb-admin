import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import SideBar from './components/SideBar';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import NestedRoute from './components/NestedRoute';
import Profile from './components/Profile';
import Account from './components/Account';
import { useState } from 'react';
import React from 'react';
export const StudentContext = React.createContext();


function App() {
  let data = { earningsMonthly: "40,000", earningsAnnual: "2,40,000", taskCompletion: "60", pendingRequests: "18" };
  let [students, setStudents] = useState([
    {
      name: "nag",
      email: "nag@gmail.com",
      mobile: "8459034894",
      sessionTime: "10am to 12pm",
      batch: "B40"
    },
    {
      name: "buvan",
      email: "buvan@gmail.com",
      mobile: "897579945834",
      sessionTime: "10am to 12pm",
      batch: "B40"
    },
    {
      name: "khaleel",
      email: "khaleel@gmail.com",
      mobile: "5635385757",
      sessionTime: "10am to 12pm",
      batch: "B40"
    },
    {
      name: "arun",
      email: "arun@gmail.com",
      mobile: "5635385757",
      sessionTime: "10am to 12pm",
      batch: "B40"
    },
    {
      name: "mohideen",
      email: "mohideen@gmail.com",
      mobile: "5635385757",
      sessionTime: "10am to 12pm",
      batch: "B40"
    }
  ])

  return <div id='wrapper'>
    <SideBar />
    <StudentContext.Provider value={{ students, setStudents }}>
      <Routes>
        <Route path='/dashboard' element={<Dashboard data={data} />} />
        <Route path='/add-user' element={<AddUser />} />
        <Route path='/edit-user/:id' element={<EditUser students={students} setStudents={setStudents} />} />
        <Route path='/nested-route-example' element={<NestedRoute />}>
          <Route path='profile' element={<Profile />} />
          <Route path='account' element={<Account />} />
        </Route>
        {/* <Route path='/*' element={<AddUser/>}/> */}
        <Route path='*' element={<Navigate to={'/dashboard'} />} />
      </Routes>
    </StudentContext.Provider>
  </div>
}

export default App;
