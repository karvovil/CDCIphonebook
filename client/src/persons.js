import axios from 'axios'
//const baseUrl = 'http://localhost:3001/api/persons'
//const baseUrl = 'https://murmuring-chamber-28368.herokuapp.com/api/persons'
const baseUrl = '/api/persons'
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
  }
  const deletePerson = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.status)
  }
const put = (id, newPerson) => {
  const request = axios.put(`${baseUrl}/${id}`, newPerson)
  return request.then(response => response.data)
}
// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, deletePerson, put }