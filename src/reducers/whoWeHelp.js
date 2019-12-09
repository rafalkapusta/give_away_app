import {TOGGLE_FOUNDATIONS, TOGGLE_LOCAL, TOGGLE_ORGANIZATIONS,} from "../actionTypes/actionTypes";

const initialState = {
    foundations: true,
    organizations: false,
    local: false
};

function whoWeHelpReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_FOUNDATIONS:
            return initialState;
        case TOGGLE_ORGANIZATIONS:
            return {
                foundations: false,
                organizations: true,
                local: false
            };
        case TOGGLE_LOCAL:
            return  {
                foundations: false,
                organizations: false,
                local: true
            };
        default: return state
    }
}

export default whoWeHelpReducer;