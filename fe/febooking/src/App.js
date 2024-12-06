import{Routes , Route} from "react-router";
import HomePage from "./pages/users/homePage";
import LoginPage from "./pages/users/LoginPage";
import RegisterPage from "./pages/users/RegisterPage";
import DatLichPage from "./pages/users/DatLich";
import ViewBacSi from "./pages/users/ViewBacSi";
import DoctorPage from "./pages/users/DoctorPage";
import AdminLoginPage from "./pages/admin/login";
import AdminHomePage from "./pages/admin/homeadmin";
import QuanLyDoctor from "./component/Admin/Doctor/QuanLyDoctor";
import KeHoachKhamBenh from "./component/Admin/KeHoachKhamBenh/KeHoachKhamBenh"
import QuanLyChuyenKhoa from "./component/Admin/ChuyenKhoa/QuanLyChuyenKhoa";
import QuanLyChucVu from "./component/Admin/Chucvu/QuanLyChucVu";
import QuanLyPhongKham from "./component/Admin/PhongKham/QuanLyPhongKham";
import ChuyenKhoa from "./pages/users/ChuyenKhoa/ChuyenKhoa";
import ViewChuyenKhoa from "./pages/users/ChuyenKhoa/ViewChuyenKhoa";



const App = () => {

    const routeConfig = [
        { path: "/", element: <HomePage/> },
        { path: "/login", element: <LoginPage/> },
        { path: "/doctor", element: <ViewBacSi/> },
        { path: "/register", element: <RegisterPage/> },
        { path: "/order", element: <DatLichPage/> },
        { path : "/doctorpage", element: <DoctorPage/> },
        { path: "/department-page", element: <ChuyenKhoa/> },
        { path: "/view-department", element:  <ViewChuyenKhoa/>},
        

        { path: "/admin/login", element: <AdminLoginPage/> },
        { path: "/admin/home-page", element: <AdminHomePage/> },
        { path: "/admin/doctor-manager", element: <QuanLyDoctor/> },
        { path: "/admin/ke-hoach", element: <KeHoachKhamBenh/> },
        { path: "/admin/chuyen-khoa", element: <QuanLyChuyenKhoa/>},
        { path: "/admin/chuc-vu", element: <QuanLyChucVu/>},
        { path: "/admin/phong-kham", element: <QuanLyPhongKham/>},
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