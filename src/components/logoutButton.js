import React from 'react';
import {Component} from 'react';
import { withFirebase } from './Firebase';
import {logout} from "../actions/toggleLogin";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
/*const LogOutButtonBase = ({ firebase }, props) => {
    console.log(props);
    console.log(firebase);
    return null
};*/
//export default withFirebase(LogOutButton);

class LogOutButtonBase extends Component{
    handleClick =(e)=> {
        this.props.logout();
        this.props.history.push('/logout');
    };
    render() {
        console.log(this.props);
        return <button onClick={this.handleClick}>Logout</button>
    }
}

const LogOutButton = withRouter(withFirebase(LogOutButtonBase));

const mapStateToProps = state => {
    return {
        logout: state.loginState
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: ()=> {
            dispatch(logout())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LogOutButton);