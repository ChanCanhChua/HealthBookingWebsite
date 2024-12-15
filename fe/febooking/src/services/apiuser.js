import axios from "../utils/axios-customize"

export const callLoginBenhNhan = (email, password) => {
    const URL_BACKEND = 'patient/login-patient'
    const data = {
        email, password
    }
    return axios.post(URL_BACKEND, data)
}

export const callRegisterBenhNhan = (email, password, firstName, lastName, address, phone, gender) => {
    const URL_BACKEND = 'patient/register-patient'
    const data = {
        email, password, firstName, lastName, address, phone, gender
    }
    return axios.post(URL_BACKEND, data)
}

export const callLogoutBenhNhan = () => {
    const URL_BACKEND = 'patient/logout-patient'    
    return axios.post(URL_BACKEND)
}

export const getInformationPatient = (id) => {
    return axios.get(`patient/infor/${id}`);
}

export const updatePatient = (_id, email, firstName, lastName, address, phoneNumber) => {
    return axios.put('/patient/update', {
        _id, email, firstName, lastName, address, phoneNumber
    })
}

export const changePassword = (_id, password, passwordchange) => {
    return axios.patch('/patient/change-pasword', {
        _id, password, passwordchange
    })
}

export const changeImage = (_id, image) => {
    return axios.patch('/patient/change-avata', {_id, image})
}
