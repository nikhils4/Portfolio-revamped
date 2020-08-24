import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// Components
import Header from '../components/Header';
import Footer from "../components/Footer";

// Pages
import SkillsPage from "../components/SkillsPage";
import AchievementsPage from "../components/AchievementsPage";
import GetInTouchPage from "../components/GetInTouchPage";
import ProjectsPage from "../components/ProjectsPage";
import ResumePage from "../components/ResumePage";
import HomePage from "../components/HomePage";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={HomePage} exact={true} />
                    <Route path="/skills" component={SkillsPage} />
                    <Route path="/achievements" component={AchievementsPage} />
                    <Route path="/projects" component={ProjectsPage} />
                    <Route path="/getInTouch" component={GetInTouchPage} />
                    <Route path="/resume" component={ResumePage} />
                    <Route component={NotFoundPage} />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default AppRouter;