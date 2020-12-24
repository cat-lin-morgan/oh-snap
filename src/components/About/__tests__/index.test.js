import React from 'react';
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import About from '..';

//won't have any leftover memory data that could give us false results
afterEach(cleanup);

describe('About component', () => {
    it ('renders', () => {
        render(<About />)
    });


})