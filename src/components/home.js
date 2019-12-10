import React from 'react'
import {Component} from 'react'

import HomeHeader from "./homeHeader";
import HomeThreeColumns from "./homeThreeColumns";
import HomeSimpleSteps from "./homeSimpleSteps";
import HomeAboutUs from "./homeAboutUs";
import HomeWhoWeHelp from "./homeWhoWeHelp";
import HomeContact from "./homeContact";
import HomeMenu from "./homeMenu";
import HomeHamburgerMenu from "./homeHamburgerMenu";

class Home extends Component{
    render() {
        //console.log(this.props);
        return (
            <div className='home'>
                {/*<HomeMenu/>
                <HomeHamburgerMenu/>*/}
                <HomeHeader/>
                <HomeThreeColumns/>
                <HomeSimpleSteps/>
                <HomeAboutUs/>
                <HomeWhoWeHelp/>
                <HomeContact/>
            </div>
        )
    }

}

export default Home;