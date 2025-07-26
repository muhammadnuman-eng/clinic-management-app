// api.js
import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  headers: {
    'X-API-KEY': process.env.REACT_APP_API_KEY || '8db7b26a4c4f479a9cba9465d9ec8d7e',
    'Content-Type': 'application/json',
  },
});

