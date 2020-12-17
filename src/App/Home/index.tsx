import React from 'react';
import { features } from '../../shared/constants/component';
import TableList from '../shared/TableList';
import ColorPickers from './ColorPickers';

const Home = () => {
    return (
        <div className="home">
            <TableList header="Upcoming Feature List" list={features} />
            <ColorPickers />
        </div>
    );
};

export default Home;
