import Navbar from './Navbar';
import Bookingform from './Bookingform';
import Footernav from './Footernav';

function Bookingpage(props) {
  return (
    <>
    <Navbar/>
    <Bookingform availableTimes={props.availableTimes} updateTimes={props.updateTimes}/>
    <Footernav/>
    </>
  );
}

export default Bookingpage;