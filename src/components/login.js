import React from 'react'
import {Component} from 'react'
import {Link} from "react-router-dom";

class Login extends Component {
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

    };
    render() {
        return (
            <div className='loginContainer'>
                <div className='login'>
                    <p>Zaloguj się</p>
                    <form action="" className='login__form' onSubmit={this.handleSubmit}>
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
                                   />
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