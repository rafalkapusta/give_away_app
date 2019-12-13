import {LOGIN, LOGOUT} from "../actionTypes/actionTypes";

const login =()=> {
    return {
        type: LOGIN
    }
};

const logout =()=> {
    return {
        type: LOGOUT
    }
};

export {login, logout};