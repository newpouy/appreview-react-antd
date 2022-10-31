import axios from 'axios';

const myHttp = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER_URL,
});

export default myHttp;
