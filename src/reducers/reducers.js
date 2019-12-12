import {combineReducers} from "redux";
import menuReducer from "./menu";
import whoWeHelpReducer from "./whoWeHelp";
import loginReducer from "./login";

const rootReducer = combineReducers({
    menuState: menuReducer,
    helpState: whoWeHelpReducer,
    loginState: loginReducer
});

export default rootReducer;