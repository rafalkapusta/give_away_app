import {TOGGLE_MENU} from "../actionTypes/actionTypes";

function menuReducer(state = false, action) {
    switch(action.type){
        case TOGGLE_MENU:
            return !state;
        default: return state;
    }
}



export default menuReducer;
