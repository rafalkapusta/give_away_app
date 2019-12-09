import React from 'react'
import {Component} from 'react'
import {Link} from "react-router-dom";

class HomeHeader extends Component{
    render() {
        return (
            <div className='homeHeader'>
                <div className='homeHeader__picture'>
                </div>
                <div className='homeHeader__text'>
                    <p>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</p>
                </div>
                <div className='homeHeader__buttons'>
                    <Link to='/login'>ODDAJ RZECZY</Link>
                    <Link to='/login'>ZORGANIZUJ ZBIORKE</Link>
                </div>
            </div>
        )
    }
}

export default HomeHeader;