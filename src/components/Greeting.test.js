import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting Component', () => {
    test('renders Hello World as a text', () => {
        //arrange
        render(<Greeting />);

        //act
        //... nothing

        //assert
        const helloWordElement = screen.getByText('Hello World!', {
            exact: true
        });

        expect(helloWordElement).toBeInTheDocument();
    });

    test('renders good to se you if the button was NOT Clicked', () => {
        //arrange
        render(<Greeting />);

        //act
        //... nothing

        //assert
        const helloWordElement = screen.getByText('good to see you!', {
            exact: false
        });

        expect(helloWordElement).toBeInTheDocument();
    });

    test('renders Changed if the button was Clicked', () => {
        //arrange
        render(<Greeting />);

        //act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //assert
        const outputElement = screen.getByText('Changed!', {
            exact: true
        });

        expect(outputElement).toBeInTheDocument();
    });

    test('does not renders good to see you if the button was Clicked', () => {
        //arrange
        render(<Greeting />);

        //act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //assert
        const outputElement = screen.queryByText('good to see you', {
            exact: false
        });

        expect(outputElement).toBeNull();
    });


});

