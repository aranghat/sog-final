import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import {sayHello} from './util';


test('check if the heading is renderd', () => {
    // Arrange
    let result = render(<App />);

    //Act
    let heading = result.container.querySelector('h1');
    
    //Assert
    expect(heading).toBeInTheDocument();
    expect(heading).toContainHTML('My Awsome Restaurent');
})


test('check if the heading is renderd after click', () => {
    // Arrange
    let result = render(<App />);
    //Act
    let heading = result.container.querySelector('h1');
    let button = result.container.querySelector('button');

    //Assert
    expect(heading).toBeInTheDocument();
    expect(heading).toContainHTML('My Awsome Restaurent');

    fireEvent.click(button);

    expect(heading).toContainHTML('Hello Restaurent');
})

test('check say hello returns current data', () => {
    // Arrange
    let name = 'John';
    let result = 'Hello John';

    //Act
    let actual = sayHello(name);

    //Assert
    expect(actual).toBe(result);

})