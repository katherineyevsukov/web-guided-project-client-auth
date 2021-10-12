import axios from 'axios';

const axiosWithAuth = () => {

    return axios.create({
        headers: {
            authorization: token
        }
    });
}

export default axiosWithAuth;