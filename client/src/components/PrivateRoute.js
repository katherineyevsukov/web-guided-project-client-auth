import React from 'react';
import { Route, Redirect} from 'react-router-dom';

//Private Route
//1. Have the same functionality as Route.
//2. It renders the same component if we are logged in with the same props.
//3. Redirect to login if not logged in.

const PrivateRoute = ({component:Component, ...rest}) => {
    return <Route {...rest} render={()=> {
        if (localStorage.getItem("token")) {
            return <Component/>
        } else {
            return <p>Not logged in</p>
        }
        
    }}/>;
}

export default PrivateRoute;