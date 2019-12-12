import React from 'react';
import {Component} from 'react';
import {connect} from "react-redux";

class GiveAwayPage extends Component{
    render() {
        let login;
        if(this.props.login) {
            login = <h1>Widzisz mnie bo się zalogowałeś</h1>;
        } else {
            login = <h1>Musisz się zalogować</h1>;
        }
        return (
            <>
            {login}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        login: state.loginState
    }
};

export default connect(
    mapStateToProps,
)(GiveAwayPage);
