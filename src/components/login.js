import React from 'react'
import {Component} from 'react'
import {Link} from "react-router-dom";

class Login extends Component {
    state = {
        email: '',
        password: '',
        emailError: '',
        passwordError: ''
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
        if (!data.emailError && !data.passwordError) {
            this.setState({password: '', email: ''});
        }
    };
    render() {
        const error = {
            border: 'none',
            borderBottom: '1px solid red'
        };
        return (
            <div className='loginContainer'>
                <div className='login'>
                    <p>Zaloguj się</p>
                    <form action="" className='login__form' onSubmit={this.handleSubmit}>
                        <div className='login__email'>
                            <label htmlFor="email">EMAIL</label>
                            <input type="email"
                                   id='email'
                                   name='email'
                                   value={this.state.email}
                                   onChange={this.handleChange}
                                   style={this.state.emailError? error:null}/>
                            <p style={{color: 'red'}}>{this.state.emailError? 'Nieprawidłowy email':null}</p>
                        </div>
                        <div className='login__password'>
                            <label htmlFor="password">HASLO</label>
                            <input type="password"
                                   id='password'
                                   name='password'
                                   value={this.state.password}
                                   onChange={this.handleChange}
                                   style={this.state.passwordError? error:null}/>
                            <p style={{color: 'red'}}>{this.state.passwordError? 'Nieprawidłowe hasło':null}</p>
                        </div>
                        <input type='submit' value='Zaloguj się'/>
                        <Link to='/registration'>Załóż konto</Link>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;