function Test(props) {
    return (
    <div>
      <button onClick={props.handleUpdateTimes}>Blah Blah</button>
      <h3>Show {props.availableTimes}</h3>
    </div>
    );
  }

export default Test;