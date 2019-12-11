import React from 'react'
import {Component} from 'react'

class HomeContact extends Component{
    state = {
        name: '',
        email: '',
        message: '',
        emailError: '',
        nameError: '',
        messageError: ''
    };
    handleChange =(e)=> {
        this.setState({[e.target.name]: e.target.value})
    };
    handleClick =(e)=> {
        e.preventDefault();
        const url = 'https://fer-api.coderslab.pl/v1/portfolio/contact';
        const data = this.state;
        if (data.message.length > 119) {
            this.setState({messageError: false})
        } else {
            this.setState({messageError: true})
        }
        if(data.email.indexOf('@') !== -1) {
            this.setState({emailError: false})
        } else {
            this.setState({emailError: true})
        }
        if(data.name !== '') {
            this.setState({nameError: false})
        } else {
            this.setState({nameError: true})
        }
        if(!data.emailError && !data.messageError && !data.nameError) {
            this.setState({name: '', email: '', message: ''});
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(r => r.json()).then(r => console.log(r)).catch(error => console.log(error));
        }
    };
    render() {
        const error = {
            border: 'none',
            borderBottom: '1px solid red'
        };
        return (
            <div className='homeContact'>
                <div>
                    <form action="" className='homeContact__form'>
                        <p>Skontaktuj się z nami</p>
                        <div className='homeContact__name'>
                            <label htmlFor="name">Wpisz swoje imię :</label>
                            <input type="text"
                                   id='name'
                                   name='name'
                                   value={this.state.name}
                                   onChange={this.handleChange}
                                   style={this.state.nameError? error:null}/>
                            <p style={{color: 'red'}}>{this.state.nameError? 'Imię nie może zawierać spacji':null}</p>
                        </div>
                        <div className='homeContact__email'>
                            <label htmlFor="email">Wpisz swój email :</label>
                            <input type="email"
                                   id='email'
                                   name='email'
                                   value={this.state.email}
                                   onChange={this.handleChange}
                                   style={this.state.emailError? error:null}/>
                            <p style={{color: 'red'}}>{this.state.emailError? 'Adres email jest niepoprawny':null}</p>
                        </div>
                        <div className='homeContact__message'>
                            <label htmlFor="message">Wpisz swoją wiadomość :</label>
                            <textarea name='message' cols="30" rows="10"
                                      id='message'
                                      value={this.state.message}
                                      onChange={this.handleChange}
                                      style={this.state.messageError? error:null}>
                            </textarea>
                            <p style={{color: 'red'}}>{this.state.messageError? 'Wiadomość musi zawierać co najmniej 120 znaków':null}</p>
                        </div>
                        <input type="submit" onClick={this.handleClick}/>
                    </form>
                </div>
            </div>
        )
    }
}

export default HomeContact