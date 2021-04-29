import Home from './components/Home';
import User from './components/User';
import A from './components/User/A';
import B from './components/User/B';
import C from './components/User/B/C';
import D from './components/User/B/D';

const routes = [
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/user',
        component: User,
        children: [
            {
                path: '/user/a',
                component: A,
            },
            {
                path: '/user/b',
                component: B,
                children: [
                    {
                        path: '/user/b/c',
                        component: C,
                    },
                    {
                        path: '/user/b/d',
                        component: D,
                    },
                ],
            },
        ],
    },
];

export default routes;
