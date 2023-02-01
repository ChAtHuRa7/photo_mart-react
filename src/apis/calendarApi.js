import axio from 'axios';

const API = axio.create({baseURL:"http://localhost:8080/calendar-service/api/v1/calendars/"});


API.interceptors.request.use((req) => {
    if(localStorage.getItem('auth')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('auth')).jwt}`;
    }
    return req;
});


export const createCalendarEvent = (newEvent) => API.post("",newEvent);
export const getCalendarEventByPhtoId = (pId) => API.get(`?pId=${pId}`);
