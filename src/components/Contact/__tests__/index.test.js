import React from 'react';
import {render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(
            <ContactForm/>
        )
    })

    it('matches snapshot', () => {
        const { asFragment } = render(
            <ContactForm/>
        )

        expect(asFragment()).toMatchSnapshot();
    })
})

describe('links are visible', () => {
    it('elements are targeted', () => {
        const { getByTestId } = render(<ContactForm/>);

        expect(getByTestId('contact-header')).toHaveTextContent('Contact Me');
        expect(getByTestId('submit-btn')).toHaveTextContent('Submit');
    })
})