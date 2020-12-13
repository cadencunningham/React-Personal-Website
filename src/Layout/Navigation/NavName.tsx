import React, { useEffect } from 'react';

const NavName = () => {
    useEffect(() => {
        document.addEventListener('scroll', () => {
            const windowHeight = window.innerHeight / 2;
            const currentHeight = window.pageYOffset;
            const heightDifference = windowHeight - currentHeight;
            const newFontSize = (heightDifference / windowHeight) * 8;
            const newNameHeight = (heightDifference / windowHeight) * 50;

            let style = `font-size:${newFontSize >= 4 ? newFontSize : 4}rem;`;
            style =
                style + (newNameHeight >= 4.315 ? `top:${newNameHeight}vh` : `transform:translate(-50%,0%);top:unset;`);

            document.getElementsByClassName('nav-name')[0].setAttribute('style', style);
        });
    }, []);

    return <label className="nav-name">Caden Cunningham</label>;
};

export default NavName;
