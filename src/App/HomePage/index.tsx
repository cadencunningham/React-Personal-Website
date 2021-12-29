import React from 'react';
import { features } from '../../shared/constants/component';
import Card from '../shared/Card';
import TableList from '../shared/TableList';

const HomePage = () => {
    return (
        <div className="home">
            <Card header="Upcoming Feature List">
                <TableList list={features} tableListClassName="home__feature-list" />
            </Card>
        </div>
    );
};

export default HomePage;
