import React from 'react'
export const DashboardContext=React.createContext()
function DashboardContextComponent({children}) {
    let data = { 
        earningsMonthly: "40,000", 
        earningsAnnual: "2,40,000",
        taskCompletion: "60", 
        pendingRequests: "18" 
    };

  return <DashboardContext.Provider value={data}>
    {children}
  </DashboardContext.Provider>
}

export default DashboardContextComponent