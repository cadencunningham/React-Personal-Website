import React, { useEffect, useState } from 'react';
import { ColorResult, RGBColor, SliderPicker } from 'react-color';
import { IRgbaObject } from '../../shared/interfaces/component';

interface IProps {
    defaultRgba?: IRgbaObject;
    rgba?: IRgbaObject;
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
            <div
                className={['color-picker__header', headerClassName || ''].join(' ')}
                style={{ color: `rgba(${color && Object.values(color).toString()})` }}
            >
                {header}
            </div>
            <SliderPicker color={color} onChange={onChange} />
        </div>
    );
};

export default ColorPicker;
