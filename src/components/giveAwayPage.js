import React from 'react';
import {Component} from 'react';
import GiveAwayPageHeader from "./giveAwayPageHeader";
import GiveAwayPageForm from "./giveAwayPageForm";
import GiveAwayPageContact from "./giveAwayPageContact";
import {connect} from "react-redux";

class GiveAwayPage extends Component{
    render() {
        let login;
        if(this.props.login) {
            login = <div className='giveAwayPageInfo'><h1>Nastąpiło poprawne zalogowanie</h1><h2>Strona w trakcie budowy</h2></div>;
        } else {
            login = <h1>Musisz się zalogować</h1>;
        }
        return (
            <>
                <GiveAwayPageForm login={login}/>
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
