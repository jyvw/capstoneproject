import {Link} from 'react-router-dom';
import logo from "../Logos/Logo.svg";
import Bookingpage from './Bookingpage';
import Homepage from "./Hompage";
import Menupage from './Menupage';

const Footernav = () => {
    return (
        <footer>
            <>
            <Link to="/" element={<Homepage/>}><img src={logo} alt="Little Lemon logo" /></Link>
            </>
            <ul>
                <li><h3>Doormat Navigation</h3></li>
                <li><Link to="/" element={<Homepage/>}><h4>Home</h4></Link></li>
                <li><Link to="/menu" element={<Menupage/>}><h4>Menu</h4></Link></li>
                <li><Link to="/bookingpage" element={<Bookingpage/>}><h4>Reservations</h4></Link></li>
                <li><Link to="/menu" element={<Menupage/>}><h4>Order Online</h4></Link></li>
                <li><Link to="/" element={<Homepage/>}><h4>Login</h4></Link></li>
            </ul>
            <ul>
                <li><h3>Contact</h3></li>
                <li><h4>Address</h4></li>
                <li><h4>Phone</h4></li>
                <li><h4>Email</h4></li>
            </ul>
            <ul>
                <li><h3>Social Media Links</h3></li>
                <li><h4>Address</h4></li>
                <li><h4>Phone</h4></li>
                <li><h4>Email</h4></li>
            </ul>
        </footer>
    )
};

export default Footernav;
