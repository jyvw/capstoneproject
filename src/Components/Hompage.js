import Homenavbar from './Homenavbar';
import Herosection from './Herosection';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';
import Footernav from './Footernav';
import ScrollToTop from '../Functions/Scrolltotop';
import TestfetchAPI from './TestfetchAPI';

function Homepage() {
  return (
    <>
    <ScrollToTop/>
    <Homenavbar/>
    <Herosection/>
    <Highlights/>
    <Testimonials/>
    <About/>
    <Footernav/>
    </>
  );
}

export default Homepage;
