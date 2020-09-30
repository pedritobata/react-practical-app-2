import axios from 'axios';

const instance = axios.create({
    // cloud function
    baseURL: "http://localhost:5001/like-app-94bda/us-central1/api"
});

export default instance;