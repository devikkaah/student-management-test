import React, { useState } from 'react'
import { addStudent } from '../api/axiosService'

function StudentForm({ refreshStudents }) {

    const [student, setStudent] = useState({
        name: '',
        age: '',
        course: '',
        email: ''
    })

    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await addStudent({
            ...student,
            age: Number(student.age)
        })

        setStudent({
            name: '',
            age: '',
            course: '',
            email: ''
        })

        refreshStudents()
    }

    return (
        <div className="card p-4">
            <h4 className="mb-3">Add Student</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={student.name}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input
                        type="number"
                        name="age"
                        value={student.age}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Course</label>
                    <input
                        type="text"
                        name="course"
                        value={student.course}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={student.email}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <button className="btn btn-primary">
                    Add Student
                </button>
            </form>
        </div>
    )
}

export default StudentForm