import React from 'react';
import { createPortal } from 'react-dom';
import Backdrop from './Backdrop';

interface IProps {
    children?: JSX.Element;
    active?: boolean;
    onClose?: () => void;
    className?: string;
}

const Modal = (props: IProps) => {
    const { active, onClose, children, className } = props;

    if (!active) {
        return null;
    }

    return createPortal(
        <>
            <Backdrop onClick={onClose} />
            <div className={['modal', className ? className : ''].join(' ')}>{children}</div>
        </>,
        document.body
    );
};

export default Modal;
