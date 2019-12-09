import React from 'react'
import {Component} from "react"
import {animateScroll as scroll, Link} from "react-scroll";
import {toggleMenu} from "../actions/toggleMenu";
import {connect} from "react-redux";
//import store from "../store/store";

class HomeHamburgerMenu extends Component{
    render() {
        const listStyle = {
          display: this.props.menu? 'block':'none'
        };
        //console.log(this.props);
        return (
            <div className='homeHamburgerMenu'>
                <div className='homeHamburgerMenu--hamburger'>
                    <button onClick={this.props.toggleMenu}>hamburger</button>
                </div>
                <ul style={listStyle}>
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

const mapStateToProps = state => {
    return {
        menu: state.menuState
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleMenu: ()=> {
            dispatch(toggleMenu())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeHamburgerMenu);