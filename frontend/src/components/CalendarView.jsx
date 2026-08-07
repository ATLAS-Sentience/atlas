import { useState } from "react";
import EventModal from "./EventModal";
import "../styles/calendar.css";


function CalendarView(){

    const today = new Date();

    const [currentDate,setCurrentDate] = useState(today);

    const [selectedDate,setSelectedDate] = useState(null);

    const [showModal,setShowModal] = useState(false);

    const [events,setEvents] = useState([]);



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



    function addEvent(event){

        setEvents([
            ...events,
            {
                ...event,
                date:selectedDate
            }
        ]);

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


<h2>
📅 {monthName} {year}
</h2>



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