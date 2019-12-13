import React from 'react';
import {Component} from 'react';

import { Link, withRouter } from 'react-router-dom';

import { withFirebase } from './Firebase';
import {login} from "../actions/toggleLogin";
import {connect} from "react-redux";

class LoginFormBase extends Component {
    state = {
        email: '',
        password: '',
        emailError: '',
        passwordError: ''
    };
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };
    handleSubmit = (e) => {
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
        if (!data.emailError && !data.passwordError) {
            this.props.firebase
                .doSignInWithEmailAndPassword(data.email, data.password)
                .then(() => {
                    this.props.history.push('/give_away');
                    this.props.login();
                    this.setState({password: '', email: ''});
                })
                .catch(error => {
                    this.setState({ error });
                });
            /*this.props.firebase
                .auth.signInWithPopup()
                .then(r => console.log(r))*/
        }
    };
    componentWillUnmount() {

    }
    render() {
        const error = {
            border: 'none',
            borderBottom: '1px solid red'
        };
        return (
            <div className='loginFormContainer'>
                <div className='loginForm'>
                    <p>Zaloguj się</p>
                    <form action="" className='loginForm__form' onSubmit={this.handleSubmit}>
                        <div className='loginForm__email'>
                            <label htmlFor="email">EMAIL</label>
                            <input type="email"
                                   id='email'
                                   name='email'
                                   value={this.state.email}
                                   onChange={this.handleChange}
                                   style={this.state.emailError ? error : null}/>
                            <p style={{color: 'red'}}>{this.state.error ? this.state.error.message:null}</p>
                        </div>
                        <div className='loginForm__password'>
                            <label htmlFor="password">HASLO</label>
                            <input type="password"
                                   id='password'
                                   name='password'
                                   value={this.state.password}
                                   onChange={this.handleChange}
                                   style={this.state.passwordError ? error : null}/>
                            <p style={{color: 'red'}}>{this.state.passwordError ? 'Nieprawidłowe hasło' : null}</p>
                        </div>
                        <input type='submit' value='Zaloguj się'/>
                        <Link to='/registration'>Załóż konto</Link>
                    </form>
                </div>
            </div>
        )
    }
}
const LoginForm =  withRouter(withFirebase(LoginFormBase));

const mapStateToProps = state => {
    return {
        login: state.loginState
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: ()=> {
            dispatch(login())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);



