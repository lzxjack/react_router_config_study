import React, { Component } from 'react';
// import Home from './components/Home';
// import User from './components/User';
// import { renderRoutes } from 'react-router-config';
import renderRoutes from './utils/renderRoutes';
import { NavLink, Switch } from 'react-router-dom';
import routes from './router.js';

// const authed = false;
// const authPath = '/home';

export default class App extends Component {
    render() {
        return (
            <div>
                <NavLink to="/home">Home</NavLink>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <NavLink to="/user">User</NavLink>
                <Switch>{renderRoutes(routes)}</Switch>
                {/* <Switch>{renderRoutes(routes, authed, authPath)}</Switch> */}
                {/* <Route path="/home" component={Home} />
                <Route path="/user" component={User} /> */}
            </div>
        );
    }
}
