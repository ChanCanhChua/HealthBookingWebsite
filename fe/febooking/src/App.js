import{Routes , Route} from "react-router";
import HomePage from "./pages/users/homePage";
import LoginPage from "./pages/users/LoginPage";
import AdminLoginPage from "./pages/admin/login";
import AdminHomePage from "./pages/admin/homeadmin";
import QuanLyDoctor from "./component/Admin/Doctor/QuanLyDoctor";
import KeHoachKhamBenh from "./component/Admin/KeHoachKhamBenh/KeHoachKhamBenh"
import QuanLyChuyenKhoa from "./component/Admin/ChuyenKhoa/QuanLyChuyenKhoa";
import QuanLyChucVu from "./component/Admin/Chucvu/QuanLyChucVu";
import QuanLyPhongKham from "./component/Admin/PhongKham/QuanLyPhongKham";

const App = () => {

    const routeConfig = [
        { path: "/", element: <HomePage/> },
        { path: "/login", element: <LoginPage/> },

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