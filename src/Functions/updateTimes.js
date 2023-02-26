export default function updateTimes(state, action) {
    switch (action.type) {
        case 'add slot':{
            return {availableTimes: [...state.availableTimes, "19:00"]};
        }
      default:
        return state;
    }
}