// 3. Combine all reducers, next to send it to App
import { combineReducers } from "redux";
// 5. import reducer
import usersReducer from "./usersReducer";
import publicationsReducer from "./publicationsReducer";


export default combineReducers({
    usersReducer,
    publicationsReducer,
});

