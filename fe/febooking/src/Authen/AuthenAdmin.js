import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router";

const AuthenAdmin = ({ children }) => {
  const navigate = useNavigate();

  const isAuthenticated = useSelector(state => state.account.isAuthenticated)
  const RoleId = localStorage.getItem('role');
  
  // Kiểm tra đã đăng nhập bằng role admin chưa
  // ** Dùng mảng allowedRoles để phát triển thêm role master admin **
  useEffect(() => {
    if(!RoleId){
      console.log("cần đăng nhập trước khi vào trang quản lí")
      navigate('/admin/login');
      return () => {};
    }
    if(RoleId != '66df1d48dcb551b86e4f7039'){
      console.log("sai role");
      navigate('*');
      return () => {};
    }
  }, [RoleId]);
  
  return children; // Hiển thị thành phần con nếu được phép
};

export default AuthenAdmin;