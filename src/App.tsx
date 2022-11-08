import {Switch} from "react-router-dom";
import {useRoutes} from "./hooks/useRoutes";
import {Layout} from "antd";

function App() {
    const routes = useRoutes()
    return (
        <Layout className="App">
            <Switch>{routes}</Switch>
        </Layout>
    )
}

export default App
