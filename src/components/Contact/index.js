import React from 'react';

function ContactForm() {
    return (
        <section>
            <h1>
                <form id='contact-form'>
                    //name
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' name='name' />
                    </div>
                    //email
                    <div >
                        <label htmlFor='email'>Email:</label>
                        <input type='email' name='email' />
                    </div>
                    //message
                    <div>
                    <label>Message:</label>
                    <textarea name='message' rows='5' />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </h1>
        </section>
    );
}

export default ContactForm;
