import axios from 'axios';

// ----------------------------------------------------------------------

const axiosClient = axios.create({ baseURL: process.env.HOST_API_KEY || '' });

axiosClient.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosClient;
