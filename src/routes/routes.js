import config from '~/config';
import Home from '~/pages/Home/Home';
import Profile from '~/pages/Profile/Profile';

//public Routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
];

const privateRoles = [];

export { publicRoutes, privateRoles };
