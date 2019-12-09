import React from 'react'
import {Component} from 'react'

class HomeThreeColumns extends Component{
    render() {
        return (
            <div className='homeThreeColumns'>
                <div className='homeThreeColumns--left'>
                    <p className='homeThreeColumns__number'>10</p>
                    <p className='homeThreeColumns__services'>ODDANYCH WORKÓW</p>
                    <p className='homeThreeColumns__text'>
                        Lorem ipsum dolor sit amet,
                        consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.
                    </p>
                </div>
                <div className='homeThreeColumns--middle'>
                    <p className='homeThreeColumns__number'>5</p>
                    <p className='homeThreeColumns__services'>WSPARTYCH ORGANIZACJI</p>
                    <p className='homeThreeColumns__text'>
                        Lorem ipsum dolor sit amet,
                        consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.
                    </p>
                </div>
                <div className='homeThreeColumns--right'>
                    <p className='homeThreeColumns__number'>7</p>
                    <p className='homeThreeColumns__services'>ZORGANIZOWANYCH ZBIÓREK</p>
                    <p className='homeThreeColumns__text'>
                        Lorem ipsum dolor sit amet,
                        consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.
                    </p>
                </div>
            </div>
        )
    }
}

export default HomeThreeColumns;