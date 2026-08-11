import { useEffect, useState } from "react";
import EventModal from "./EventModal";
import "../styles/calendar.css";
import {
    getCalendarEvents,
    addCalendarEvent
} from "../services/calendarAPI";


function CalendarView(){

    const today = new Date();

  const [currentDate, setCurrentDate] = useState(today);
    const [selectedDate,setSelectedDate] = useState(null);

    const [showModal,setShowModal] = useState(false);

    const [events,setEvents] = useState([]);
    useEffect(() => {

    async function loadEvents() {

        try {

            const data = await getCalendarEvents();

            setEvents(data);

        } catch (error) {

            console.error(
                "Failed to load calendar events:",
                error
            );

        }

    }

    loadEvents();

}, []);



    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();



    const monthName = currentDate.toLocaleString(
        "default",
        {
            month:"long"
        }
    );


    const firstDay = new Date(
        year,
        month,
        1
    ).getDay();



    const totalDays = new Date(
        year,
        month+1,
        0
    ).getDate();



    function openEvent(day){

        setSelectedDate(day);

        setShowModal(true);

    }



    async function addEvent(event) {

    try {

        const newEvent = {
            title: event.title,
            time: event.time,
            category: event.category,
            date: selectedDate
        };

        const savedEvent = await addCalendarEvent(newEvent);

        setEvents([
            ...events,
            savedEvent
        ]);

    } catch (error) {

        console.error(
            "Failed to save calendar event:",
            error
        );

    }

}



    function isToday(day){

        return(
            day === today.getDate()
            &&
            month === today.getMonth()
            &&
            year === today.getFullYear()
        );

    }



    let days=[];


    for(let i=0;i<firstDay;i++){

        days.push("");

    }


    for(let i=1;i<=totalDays;i++){

        days.push(i);

    }




return(

<div className="calendar-card">


<div className="calendar-header">

    <button
        onClick={() =>
            setCurrentDate(
                new Date(year, month - 1, 1)
            )
        }
    >
        ←
    </button>

    <h2>
        📅 {monthName} {year}
    </h2>

    <button
        onClick={() =>
            setCurrentDate(
                new Date(year, month + 1, 1)
            )
        }
    >
        →
    </button>

</div>


<div className="today-box">

Today:
{" "}
{today.toLocaleDateString()}

</div>



<div className="weekdays">

<span>Sun</span>
<span>Mon</span>
<span>Tue</span>
<span>Wed</span>
<span>Thu</span>
<span>Fri</span>
<span>Sat</span>

</div>



<div className="calendar-grid">


{
days.map((day,index)=>(


<div

key={index}

onClick={()=>day && openEvent(day)}

className={
isToday(day)
?
"day today"
:
"day"
}

>


{day}


{
events.map((event,i)=>(

event.date===day &&

<div 
key={i}
className="small-event"
>

{event.title}

</div>

))

}


</div>


))

}


</div>




{
showModal &&

<EventModal

date={selectedDate}

closeModal={()=>{
setShowModal(false)
}}

addEvent={(event)=>{

addEvent(event);

setShowModal(false);

}}


/>

}



</div>


)

}


export default CalendarView;