import axios from 'C:/Users/kuuha/AppData/Local/Yarn/Data/global/node_modules/axios';

export const getPost = id =>
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
export const getUsers = id =>
  axios.get(`https://jsonplaceholder.typicode.com/users`);
