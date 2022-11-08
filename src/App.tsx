import {Switch} from "react-router-dom";
import {useRoutes} from "./hooks/useRoutes";

function App() {
  const routes = useRoutes()
  return (
    <div className="App">
      <Switch>{routes}</Switch>
    </div>
  )
}

export default App
