import { render, screen, fireEvent } from '@testing-library/react';
import { Counter, Greeting, AlertButton } from './latihan';
import '@testing-library/jest-dom';
import React from 'react';

describe('Counter Component', () => {
  test('Counter Default Value must be 0', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counter-value');
    expect(counterValue).toHaveTextContent('0');
  });

  test('increment works when button clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId('increment-button');
    const counterValue = screen.getByTestId('counter-value');
    
    fireEvent.click(incrementButton);
    expect(counterValue).toHaveTextContent('1');
  });

  test('decrement works when button clicked', () => {
    render(<Counter />);
    const decrementButton = screen.getByTestId('decrement-button');
    const counterValue = screen.getByTestId('counter-value');
    
    fireEvent.click(decrementButton);
    expect(counterValue).toHaveTextContent('-1');
  });

  test('reset the count using reset button', () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId('increment-button');
    const resetButton = screen.getByTestId('reset-button');
    const counterValue = screen.getByTestId('counter-value');
    
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(resetButton);
    expect(counterValue).toHaveTextContent('0');
  });
});

describe('Greeting Component', () => {
  test('greeting component {nama kalian}', () => {
    render(<Greeting name="Reza Nagita" />);
    const greeting = screen.getByTestId('greeting');
    expect(greeting).toHaveTextContent('Hello, Reza Nagita');
  });

  test('greeting component {nama dosen kalian}', () => {
    render(<Greeting name="Farid Suryanto" />);
    const greeting = screen.getByTestId('greeting');
    expect(greeting).toHaveTextContent('Hello, Farid Suryanto');
  });
});

describe('AlertButton Component', () => {
  test('triggers alert with correct message when clicked', () => {
    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<AlertButton message="Test Alert" />);
    const alertButton = screen.getByTestId('alert-button');
    
    fireEvent.click(alertButton);
    expect(mockAlert).toHaveBeenCalledWith('Test Alert');
    
    mockAlert.mockRestore();
  });
});
