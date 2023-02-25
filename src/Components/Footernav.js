import logo from "../Logos/Logo.svg";

const Footernav = () => {
    return (
        <footer>
            <>
            <img src={logo} alt="Little Lemon logo" />
            </>
            <ul>
                <li><h3>Doormat Navigation</h3></li>
                <li><a href="#LINKHERE"><h4>Home</h4></a></li>
                <li><a href="#LINKHERE"><h4>About</h4></a></li>
                <li><a href="#LINKHERE"><h4>Menu</h4></a></li>
                <li><a href="#LINKHERE"><h4>Reservations</h4></a></li>
                <li><a href="#LINKHERE"><h4>Order Online</h4></a></li>
                <li><a href="#LINKHERE"><h4>Login</h4></a></li>
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
