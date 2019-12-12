import React from 'react';
import {Component} from 'react';
import {Link} from "react-router-dom";

class Logout extends Component{
    render() {
        return (
            <div className='logoutContainer'>
                <h1>Nastąpiło pomyślne wylogowanie</h1>
                <Link to='/'>Strona główna</Link>
            </div>
        )
    }
}

export default Logout;