import React from 'react';

interface IProps {
    text: string;
    onClickHandler?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    disableRipple?: boolean;
}

const Button = (props: IProps) => {
    const { text, disableRipple, onClickHandler } = props;

    const addRipple = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log('Ripple');
        if (!disableRipple) {
            const button = event.currentTarget;
            const circle = document.createElement('span');

            const diameter = Math.max(button.clientWidth, button.clientHeight);
            const radius = diameter / 2;

            circle.style.width = circle.style.height = `${diameter}px`;
            circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
            circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
            circle.classList.add('button__ripple-root__animation');

            const ripple = button.getElementsByClassName('button__ripple-root__animation')[0];

            if (ripple) {
                ripple.remove();
            }

            button.appendChild(circle);
        }
    };

    const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log('CLICK');
        onClickHandler?.(event);
    };

    return (
        <button onMouseDown={addRipple} className="button" onClick={onClick}>
            <span className="button__ripple-root" />
            {text}
        </button>
    );
};

export default Button;
