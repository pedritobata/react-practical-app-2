import axios from 'axios';

const instance = axios.create({
    // cloud function
    baseURL: ""
});

export default instance;