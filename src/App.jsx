import React, { Component } from 'react';
// import Home from './components/Home';
// import User from './components/User';
// import { renderRoutes } from 'react-router-config';
import renderRoutes from './utils/renderRoutes';
import { NavLink } from 'react-router-dom';
import routes from './router.js';

const authed = false; // false表示未登录
const authPath = '/home'; // 需要跳转到的路径

export default class App extends Component {
    render() {
        return (
            <div>
                {/* 路由链接 */}
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/user">User</NavLink>

                {/* {renderRoutes(routes)} */}
                {renderRoutes(routes, authed, authPath)}
            </div>
        );
    }
}
