

import axios from 'axios';

const api = axios.create({
    baseURL : "hfttp://localhost:5000"
})

export default api;