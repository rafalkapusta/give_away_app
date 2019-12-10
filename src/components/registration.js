import React from 'react'
import {Component} from 'react'

import {Link} from "react-router-dom";

class Registration extends Component {
    render() {
        return (
            <div className='registrationContainer'>
                <div className='registration'>
                    <p>Załóż konto</p>
                    <form action="" className='registration__form'>
                        <div>
                            <label htmlFor="email">EMAIL</label>
                            <input type="email" id='email'/>
                        </div>
                        <div>
                            <label htmlFor="password">HASLO</label>
                            <input type="password" id='password'/>
                        </div>
                        <div>
                            <label htmlFor="passwordRepeat">POWTÓRZ HASLO</label>
                            <input type="password" id='passwordRepeat'/>
                        </div>
                    </form>
                    <div className='registration__form--buttons'>
                        <Link to='/registration'><div>Załóż konto</div></Link>
                        <Link to='/login'><div>Zaloguj się</div></Link>

                    </div>

                </div>
            </div>
        )
    }
}

export default Registration;