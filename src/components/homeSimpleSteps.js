import React from 'react'
import {Component} from 'react'
import {Link} from "react-router-dom";

class HomeSimpleSteps extends Component{
    render() {
        return (
            <div className='homeSimpleSteps'>
                <div className='homeSimpleSteps__text'>
                    Wystarczą 4 proste kroki
                </div>
                <div className='homeSimpleSteps__icons'>
                    <div className='homeSimpleSteps__icons--chose'>
                        <p>Wybierz rzeczy</p>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className='homeSimpleSteps__icons--pack'>
                        <p>Spakuj je</p>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>
                    <div className='homeSimpleSteps__icons--decide'>
                        <p>Zdecyduj komu chcesz pomóc</p>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div className='homeSimpleSteps__icons--deliver'>
                        <p>Zamów kuriera</p>
                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
                <div className='homeSimpleSteps__button'>
                    <div><Link to='/login'>Oddaj rzeczy</Link></div>
                </div>
            </div>
        )
    }
}

export default HomeSimpleSteps