import './App.css';
import {Routes, Route} from 'react-router-dom';
import { useReducer } from 'react';
import Homepage from './Components/Hompage';
import Menupage from './Components/Menupage';
import Aboutpage from './Components/Aboutpage';
import Bookingpage from './Components/Bookingpage';
import initializeTimes from './Functions/initializeTimes';
import updateTimes from './Functions/updateTimes';

function App() {

  const [state, dispatch] = useReducer(updateTimes, initializeTimes())

  return (

    <>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/about" element={<Aboutpage/>}/>
      <Route path="/menu" element={<Menupage/>}/>
      <Route path="/bookingpage" element={<Bookingpage availableTimes={state.availableTimes} updateTimes={() => dispatch({type:'add slot'})}/>}/>
    </Routes>
    </>
  );
}

export default App;
