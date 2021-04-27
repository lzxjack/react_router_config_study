import React, { Component } from 'react';
// import Home from './components/Home';
// import User from './components/User';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';
import routes from './router.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <NavLink to="/home">Home</NavLink>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <NavLink to="/user">User</NavLink>
                {renderRoutes(routes)}
                {/* <Route path="/home" component={Home} />
                <Route path="/user" component={User} /> */}
            </div>
        );
    }
}
