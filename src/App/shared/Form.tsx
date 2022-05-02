import React, {useState} from 'react';
import { IFormState } from '../../shared/interfaces/component';
import Button, { EButtonColor } from './Button';

interface IProps {
    formClassName?: string;
    formFieldClassName?: string;
    formTitle: string;
    initialFieldState: IFormState;
    onSubmit: (state:IFormState) => void
}

const Form = (props:IProps) => {
    const {formTitle, initialFieldState, formFieldClassName, formClassName} = props;
    const [formState, setFormState] = useState(initialFieldState)

    const onFieldChange = () => {
        // setFormState({})
        console.log(setFormState)
    }

    return(
        <div className={['form', formClassName].join(' ')}>
            <h1 className='form_title'>{formTitle}</h1>
            {
                Object.values(formState).map((field)=>(
                    <>
                        {field.label && <label className='form_field-label'>{field.label}</label>}
                        { field.textArea ?
                            <textarea 
                                onChange={onFieldChange}
                                placeholder={field.placeholder}
                                className={['form_field', formFieldClassName, field.className].join(' ')}
                            /> 
                            :
                            <input
                                onChange={onFieldChange}
                                placeholder={field.placeholder}
                                type={field.type||"text"}
                                className={['form_field', formFieldClassName, field.className].join(' ')}
                            />
                        }
                    </>
                ))
            }
            <Button 
                text='Submit' 
                type='submit' 
                btnColor={EButtonColor.SECONDARY}
                btnClassName='form_submit-btn'
            />
        </div>
    );
}

export default Form;