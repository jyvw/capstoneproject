import { validateEmail } from "../Functions/validateEmail";

const Bookingform = (props) => {

    const getIsFormValid = () => {
        return (
            props.state.name &&
            validateEmail(props.state.email)
        )
    };

    const clearForm = () => props.dispatch({
      type: "clear_form"
    })

    const handleSubmit = (e) => {
        e.preventDefault();
            clearForm();
        props.submitForm(props.state);
    };

    return (
        <main>
            <h1>Book Now!</h1>
            <form style={{display: "grid", maxWidth: "200px", gap: "20px"}} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date" value={props.state.date} onChange={(e) => {props.dispatch({
                      type: "update_input",
                      value: e.target.value,
                      key: "date",
                    });props.dispatch({
                      type: "update_times",
                      value: e.target.value,
                    });}} required/>
                </div>
                <div>
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time " value={props.state.time} onChange={(e) => props.dispatch({
                      type: "update_input",
                      value: e.target.value,
                      key: "time",
                    })} required>
                        {props.state.availableTimes.map(available => (<option>{available}</option>))}
                    </select>
                </div>
                <div>
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" value={props.state.guests} onChange={(e) => props.dispatch({
                      type: "update_input",
                      value: e.target.value,
                      key: "guests",
                    })} required/>
                </div>
                <div>
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={props.state.occasion} onChange={(e) => props.dispatch({
                      type: "update_input",
                      value: e.target.value,
                      key: "occasion",
                    })}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="name">Reservation name</label>
                    <input type="text" placeholder="Kevin Murphy and family" minLength={2} maxLength={15} value={props.state.name} onChange={(e) => props.dispatch({
                      type: "update_input",
                      value: e.target.value,
                      key: "name",
                    })} required/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="kevin.murphy@greeksalad.lemon" value={props.state.email} onChange={(e) => props.dispatch({
                      type: "update_input",
                      value: e.target.value,
                      key: "email",
                    })} required/>
                </div>
                <div>
                    <button type="submit" disabled={!getIsFormValid()}>Make Your Reservation</button>
                </div>
            </form>
        </main>
    )
};

export default Bookingform;
