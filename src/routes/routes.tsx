import {IRoute} from "./IRoute";
import Home from "../pages/Home";

const routes: IRoute[] = [
    {
        name: 'Главная',
        path: '/',
        component: Home
    }
]

export default routes