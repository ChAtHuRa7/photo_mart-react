import React from 'react'
import Calender from 'react-calendar';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment/moment';

import { getCalendarEventByPhtoId } from '../../../actions/calendar';


import 'react-calendar/dist/Calendar.css';
import './calendar.css';

const Calendar =({id,handelCalendarData}) => {
  const {calendars} = useSelector((state)=> state.calendars)
  const dispatch = useDispatch();

  const [calendarData , setCalendarData] = useState({photographerId:'', userId:'', dateTime:'', status:''});
  const [value , onChange] = useState(new Date());

  useEffect(()=>{
    dispatch(getCalendarEventByPhtoId(id));
  },[id]);

  const highlightBooking = ({date})=>{
    let aCalendar = calendars?.find(aCalendar=> aCalendar.date === moment(date).format("DD/MM/YYYY"));
    // console.log(date);
    if(aCalendar){
      if(aCalendar.status === "pending"){
        return 'highlight-pending'
      }
      else if(aCalendar.status === "confirmed"){
        return 'highlight-confirmed'
      }
      else if(aCalendar.status === "block"){
        return 'highlight-block'
      }
    }
    return;
  }

  return (
    <div >
        <Calender 
          onChange={(e)=>
            {
              onChange(e)
              handelCalendarData(e)
            }
          } value={value}
          tileClassName = {({date,view})=>highlightBooking({date})}
          tileDisabled = {({date})=> highlightBooking({date})}
         />
    </div>  
  );
}

export default Calendar;