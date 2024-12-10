import axios from "../utils/axios-customize"

// Bác sĩ

export const fetchAllDoctor = (query) => {
    const URL_BACKEND = `/doctor/show-all-doctor?${query}`    
    return axios.get(URL_BACKEND)
}

export const deleteDoctor = (_id) => {
    return axios.delete(`/doctor/delete-doctor/${_id}`)
}

export const updateDoctor = (_id, email, firstName, lastName, address, phoneNumber, chucVuId, gender, image, chuyenKhoaId, phongKhamId,roleId, mota, giaKhamVN, giaKhamNuocNgoai) => {
    return axios.put('/doctor/update-doctor', {
        _id, email, firstName, lastName, address, phoneNumber, chucVuId, gender, image, chuyenKhoaId, phongKhamId,roleId, mota, giaKhamVN, giaKhamNuocNgoai
    })
}

export const callCreateDoctor = (email, password, firstName, lastName, address, phoneNumber, chucVuId, gender, image, chuyenKhoaId, phongKhamId, mota, giaKhamVN, giaKhamNuocNgoai) => {
    return axios.post('/doctor/create-doctor', {
        email, password, firstName, lastName, address, phoneNumber, chucVuId, gender, image, chuyenKhoaId, phongKhamId, mota, giaKhamVN, giaKhamNuocNgoai
    })
}

export const fetchDoctorById = (id) => {
    const URL_BACKEND = `/doctor/show-doctor-byId?id=${id}`    
    return axios.get(URL_BACKEND)
}

export const fetchDoctorByChuyenKhoa = (idChuyenKhoa) => {
    const URL_BACKEND = `/doctor/show-doctor-by-department?idChuyenKhoa=${idChuyenKhoa}`    
    return axios.get(URL_BACKEND)
}

// Giờ khám

export const addTimeKhamBenh = (date, time, _id) => {
    return axios.post('/doctor/add-shift', {
        date, time, _id
    })
}

export const fetchAllTime = () => {
    return axios.get('/shift/show-all-shift')
}

export const getTimeSlotsByDoctorAndDate = (query) => {
    const URL_BACKEND = `/shift/get-time-slot?${query}`    
    return axios.get(URL_BACKEND)
}

// Chuyên khoa

export const fetchAllChuyenKhoa = (query) => {
    const URL_BACKEND = `/department/show-all-department?${query}`    
    return axios.get(URL_BACKEND)
}

export const deleteChuyenKhoa = (_id) => {
    return axios.delete(`/department/delete-department/${_id}`)
}

export const fetchChuyenKhoaByID = (query) => {
    const URL_BACKEND = `/department/show-one-department?id=${query}`    
    return axios.get(URL_BACKEND)
}

export const createChuyenKhoa = (name, description, image) => {
    return axios.post('department/create-department', {
        name, description, image
    })
}

export const updateChuyenKhoa = (_id, name, description , image) => {
    return axios.put('department/update-department', {
        _id, name, description , image
    })
}

// up ảnh

export const callUploadDoctorImg = (file) => {
    const bodyFormData = new FormData();
    bodyFormData.append('file', file);
    return axios({
        method: 'post',
        url: '/doctor/upload',
        data: bodyFormData,
        headers: {
            "Content-Type": "multipart/form-data",
            "upload-type": "book"
        },
    });
}

// Chức vụ

export const fetchAllChucVu = (query) => {
    const URL_BACKEND = `/position/show-all-position?${query}`    
    return axios.get(URL_BACKEND)
}

export const createChucVu = (name, description) => {
    return axios.post('/position/create-position', {
        name, description
    })
}

export const deleteChucVu = (_id) => {
    return axios.delete(`position/delete-position/${_id}`)
}

export const updateChucVu = (_id, name, description) => {
    return axios.put('/position/update-position', {
        _id, name, description
    })
}

// Phòng khám

export const fetchAllPhongKham = (query) => {
    const URL_BACKEND = `/clinic/show-all-clinic?${query}`    
    return axios.get(URL_BACKEND)
}

export const deletePhongKham = (_id) => {
    return axios.delete(`/clinic/delete-clinic/${_id}`)
}

export const createPhongKham = (name, address, description , image) => {
    return axios.post('/clinic/create-clinic', {
        name, address, description , image
    })
}

export const updatePhongKham = (_id, name, address, description , image) => {
    return axios.put('/clinic/update-clinic', {
        _id, name, address, description , image
    })
}
// dat lich kham
export const datLichKhamBenh = (
    _idDoctor, _idTaiKhoan, patientName, email,
    gender, phone, dateBenhNhan, address, lidokham, 
    hinhThucTT, tenGioKham, ngayKhamBenh, giaKham
) => { 
    const data = {_idDoctor, _idTaiKhoan, patientName, email,
        gender, phone, dateBenhNhan, address, lidokham, 
        hinhThucTT, tenGioKham, ngayKhamBenh, giaKham
    }
    return axios.post('/booking/dat-lich-kham', data) 
}

export const fetchDoctorByNgayGio = (query) => {
    const URL_BACKEND = `/doctor/show-doctor-with-listbooking${query}`    
    return axios.get(URL_BACKEND)
}
export const fetchLichKham = (idKhachHang) => {
    const URL_BACKEND = `booking/show-booking?idKhachHang=${idKhachHang}`    
    return axios.get(URL_BACKEND)
}

// lịch hẹn
export const fetchOrderById = (id) => {
    return axios.get(`/order/show-by-iddoctor?id=${id}`);
}
