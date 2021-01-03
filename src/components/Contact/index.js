import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState(
        { 
            name: '',
            email: '',
            message: ''
        });

    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            // console.log(isValid); returns a boolean
            if (!isValid) {
                setErrorMessage('Your email sucks, learn how to type!');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) { //strings are arrays
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        // console.log('errorMessage', errorMessage);

        if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value })
        // console.log(e);
        }
    }
    // console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(formState);
    }

    return (
        <section>
            <h1>
                <form id='contact-form' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' defaultValue={name} onBlur={handleChange} name='name' />
                    </div>
                    <div >
                        <label htmlFor='email'>Email:</label>
                        <input type='email' defaultValue={email} onBlur={handleChange} name='email' />
                    </div>
                    <div>
                    <label>Message:</label>
                    <textarea name='message' defaultValue={message} onBlur={handleChange} rows='5' />
                    </div>
                    {
                        errorMessage && (
                            <div>
                                <p className='error-text'>{errorMessage}</p>
                            </div>
                        )
                    }
                    <button type='submit'>Submit</button>
                </form>
            </h1>
        </section>
    );
}

export default ContactForm;
