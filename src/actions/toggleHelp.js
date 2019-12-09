import {TOGGLE_FOUNDATIONS} from "../actionTypes/actionTypes";
import {TOGGLE_ORGANIZATIONS} from "../actionTypes/actionTypes";
import {TOGGLE_LOCAL} from "../actionTypes/actionTypes";

const toggleFoundations =()=> {
    return {
        type: TOGGLE_FOUNDATIONS
    }
};

const toggleOrganizations =()=> {
    return {
        type: TOGGLE_ORGANIZATIONS
    }
};

const toggleLocal =()=> {
    return {
        type: TOGGLE_LOCAL
    }
};

export {toggleFoundations, toggleOrganizations, toggleLocal}