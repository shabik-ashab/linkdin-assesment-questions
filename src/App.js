import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./Components/Home";
import ReactQ from "./Components/Pages/ReactQ";

function App() {
  return (
    <>
     <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route  exact path="/home" >
          <Home />
        </Route>
        <Route  exact path="/react">
          <ReactQ />
        </Route>
        {/* <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <PrivateRoute exact path="/choose"> 
          <Choose />
        </PrivateRoute>
       
        <PrivateRoute  path="/dash">
          <ResponsiveDrawer />
        </PrivateRoute> */}
      </Switch>
    </Router>
    </>
  );
}

export default App;
