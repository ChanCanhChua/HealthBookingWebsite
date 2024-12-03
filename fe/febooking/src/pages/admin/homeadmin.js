import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import AdminLayout from '../../component/Admin/AdminLayout';

const HomeAdmin = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('user')
        console.log("user: ", user);
    })
    
    useEffect(() => {
        const token = localStorage.getItem("access_token");
        if (!token) {
            // Nếu không có token, điều hướng về trang đăng nhập
            navigate("/admin/login"); 
        }
    }, [navigate]);

    return (
        <AdminLayout pageTitle="Trang chủ">
            {/* Nội dung của BodyAdmin cho HomeAdmin */}
            <h1>Trang quản trị chính</h1>
            <p>Đây là nội dung của trang chủ.</p>
        </AdminLayout>
    );
};
export default HomeAdmin;