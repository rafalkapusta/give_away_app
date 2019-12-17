import React from 'react'
import {Component} from 'react'

import { Link, withRouter } from 'react-router-dom';

import { withFirebase } from './Firebase';

class RegistrationFormBase extends Component {
    state = {
        email: '',
        password: '',
        passwordRepeat: '',
        emailError: '',
        passwordError: '',
        passwordRepeatError: '',
        error: null
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
        if (data.password === data.passwordRepeat && data.passwordRepeat.length > 5) {
            this.setState({passwordRepeatError: false})
        } else {
            this.setState({passwordRepeatError: true})
        }
        if (!data.emailError && !data.passwordError && !data.passwordRepeatError) {
            this.props.firebase
                .doCreateUserWithEmailAndPassword(data.email, data.password)
                .then(authUser => {
                    this.props.history.push('/');
                    this.setState({password: '', email: '', passwordRepeat: ''});
                })
                .catch(error => {
                    this.setState({ error });
                });
        }
    };
    render() {
        const error = {
            border: 'none',
            borderBottom: '1px solid red'
        };
        return (
            <div className='registrationFormContainer'>
                <div className='registrationForm'>
                    <p>Załóż konto</p>
                    <form action="" className='registrationForm__form' onSubmit={this.handleSubmit}>
                        <div className='registrationForm__email'>
                            <label htmlFor="email">EMAIL</label>
                            <input type="email"
                                   id='email'
                                   name='email'
                                   value={this.state.email}
                                   onChange={this.handleChange}
                                   style={this.state.emailError? error:null}/>
                            <p style={{color: 'red'}}>{this.state.error ? this.state.error.message:null}</p>
                        </div>
                        <div className='registrationForm__password'>
                            <label htmlFor="password">HASLO</label>
                            <input type="password"
                                   id='password'
                                   name='password'
                                   value={this.state.password}
                                   onChange={this.handleChange}
                                   style={this.state.passwordError? error:null}/>
                            <p style={{color: 'red'}}>{this.state.passwordError? 'Password has to be at least 6 characters long':null}</p>
                        </div>
                        <div className='registrationForm__passwordRepeat'>
                            <label htmlFor="passwordRepeat">POWTÓRZ HASLO</label>
                            <input type="password"
                                   id='passwordRepeat'
                                   name='passwordRepeat'
                                   value={this.state.passwordRepeat}
                                   onChange={this.handleChange}
                                   style={this.state.passwordRepeatError? error:null}/>
                            <p style={{color: 'red'}}>{this.state.passwordRepeatError? 'Both passwords have to be the same':null}</p>
                        </div>
                        <input type='submit' value='Załóż konto'/>
                        <Link to='/login'>Zaloguj się</Link>
                    </form>
                </div>
            </div>
        )
    }
}

const RegistrationForm =  withRouter(withFirebase(RegistrationFormBase));

export {RegistrationForm};