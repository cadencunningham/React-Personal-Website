import React from 'react';
import { IListElement } from '../../shared/interfaces/component';

interface IProps {
    header: string;
    headerClassName?: string;
    list: IListElement[];
}

const TableList = (props: IProps) => {
    const { header, headerClassName, list } = props;

    return (
        <div className="feature-list">
            <h2 className={headerClassName || 'feature-list__header'}>{header}</h2>
            <ul className="feature-list__list">
                {list.map((element) => (
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
    );
};

export default TableList;
