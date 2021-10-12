import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import Logout from './components/Logout';
import GasPrices from './components/GasPrices';

function App() {
  const [state, setState] = useState({
    isLoggedIn:false,
    role:"",
    username:""
  });
  // let isLoggedIn = localStorage.getItem("token");

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
          <li>
            {/* {isLoggedIn ? <Link to="/protected">Protected Page</Link> : <div></div>} */}
            { state.isLoggedIn && <Link to="/protected">Protected Page</Link> }
          </li>
        </ul>

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
