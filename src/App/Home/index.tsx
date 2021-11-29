import React from 'react';
import { features } from '../../shared/constants/component';
import Card from '../shared/Card';
import TableList from '../shared/TableList';
import YoutubeChannel from './YoutubeChannel';

const Home = () => {
    return (
        <div className="home">
            <Card header="Upcoming Feature List">
                <TableList list={features} />
            </Card>
            <YoutubeChannel />
        </div>
    );
};

export default Home;
