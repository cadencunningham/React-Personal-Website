import React from 'react';
import { features } from '../../shared/constants/component';
import TableList from '../shared/TableList';
import ColorThemer from './ColorThemer';

const Home = () => {
    return (
        <div className="home">
            <TableList header="Upcoming Feature List" list={features} />
            <ColorThemer />
        </div>
    );
};

export default Home;
