import fetchAPI from "../API/fetchAPI";

export default function initializeTimes(){
    const initialDate = new Date("Feb 22 1993")
    const initialState = {
        date: initialDate,
        time: "",
        guests: "",
        occasion: "",
        name: "",
        email: "",
        availableTimes: fetchAPI(initialDate),
    }
    return initialState;
}