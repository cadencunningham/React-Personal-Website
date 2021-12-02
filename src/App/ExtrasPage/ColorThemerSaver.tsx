import React, { useState } from 'react';
import { RGBColor } from 'react-color';
import { DEFAULT_COLOR_THEME_PICKERS_STATE } from '../../shared/constants/theme';
import {
    cssColorThemeSetter,
    getColorThemeFromLs,
    restoreCssThemeFromLs,
    setColorThemeLs,
} from '../../shared/utils/colorThemeHelpers';
import Button, { EButtonColor } from '../shared/Button';
import ColorThemer from '../shared/ColorThemer';

const ColorThemerSaver = () => {
    const [pageColorTheme, setPageColorTheme] = useState(getColorThemeFromLs());

    const customColorSaveHandler = () => {
        setColorThemeLs(pageColorTheme);
    };

    const customColorCancelHandler = () => {
        setPageColorTheme(() => {
            restoreCssThemeFromLs();
            return DEFAULT_COLOR_THEME_PICKERS_STATE;
        });
    };

    const customColorRestoreDefaultHandler = () => {
        setPageColorTheme(() => {
            cssColorThemeSetter(DEFAULT_COLOR_THEME_PICKERS_STATE);
            return DEFAULT_COLOR_THEME_PICKERS_STATE;
        });
    };

    const onColorChangeHandler = (color: RGBColor, varString: string) => {
        setPageColorTheme((prevState) => ({
            ...prevState,
            [varString]: {
                ...Object(prevState)[varString],
                rgb: color,
            },
        }));
    };

    return (
        <div className="extras__color-themer-saver">
            <ColorThemer colorThemeState={pageColorTheme} onColorChangeHandler={onColorChangeHandler} />
            <div className="extras__color-themer-saver__btn-cntr">
                <Button
                    btnClassName="extras__color-themer-save__mr-btn"
                    text={'Restore Default'}
                    onClickHandler={customColorRestoreDefaultHandler}
                    btnColor={EButtonColor.SECONDARY}
                />
                <div>
                    <Button
                        btnClassName="extras__color-themer-saver__mr-btn"
                        text={'Save'}
                        onClickHandler={customColorSaveHandler}
                        btnColor={EButtonColor.SECONDARY}
                    />
                    <Button text={'Cancel'} onClickHandler={customColorCancelHandler} />
                </div>
            </div>
        </div>
    );
};

export default ColorThemerSaver;
