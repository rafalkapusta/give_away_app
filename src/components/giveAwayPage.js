import React from 'react';
import {Component} from 'react';
import GiveAwayPageHeader from "./giveAwayPageHeader";
import GiveAwayPageForm from "./giveAwayPageForm";
import GiveAwayPageContact from "./giveAwayPageContact";

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
                {/*<GiveAwayPageHeader/>
                <GiveAwayPageForm/>
                <GiveAwayPageContact/>*/}
            </>
        )
    }
}


export default GiveAwayPage;