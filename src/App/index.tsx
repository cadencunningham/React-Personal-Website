import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import '../scss/main.scss';
import HomePage from './HomePage';
import ExtrasPage from './ExtrasPage';
import { ROUTES_CONTACT_ME, ROUTES_EXTRAS, ROUTES_HOME, ROUTES_RESUME } from '../shared/constants/routes';
import ResumePage from './ResumePage';
import ContactMePage from './ContactMePage';
import {restoreCssThemeFromLs} from '../shared/utils/colorThemeHelpers';


// https://www.awwwards.com/sites/veille-reputation-squad
const App = () => {

    useEffect(()=>{
        restoreCssThemeFromLs()
    },[])

    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path={ROUTES_EXTRAS.path} component={() => <ExtrasPage />} />
                    <Route path={ROUTES_RESUME.path} component={() => <ResumePage />} />
                    <Route path={ROUTES_CONTACT_ME.path} component={() => <ContactMePage />} />
                    <Route path={ROUTES_HOME.path} component={() => <HomePage />} />
                </Switch>
            </Layout>
        </Router>
    );
};

export default App;
