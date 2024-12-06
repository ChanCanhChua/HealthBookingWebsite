import axios from "../utils/axios-customize"

export const callLogin = (email, password) => {
    const URL_BACKEND = '/admin/login-admin'
    const data = {
        email, password
    }
    return axios.post(URL_BACKEND, data)
}

export const callLogout = () => {
    const URL_BACKEND = '/admin/logout-admin'    
    return axios.post(URL_BACKEND)
}