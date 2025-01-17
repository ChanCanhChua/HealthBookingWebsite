import React , {memo, useState  } from "react" ; 
import { Dropdown, message, Button ,Menu} from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { callLogoutBenhNhan } from '../../../services/apiuser'
import { doLogoutActionPatient } from '../../../redux/account/accountSlice'
import LoginUser from '../../../pages/users/LoginPage/index'
import LoginDoctor from '../../../pages/doctor/logindoctor'

  const Header = () => {
  const isAuthenticated = useSelector(state => state.account.isAuthenticated);
  const acc = useSelector(state => state.account.user);
  const dispatch = useDispatch();
  const RoleId = localStorage.getItem('role');
  const navigate = useNavigate();
  const [openLoginDoctor, setOpenLoginDoctor] = useState(false);
  const [openLoginUser, setOpenLoginUser] = useState(false);

  const handleRedirectLichHen = (item) => {
    console.log("vào lịch hẹn!!!!!!!")
    navigate(`/lichhen?idKhachHang=${item}`)
  }

  const handleRedirectProfile = (item) => {
    navigate(`/profile`)
  }

  const handleDoctor = () => {
    if(RoleId === "66df1d6fdcb551b86e4f703b" || !RoleId){
      navigate('/doctor/login')
    }else{
      message.error("Bạn cần đăng nhập bằng tài khoản bác sĩ để truy cập trang này!")
    }
  }

  const handleLogout = async () => {
    try {
        const res = await callLogoutBenhNhan();
        localStorage.removeItem('access_tokenBenhNhan');
        localStorage.removeItem('role');
        if (res) {
            message.success("Đăng xuất thành công!");
            dispatch(doLogoutActionPatient())
        }
    } catch (error) {
        console.error('Có lỗi xảy ra khi đăng xuất', error);
        message.error("Đăng xuất không thành công!");
    }
  }
  const menu = (
    <Menu>
        <Menu.Item key="1" onClick={() => handleRedirectProfile(acc._id)}>
            Tài khoản của tôi
        </Menu.Item>
        <Menu.Item key="2" onClick={() => handleRedirectLichHen(acc._id)}>
            Lịch hẹn
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3" onClick={handleLogout}>
            Đăng xuất
        </Menu.Item>
    </Menu>
  );
  return (
      
    <div >
      
      {/* HEADER */}
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-5">
              <p />
            </div>
            <div className="col-md-8 col-sm-7 text-align-right">
              <span className="phone-icon"><i className="fa fa-phone" /> +84 704426360</span>
              <span className="date-icon"><i className="fa fa-calendar-plus-o" /> 7:00 SA - 5:00 CH (T2-T6)</span>
              <span className="email-icon"><i className="fa fa-user-o" />
              { isAuthenticated ? 
              (

                
                <Dropdown overlay={menu} trigger={['click']}>
                <Button
                className="button"
                style={{backgroundColor: "#a2d8fa"}}>Tài khoản</Button>
            </Dropdown>
            ): (
              <Button
              className="button"
              style={{backgroundColor: "#a2d8fa"}}
              onClick={() => {
                setOpenLoginUser(true)
              }}
              >Đăng nhập</Button>
          )}   
              </span>
            </div>
          </div>
        </div>
      </header>
      {/*Menu*/}
      <section className="navbar navbar-default navbar-static-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="icon icon-bar" />
              <span className="icon icon-bar" />
              <span className="icon icon-bar" />
            </button>
            {/*Logo*/}
            <a href="/" className="navbar-brand"><i className="fa fa-h-square" />ealth Booking</a>
          </div>
          {/*Menu Link*/}
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/" className="smoothScroll">Trang Chủ</a></li>
          
              <li><Link to='/doctor'>Bác sĩ </Link></li>
              <li><a href="/department-page" className="smoothScroll">Chuyên Khoa</a></li>
              <li>
                <a onClick={() => {
                  setOpenLoginDoctor(true)
                }}
                className="smoothScroll"
                >Dành Cho Bác Sĩ</a>
              </li> 
              
            </ul>
          </div>
        </div>
      </section>
      <LoginUser
      openLoginUser = {openLoginUser}
      setOpenLoginUser = {setOpenLoginUser}
      />
      <LoginDoctor
      openLoginDoctor = {openLoginDoctor}
      setOpenLoginDoctor = {setOpenLoginDoctor}
      />
    </div>
  )
}; 
export default memo(Header) ; 