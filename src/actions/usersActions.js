import axios from "axios";
import { GET_ALL_USERS, LOADING, ERROR } from '../types/usersTypes';

export const getAllUsers = () => async (dispatch) => {

    dispatch({
        type: LOADING,
        payload: true
    })

    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')

        dispatch({
            type: GET_ALL_USERS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.message
        })
    }

};
