export const DEFAULT_COLOR_PRIMARY_LIGHT = { r: 134, g: 194, b: 50 };
export const DEFAULT_COLOR_PRIMARY_DARK = { r: 97, g: 137, b: 47 };
export const DEFAULT_COLOR_SECONDARY = { r: 37, g: 38, b: 41 };
export const DEFAULT_COLOR_TERTIARY_LIGHT = { r: 107, g: 110, b: 112 };
export const DEFAULT_COLOR_TERTIARY_DARK = { r: 71, g: 75, b: 79 };

export const VAR_COLOR_PRIMARY_LIGHT = '--color-primary-light';
export const VAR_COLOR_PRIMARY_DARK = '--color-primary-dark';
export const VAR_COLOR_SECONDARY = '--color-secondary';
export const VAR_COLOR_TERTIARY_LIGHT = '--color-tertiary-light';
export const VAR_COLOR_TERTIARY_DARK = '--color-tertiary-dark';

export const DEFAULT_COLOR_THEME_PICKERS_STATE = {
    [VAR_COLOR_PRIMARY_LIGHT]: {
        title: "Primary Color - Light",
        rgb: DEFAULT_COLOR_PRIMARY_LIGHT
    },
    [VAR_COLOR_PRIMARY_DARK]: {
        title:"Primary Color - Dark",
        rgb:DEFAULT_COLOR_PRIMARY_DARK
    },
    [VAR_COLOR_SECONDARY]: {
        title: "Secondary Color",
        rgb: DEFAULT_COLOR_SECONDARY
    },
    [VAR_COLOR_TERTIARY_LIGHT]: {
        title: "Tertiary Color - Light",
        rgb: DEFAULT_COLOR_TERTIARY_LIGHT
    },
    [VAR_COLOR_TERTIARY_DARK]: {
        title:"Tertiary Color - Dark",
        rgb:DEFAULT_COLOR_TERTIARY_DARK
    }
}
