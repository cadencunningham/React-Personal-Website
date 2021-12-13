import React from 'react';

interface IProps{
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const Backdrop = (props:IProps) => {
    const {onClick} = props;

    return(
        <div className='backdrop' onClick={onClick}/>
    )

}

export default Backdrop;