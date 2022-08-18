import axios from "axios";
import { GET_POSTS, ERROR } from '../types/usersTypes';

export const getPublications = () => async (dispatch) => {
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')

        dispatch({
            type: GET_POSTS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.message
        })
    }

};