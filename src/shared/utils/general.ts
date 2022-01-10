export const throttleFunc = (func: () => void, delay: number) => {
    let time = Date.now();
    return () => {
        if (time + delay - Date.now() < 0) {
            func();
            time = Date.now();
        }
    };
};

export const openLinkInNewTabHandler = (link: string) => {
    window.open(link);
};
