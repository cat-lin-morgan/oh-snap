import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gallery from '..';
import { categories } from '../../../mocks';

afterEach(cleanup)

describe('Gallery is rendering', () => {

    it('renders', () => {
        const { getByTestId } = render(<Gallery currentCategory={categories[0]} />)
        expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
    })

    it('matches snapshot', () => {
        const { asFragment } = render(<Gallery currentCategory={categories[0]} />)
        expect(asFragment()).toMatchSnapshot()
    })
})

