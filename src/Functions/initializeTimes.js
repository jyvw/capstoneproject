import fetchAPI from "../API/fetchAPI";

export default function initializeTimes(){
    const initialDate = new Date()
    const initialState = {
        date: initialDate,
        time: "",
        guests: "",
        occasion: "",
        availableTimes: fetchAPI(initialDate),
    }
    return initialState;
}