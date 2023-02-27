import initializeTimes from "./initializeTimes";
import fetchAPI from "../API/fetchAPI";

export default function updateTimes(state, action) {
    switch (action.type) {
      case "update_input":
        return {
          ...state,
          [action.key]: action.value,
        }
      case "update_times":
      const newdate = new Date(action.value)
      return{
         availableTimes: fetchAPI(newdate)
       }
      case "clear_form":
        state = initializeTimes()
        return state
      default:
        return state
    }
}