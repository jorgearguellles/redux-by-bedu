import { GET_POSTS } from "../types/usersTypes";

const INITIAL_STATE = {
    publications: [],
    loading: false,
    error: '',
};

export default ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case GET_POSTS:
            return { ...state, publications: action.payload, loading: false }
        default: return state;
    }
};