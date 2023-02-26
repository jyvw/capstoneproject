import './App.css';
import {Routes, Route} from 'react-router-dom';
import { useReducer } from 'react';
import Homepage from './Components/Hompage';
import Menupage from './Components/Menupage';
import Aboutpage from './Components/Aboutpage';
import Bookingpage from './Components/Bookingpage';

function App() {

  const initializeTimes = {availableTimes:["18:00"]};
  const updateTimes = (state, action) => {
    switch (action.type) {
        case 'add slot':{
            return {availableTimes: [...state.availableTimes, "19:00"]};
        }
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(updateTimes, initializeTimes)

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
