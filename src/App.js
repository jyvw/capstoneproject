import './App.css';
import {Routes, Route} from 'react-router-dom';
import {useReducer} from 'react';
import initializeTimes from './Functions/initializeTimes';
import updateTimes from './Functions/updateTimes';
import Homepage from './Components/Hompage';
import Menupage from './Components/Menupage';
import Aboutpage from './Components/Aboutpage';
import Bookingpage from './Components/Bookingpage';

const initialState = initializeTimes();

function App() {

  const [state, dispatch] = useReducer(updateTimes,initialState)

  return (

    <>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/about" element={<Aboutpage/>}/>
      <Route path="/menu" element={<Menupage/>}/>
      <Route path="/bookingpage" element={<Bookingpage state={state} dispatch={dispatch}/>}/>
    </Routes>
    </>
  );
}

export default App;

