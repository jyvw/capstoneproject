import { render, screen, fireEvent } from '@testing-library/react';
import Bookingform from './Components/Bookingform';
import initializeTimes from './Functions/initializeTimes';
import updateTimes from './Functions/updateTimes';

test('Renders the BookingForm heading', () => {
  const availableTimes = ["00:00","00.01"];
  render(<Bookingform availableTimes={availableTimes}/>);
  const headingElement = screen.getByText("Book Now!");
  expect(headingElement).toBeInTheDocument();
})

test('initializeTimes renders the correct values', () => {
  const testinitavailableTimes = ["18:00"];
  render(<initializeTimes/>);
  const bool = (JSON.stringify(initializeTimes().availableTimes) === JSON.stringify(testinitavailableTimes))
  expect(bool).toBe(true);
})

test('updateTimes returns same value as state', () => {
  const mockstate = ["17:00"];
  const mockaction = {type: ""};
  render(<updateTimes/>)
  const state = updateTimes(mockstate,mockaction);
  const bool2 = (state === mockstate);
  expect(bool2).toBe(true)
})