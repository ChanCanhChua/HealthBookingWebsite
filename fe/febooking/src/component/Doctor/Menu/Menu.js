import { HomeOutlined, HomeTwoTone, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Menu, message } from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { callLogout } from '../../../services/apidoctor';
import { FaUserDoctor } from 'react-icons/fa6';
import { doLogoutActionDoctor } from '../../../redux/account/accountSlice';
import { MdOutlineMeetingRoom } from 'react-icons/md';
import { useDispatch} from 'react-redux'


const MenuNav = (prop) => {
    const [theme, setTheme] = useState('light');
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const res = await callLogout();
            localStorage.removeItem('access_token');
            localStorage.removeItem('role');
            if (res) {
                message.success("Đăng xuất thành công!");
                dispatch(doLogoutActionDoctor())
                navigate("/");
            }
        } catch (error) {
            console.error('Có lỗi xảy ra khi đăng xuất', error);
            message.error("Đăng xuất không thành công!");
        }
    }
    
    const items = [
        {
            key: '/doctor/home-page',
            label: <Link style={{fontSize: "17px"}} to="/doctor/home-page">Trang chủ</Link>,
            icon: <HomeOutlined />,    
        },
        {
            key: '/doctor/them-lich',
            label: <Link style={{fontSize: "17px"}} to="/doctor/them-lich">Thêm lịch khám</Link>,
            icon: <FaUserDoctor />,
        },
        {
            key: '/doctor/lich-kham',
            label: <Link style={{fontSize: "17px"}} to="/doctor/lich-kham">Xem danh sách lịch hẹn</Link>,
            icon: <MdOutlineMeetingRoom size={18} /> ,
        },
        {
            key: 'acc-web',
            label: <p style={{fontWeight: "500", fontSize: "18px" }}>Tài khoản trang</p>,      
            style: { pointerEvents: "none", userSelect: "none" }     
        },
        {
            key: 'acc-ad',
            label: (
                <p style={{fontSize: "17px"}}>
                    Xin chào <span style={{color: "red", fontWeight: "500", marginLeft: "5px"}}></span>
                </p>
            ),
            icon: <UserOutlined />,
            style: { pointerEvents: "none", userSelect: "none" }          
        },
        {
            key: 'logout',
            label: <Link style={{fontSize: "17px"}} onClick={() => handleLogout()}>Đăng xuất</Link>,     
            icon: <LogoutOutlined />,    
        },
        {
            key: 'home-web',
            label: <Link style={{fontSize: "17px"}} to={"/"}>Về trang chủ chính</Link>,     
            icon: <HomeTwoTone />,    
        },
    ];

    return (
        <>
        <Menu
        theme={theme}
        // onClick={onClick}
        style={{
            width: 270,
            // height: 1000,
            height: 'calc(100vh - 64px)', // Chiều cao menu bằng chiều cao viewport trừ chiều cao tiêu đề
            borderRadius: "20px", 
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Thêm viền mờ
            backdropFilter: "blur(10px)", // Thêm hiệu ứng mờ
            position: "fixed", // Dán menu ở vị trí cố định
            top: '127px', // Đặt menu ngay dưới tiêu đề
            
        }}
        defaultOpenKeys={['sub1']}
        // selectedKeys={[location.pathname]} // Đặt selectedKeys dựa trên đường dẫn hiện tại
        mode="inline"
        items={items}
      />
        </>
    )
}
export default MenuNav

