import{Routes , Route} from "react-router";
// import MasterLayout from "./pages/users/theme/masterLayout"
import HomePage from "./pages/users/homePage";
import LoginPage from "./pages/users/LoginPage";
import RegisterPage from "./pages/users/RegisterPage";
import DatLich from "./pages/users/DatLich";
import ViewBacSi from "./pages/users/ViewBacSi";

import AdminLoginPage from "./pages/admin/login";
import AdminHomePage from "./pages/admin/homeadmin";
import QuanLyDoctor from "./component/Admin/Doctor/QuanLyDoctor";



const App = () => {

    const routeConfig = [
        { path: "/", element: <HomePage/> },
        { path: "/login", element: <LoginPage/> },
        { path: "/doctor", element: <ViewBacSi/> },
        { path: "/register", element: <RegisterPage/> },
        { path: "/order", element: <DatLich/> },
        

        { path: "/admin/login", element: <AdminLoginPage/> },
        { path: "/admin/home-page", element: <AdminHomePage/> },
        { path : "/admin/home-page/doctor-manager", element: <QuanLyDoctor/> },
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