import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen} from '@testing-library/react';

import {RadioButton} from './RadioButton';

describe("testing RadioButton component", () => {
    test("should render 3 Button", () => {
        render(<RadioButton />);

        screen.debug();

        expect(screen.getByLabelText("React")).toBeChecked();
    })

    test("Button click", async () => {
        render(<RadioButton />);

        const button = screen.getByLabelText("Angular");

        await userEvent.click(button);

        screen.debug();

        expect(screen.getByLabelText("Angular")).toBeChecked();
    })
})
