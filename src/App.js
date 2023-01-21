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
import React, { useState, useReducer } from 'react';
import StudentContextComponent from './components/ContexComponent/StudentContextComponent';
import DashboardContextComponent from './components/ContexComponent/DashboardContextComponent';
import UseRef from './components/Hooks/UseRef';
import UseMemo from './components/Hooks/UseMemo';
import UseReducer from './components/Hooks/UseReducer';
import Todo from './components/Hooks/Todo';
import DashboardApi from './components/CRUDAPI/DashboardApi';
import AddUserAPi from './components/CRUDAPI/AddUserAPi';
import { TodoReducer, initialValues } from './components/ReducerComponent/TodoReducer';
export const ReducerContext = React.createContext()


function App() {
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

  let [state, dispatch] = useReducer(TodoReducer, initialValues)


  return <div id='wrapper'>
    <ReducerContext.Provider value={{ state, dispatch }}>
      <SideBar />
      <Routes>
        <Route path='/dashboard' element={
          <DashboardContextComponent>
            <StudentContextComponent students={students} setStudents={setStudents}>
              <Dashboard />
            </StudentContextComponent>
          </DashboardContextComponent>} />
        <Route path='/add-user' element={
          <StudentContextComponent students={students} setStudents={setStudents}>
            <AddUser />
          </StudentContextComponent>} />
        <Route path='/edit-user/:id' element={
          <StudentContextComponent students={students} setStudents={setStudents}>
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
          <Route path='todo' element={<Todo />} />
        </Route>

        {/* {API Related Routes} */}

        <Route path='/all-users' element={<DashboardApi />} />
        <Route path='/add-users' element={<AddUserAPi />} />
        <Route path='/add-users/:id' element={<AddUserAPi />} />
        <Route path='*' element={<Navigate to={'/dashboard'} />} />
      </Routes>
    </ReducerContext.Provider>
  </div>
}

export default App;
