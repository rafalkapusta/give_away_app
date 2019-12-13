import {LOGIN, LOGOUT} from "../actionTypes/actionTypes";

function login_logoutReducer(state = false, action) {
    switch(action.type) {
        case LOGIN:
            return state = true;
        case LOGOUT:
            return state = false;
        default: return state
    }
}

export default login_logoutReducer;