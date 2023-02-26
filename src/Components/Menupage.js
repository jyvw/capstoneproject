import Navbar from './Navbar';
import Menu from './Menu';
import Footernav from './Footernav';
import ScrollToTop from '../Functions/Scrolltotop';

function Menupage() {
  return (
    <>
    <ScrollToTop/>
    <Navbar/>
    <Menu/>
    <Footernav/>
    </>
  );
}

export default Menupage;
