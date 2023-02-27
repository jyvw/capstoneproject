import logo from '../Logos/Logo.svg';
import {Link} from 'react-router-dom';
import Bookingpage from './Bookingpage';
import Homepage from './Hompage';

const Homenavbar = () => {
    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
    };
    return (
    <nav>
        <>
        <Link to="/" element={<Homepage/>}><img src={logo} alt="Little Lemon logo" /></Link>
        </>
        <ul>
            <li><Link to="/" element={<Homepage/>}>Home</Link></li>
            <li><a href="#about" onClick={handleClick("about")}>About</a></li>
            <li><a href="#highlights" onClick={handleClick("highlights")}>Menu</a></li>
            <li><Link to="/bookingpage" element={<Bookingpage/>}>Reservations</Link></li>
            <li><a href="#highlights" onClick={handleClick("highlights")}>Order Online</a></li>
            <li><Link to="/" element={<Homepage/>}>Login</Link></li>
        </ul>
    </nav>
    )
};

export default Homenavbar;