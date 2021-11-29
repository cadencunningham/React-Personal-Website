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
import Card from './Card';
import ColorPicker from './ColorPicker';

interface IProps{
    onColorChangeHandler?: (color: RGBColor, varString: string)=>void
}

const ColorThemer = (props:IProps) => {
    const {onColorChangeHandler} = props;
    
    const _onColorChangeHandler = (color: RGBColor, varString: string) => {
        onColorChangeHandler && onColorChangeHandler(color, varString);
        document.documentElement.style.setProperty(varString, Object.values(color).slice(0, 3).toString());
    };

    return (
        <Card header={'Color Theme Pickers'}>
            <div className="color-themer__pickers">
                <ColorPicker
                    defaultRgba={DEFAULT_COLOR_PRIMARY_LIGHT}
                    header="Primary Color - Light"
                    onChangeHandler={(color) => _onColorChangeHandler(color, VAR_COLOR_PRIMARY_LIGHT)}
                />
                <ColorPicker
                    defaultRgba={DEFAULT_COLOR_PRIMARY_DARK}
                    header="Primary Color - Dark"
                    onChangeHandler={(color) => _onColorChangeHandler(color, VAR_COLOR_PRIMARY_DARK)}
                />
                <ColorPicker
                    defaultRgba={DEFAULT_COLOR_SECONDARY}
                    header="Secondary Color"
                    onChangeHandler={(color) => _onColorChangeHandler(color, VAR_COLOR_SECONDARY)}
                />
                <ColorPicker
                    defaultRgba={DEFAULT_COLOR_TERTIARY_LIGHT}
                    header="Tertiary Color - Light"
                    onChangeHandler={(color) => _onColorChangeHandler(color, VAR_COLOR_TERTIARY_LIGHT)}
                />
                <ColorPicker
                    defaultRgba={DEFAULT_COLOR_TERTIARY_DARK}
                    header="Tertiary Color - Dark"
                    onChangeHandler={(color) => _onColorChangeHandler(color, VAR_COLOR_TERTIARY_DARK)}
                />
            </div>
        </Card>
    );
};

export default ColorThemer;
