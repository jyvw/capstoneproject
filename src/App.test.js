import { render, screen, fireEvent } from '@testing-library/react';
import fetchAPI from './API/fetchAPI';
import Bookingform from './Components/Bookingform';
import initializeTimes from './Functions/initializeTimes';
import updateTimes from './Functions/updateTimes';

test('Renders the BookingForm heading', () => {
  const mockstate = {availableTimes:[""]};
  const mockdispatch = jest.fn();
  const mockSubmit = jest.fn();
  render(<Bookingform state={mockstate} map={mockdispatch} dispatch={mockdispatch} submitForm={mockSubmit}/>);
  const headingElement = screen.getByText("Book Now!");
  expect(headingElement).toBeInTheDocument();
})

test('initializeTimes renders the correct values', () => {
  const testinitavailableTimes = fetchAPI(new Date());
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
