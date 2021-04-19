import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CheckOut from './components/CheckOut/CheckOut';
import Orders from './components/CheckOut/Orders/Orders';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Manage from './components/Admin/Manage';
import Edit from './components/Admin/Edit';
import AddNew from './components/Admin/AddNew';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/checkout/:id">
            <CheckOut />
          </PrivateRoute>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/admin">
            <Admin/>
          </PrivateRoute>
          <Route path="/manage">
            <Manage/>
          </Route>
          <Route path="/edit">
            <Edit/>
          </Route>
          <Route path="/addNew">
            <AddNew/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
