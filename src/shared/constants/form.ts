import { IFormState } from "../interfaces/component";

export const FORM_FIRST_NAME = 'firstName';
export const FORM_LAST_NAME = 'lastName';
export const FORM_EMAIL = 'email';
export const FORM_PHONE = 'phone';
export const FORM_MESSAGE = 'message';

export const INIT_COMM_FORM_STATE:IFormState = {
    [FORM_FIRST_NAME]:{
        key: FORM_FIRST_NAME,
        required: true,
        placeholder: 'First Name',
        className: 'form_field-half',
    },
    [FORM_LAST_NAME]:{
        key: FORM_LAST_NAME,
        placeholder:'Last Name',
        className: 'form_field-half',
    },
    [FORM_EMAIL]:{
        key: FORM_EMAIL,
        required: true,
        placeholder:'Email address',
    },
    [FORM_PHONE]:{
        key: FORM_PHONE,
        placeholder:'Phone',
    },
    [FORM_MESSAGE]:{
        key: FORM_MESSAGE,
        required: true,
        placeholder:'Message',
        textArea: true,
        className: 'form_field-large',
    }
}