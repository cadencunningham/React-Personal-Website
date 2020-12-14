import React from 'react';
import { features } from '../../shared/constants/component';
import TableList from '../shared/TableList';

const Home = () => {
    return (
        <div className="home">
            <TableList header="Upcoming Feature List" list={features} />
        </div>
    );
};

export default Home;
