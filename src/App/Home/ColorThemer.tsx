import React from 'react';
import { RGBColor } from 'react-color';
import {
    DEFAULT_COLOR_PRIMARY_DARK,
    DEFAULT_COLOR_PRIMARY_LIGHT,
    DEFAULT_COLOR_SECONDARY,
    DEFAULT_COLOR_TERTIARY_DARK,
    DEFAULT_COLOR_TERTIARY_LIGHT,
    VAR_COLOR_PRIMARY_DARK,
    VAR_COLOR_PRIMARY_LIGHT,
    VAR_COLOR_SECONDARY,
    VAR_COLOR_TERTIARY_DARK,
    VAR_COLOR_TERTIARY_LIGHT,
} from '../../shared/constants/theme';
import ColorPicker from '../shared/ColorPicker';

const ColorThemer = () => {
    const onColorChangeHandler = (color: RGBColor, varString: string) => {
        document.documentElement.style.setProperty(varString, Object.values(color).slice(0, 3).toString());
    };

    return (
        <div className="color-themer__container">
            <div className="color-themer__header">Color Theme Pickers</div>
            <div className="color-themer__pickers">
                <ColorPicker
                    defaultRgba={DEFAULT_COLOR_PRIMARY_LIGHT}
                    header="Primary Color - Light"
                    onChangeHandler={(color) => onColorChangeHandler(color, VAR_COLOR_PRIMARY_LIGHT)}
                />
                <ColorPicker
                    defaultRgba={DEFAULT_COLOR_PRIMARY_DARK}
                    header="Primary Color - Dark"
                    onChangeHandler={(color) => onColorChangeHandler(color, VAR_COLOR_PRIMARY_DARK)}
                />
                <ColorPicker
                    defaultRgba={DEFAULT_COLOR_SECONDARY}
                    header="Secondary Color"
                    onChangeHandler={(color) => onColorChangeHandler(color, VAR_COLOR_SECONDARY)}
                />
                <ColorPicker
                    defaultRgba={DEFAULT_COLOR_TERTIARY_LIGHT}
                    header="Tertiary Color - Light"
                    onChangeHandler={(color) => onColorChangeHandler(color, VAR_COLOR_TERTIARY_LIGHT)}
                />
                <ColorPicker
                    defaultRgba={DEFAULT_COLOR_TERTIARY_DARK}
                    header="Tertiary Color - Dark"
                    onChangeHandler={(color) => onColorChangeHandler(color, VAR_COLOR_TERTIARY_DARK)}
                />
            </div>
        </div>
    );
};

export default ColorThemer;
