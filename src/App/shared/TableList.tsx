import React from 'react';
import { IListElement } from '../../shared/interfaces/component';

interface IProps {
    header?: string;
    headerClassName?: string;
    list: IListElement[];
    noContainerClass?: boolean;
}

const TableList = (props: IProps) => {
    const { header, headerClassName, list, noContainerClass } = props;

    return (
        <div className={!noContainerClass ? 'table-list' : ''}>
            {header && <h2 className={headerClassName || 'table-list__header'}>{header}</h2>}
            <ul className="table-list__list">
                {list.map((element) => (
                    <li
                        key={element.label}
                        className={[
                            'table-list__element',
                            element.active ? 'table-list__element--active' : '',
                            element.completed ? 'table-list__element--completed' : '',
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
