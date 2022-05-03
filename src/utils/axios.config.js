import axios from "axios";
const access_token = localStorage.getItem('access_token');

const axiosInstance = axios.create({
    baseURL: "https://digischool01.herokuapp.com/",
    timeout: 6000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ access_token
    }
});

axiosInstance.defaults.withCredentials = true;
axiosInstance.defaults.xsrfCookieName = 'csrftoken'
axiosInstance.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default axiosInstance;