import { RGBColor } from 'react-color';
import { PAGE_THEME_COLORS } from '../constants/localStorage';
import { DEFAULT_COLOR_THEME_PICKERS_STATE } from '../constants/theme';

export const setColorThemeLs = (pageColorTheme: typeof DEFAULT_COLOR_THEME_PICKERS_STATE) => {
    localStorage.setItem(PAGE_THEME_COLORS, JSON.stringify(pageColorTheme));
};

export const getColorThemeFromLs = () => {
    try {
        const savedColorTheme = localStorage.getItem(PAGE_THEME_COLORS);

        if (savedColorTheme) {
            const parsedValue: typeof DEFAULT_COLOR_THEME_PICKERS_STATE = JSON.parse(savedColorTheme);
            return parsedValue;
        }
    } catch (e) {
        console.log('There was an error when setting the color theme: ', e);
        return DEFAULT_COLOR_THEME_PICKERS_STATE;
    }

    return DEFAULT_COLOR_THEME_PICKERS_STATE;
};

export const cssColorSetter = (color: RGBColor, varString: string) => {
    document.documentElement.style.setProperty(varString, Object.values(color).slice(0, 3).toString());
};

export const cssColorThemeSetter = (pageColorTheme: typeof DEFAULT_COLOR_THEME_PICKERS_STATE) => {
    Object.keys(pageColorTheme).forEach((colorKey) => {
        const colorObj = Object(pageColorTheme)[colorKey];
        cssColorSetter(colorObj.rgb, colorKey);
    });
};

export const restoreCssThemeFromLs = () => {
    const savedColorTheme = getColorThemeFromLs();

    if (savedColorTheme) {
        cssColorThemeSetter(savedColorTheme);
    }
};
