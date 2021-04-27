import React, { Component } from 'react';
// import routes from '../../router.js';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';
export default class User extends Component {
    componentDidMount() {
        // console.log(this.props.route.children);
        // console.log(this.props);
    }
    render() {
        return (
            <div>
                User <hr />
                <NavLink to="/user/a">A</NavLink>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <NavLink to="/user/b">B</NavLink>
                {renderRoutes(this.props.route.children)}
            </div>
        );
    }
}
