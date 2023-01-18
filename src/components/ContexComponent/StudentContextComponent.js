import React,{useState} from 'react'
export const StudentContext = React.createContext()

function StudentContextComponent({ children }) {
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
    return <>
        <StudentContext.Provider value={{ students, setStudents }}>
            {children}
        </StudentContext.Provider>
    </>
}

export default StudentContextComponent