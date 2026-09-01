import React from 'react'
import { deleteStudent } from '../api/axiosService'

function StudentTable({ students, refreshStudents }) {

    const handleDelete = async (id) => {
        await deleteStudent(id)
        refreshStudents()
    }

    return (
        <div className="mt-4">
            <h4 className="mb-3">Student List</h4>
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Course</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(students) && students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.course}</td>
                                <td>{student.email}</td>
                                <td>
                                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(student.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StudentTable