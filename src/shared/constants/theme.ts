export const DEFAULT_COLOR_PRIMARY_LIGHT = { r: 191, g: 189, b: 96 };
export const DEFAULT_COLOR_PRIMARY_DARK = { r: 207, g: 203, b: 19 };
export const DEFAULT_COLOR_SECONDARY = { r: 4, g: 4, b: 4 };
export const DEFAULT_COLOR_TERTIARY_LIGHT = { r: 201, g: 205, b: 209 };
export const DEFAULT_COLOR_TERTIARY_DARK = { r: 55, g: 56, b: 58 };

export const VAR_COLOR_PRIMARY_LIGHT = '--color-primary-light';
export const VAR_COLOR_PRIMARY_DARK = '--color-primary-dark';
export const VAR_COLOR_SECONDARY = '--color-secondary';
export const VAR_COLOR_TERTIARY_LIGHT = '--color-tertiary-light';
export const VAR_COLOR_TERTIARY_DARK = '--color-tertiary-dark';

export const DEFAULT_COLOR_THEME_PICKERS_STATE = {
    [VAR_COLOR_PRIMARY_LIGHT]: {
        title: 'Primary Color - Light',
        rgb: DEFAULT_COLOR_PRIMARY_LIGHT,
        headerClass:'color-picker__header--color-primary-light'
    },
    [VAR_COLOR_PRIMARY_DARK]: {
        title: 'Primary Color - Dark',
        rgb: DEFAULT_COLOR_PRIMARY_DARK,
        headerClass:'color-picker__header--color-primary-dark'
    },
    [VAR_COLOR_SECONDARY]: {
        title: 'Secondary Color',
        rgb: DEFAULT_COLOR_SECONDARY,
        headerClass:'color-picker__header--color-secondary'
    },
    [VAR_COLOR_TERTIARY_LIGHT]: {
        title: 'Tertiary Color - Light',
        rgb: DEFAULT_COLOR_TERTIARY_LIGHT,
        headerClass:'color-picker__header--color-tertiary-light'
    },
    [VAR_COLOR_TERTIARY_DARK]: {
        title: 'Tertiary Color - Dark',
        rgb: DEFAULT_COLOR_TERTIARY_DARK,
        headerClass:'color-picker__header--color-tertiary-dark'
    },
};
