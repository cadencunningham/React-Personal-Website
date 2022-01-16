import React, { useEffect, useState } from 'react';

const Header = () => {
    const [headerHeight, setHeaderHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setHeaderHeight(window.innerHeight);
        });
    }, []);

    const array = ['tech1','tech2','tech3','tech4','tech5'];


    return (
        <div className="header" style={{ height: headerHeight }}>

            {
                array.map((el,i)=>(
                    <div key={el} className='header__tech-spinner-container' style={{'--rotationOffset':`${(360 / array.length) * i}deg`} as React.CSSProperties}>
                        <div className='header__tech-spinner-element'/>
                    </div>
                ))
            }

            <div className="header__background-container">
                <div className="header__background-layer--inner" />
                <div className="header__background-layer--center-pulse" />
                <div className="header__background-layer--outer" />
            </div>
        </div>
    );
};

export default Header;
