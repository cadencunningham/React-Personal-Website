import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './Layout';
import '../scss/main.scss';
import Home from './Home';
// https://www.awwwards.com/sites/veille-reputation-squad
const App = () => {
    return (
        <Router>
            <Layout>
                <Route path="/" component={() => <Home />} />
            </Layout>
        </Router>
    );
};

export default App;
