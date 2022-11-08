import {Switch} from "react-router-dom";
import {useRoutes} from "./hooks/useRoutes";
import {Layout} from "antd";
import Header from "./components/smart/Header/Header";
import 'antd/dist/antd.css'

function App() {
    const routes = useRoutes()

    return (
        <Layout className="App">
            <Header/>
            <Switch>{routes}</Switch>
        </Layout>
    )
}

export default App
