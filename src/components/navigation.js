import React from 'react'
import {Component} from 'react'
import {NavLink} from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <ul className='navigation'>
                <li>
                    <NavLink to='/login'>LOGIN</NavLink>
                </li>
                <li>
                    <NavLink to='/registration'>REGISTRATION</NavLink>
                </li>
                <li>
                    <NavLink to='/'>HOME</NavLink>
                </li>
            </ul>
        )
    }
}

export default Navigation;