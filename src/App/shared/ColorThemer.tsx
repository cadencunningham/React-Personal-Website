import React from 'react';
import { RGBColor } from 'react-color';
import { DEFAULT_COLOR_THEME_PICKERS_STATE } from '../../shared/constants/theme';
import { cssColorSetter } from '../../shared/utils/colorThemeHelpers';
import Card from './Card';
import ColorPicker from './ColorPicker';

interface IProps {
    colorThemeState: typeof DEFAULT_COLOR_THEME_PICKERS_STATE;
    colorThemeHeader?: string;
    onColorChangeHandler?: (color: RGBColor, varString: string) => void;
}

const ColorThemer = (props: IProps) => {
    const { colorThemeState, onColorChangeHandler, colorThemeHeader } = props;

    const _onColorChangeHandler = (color: RGBColor, varString: string) => {
        onColorChangeHandler?.(color, varString);
        cssColorSetter(color, varString);
    };

    return (
        <Card header={colorThemeHeader || 'Color Theme Pickers'}>
            <div className="color-themer__pickers">
                {Object.keys(colorThemeState).map((colorStateKey) => (
                    <ColorPicker
                        key={colorStateKey}
                        rgba={Object(colorThemeState)[colorStateKey].rgb}
                        header={Object(colorThemeState)[colorStateKey].title}
                        onChangeHandler={(color) => _onColorChangeHandler(color, colorStateKey)}
                    />
                ))}
            </div>
        </Card>
    );
};

export default ColorThemer;
