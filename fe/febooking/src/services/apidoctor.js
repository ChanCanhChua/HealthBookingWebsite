import axios from "../utils/axios-customize"


// doctor
export const showAllDoctor = (query) => {
    const URL_BACKEND = `/doctor/show-all-doctor?${query}`    
    return axios.get(URL_BACKEND)
}
export const callCreateDoctor = (email, password, firstName, lastName, address, phoneNumber, chucVuId, gender, image, chuyenKhoaId, phongKhamId, mota, giaKhamVN, giaKhamNuocNgoai) => {
    return axios.post('/doctor/create-doctor', {
        email, password, firstName, lastName, address, phoneNumber, chucVuId, gender, image, chuyenKhoaId, phongKhamId, mota, giaKhamVN, giaKhamNuocNgoai
    })
}
export const updateDoctor = (_id, email, firstName, lastName, address, phoneNumber, chucVuId, gender, image, chuyenKhoaId, phongKhamId,roleId, mota, giaKhamVN, giaKhamNuocNgoai) => {
    return axios.put('/doctor/update-doctor', {
        _id, email, firstName, lastName, address, phoneNumber, chucVuId, gender, image, chuyenKhoaId, phongKhamId,roleId, mota, giaKhamVN, giaKhamNuocNgoai
    })
}
export const deleteDoctor = (_id) => {
    return axios.delete(`/doctor/delete-doctor/${_id}`)
}
export const showDoctorById = (id) => {
    const URL_BACKEND = `doctor/view-doctor?id=${id}`    
    return axios.get(URL_BACKEND)
}