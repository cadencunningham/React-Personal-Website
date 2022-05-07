import React from 'react';
import { AiOutlineMail, AiOutlineCalendar } from 'react-icons/ai';
import { INIT_COMM_FORM_STATE } from '../../shared/constants/form';
import { IFormState } from '../../shared/interfaces/component';
import Form from '../shared/Form';

const CONTACT_EMAIL_ADDRESS = 'xcadencunningham@gmail.com'

const ContactMePage = () => {
    const onFormSubmission = (formState:IFormState) => {
        console.log(formState)
    }

    const onEmailAppClick = () => {
        window.open(`mailto:${CONTACT_EMAIL_ADDRESS}?subject=Lets chat`)
    }

    return (
        <div className="contact_me">
            <div className='contact_me__container'>
                <div className='contact_me__container-half'>
                    <h1 className='contact_me__title'>Let's chat</h1>
                    <div className='contact_me__cta' onClick={onEmailAppClick}>
                        <div className='contact_me__cta--icon_container'>
                            <AiOutlineMail className='contact_me__cta--icon'/>
                        </div>
                        <div>
                            <div className='contact_me__cta--label'>
                                Contact me at
                                <br/>
                                <label className='contact_me__cta--email'>{CONTACT_EMAIL_ADDRESS}</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contact_me__container-half'>
                    <Form
                        formClassName='contact_me__form'
                        formTitle='Send me a message'
                        initialFieldState={INIT_COMM_FORM_STATE}
                        onSubmit={onFormSubmission}
                    />
                    <div className='contact_me__cta contact_me__cta-secondary'>
                        <h2 
                            style={{ paddingRight:'2rem'}}
                            className='contact_me__cta--label'
                        >
                            Schedule a call
                        </h2>
                        <div className='contact_me__cta--icon_container'>
                            <AiOutlineCalendar className='contact_me__cta--icon'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMePage;
