import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Dashboard from './components/CRUD/Dashboard';
import SideBar from './components/SideBar';
import AddUser from './components/CRUD/AddUser';
import EditUser from './components/CRUD/EditUser';
import NestedRoute from './components/NestedExample/NestedRoute';
import Profile from './components/NestedExample/Profile';
import Account from './components/NestedExample/Account';
import Hooks from './components/Hooks/Hooks'
import React from 'react';
import StudentContextComponent from './components/ContexComponent/StudentContextComponent';
import DashboardContextComponent from './components/ContexComponent/DashboardContextComponent';
import UseRef from './components/Hooks/UseRef';
import UseMemo from './components/Hooks/UseMemo';
import UseReducer from './components/Hooks/UseReducer';

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
      <Route path='/hooks' element={<Hooks />}>
        <Route path='useref' element={<UseRef />} />
        <Route path='usememo' element={<UseMemo />} />
        <Route path='usereducer' element={<UseReducer />} />
      </Route>
      <Route path='*' element={<Navigate to={'/dashboard'} />} />
    </Routes>
  </div>
}

export default App;
