import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import SideBar from './components/SideBar';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import NestedRoute from './components/NestedRoute';
import Profile from './components/Profile';
import Account from './components/Account';
import React from 'react';
import StudentContextComponent from './components/ContexComponent/StudentContextComponent';
import DashboardContextComponent from './components/ContexComponent/DashboardContextComponent';



function App() {

  return <div id='wrapper'>
    <SideBar />
    <Routes>
      <Route path='/dashboard' element={
        <DashboardContextComponent>
        <StudentContextComponent>
          <Dashboard />
        </StudentContextComponent>
        </DashboardContextComponent>} />
      <Route path='/add-user' element={
        <StudentContextComponent>
          <AddUser />
        </StudentContextComponent>} />
      <Route path='/edit-user/:id' element={
        <StudentContextComponent>
          <EditUser />
        </StudentContextComponent>} />
      <Route path='/nested-route-example' element={<NestedRoute />}>
        <Route path='profile' element={<Profile />} />
        <Route path='account' element={<Account />} />
      </Route>
      {/* <Route path='/*' element={<AddUser/>}/> */}
      <Route path='*' element={<Navigate to={'/dashboard'} />} />
    </Routes>
  </div>
}

export default App;
