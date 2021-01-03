import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';
import { photoPlural } from '../../../constants';

const mockCurrentPhoto = { ...photoPlural[0], index: 0};
const mockToggleModal = jest.fn();

afterEach(cleanup);

describe('modal component', () => {
    it('renders', () => {
         render(
            <Modal
            onClose={mockToggleModal}
            currentPhoto={mockCurrentPhoto}
            />
        )
    })

    it('matches snapshot', () => {
        const { asFragment } = render(
           <Modal
           onClose={mockToggleModal}
           currentPhoto={mockCurrentPhoto}
           />
       )

       expect(asFragment()).toMatchSnapshot();
   })
})

describe('Click Event', () => {
    it('call onClose handler', () => {
        const { getByTestId } = render(
            <Modal
            onClose={mockToggleModal}
            currentPhoto={mockCurrentPhoto}
            />
        );
        fireEvent.click(getByTestId('close-modal'));
        expect(mockToggleModal).toHaveBeenCalledTimes(2);
    });
})

//ffffffff