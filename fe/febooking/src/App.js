import{Routes , Route} from "react-router";
// bệnh nhân
import HomePage from "./pages/users/homePage";
import LoginPage from "./pages/users/LoginPage";
import RegisterPage from "./pages/users/RegisterPage";
import DatLichPage from "./pages/users/DatLich";
import ViewBacSi from "./pages/users/ViewBacSi";
import DoctorPage from "./pages/users/DoctorPage";
import ChuyenKhoa from "./pages/users/ChuyenKhoa/ChuyenKhoa";
import ViewChuyenKhoa from "./pages/users/ChuyenKhoa/ViewChuyenKhoa";
import LichHen from "./pages/users/LichHen";
import Profile from "./pages/users/Profile/Profile";
// admin
import AdminLoginPage from "./pages/admin/login";
import AdminHomePage from "./pages/admin/homeadmin";
import QuanLyDoctor from "./component/Admin/Doctor/QuanLyDoctor";
import KeHoachKhamBenh from "./component/Admin/KeHoachKhamBenh/KeHoachKhamBenh"
import QuanLyChuyenKhoa from "./component/Admin/ChuyenKhoa/QuanLyChuyenKhoa";
import QuanLyChucVu from "./component/Admin/Chucvu/QuanLyChucVu";
import QuanLyPhongKham from "./component/Admin/PhongKham/QuanLyPhongKham";
import QuanLyOrder from "./component/Admin/Order/Quanlyorder";
// bác sĩ
import LichKham from "./component/Doctor/LichHen/Lichkham";
import Dangki from "./component/Doctor/Dangkilichkham/Dangki";
import HomeDoctor from "./pages/doctor/homedoctor";
import LoginDoctor from "./pages/doctor/logindoctor";
// authen
import Page404 from "./pages/404page";
import AuthenAdmin from "./Authen/AuthenAdmin";
import AuthenDoctor from "./Authen/AuthenDoctor";


const App = () => {

    const routeConfig = [
        // bệnh nhân
        { path: "/", element: <HomePage/> },
        // { path: "/login", element: <LoginPage/> },
        { path: "/doctor", element: <ViewBacSi/> },
        { path: "/register", element: <RegisterPage/> },
        { path: "/order", element: <DatLichPage/> },
        { path : "/doctorpage", element: <DoctorPage/> },
        { path: "/department-page", element: <ChuyenKhoa/> },
        { path: "/view-department", element:  <ViewChuyenKhoa/>},
        { path: "/lichhen", element:  <LichHen/>},
        { path: "/profile", element: <Profile/> },
        
        // bác sĩ
        // { path: "/doctor/login", element: <LoginDoctor/> },
        { path: "/doctor/home-page", element: <AuthenDoctor><HomeDoctor/></AuthenDoctor>},
        { path: "/doctor/lich-kham", element: <AuthenDoctor><LichKham/></AuthenDoctor>},
        { path: "/doctor/them-lich", element:  <AuthenDoctor><Dangki/></AuthenDoctor>},

        // admin
        { path: "/admin/login", element: <AdminLoginPage/> },
        { path: "/admin/home-page", element: <AuthenAdmin><AdminHomePage/></AuthenAdmin>},
        { path: "/admin/doctor-manager", element: <AuthenAdmin><QuanLyDoctor/></AuthenAdmin>},
        { path: "/admin/ke-hoach", element: <AuthenAdmin><KeHoachKhamBenh/></AuthenAdmin>},
        { path: "/admin/chuyen-khoa", element: <AuthenAdmin><QuanLyChuyenKhoa/></AuthenAdmin>},
        { path: "/admin/chuc-vu", element: <AuthenAdmin><QuanLyChucVu/></AuthenAdmin>},
        { path: "/admin/phong-kham", element: <AuthenAdmin><QuanLyPhongKham/></AuthenAdmin>},
        { path: "/admin/order", element: <AuthenAdmin><QuanLyOrder/></AuthenAdmin>},

        // 404
        { path: "*", element: <Page404/>},
    ]

    return (
        <>
          <Routes>
            {routeConfig.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </>
      )
}

export default App;