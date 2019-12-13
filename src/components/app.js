import React from 'react';
import {Component} from 'react'
import '../stylesheets/components/_app.scss';
import {HashRouter as Router, Route, Switch} from "react-router-dom";

import Home from './home'

import Registration from "./registration";
import Login from "./login";
import Navigation from "./navigation";
import NavigationAuthUser from "./naviagtionAuthUser";
import NotFound from "./notFound";
import LogoutPage from './logoutPage'
import GiveAwayPage from "./giveAwayPage";

import '../stylesheets/main.scss'
import {connect} from "react-redux";

class App extends Component {
  render() {
      return (
          <div className='appContainer'>
          <Router>
          {this.props.login? <NavigationAuthUser/>:<Navigation/>}
          {/*<HomeMenu/>
          <HomeHamburgerMenu/>*/}
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/login' component={Login}/>
              <Route path='/registration' component={Registration}/>
              <Route path='/logout' component={LogoutPage}/>
              <Route path='/give_away' component={GiveAwayPage}/>
              <Route component={NotFound}/>
            </Switch>
          </Router>
          </div>
      );
  }
}

const mapStateToProps = state => {
    return {
        login: state.loginState
    }
};

export default connect(
    mapStateToProps,
)(App);
