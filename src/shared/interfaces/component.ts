export interface IListElement {
    label: string;
    value?: string;
    completed?: boolean;
    active?: boolean;
}

export interface IFormState {
    [key: string]:IFormStateEntry
}

export interface IFormStateEntry {
    label?: string;
    placeholder?: string;
    value?: string;
    key: string;
    type?: string;
    className?: string;
    textArea?: boolean;
}
