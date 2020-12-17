export interface IListElement {
    label: string;
    value?: string;
    completed?: boolean;
    active?: boolean;
}

export interface IRgbaObject {
    r: number;
    g: number;
    b: number;
    a?: number;
}
