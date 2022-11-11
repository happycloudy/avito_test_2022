import {IRoute} from "../interfaces/IRoute";
import Home from "../pages/Home";
import News from "../pages/News";
import {Redirect} from "react-router-dom";

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
    {
        name: '*',
        path: '*',
        component: <Redirect to={'/'}/>
    },
]

export default routes