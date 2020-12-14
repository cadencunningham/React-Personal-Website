import React from 'react';
import { features } from '../../shared/constants/component';

const Home = () => {
    return (
        <div className="home">
            <div className="feature-list">
                <h2 className="feature-list__header">Upcoming Feature List</h2>
                <ul className="feature-list__list">
                    {features.map((element) => (
                        <li
                            key={element.label}
                            className={[
                                'feature-list__element',
                                element.active ? 'feature-list__element--active' : '',
                                element.completed ? 'feature-list__element--completed' : '',
                            ].join(' ')}
                        >
                            {element.label}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;
