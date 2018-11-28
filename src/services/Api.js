import axios from 'axios'

export default() => {
    return axios.create({
        baseURL: `http://crit-fail.herokuapp.com`,
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}