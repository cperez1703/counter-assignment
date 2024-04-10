import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Counter from "../components/Counter";

beforeEach(() => {
  render(<Counter/>);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText('Counter');

  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const counterDisplay = screen.getByTestId('count');

  expect(counterDisplay).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText('+');
  const counterDisplay = screen.getByTestId('count');
  
  userEvent.click(incrementButton);
  
  expect(counterDisplay).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByText('-');
  const counterDisplay = screen.getByTestId('count');
  
  userEvent.click(decrementButton);
  
  expect(counterDisplay).toHaveTextContent('-1');
});
