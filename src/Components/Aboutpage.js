import Navbar from './Navbar';
import About from './About';
import Footernav from './Footernav';
import ScrollToTop from '../Functions/Scrolltotop';

function Aboutpage() {
  return (
    <>
    <ScrollToTop/>
    <Navbar/>
    <About/>
    <Footernav/>
    </>
  );
}

export default Aboutpage;
