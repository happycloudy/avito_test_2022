import {Route} from "react-router-dom";
import routes from "../routes/routes";

export const useRoutes = () => routes.map(route =>
    <Route path={route.path} key={route.name}>
        {route.component}
    </Route>
)