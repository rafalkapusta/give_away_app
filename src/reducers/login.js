import {LOGIN} from "../actionTypes/actionTypes";

function loginReducer(state = false, action) {
    switch(action.type) {
        case LOGIN:
            return state = true;
        default: return state
    }
}

export default loginReducer;