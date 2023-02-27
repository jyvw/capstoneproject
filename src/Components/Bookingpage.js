import Navbar from './Navbar';
import Bookingform from './Bookingform';
import Footernav from './Footernav';

function Bookingpage(props) {

  return (
    <>
    <Navbar/>
    <Bookingform state={props.state} dispatch={props.dispatch}/>
    <Footernav/>
    </>
  );
}

export default Bookingpage;