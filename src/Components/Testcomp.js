import Navbar from './Navbar';
import Footernav from './Footernav';
import initializeTimes from '../Functions/initializeTimes';

function Testcomp() {
    const initavailableTimes = ["18:00"];
  return (
    <>
    <Navbar/>
    <initializeTimes/>
    <>
        <h1>{initializeTimes().availableTimes}</h1>
        <h1>{typeof(initializeTimes().availableTimes)}</h1>
        <h1>{initavailableTimes}</h1>
        <h1>{typeof(initavailableTimes)}</h1>
        <h1>{JSON.stringify(initializeTimes().availableTimes)}</h1>
        <h1>{JSON.stringify(initavailableTimes)}</h1>
        <h1>{JSON.stringify(JSON.stringify(initializeTimes().availableTimes) === JSON.stringify(initavailableTimes))}</h1>
    </>
    </>
  );
}

export default Testcomp;