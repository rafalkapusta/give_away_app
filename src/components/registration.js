import React from 'react'
import {Component} from 'react'

import {Link} from "react-router-dom";

class Registration extends Component {
    state = {
        email: '',
        password: '',
        passwordRepeat: '',
        emailError: '',
        passwordError: '',
        passwordRepeatError: ''
    };
    handleChange =(e)=> {
        this.setState({[e.target.name]: e.target.value})
    };
    handleSubmit =(e)=> {
        e.preventDefault();
        const data = this.state;
        if (data.email.indexOf('@') !== -1) {
            this.setState({emailError: false})
        } else {
            this.setState({emailError: true})
        }
        if (data.password.length > 6) {
            this.setState({passwordError: false})
        } else {
            this.setState({passwordError: true})
        }
        if (data.password === data.passwordRepeat && data.passwordRepeat.length > 6) {
            this.setState({passwordRepeatError: false})
        } else {
            this.setState({passwordRepeatError: true})
        }
        if (!data.emailError && !data.passwordError && !data.passwordRepeatError) {
            this.setState({password: '', email: '', passwordRepeat: ''});
        }
    };
    render() {
        const error = {
            border: 'none',
            borderBottom: '1px solid red'
        };
        return (
            <div className='registrationContainer'>
                <div className='registration'>
                    <p>Załóż konto</p>
                    <form action="" className='registration__form' onSubmit={this.handleSubmit}>
                        <div className='registration__email'>
                            <label htmlFor="email">EMAIL</label>
                            <input type="email"
                                   id='email'
                                   name='email'
                                   value={this.state.email}
                                   onChange={this.handleChange}
                                   style={this.state.emailError? error:null}/>
                            <p style={{color: 'red'}}>{this.state.emailError? 'Nieprawidłowy email':null}</p>
                        </div>
                        <div className='registration__password'>
                            <label htmlFor="password">HASLO</label>
                            <input type="password"
                                   id='password'
                                   name='password'
                                   value={this.state.password}
                                   onChange={this.handleChange}
                                   style={this.state.passwordError? error:null}/>
                            <p style={{color: 'red'}}>{this.state.passwordError? 'Hasło musi mieć co najmniej 6 znaków':null}</p>
                        </div>
                        <div className='registration__passwordRepeat'>
                            <label htmlFor="passwordRepeat">POWTÓRZ HASLO</label>
                            <input type="password"
                                   id='passwordRepeat'
                                   name='passwordRepeat'
                                   value={this.state.passwordRepeat}
                                   onChange={this.handleChange}
                                   style={this.state.passwordRepeatError? error:null}/>
                            <p style={{color: 'red'}}>{this.state.passwordRepeatError? 'Hasła muszą być takie same':null}</p>
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