import { IFormState } from "../interfaces/component";

export const FORM_FIRST_NAME = 'firstName';
export const FORM_LAST_NAME = 'lastName';
export const FORM_EMAIL = 'email';
export const FORM_SUBJECT = 'subject';
export const FORM_MESSAGE = 'message';

export const INIT_COMM_FORM_STATE:IFormState = {
    [FORM_FIRST_NAME]:{
        key: FORM_FIRST_NAME,
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
        placeholder:'Email address',
    },
    [FORM_SUBJECT]:{
        key: FORM_SUBJECT,
        placeholder:'Subject',
    },
    [FORM_MESSAGE]:{
        key: FORM_MESSAGE,
        placeholder:'Message',
        textArea: true,
        className: 'form_field-large',
    }
}