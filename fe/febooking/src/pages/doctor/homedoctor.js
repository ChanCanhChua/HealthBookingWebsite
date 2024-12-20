import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import DoctorLayout from '../../component/Doctor/DoctorLayout';

const HomeAdmin = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('user')
        console.log("user: ", user);
    })
    
    useEffect(() => {
        const token = localStorage.getItem("access_tokenDoctor");
        if (!token) {
            // Nếu không có token, điều hướng về trang đăng nhập
            navigate("/doctor/login"); 
        }
    }, [navigate]);

    return (
        <DoctorLayout pageTitle="Trang chủ">
            {/* Nội dung của BodyAdmin cho HomeAdmin */}
            <h1>Trang quản trị chính</h1>
            <p>Đây là nội dung của trang chủ.</p>
        </DoctorLayout>
    );
};
export default HomeAdmin;