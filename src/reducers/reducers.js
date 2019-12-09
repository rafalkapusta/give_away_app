import {combineReducers} from "redux";
import menuReducer from "./menu";
import whoWeHelpReducer from "./whoWeHelp";

const rootReducer = combineReducers({
    menuState: menuReducer,
    helpState: whoWeHelpReducer
});

export default rootReducer;