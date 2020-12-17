import React from 'react';
import ColorPicker from '../shared/ColorPicker';

const ColorPickers = () => {
    return (
        <div className="color-pickers">
            <ColorPicker rgba={{ r: 134, g: 194, b: 50 }} header="Primary Color - Light" />
            <ColorPicker rgba={{ r: 134, g: 194, b: 50 }} header="Primary Color - Dark" />
            <ColorPicker rgba={{ r: 134, g: 194, b: 50 }} header="Primary Secondary" />
        </div>
    );
};

export default ColorPickers;
