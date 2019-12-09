import React from 'react'
import {Component} from 'react'
import {Link, animateScroll as scroll} from 'react-scroll'

class HomeMenu extends Component{
    render() {
        return (
            <div className='homeMenu'>
                <ul>
                    <li onClick={()=> scroll.scrollToTop()}>
                        Start
                    </li>
                    <li>
                        <Link to='homeSimpleSteps' smooth={true} duration={500}>O co chodzi?</Link>
                    </li>
                    <li>
                        <Link to='homeAboutUs' smooth={true} duration={500}>O nas</Link>
                    </li>
                    <li>
                        <Link to='homeWhoWeHelp' smooth={true} duration={500}>Fundacja i organizacje</Link>
                    </li>
                    <li>
                        <Link to='homeContact' smooth={true} duration={500}>Kontakt</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default HomeMenu;










