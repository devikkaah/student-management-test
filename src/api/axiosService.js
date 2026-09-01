import axios from 'axios'

const BASE_URL = 'https://student-management-api-2p4p.onrender.com/students'

export const getStudents = () => {
    return axios.get(BASE_URL)
}

export const addStudent = (student) => {
    return axios.post(BASE_URL, student)
}

export const deleteStudent = (id) => {
    return axios.delete(`${BASE_URL}/${id}`)
}