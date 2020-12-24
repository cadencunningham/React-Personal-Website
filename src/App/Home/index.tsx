import React from 'react';
import { features } from '../../shared/constants/component';
import Card from '../shared/Card';
import TableList from '../shared/TableList';
import ColorThemer from './ColorThemer';

const Home = () => {
    return (
        <div className="home">
            <ColorThemer />
            <Card header="Upcoming Feature List">
                <TableList list={features} />
            </Card>
        </div>
    );
};

export default Home;
