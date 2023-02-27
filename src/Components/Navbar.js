import logo from '../Logos/Logo.svg';
import {Link} from 'react-router-dom';
import Homepage from './Hompage';
import Menupage from './Menupage';
import Aboutpage from './Aboutpage';
import Bookingpage from './Bookingpage';

const Navbar = () => {
    return (
    <nav className='navbar'>
        <>
        <Link to="/" element={<Homepage/>}><img src={logo} alt="Little Lemon logo" /></Link>
        </>
        <ul>
            <li><Link to="/" element={<Homepage/>}>Home</Link></li>
            <li><Link to="/about" element={<Aboutpage/>}>About</Link></li>
            <li><Link to="/menu" element={<Menupage/>}>Menu</Link></li>
            <li><Link to="/bookingpage" element={<Bookingpage/>}>Reservations</Link></li>
            <li><Link to="/menu" element={<Menupage/>}>Order Online</Link></li>
            <li><Link to="/" element={<Homepage/>}>Login</Link></li>
        </ul>
    </nav>
    )
};

export default Navbar;