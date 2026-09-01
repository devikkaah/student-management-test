import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import StudentForm from './components/StudentForm'
import StudentTable from './components/StudentTable'
import { getStudents } from './api/axiosService'

function App() {
  const [students, setStudents] = useState([])

    const refreshStudents = async () => {
    try {
        const response = await getStudents()

        if (Array.isArray(response.data)) {
            setStudents(response.data)
        } else {
            setStudents([])
        }

    } catch (error) {
        console.log(error)
        setStudents([])
    }
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