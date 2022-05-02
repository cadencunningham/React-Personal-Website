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
    const {formTitle, initialFieldState, formFieldClassName, formClassName, onSubmit} = props;
    const [formState, setFormState] = useState(initialFieldState)

    const onFieldChange = (key:string, value:string) => {
        setFormState(prevState => ({
            ...prevState,
            [key]:{
                ...prevState[key],
                value:value
            }
        }))
    }

    const onSubmitHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        onSubmit(formState)
    }

    return(
        <div className={['form', formClassName].join(' ')}>
            <h1 className='form_title'>{formTitle}</h1>
            {
                Object.values(formState).map((field)=>(
                    <>
                        { field.textArea ?
                            <textarea
                                key={field.key}
                                onChange={(e)=>onFieldChange(field.key, e.currentTarget.value)}
                                placeholder={field.placeholder}
                                className={['form_field', formFieldClassName, field.className].join(' ')}
                            /> 
                            :
                            <input
                                key={field.key}
                                onChange={(e)=>onFieldChange(field.key, e.currentTarget.value)}
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
                onClickHandler={onSubmitHandler}
            />
        </div>
    );
}

export default Form;