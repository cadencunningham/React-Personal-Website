import React from 'react';
import { FEATURES } from '../../shared/constants/component';
import Card from '../shared/Card';
import PageTitle from '../shared/PageTitle';
import TableList from '../shared/TableList';
import ColorThemerSaver from './ColorThemerSaver';
import YoutubeChannel from './YoutubeChannel';

const ExtrasPage = () => {
    return (
        <div className="extras gen__non_home_page">
            <PageTitle>Extras</PageTitle>
            <Card header="Upcoming Feature List">
                <TableList list={FEATURES} tableListClassName="home__feature-list" />
            </Card>
            <YoutubeChannel />
            <ColorThemerSaver />
        </div>
    );
};

export default ExtrasPage;
