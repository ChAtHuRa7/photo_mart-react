import { Button } from '@mui/material';
import React from 'react'
import './bookingCard.css'

export const bookingCard = ({aBooking}) => {
    console.log(aBooking)
  return (
    <div className='booking-card-continer'>
        <div className='row-continer-1'>
            <div className='column-continer-1'>
                <p>Booking Number :  {aBooking.bookingId}</p>
                <p>Customer Name  :  {aBooking.customer.fullName}</p>
                <p>Customer Email :  {aBooking.customer.email}</p>
                <p>Mobile Number  :  {aBooking.customer.phoneNo}</p>
                <p>Address        :  {aBooking.customer.address}</p>
                <p>Message        :  {aBooking.customer.message}</p>
            </div>
            <div className='column-continer-1'>
                <p>Date           :  {aBooking.date}</p>
                <p>Location       :  {aBooking.event.location}</p>
                <p>Time           :  {aBooking.event.time}</p>
                <p>Package Number :  {aBooking.apackage.packageId}</p>
                <p>package Tittle :  {aBooking.apackage.packageTittle}</p>
                <p>Price          :  {aBooking.apackage.price}</p>
            </div>
            <div className='column-continer-1'>
                <p>Booking Status :  {aBooking.status}</p>
                <p>Payment Status :  {aBooking.paymentStatus}</p>
            </div>
            <div className='column-continer-2'>
                <button disabled={aBooking.paymentStatus !== 'confirmed' &&  aBooking.paymentStatus !== 'pending' ? false:true } className='confirm-btn'>Confirm</button>
                <button disabled = {true} className='cancel-btn'>Cancel</button>
                <button disabled = {true} className='remove-btn'>Remove</button>
            </div>
        </div>
    </div>
  )
}

export default bookingCard;