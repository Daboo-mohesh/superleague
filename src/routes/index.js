import React, {Suspense} from 'react';
import {Redirect, Switch} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

import config from './../config';
import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';
import UserRoutes from './UserRoutes';
import AdminRoutes from './AdminRoutes';

import Loader from '../ui-component/extended/Loader/Loader';

import AuthenticationRoutes from './AuthenticationRoutes';

const Routes = () => {
    return (
        <AnimatePresence>
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Redirect exact from="/" to={config.defaultPath} />
                    <>
                        {/* Routes for authetication pages */}
                        <AuthenticationRoutes />

                        {/* Route for login */}
                        <LoginRoutes />

                        {/* Routes for main layouts */}
                        <MainRoutes />

                        {/* Routes for all users */}
                        <UserRoutes />

                        {/* Routes for all users */}
                        <AdminRoutes />
                    </>
                </Switch>
            </Suspense>
        </AnimatePresence>
    );
};

export default Routes;
