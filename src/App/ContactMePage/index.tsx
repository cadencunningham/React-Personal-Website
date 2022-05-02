import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { INIT_COMM_FORM_STATE } from '../../shared/constants/form';
import { IFormState } from '../../shared/interfaces/component';
import Form from '../shared/Form';

const ContactMePage = () => {
    const onFormSubmission = (formState:IFormState) => {
        console.log(formState)
    }

    return (
        <div className="contact_me">
            <div className='contact_me__container'>
                <div className='contact_me__container-half'>
                    <h1 className='contact_me__title'>Let's chat</h1>
                    <div className='contact_me__cta-email'>
                        <div className='contact_me__cta-email--icon_container'>
                            <AiOutlineMail className='contact_me__cta-email--icon'/>
                        </div>
                        <div>
                            <div style={{fontSize:'2rem'}}>
                                Contact me at
                                <br/>
                                <label className='contact_me__cta-email--email'>xcadencunningham@gmail.com</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contact_me__container-half'>
                    <Form
                        formTitle='Send me a message'
                        initialFieldState={INIT_COMM_FORM_STATE}
                        onSubmit={onFormSubmission}
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactMePage;
