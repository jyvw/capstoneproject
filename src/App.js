import './App.css';
import {Routes, Route} from 'react-router-dom';
import Homepage from './Components/Hompage';
import Menupage from './Components/Menupage';
import Aboutpage from './Components/Aboutpage';
import Bookingpage from './Components/Bookingpage';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/about" element={<Aboutpage/>}/>
      <Route path="/menu" element={<Menupage/>}/>
      <Route path="/bookingpage" element={<Bookingpage/>}/>
    </Routes>
    </>
  );
}

export default App;
