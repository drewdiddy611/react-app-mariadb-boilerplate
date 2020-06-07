import axios from 'axios';

export const getUsers = async () => {
    return JSON.stringify((await axios.get('/users')).data, null, 2);
};