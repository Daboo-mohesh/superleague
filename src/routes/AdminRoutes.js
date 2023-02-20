import React, {lazy} from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';

import MainAdminLayout from './../layout/MainLayout';

const DashboardDefault = lazy(() => import('../views/admin/dashboard/Dashboard'));
// const squad = lazy(() => import('../views/dashboard/squad/Squad'));
// const submitlineup = lazy(() => import('../views/dashboard/submitLineup/SubmitLineup'));
// const reportreferee = lazy(() => import('../views/dashboard/reportReferee/ReportReferee'));

const MainRoutes = () => {
    const location = useLocation();

    return (
        <Route path={['/admin/dashboard']}>
            <MainAdminLayout showBreadcrumb={true}>
                <Switch location={location} key={location.pathname}>
                    <Route path="/admin/dashboard" component={DashboardDefault} />
                </Switch>
            </MainAdminLayout>
        </Route>
    );
};

export default MainRoutes;
