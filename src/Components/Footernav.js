import logo from "../Logos/Logo.svg";

const Footernav = () => {
    return (
        <footer>
            <>
            <img src={logo} alt="Little Lemon logo" />
            </>
            <ul>
                <li>Doormat Navigation</li>
                <li><a href="#LINKHERE">Home</a></li>
                <li><a href="#LINKHERE">About</a></li>
                <li><a href="#LINKHERE">Menu</a></li>
                <li><a href="#LINKHERE">Reservations</a></li>
                <li><a href="#LINKHERE">Order Online</a></li>
                <li><a href="#LINKHERE">Login</a></li>
            </ul>
            <ul>
                <li>Contact</li>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            <ul>
                <li>Social Media Links</li>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
        </footer>
    )
};

export default Footernav;
