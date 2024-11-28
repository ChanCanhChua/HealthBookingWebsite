import{Routes , Route} from "react-router";
import HomePage from "./pages/users/homePage";
import { ROUTERS } from "./utils/router";
import LoginPage from "./pages/users/LoginPage";
import MasterLayout from "./pages/users/theme/masterLayout"
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
        
    ]

    return (
        <MasterLayout>

        <Routes>
        {
            userRouters.map((item, key) => (
                <Route key = {key} path ={item.path} element={item.component} />
            ))
        }

        </Routes>
        </MasterLayout>
    )
}


const RouterCustom = () => {
    return renderUserRouter();
};
export default RouterCustom ; 
