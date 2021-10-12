import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import Logout from './components/Logout';
import GasPrices from './components/GasPrices';

import PrivateRoute from './components/PrivateRoute';

const UserSection = ()=> {
  return (<p>Welcome {localStorage.getItem("username")}</p>);
}

function App() {
  // const [state, setState] = useState({
  //   isLoggedIn:false,
  //   role:"",
  //   username:""
  // });
  let isLoggedIn = localStorage.getItem("token");

  return (
    <Router>
      <div className="App">

        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          {
            (isLoggedIn && localStorage.getItem("role") === "admin") && <li><Link to="/admin">Admin</Link></li>
          }
          
          <li>
            {/* {isLoggedIn ? <Link to="/protected">Protected Page</Link> : <div></div>} */}
            { isLoggedIn && <Link to="/protected">Protected Page</Link> }
          </li>
        </ul>
        { isLoggedIn && <UserSection/>}

        <Switch>
          <Route exact path="/protected" component={GasPrices} />
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />    
        </Switch>
      </div>
    </Router>
  );
}

export default App;
