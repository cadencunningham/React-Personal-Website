import React from 'react';

export enum EButtonColor {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface IProps {
    text: string;
    btnClassName?: string;
    btnColor?: EButtonColor;
    onClickHandler?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    disableRipple?: boolean;
    selected?: boolean;
    type?: 'button' | 'submit' | 'submit' | undefined;
    disabled?: boolean;
}

const Button = (props: IProps) => {
    const { disabled, text, disableRipple, onClickHandler, selected, btnClassName, btnColor, type } = props;

    const addRipple = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (!disableRipple) {
            const button = event.currentTarget;
            const circle = document.createElement('span');
            const animation_classname = 'button_' + (btnColor || EButtonColor.PRIMARY) + '__ripple-root__animation';

            const diameter = Math.max(button.clientWidth, button.clientHeight);
            const radius = diameter / 2;

            circle.style.width = circle.style.height = `${diameter}px`;
            circle.style.left = `${event.pageX - button.offsetLeft - radius}px`;
            circle.style.top = `${event.pageY - button.offsetTop - radius}px`;

            circle.classList.add('button__ripple-root__animation', animation_classname);

            const ripple = button.getElementsByClassName(animation_classname)[0];
            if (ripple) {
                ripple.remove();
            }

            const childSpan = button.lastChild;
            childSpan?.appendChild(circle);
        }
    };

    const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onClickHandler?.(event);
    };

    return (
        <button
            onMouseDown={addRipple}
            type={type}
            className={[
                'button',
                'button_' + (btnColor || EButtonColor.PRIMARY),
                selected ? 'button_' + (btnColor || EButtonColor.PRIMARY) + '--selected' : '',
                btnClassName ? btnClassName : '',
            ].join(' ')}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
            <span className={'button__ripple-root button_' + (btnColor || EButtonColor.PRIMARY) + '__ripple-root'} />
        </button>
    );
};

export default Button;
