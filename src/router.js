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
        requiresAuth: false,
    },
    {
        path: '/user',
        component: User,
        requiresAuth: true,
        // requiresAuth: false,
        children: [
            {
                path: '/user/a',
                component: A,
                requiresAuth: false,
            },
            {
                path: '/user/b',
                component: B,
                // requiresAuth: false,
                requiresAuth: true,
                children: [
                    {
                        path: '/user/b/c',
                        component: C,
                        requiresAuth: false,
                    },
                    {
                        path: '/user/b/d',
                        component: D,
                        requiresAuth: false,
                    },
                ],
            },
        ],
    },
];

export default routes;
