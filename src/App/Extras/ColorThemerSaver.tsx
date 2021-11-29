import React from 'react';
import Button from '../shared/Button';
import ColorThemer from '../shared/ColorThemer';

const ColorThemerSaver = () => {

    const customColorSaveHandler = () => {
        //add ls setter logic
    }
    const customColorCancelHandler = () => {
        try{}catch{}
        //need try catch for trying to reset since we may not be able to reference the local storage
        // util function for setting default colors so that can referenced here and in the base file for pulling ls data
    }

    //add custom color classes - primary / secondary / etc. Will need class enum rep
    // add functionality for the save and cancel feature

    //look into setting the name scroll part for only the home page

    return (
        <div className='color-themer-saver'>
            <ColorThemer/>
            <div className='color-themer-saver__btn-cntr'>
                <Button 
                    btnClassName='color-themer-saver__save-btn'
                    text={'Save'}
                    onClickHandler={customColorSaveHandler}
                />
                <Button 
                    text={'Cancel'}
                    onClickHandler={customColorCancelHandler}
                />
            </div>
        </div>
    )
}

export default ColorThemerSaver;