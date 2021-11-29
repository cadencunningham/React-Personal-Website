import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import '../scss/main.scss';
import Home from './Home';
import Extras from './Extras';
import { ROUTES_EXTRAS, ROUTES_HOME } from '../shared/constants/routes';


// https://www.awwwards.com/sites/veille-reputation-squad
const App = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path={ROUTES_EXTRAS.path} component={() => <Extras />} />
                    <Route path={ROUTES_HOME.path} component={() => <Home />} />
                </Switch>
            </Layout>
        </Router>
    );
};

export default App;
