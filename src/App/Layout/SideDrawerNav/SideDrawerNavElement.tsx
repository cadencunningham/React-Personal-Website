import React from 'react';

interface IProps {
    children: JSX.Element;
}

const SideDrawerNavElement = (props: IProps) => {
    const { children } = props;

    return <li className="side_drawer_nav--nav_element">{children}</li>;
};

export default SideDrawerNavElement;
