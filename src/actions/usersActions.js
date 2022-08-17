import axios from "axios";
import { GET_ALL_USERS } from '../types/usersTypes';

export const getAllUsers = () => async (dispatch) => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')

    dispatch({
        type: GET_ALL_USERS,
        payload: data,
    })
};