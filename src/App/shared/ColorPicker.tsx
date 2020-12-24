import React, { useEffect, useState } from 'react';
import { ColorResult, RGBColor, SketchPicker } from 'react-color';

interface IProps {
    defaultRgba?: RGBColor;
    rgba?: RGBColor;
    header?: string;
    headerClassName?: string;
    containerClassName?: string;
    onChangeHandler?: (color: RGBColor) => void;
}

const ColorPicker = (props: IProps) => {
    const { rgba, header, headerClassName, containerClassName, defaultRgba, onChangeHandler } = props;
    const [color, setColor] = useState(defaultRgba);

    const onChange = (e: ColorResult) => {
        const newRgb = e.rgb;

        if (!rgba) {
            setColor(e.rgb);
        }

        onChangeHandler?.(newRgb);
    };

    useEffect(() => {
        if (rgba) {
            setColor(rgba);
        }
    }, [rgba]);

    return (
        <div className={['color-picker__container', containerClassName || ''].join(' ')}>
            <div className={['color-picker__header', headerClassName || ''].join(' ')}>{header}</div>
            <SketchPicker
                className="color-picker__picker"
                width="50%"
                disableAlpha
                color={color}
                onChange={onChange}
                presetColors={[]}
            />
        </div>
    );
};

export default ColorPicker;
