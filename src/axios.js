import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://coffeetime-c20a4-default-rtdb.firebaseio.com/'
});

export default instance;