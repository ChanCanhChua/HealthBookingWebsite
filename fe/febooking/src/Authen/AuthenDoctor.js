import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router";

const AuthenDoctor = ({ children }) => {
    const navigate = useNavigate();
    const RoleId = localStorage.getItem('role');

    useEffect(() => {
        if (!RoleId){
            console.log("cần đăng nhập trước khi vào trang quản lí")
            navigate('/doctor/login');
            return () => {};//dừng useEffect 
        }
        if (RoleId != '66df1d6fdcb551b86e4f703b') {
        console.log("Đang không có thẩm quyền vào trang")
        navigate('*');
        return () => {};//dừng useEffect 
        }
    }, [RoleId]);
    
    return children; 
}
export default AuthenDoctor;
