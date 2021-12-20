import React from 'react';
import PageTitle from '../shared/PageTitle';
import ColorThemerSaver from './ColorThemerSaver';

const ExtrasPage = () => {
    return (
        <div className="extras gen__non_home_page">
            <PageTitle>Extras</PageTitle>
            <ColorThemerSaver />
        </div>
    );
};

export default ExtrasPage;
