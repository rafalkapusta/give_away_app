import {combineReducers} from "redux";
import menuReducer from "./menu";
import whoWeHelpReducer from "./whoWeHelp";
import login_logoutReducer from "./login_logout";


const rootReducer = combineReducers({
    menuState: menuReducer,
    helpState: whoWeHelpReducer,
    loginState: login_logoutReducer

});

export default rootReducer;