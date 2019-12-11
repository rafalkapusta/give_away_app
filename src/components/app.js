import React from 'react';
import {Component} from 'react'
import '../stylesheets/components/_app.scss';
import {HashRouter as Router, Route, Switch} from "react-router-dom";

import Home from './home'

import Registration from "./registration";
import Login from "./login";
import Navigation from "./navigation";
import NotFound from "./notFound";

import '../stylesheets/main.scss'
import HomeMenu from "./homeMenu";
import HomeHamburgerMenu from "./homeHamburgerMenu";

class App extends Component {
  render() {
      return (
          <div className='appContainer'>
          <Router>
          <Navigation/>
          {/*<HomeMenu/>
          <HomeHamburgerMenu/>*/}
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/login' component={Login}/>
              <Route path='/registration' component={Registration}/>
              <Route component={NotFound}/>
            </Switch>
          </Router>
          </div>
      );
  }
}

export default App;

// render={() => <Login login={this.Login} logout={this.Logout} userApp={this.state}/>}