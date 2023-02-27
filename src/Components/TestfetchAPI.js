import fetchAPI from '../API/fetchAPI';

function TestfetchAPI() {
    const date = new Date()
    const testt = fetchAPI(date)
    return (
    <h2>{testt}</h2>
  );
}

export default TestfetchAPI;
