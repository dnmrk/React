import { render, screen } from '@testing-library/react';
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

});

