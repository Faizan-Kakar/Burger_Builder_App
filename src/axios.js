import axios from "axios";

const instance = axios.create({
    baseURL : 'https://react-burger-app-b3f21-default-rtdb.firebaseio.com/'
});

export default instance;