import './App.css';
import {Routes,Route,useNavigate} from 'react-router-dom';
import {useReducer} from 'react';
import initializeTimes from './Functions/initializeTimes';
import updateTimes from './Functions/updateTimes';
import submitAPI from './API/submitAPI';
import Homepage from './Components/Hompage';
import Menupage from './Components/Menupage';
import Aboutpage from './Components/Aboutpage';
import Bookingpage from './Components/Bookingpage';
import Bookingconfirmedpage from './Components/Bookingconfirmedpage';

const initialState = initializeTimes();

function App() {

  const [state, dispatch] = useReducer(updateTimes,initialState)

  const navigate = useNavigate();
  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/bookingpage/bookingconfirmed");
    }
  }

  return (

    <>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/about" element={<Aboutpage/>}/>
      <Route path="/menu" element={<Menupage/>}/>
      <Route path="/bookingpage" element={<Bookingpage state={state} dispatch={dispatch} submitForm={submitForm}/>}/>
      <Route path="/bookingpage/bookingconfirmed" element={<Bookingconfirmedpage/>}/>
    </Routes>
    </>
  );
}

export default App;

