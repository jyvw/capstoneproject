import Navbar from './Navbar';
import Bookingform from './Bookingform';
import Footernav from './Footernav';
import restaurant1 from "../Img/restaurant.jpg";


function Bookingpage(props) {

  return (
    <>
    <Navbar/>
    <div className='bookingpage'>
      <Bookingform state={props.state} dispatch={props.dispatch} submitForm={props.submitForm}/>
      <img src={restaurant1} alt='Little Lemon Restaurant'/>
    </div>
    <Footernav/>
    </>
  );
}

export default Bookingpage;