import img from '../Img/restauranfood.jpg';

const Herosection = () => {
    return (
        <header>
            <div className='headerbox'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button>Reserve a Table</button>
            </div>
            <div>
                <img src={img} alt="PictureXXX" />
            </div>
        </header>
    )
};

export default Herosection;