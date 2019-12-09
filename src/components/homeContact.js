import React from 'react'
import {Component} from 'react'

class HomeContact extends Component{
    state = {
        name: '',
        email: '',
        message: '',
        error: []
    };
    handleChange =(e)=> {
        this.setState({[e.target.name]: e.target.value})
    };
    handleClick =(e)=> {
        e.preventDefault();
        const url = 'https://fer-api.coderslab.pl/v1/portfolio/contact';
        const data = this.state;
        let error = [];
        if (data.message.length < 120) {
            error.push('Wiadomość jest za krótka');
        }
        if(data.email.indexOf('@') === -1) {
            error.push('adres email powienien zawierać znak @');
        }
        if(data.name === '') {
            error.push('Podaj imię, imię nie może zawierać spacji');
        }
        if(error.length > 0) {
            this.setState({error: error})
        }
        else {
            error.push('Dziękujemy za wiadomość');
            this.setState({error: error});
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(r => r.json()).catch(error => console.log(error));
        }
    };
    render() {
        return (
            <div className='homeContact'>
                <div>
                {this.state.error.map((error,i) => {
                    if(error === 'Dziękujemy za wiadomość'){
                        return <p style={{color: 'green'}} key={i}>{error}</p>
                    } else {
                        return <p style={{color: 'red'}} key={i}>{error}</p>
                    }
                })}
                    <form action="" className='homeContact__form'>
                        <p>Skontaktuj się z nami</p>
                        <label htmlFor="name">Wpisz swoje imię</label>
                        <input type="text"
                               id='name'
                               name='name'
                               value={this.state.name}
                               onChange={this.handleChange}/>
                        <label htmlFor="email">Wpisz swój email</label>
                        <input type="email"
                               id='email'
                               name='email'
                               value={this.state.email}
                               onChange={this.handleChange}/>
                        <label htmlFor="message">Wpisz swoją wiadomość</label>
                        <textarea name='message' cols="30" rows="10"
                                  id='message'
                                  value={this.state.message}
                                  onChange={this.handleChange}>

                        </textarea>
                        <input type="submit" onClick={this.handleClick}/>
                    </form>
                </div>
            </div>
        )
    }
}

export default HomeContact