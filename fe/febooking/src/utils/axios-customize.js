import axios from "axios";
import React from 'react';

    const baseUrl = process.env.REACT_APP_VITE_BACKEND_URL || "http://localhost:3001";
console.log("baseUrl:", baseUrl);

const instance = axios.create({
    baseURL: baseUrl,
    withCredentials: true,  // auto lưu cookie
});

export const handleLoginSuccess = (token) => {
    // Lưu token vào localStorage
    localStorage.setItem('access_tokenBenhNhan', token);
    // Cập nhật Authorization header cho axios instance
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    // Tùy chọn: Refresh lại trang
    window.location.reload();
};

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response && response.data ? response.data : response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return error?.response?.data ?? Promise.reject(error);
});

export default instance;