import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import StudentForm from './components/StudentForm'
import StudentTable from './components/StudentTable'
import { getStudents } from './api/axiosService'

function App() {
  const [students, setStudents] = useState([])

    const refreshStudents = async () => {
        const response = await getStudents()
        setStudents(response.data)
    }

    useEffect(() => {
        refreshStudents()
    }, [])

    return (
        <>
            <Header />
            <div className="container mt-4">
                <StudentForm refreshStudents={refreshStudents}/>
                <StudentTable students={students} refreshStudents={refreshStudents}/>
            </div>
        </>
    )
}

export default App