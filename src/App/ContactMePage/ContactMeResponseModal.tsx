import React from 'react';
import Button, { EButtonColor } from '../shared/Button';
import LoadingSpinner from '../shared/LoadingSpinner';
import Modal from '../shared/Modal';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';


interface IProps{
    active:boolean;
    error?:boolean;
    sending?:boolean;
    onClose:()=>void;
}

const ContactMeResponseModal = (props:IProps) => {
    const {active, onClose, sending, error} = props;
    return(
        <Modal
            active={active}
            onClose={!sending?onClose:()=>{}}
        >
            <>
                {   
                    !error ?
                        <div className='gen__no_wrap contact_me__modal--no_error'>
                            {
                                sending ?
                                    <>
                                        <h1>Message Sending</h1>
                                        <LoadingSpinner/>
                                    </>:
                                    <>
                                        <h1>Message Sent</h1>
                                        <div className='contact_me__icon_container contact_me__icon_container--success'>
                                            <IoMdCheckmarkCircleOutline className='contact_me__icon'/>
                                        </div>
                                    </>
                            }
                        </div>
                    :
                    <div className='contact_me__modal--error'>There was an error when sending your message. Please try again or try another form of contact.</div>
                }
                {
                    !sending &&
                    <div className='contact_me__modal--btn-container'>
                        <Button
                            btnClassName=""
                            text={'Close'}
                            onClickHandler={onClose}
                            btnColor={EButtonColor.SECONDARY}
                        />
                    </div>
                }
            </>
        </Modal>
    )
}

export default ContactMeResponseModal;