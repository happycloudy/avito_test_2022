import {IRoute} from "./IRoute";
import Home from "../pages/Home";
import News from "../pages/News";

const routes: IRoute[] = [
    {
        name: 'Новости',
        path: '/news/:id',
        component: <News/>
    },
    {
        name: 'Главная',
        path: '/',
        component: <Home/>
    },
]

export default routes