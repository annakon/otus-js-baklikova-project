import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen} from '@testing-library/react';

import {RadioButton} from './RadioButton';
import {store} from "../store/store";
import { Provider } from "react-redux";

describe("testing RadioButton component", () => {
    test("should render 3 Button", () => {
        render(<Provider store={store}><RadioButton /></Provider>);

        screen.debug();

        expect(screen.getByLabelText("React")).toBeChecked();
    })

    test("Button click", async () => {
        render(<Provider store={store}><RadioButton /></Provider>);

        const button = screen.getByLabelText("Angular");

        await userEvent.click(button);

        screen.debug();

        expect(screen.getByLabelText("Angular")).toBeChecked();
    })
})
