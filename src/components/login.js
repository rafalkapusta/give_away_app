import React from 'react'
import {Component} from 'react'
import {Link} from "react-router-dom";

class Login extends Component {
    render() {
        return (
            <div className='loginContainer'>
                <div className='login'>
                    <p>Zaloguj się</p>
                    <form action="" className='login__form'>
                        <div>
                            <label htmlFor="email">EMAIL</label>
                            <input type="email" id='emial'/>
                        </div>
                        <div>
                            <label htmlFor="password">PASSWORD</label>
                            <input type="password" id='password'/>
                        </div>
                    </form>
                    <div className='login__form--buttons'>
                        <Link to='/registration'><div>Załóż konto</div></Link>
                        <Link to='/login'><div>Zaloguj się</div></Link>

                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Login;