import React, {useEffect, useState} from 'react';
import { AiOutlineMail, AiOutlineCalendar } from 'react-icons/ai';
import * as CONTACT_FORM_CONSTANTS from '../../shared/constants/form';
import * as USER_CONSTANTS from '../../shared/constants/user';
import { IFormState } from '../../shared/interfaces/component';
import Form from '../shared/Form';
import ContactMeResponseModal from './ContactMeResponseModal';
import emailjs from "emailjs-com";

interface IModalState{
    sending?:boolean;
    error?:boolean;
}

const ContactMePage = () => {
    const [formState, setFormState] = useState(CONTACT_FORM_CONSTANTS.INIT_COMM_FORM_STATE);
    const [modalState, setModalState] = useState<IModalState|null>(null)

    const submitFormToService = async (form:IFormState) => {
        setModalState({
            sending:true
        })

        var templateParams = {
            first_name: form[CONTACT_FORM_CONSTANTS.FORM_FIRST_NAME].value,
            last_name: form[CONTACT_FORM_CONSTANTS.FORM_LAST_NAME].value,
            email: form[CONTACT_FORM_CONSTANTS.FORM_EMAIL].value,
            phone: form[CONTACT_FORM_CONSTANTS.FORM_PHONE].value,
            message: formState[CONTACT_FORM_CONSTANTS.FORM_MESSAGE].value,
        };

        await emailjs.send(
            USER_CONSTANTS.EMAILJS_SERVICE_ID, 
            USER_CONSTANTS.EMAILJS_TEMPLATE_ID, 
            templateParams, 
            USER_CONSTANTS.EMAILJS_PUBLIC_KEY
        ).then(function() {
            setModalState({})
         }, function() {
            setModalState({error:true})
         });
    }

    useEffect(()=>{
        if(JSON.stringify(formState) !== JSON.stringify(CONTACT_FORM_CONSTANTS.INIT_COMM_FORM_STATE)){
            submitFormToService(formState) 
        }

    },[formState])

    const onFormSubmission = async (formState:IFormState) => {
        setFormState(formState);
    }

    const onEmailAppClickHandler = () => {
        window.open(`mailto:${USER_CONSTANTS.CONTACT_EMAIL_ADDRESS}?subject=Lets chat`)
    }

    const onScheduleClickHandler = () => {
        window.open(USER_CONSTANTS.BOOK_ME_LINK)
    }

    const onModalCloseHandler = () => {
        setModalState(null)
    }

    return (
        <>
            {
                <ContactMeResponseModal 
                    active={!!modalState} 
                    onClose={onModalCloseHandler} 
                    sending={modalState?.sending}
                    error={modalState?.error}
                />
            }
            <div className="contact_me">
                <div className='contact_me__container'>
                    <div className='contact_me__container-half'>
                        <h1 className='contact_me__title'>Let's chat</h1>
                        <div className='contact_me__cta' onClick={onEmailAppClickHandler}>
                            <div className='contact_me__icon_container'>
                                <AiOutlineMail className='contact_me__icon'/>
                            </div>
                            <div>
                                <div className='contact_me__cta--label'>
                                    Contact me at
                                    <br/>
                                    <label className='contact_me__cta--email'>{USER_CONSTANTS.CONTACT_EMAIL_ADDRESS}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='contact_me__container-half'>
                        <Form
                            formClassName='contact_me__form'
                            formTitle='Send me a message'
                            initialFieldState={CONTACT_FORM_CONSTANTS.INIT_COMM_FORM_STATE}
                            onSubmit={onFormSubmission}
                            recaptcha
                        />
                        <div className='contact_me__cta contact_me__cta-secondary' onClick={onScheduleClickHandler}>
                            <h2 
                                style={{ paddingRight:'2rem'}}
                                className='contact_me__cta--label'
                            >
                                Schedule a call
                            </h2>
                            <div className='contact_me__icon_container'>
                                <AiOutlineCalendar className='contact_me__icon'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactMePage;
