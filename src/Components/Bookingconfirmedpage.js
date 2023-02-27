import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footernav from './Footernav';
import restaurant2 from "../Img/Mario and Adrian A.jpg";
import Homepage from './Hompage';


function Bookingconfirmedpage() {

  return (
    <>
    <Navbar/>
    <div className='confirmation'>
        <h1>Booking confirmed !</h1>
        <Link to="/" element={<Homepage/>}><button>Back to Homepage</button></Link>
    </div>
    <div className='confirmationimg'>
        <img src={restaurant2} alt='Mario and Adrian'/>
    </div>
    <Footernav/>
    </>
  );
}

export default Bookingconfirmedpage;