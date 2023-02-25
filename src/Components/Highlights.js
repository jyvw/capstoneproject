import greeksalad from '../Img/greek salad.jpg';
import bruschetta from '../Img/bruschetta.jpg';
import lemondessert from '../Img/lemon dessert.jpg';
import deliveryscooter from '../Icons/delivery.png';
const Highlights = () => {
    return (
        <main>
            <div className="specialstitle">
                    <h1>This weeks specials!</h1>
                    <button>Online Menu</button>
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
                        <p>Order a delivery</p>
                        <img src={deliveryscooter} alt="delivery"/>
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
                        <p>Order a delivery</p>
                        <img src={deliveryscooter} alt="delivery"/>
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
                        <p>Order a delivery</p>
                        <img src={deliveryscooter} alt="delivery"/>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Highlights;