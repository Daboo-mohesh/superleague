import React, {lazy} from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';
import UsersLayout from '../layout/UsersLayout';
import NavMotion from '../layout/NavMotion';
import CalendarGame from '../views/calendargame/CalendarGame';

const home = lazy(() => import('../views/home/Home'));
const matchday = lazy(() => import('../views/matchday/Matchday'));
const team = lazy(() => import('../views/team/Team'));
const clubs = lazy(() => import('../views/clubs/Clubs'));
const league = lazy(() => import('../views/leagues/League'));
const news = lazy(() => import('../views/news/News'));
const history = lazy(() => import('../views/history/History'));
const trophycentre = lazy(() => import('../views/trophycentre/Trophycentre'));
const leagueoverview = lazy(() => import('../views/leagueoverview/Leagueoverview'));
const cupoverview = lazy(() => import('../views/cupoverview/CupOverview'));
const calendar = lazy(() => import('../views/calendargame/CalendarGame'));

const UserRoutes = () => {
    const location = useLocation();

    return (
        <Route
            path={[
                '/home',
                '/matchday',
                '/team',
                '/Clubs',
                '/Leagues',
                '/News',
                '/History',
                '/TrophyCentre',
                '/Leagueoverview',
                '/Cupoverview',
                '/Calendar'
            ]}
        >
            <UsersLayout>
                <Switch location={location} key={location.pathname}>
                    <NavMotion>
                        <Route path="/home" component={home} />
                        <Route path="/matchday/:id" component={matchday} />
                        <Route path="/team/:id" component={team} />
                        <Route path="/Clubs" component={clubs} />
                        <Route path="/Leagues" component={league} />
                        <Route path="/News" component={news} />
                        <Route path="/History" component={history} />
                        <Route path="/TrophyCentre" component={trophycentre} />
                        <Route path="/Leagueoverview/:id" component={leagueoverview} />
                        <Route path="/Cupoverview/:id" component={cupoverview} />
                        <Route path="/Calendar" component={calendar} />
                    </NavMotion>
                </Switch>
            </UsersLayout>
        </Route>
    );
};

export default UserRoutes;
