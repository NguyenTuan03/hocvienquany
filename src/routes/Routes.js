
import Tintuc from '../pages/tintuc/Tintuc';
import Tuyensinh from '../pages/tuyensinh/Tuyensinh';
import routesConfig from './../config/Routes';
import Home from './../pages/home/Home';
const publicRoutes = [
    {
        path: routesConfig.home,
        component: Home
    },
    {
        path: routesConfig.tuyensinh,
        component: Tuyensinh
    },
    {
        path: routesConfig.tintuc,
        component: Tintuc
    }
]
export default publicRoutes;