import React, { useEffect } from "react";
import axios from 'axios';

const Logout = () => {
    const token = localStorage.getItem("token");

    useEffect(()=> {
        axios.post('http://localhost:5000/api/logout', {
            headers: {
                authorization: token
            }
        }).then(resp=>{
            console.log(resp);
        }).catch(err=> {
            console.log(err);
        })
    }, []);

    return(<div></div>);
}

export default Logout;