import { CREATE_BOOKING, FETCH_BOOKING_BY_PHTGPHR_ID } from "../constants/actionTyps";

const bookingsReducer =  ( state = {bookings:[]}, action) => {
    switch(action.type){
        case CREATE_BOOKING:
            return {...state, booking: action.payload.bookings};
        case FETCH_BOOKING_BY_PHTGPHR_ID:
            return {...state, bookings: action.payload.bookings};
        default:
            return state;
    }
};

export default bookingsReducer;