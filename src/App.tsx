import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './Layout';
import './scss/main.scss';

const App = () => {
    return (
        <Router>
            <Layout>
                <Route path="/" component={() => <div className="temp">CONTENT</div>} />
            </Layout>
        </Router>
    );
};

export default App;
