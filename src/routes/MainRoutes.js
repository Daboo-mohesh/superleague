import React, {lazy} from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';

import MainLayout from './../layout/MainLayout';

const DashboardDefault = lazy(() => import('../views/dashboard/Default'));
const squad = lazy(() => import('../views/dashboard/squad/Squad'));
const submitlineup = lazy(() => import('../views/dashboard/submitLineup/SubmitLineup'));
const reportreferee = lazy(() => import('../views/dashboard/reportReferee/ReportReferee'));


const MainRoutes = () => {
    const location = useLocation();

    return (
        <Route path={['/dashboard', '/SubmitLineup', '/Squad', '/ReportReferee']}>
            <MainLayout showBreadcrumb={true}>
                <Switch location={location} key={location.pathname}>
                    <Route path="/dashboard" component={DashboardDefault} />
                    <Route path="/SubmitLineup" component={submitlineup} />
                    <Route path="/Squad" component={squad} />
                    <Route path="/ReportReferee" component={reportreferee} />
                    
                </Switch>
            </MainLayout>
        </Route>
    );
};

export default MainRoutes;
