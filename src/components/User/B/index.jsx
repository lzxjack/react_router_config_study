import React, { Component } from 'react';
// import { renderRoutes } from 'react-router-config';
import renderRoutes from '../../../utils/renderRoutes';
import { NavLink } from 'react-router-dom';

// const authed = false;
// const authPath = '/user/a';

export default class B extends Component {
    // componentDidMount() {
    //     console.log(this.props.route.children);
    //     // console.log(this.props);
    // }
    render() {
        return (
            <div>
                BBB
                <hr />
                <NavLink to="/user/b/c">C</NavLink>
                <NavLink to="/user/b/d">D</NavLink>
                {/* {renderRoutes(this.props.route.children, authed, authPath)} */}
                {renderRoutes(this.props.route.children)}
            </div>
        );
    }
}
