import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';

export default class B extends Component {
    componentDidMount() {
        console.log(this.props.route.children);
        // console.log(this.props);
    }
    render() {
        return (
            <div>
                BBB
                <hr />
                <NavLink to="/user/b/c">C</NavLink>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <NavLink to="/user/b/d">D</NavLink>
                {renderRoutes(this.props.route.children)}
            </div>
        );
    }
}
