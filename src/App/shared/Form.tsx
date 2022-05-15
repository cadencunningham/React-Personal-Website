import React, { useState, useEffect } from 'react';
import { IFormState } from '../../shared/interfaces/component';
import Button, { EButtonColor } from './Button';
import ReCAPTCHA from 'react-google-recaptcha';
import { RECAPTCHA_SITE_KEY } from '../../shared/constants/user';

interface IProps {
    formClassName?: string;
    formFieldClassName?: string;
    formTitle: string;
    initialFieldState: IFormState;
    onSubmit: (state: IFormState) => void;
    recaptcha?: boolean;
}

const Form = (props: IProps) => {
    const { recaptcha, formTitle, initialFieldState, formFieldClassName, formClassName, onSubmit } = props;
    const [formState, setFormState] = useState({
        state: initialFieldState,
        validState: {
            validRecaptcha: !recaptcha,
        },
    });

    const validValueChecker = (v?: string) => {
        return !!v && v.length > 0;
    };

    const onFieldChangeHandler = (key: string, value: string) => {
        setFormState((prevState) => {
            const newState = {
                ...prevState,
                state: {
                    ...prevState.state,
                    [key]: {
                        ...prevState.state[key],
                        value: value,
                    },
                },
            };

            if (key in prevState.validState) {
                newState.validState = {
                    ...prevState.validState,
                    [key]: validValueChecker(value),
                };
            }

            return newState;
        });
    };

    const onSubmitHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        onSubmit(formState.state);
    };

    const onReCAPTCHAChangeHandler = (v: any) => {
        setFormState((prevState) => ({
            ...prevState,
            validState: {
                ...prevState.validState,
                validRecaptcha: !!v,
            },
        }));
    };

    useEffect(() => {
        if (initialFieldState) {
            const initState = {
                state: {},
                validState: {
                    validRecaptcha: !recaptcha,
                },
            };
            Object.keys(initialFieldState).forEach((key) => {
                const fieldState = initialFieldState[key];

                Object(initState.state)[key] = {
                    ...fieldState,
                };

                if (fieldState.required) {
                    Object(initState.validState)[key] = validValueChecker(fieldState.value);
                }
            });

            setFormState(initState);
        }
    }, [initialFieldState, recaptcha]);

    return (
        <div className={['form', formClassName].join(' ')}>
            <h1 className="form_title">{formTitle}</h1>
            {Object.values(formState.state).map((field) =>
                field.textArea ? (
                    <textarea
                        key={field.key}
                        onBlur={(e) => onFieldChangeHandler(field.key, e.currentTarget.value)}
                        placeholder={field.placeholder + (field.required ? '*' : '')}
                        className={['form_field', formFieldClassName, field.className].join(' ')}
                        defaultValue={field.value}
                    />
                ) : (
                    <input
                        key={field.key}
                        onBlur={(e) => onFieldChangeHandler(field.key, e.currentTarget.value)}
                        placeholder={field.placeholder + (field.required ? '*' : '')}
                        type={field.type || 'text'}
                        className={['form_field', formFieldClassName, field.className].join(' ')}
                        defaultValue={field.value}
                    />
                )
            )}

            {recaptcha && <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={onReCAPTCHAChangeHandler} />}

            <Button
                text="Submit"
                type="submit"
                btnColor={EButtonColor.SECONDARY}
                btnClassName={'form_submit-btn'}
                onClickHandler={onSubmitHandler}
                disabled={Object.values(formState.validState).includes(false)}
            />
        </div>
    );
};

export default Form;
