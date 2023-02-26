import { useState } from "react";

const Bookingform = (props) => {
    
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const getIsFormValid = () => {
        return (true)
    };

    const clearForm = () => {
        setDate("");
        setTime("");
        setGuests("");
        setOccasion("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your table is booked!");
        clearForm();
    };

    return (
        <main>
            <form style={{display: "grid", maxWidth: "200px", gap: "20px"}} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date" value={date} onChange={(e) => {setDate(e.target.value);props.updateTimes()}}/>
                </div>
                <div>
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time " value={time} onChange={(e) => {setTime(e.target.value);}}>
                        {props.availableTimes.map(availableTimes => (<option>{availableTimes}</option>))}
                    </select>
                </div>
                <div>
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => {setGuests(e.target.value);}}/>
                </div>
                <div>
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={occasion} onChange={(e) => {setOccasion(e.target.value);}}>
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