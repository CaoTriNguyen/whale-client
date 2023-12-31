import config from '~/config';
import Home from '~/pages/Home/Home';
import Profile from '~/pages/Profile/Profile';
import Login from '~/pages/Login';
import Signup from '~/pages/Signup';
import SidebarFooterLayout from '~/layouts/SidebarFooterLayout';

//public Routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.login, component: Login, layout: SidebarFooterLayout },
    { path: config.routes.signup, component: Signup, layout: SidebarFooterLayout },
];

const privateRoles = [];

export { publicRoutes, privateRoles };
