import React from "react";

import { Grid } from "@mui/material";

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getBookingsByPid } from '../../../actions/booking';
import BookingCard from "../bookingCard/BookingCard";
const moment = require('moment');



const BookingScreen = () => {

  const [profile,setProfile] = useState(JSON.parse(localStorage.getItem('profile')));
  const {bookings} = useSelector((state)=> state.bookings);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getBookingsByPid(profile.photographerId))
  },[]);

  return (
    <div className = 'booking-card-container'>
        <Grid container direction="column" justifyContent="space-evenly" >
          {bookings?.map((aBooking)=>(
            <Grid key={aBooking.bookingId} item xs={4}><BookingCard aBooking={aBooking}/></Grid>

          ))}
        </Grid>
    </div>
  );
};

export default BookingScreen;
