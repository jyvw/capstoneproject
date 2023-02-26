import {Link} from 'react-router-dom';
import img from '../Img/restauranfood.jpg';
import Bookingpage from './Bookingpage';

const Herosection = () => {
    return (
        <header>
            <div className='headerbox'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to="/bookingpage" element={<Bookingpage/>}><button>Reserve a Table</button></Link>
            </div>
            <div>
                <img src={img} alt="Little Lemon" />
            </div>
        </header>
    )
};

export default Herosection;