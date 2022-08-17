import axios from "axios";

export const getAllUsers = () => async (dispatch) => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')

    dispatch({
        type: 'get-all-users',
        payload: data,
    })
};