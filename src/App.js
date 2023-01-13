import './App.css';
import Dashboard from './components/Dashboard';
import SideBar from './components/SideBar';

function App() {
  let data={
    earningsMonthly:"40,000",
    earningsAnnual:"2,40,000",
    taskCompletion:"60",
    pendingRequests:"18"
  }
  return <div id='wrapper'>
         <SideBar/>  
         <Dashboard data={data}/>  
       </div>
}

export default App;
