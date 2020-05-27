// this document is basically useless

import React, { Component } from 'react';
import { About } from './About';
import { Home } from './Home';
import { Experience } from './Experience';
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';


export class NavBar extends Component {
  render() {
    return (
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <Link to={'/experience'} className="nav-link">Experience</Link>
              <Link to={'/about'} className="nav-link">About</Link>
              <Link to={'/'} className="nav-link"> Home </Link>
            </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/experience' component={Experience} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
    )
  }
}
export default NavBar;