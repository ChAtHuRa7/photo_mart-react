import * as api from '../apis/bookingApi';

import { CREATE_BOOKING, FETCH_BOOKING_BY_PHTGPHR_ID } from '../constants/actionTyps';


export const createBooking = (newBooking, navigate) => async (dispatch) => {
    try{
        const {data} = await api.createBooking(newBooking);
        dispatch({type:CREATE_BOOKING, payload:{bookings: data}});
        navigate(`/findmore`);
    }catch(error){
        console.log(error);
    }
};

export const getBookingsByPid = (photId) => async (dispatch) => {
    try{
        const {data} = await api.getBookingsByPid(photId);
        dispatch({type:FETCH_BOOKING_BY_PHTGPHR_ID, payload:{bookings: data}});
    }catch(error){
        console.log(error);
    }
};