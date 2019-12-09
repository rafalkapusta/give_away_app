import React from 'react'
import {Component} from 'react'

class HomeSimpleSteps extends Component{
    render() {
        return (
            <div className='homeSimpleSteps'>
                <div className='homeSimpleSteps__text'>
                    napis
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
                    button
                </div>
            </div>
        )
    }
}

export default HomeSimpleSteps