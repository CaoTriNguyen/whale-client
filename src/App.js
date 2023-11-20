import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useToken } from './store';

import { publicRoutes } from './routes/routes';
import DefaultLayout from '~/layouts';
import Login from './pages/Login';

function App() {
    const { token, setToken } = useToken();

    return (
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => {
                    let Layout = DefaultLayout;
                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }

                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    {route.component === Login && !token && <Page setToken={setToken} />}
                                    {route.component !== Login && <Page setToken={setToken} />}
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
