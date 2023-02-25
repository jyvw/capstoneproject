import logo from '../Logos/Logo.svg';

const Navbar = () => {
    return (
    <nav>
        <>
        <img src={logo} alt="Little Lemon logo" />
        </>
        <ul>
            <li><a href="#LINKHERE" target="_blank">Home</a></li>
            <li><a href="#LINKHERE">About</a></li>
            <li><a href="#LINKHERE">Menu</a></li>
            <li><a href="#LINKHERE">Reservations</a></li>
            <li><a href="#LINKHERE">Order Online</a></li>
            <li><a href="#LINKHERE">Login</a></li>
        </ul>
    </nav>
    )
};

export default Navbar;