import React from 'react';

interface IProps{
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
} 

const HamburgerMenuIcon = (props:IProps) => {
    const {onClick} = props;

    return(
        <div className="hamburger_menu_icon" onClick={onClick}>
            <a/>
        </div>
    )
}

export default HamburgerMenuIcon;