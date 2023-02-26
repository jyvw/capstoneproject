import {Link} from 'react-router-dom';
import greeksalad from '../Img/greek salad.jpg';
import bruschetta from '../Img/bruschetta.jpg';
import lemondessert from '../Img/lemon dessert.jpg';
import deliveryscooter from '../Icons/delivery.png';
import Menupage from './Menupage';
import Bookingpage from './Bookingpage';
const Menu = () => {
    return (
        <main>
            <div className="specialstitle">
                    <h1>Our Menu</h1>
                    <Link to="/bookingpage" element={<Bookingpage/>}><button>Reserve a Table</button></Link>
            </div>
            <div className="specialscardssection">
                <div className="specialscard">
                    <img src={greeksalad} alt="special1"/>
                    <div className="specialnameprice">
                        <h3>Greek salad</h3>
                        <h3 className="price">$12.99</h3>
                    </div>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, granished with crunchy garlic and rosemary croutons.</p>
                    <div className="deliveryscooter">
                        <Link to="/menu" element={<Menupage/>}><p>Order a delivery</p></Link>
                        <Link to="/menu" element={<Menupage/>}><img src={deliveryscooter} alt="delivery"/></Link>
                    </div>
                </div>
                <div className="specialscard">
                    <img src={bruschetta} alt="special2"/>
                    <div className="specialnameprice">
                        <h3>Bruschetta</h3>
                        <h3 className="price">$5.99</h3>
                    </div>
                    <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                    <div className="deliveryscooter">
                    <Link to="/menu" element={<Menupage/>}><p>Order a delivery</p></Link>
                    <Link to="/menu" element={<Menupage/>}><img src={deliveryscooter} alt="delivery"/></Link>
                    </div>
                </div>
                <div className="specialscard">
                    <img src={lemondessert} alt="special3"/>
                    <div className="specialnameprice">
                        <h3>Lemon Dessert</h3>
                        <h3 className="price">$5.00</h3>
                    </div>
                    <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    <div className="deliveryscooter">
                    <Link to="/menu" element={<Menupage/>}><p>Order a delivery</p></Link>
                    <Link to="/menu" element={<Menupage/>}><img src={deliveryscooter} alt="delivery"/></Link>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Menu;