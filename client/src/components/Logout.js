import React, { useEffect } from "react";
import axios from 'axios';

const Logout = () => {
    useEffect(()=> {
        axios.post('http://localhost:5000/api/logout')
    }, []);

    return(<div></div>);
}

export default Logout;