import React from 'react'
import {Component} from 'react'

import {Link} from "react-router-dom";

class Registration extends Component {
    state = {
        email: '',
        password: '',
        passwordRepeat: '',
        errors: []
    };
    handleChange =(e)=> {
        this.setState({[e.target.name]: e.target.value})
    };
    handleSubmit =(e)=> {
        const {email, password, passwordRepeat} = this.state;
        const errors = [];
        e.preventDefault();
        if(email.indexOf('@') === -1) {
          errors.push('Email nie jest poprawny');
        }
        if(password.length < 6) {
            errors.push('Hasło jest za krókie');
        }
        if(passwordRepeat.length < 6 || passwordRepeat !== password) {
            errors.push('Hasła muszą być takie same i mieć więcej niż 6 znaków')
        }
        if(errors.length > 0) {
            this.setState({errors: errors})
        } else {
            console.log('ok');
        }
    };
    render() {
        const errorStyle = {

        };
        return (
            <div className='registrationContainer'>
                <div className='registration'>
                    <p>Załóż konto</p>
                    <form action="" className='registration__form' onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="email">EMAIL</label>
                            <input type="email"
                                   id='email'
                                   name='email'
                                   value={this.state.email}
                                   onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="password">HASLO</label>
                            <input type="password"
                                   id='password'
                                   name='password'
                                   value={this.state.password}
                                   onChange={this.handleChange}
                                   style={errorStyle}/>
                        </div>
                        <div>
                            <label htmlFor="passwordRepeat">POWTÓRZ HASLO</label>
                            <input type="password"
                                   id='passwordRepeat'
                                   name='passwordRepeat'
                                   value={this.state.passwordRepeat}
                                   onChange={this.handleChange}/>
                        </div>
                            <input type='submit' value='Załóż konto'/>
                            <Link to='/login'>Zaloguj się</Link>
                    </form>
                </div>
            </div>
        )
    }
}

export default Registration;