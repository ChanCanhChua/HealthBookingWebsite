import axios from "../utils/axios-customize"

export const callLoginBenhNhan = (email, password) => {
    const URL_BACKEND = 'patient/login-patient'
    const data = {
        email, password
    }
    return axios.post(URL_BACKEND, data)
}

// export const callRegister = (email, password, firstName, lastName, address, phone, gender) => {
//     const URL_BACKEND = '/api/users/register-admin'
//     const data = {
//         email, password, firstName, lastName, address, phone, gender
//     }
//     return axios.post(URL_BACKEND, data)
// }


export const callRegisterBenhNhan = (email, password, firstName, lastName, address, phone, gender) => {
    const URL_BACKEND = 'patient/register-patient'
    const data = {
        email, password, firstName, lastName, address, phone, gender
    }
    return axios.post(URL_BACKEND, data)
}

// export const callLogout = () => {
//     const URL_BACKEND = '/api/users/logout-admin'    
//     return axios.post(URL_BACKEND)
// }

export const callLogoutBenhNhan = () => {
    const URL_BACKEND = 'patient/logout-patient'    
    return axios.post(URL_BACKEND)
}