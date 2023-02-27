import {useReducer} from 'react';
import initializeTimes from '../Functions/initializeTimes';
import updateTimes from '../Functions/updateTimes';

const initialState = initializeTimes();

const Bookingform = () => {

    const [state, dispatch] = useReducer(updateTimes,initialState)

    const getIsFormValid = () => {
        return (true)
    };

    const clearForm = () => dispatch({
      type: "clear_form"
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify("Your table is booked!",
          {date:state.date,time:state.time,guests:state.guests,occasion:state.occasion}
          ));
        clearForm();
    };

    return (
        <main>
            <h1>Book Now!</h1>
            <form style={{display: "grid", maxWidth: "200px", gap: "20px"}} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date" value={state.date} onChange={(e) => {dispatch({
                      type: "update_input",
                      value: e.target.value,
                      key: "date",
                    });dispatch({
                      type: "update_times",
                      value: e.target.value,
                    });}}/>
                </div>
                <div>
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time " value={state.time} onChange={(e) => dispatch({
                      type: "update_input",
                      value: e.target.value,
                      key: "time",
                    })}>
                        {state.availableTimes.map(available => (<option>{available}</option>))}
                    </select>
                </div>
                <div>
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" value={state.guests} onChange={(e) => dispatch({
                      type: "update_input",
                      value: e.target.value,
                      key: "guests",
                    })}/>
                </div>
                <div>
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={state.occasion} onChange={(e) => dispatch({
                      type: "update_input",
                      value: e.target.value,
                      key: "occasion",
                    })}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <div>
                    <input type="submit" value="Make Your reservation" disabled={!getIsFormValid()}/>
                </div>
            </form>
        </main>
    )
};

export default Bookingform;
