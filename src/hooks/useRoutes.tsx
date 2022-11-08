import {Link} from "react-router-dom";
import routes from "../routes/routes";

export const useRoutes = () => routes.map(route =>
    <Link to={route.path} component={route.component} key={route.name}/>
)