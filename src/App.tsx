import {Switch, useLocation} from "react-router-dom";
import {useRoutes} from "./hooks/useRoutes";
import {Layout} from "antd";
import {AnimatePresence} from 'framer-motion'
import 'antd/dist/antd.css'
import './styles.css'

function App() {
    const routes = useRoutes()
    const location = useLocation()

    return (
        <Layout className="App" id='App'>
            <AnimatePresence>
                <Switch location={location} key={location.pathname}>{routes}</Switch>
            </AnimatePresence>
        </Layout>
    )
}

export default App
