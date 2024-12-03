import{Routes , Route} from "react-router";
import HomePage from "./pages/users/homePage";
import { ROUTERS } from "./utils/router";
import LoginPage from "./pages/users/LoginPage";
import DatLich from "./pages/users/DatLich"
import ViewBacSi from "./pages/users/ViewBacSi";
const renderUserRouter = () => {
    const userRouters = [
        {
            path : ROUTERS.USER.HOME , 
            component : <HomePage/>
        },
        {
            path : ROUTERS.USER.LOGIN , 
            component : <LoginPage/>
        },
        {
            path : ROUTERS.USER.ORDER , 
            component : <DatLich/>
        },
        {
            path : ROUTERS.USER.ViewBacSi , 
            component : <ViewBacSi/>
        },

        
    ]

    return (
        
<>
        <Routes>
        {
            userRouters.map((item, key) => (
                <Route key = {key} path ={item.path} element={item.component} />
            ))
        }

        </Routes>
      
</>
    )
}


const RouterCustom = () => {
    return renderUserRouter();
};
export default RouterCustom ; 
