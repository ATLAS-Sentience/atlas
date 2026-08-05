import {useState} from "react";
import StudyChart from "../components/StudyChart";
import "../styles/study.css";


function StudyPage(){


const [subject,setSubject]=useState("");

const [hours,setHours]=useState("");


const [sessions,setSessions]=useState([]);



const weeklyData=[

{
day:"Mon",
hours:2
},

{
day:"Tue",
hours:3
},

{
day:"Wed",
hours:1
},

{
day:"Thu",
hours:4
},

{
day:"Fri",
hours:2
},

{
day:"Sat",
hours:5
},

{
day:"Sun",
hours:3
}

];




function addSession(){


if(!subject || !hours)
return;



setSessions([

...sessions,

{
subject,
hours:Number(hours)
}

]);



setSubject("");

setHours("");

}




const totalHours=sessions.reduce(

(sum,item)=>sum+item.hours,

0

);



return(


<div>


<h1
style={{
color:"white",
textAlign:"center",
fontSize:"50px"
}}
>
📚 Study Tracker
</h1>



<p
style={{
color:"#94A3B8",
textAlign:"center",
fontSize:"22px"
}}
>
Build consistency with Atlas
</p>





<div className="stats-container">


<div className="study-stat">

<h3>
Total Hours
</h3>

<h1>
{totalHours}
</h1>

</div>



<div className="study-stat">

<h3>
Current Streak
</h3>

<h1>
🔥 12 Days
</h1>


</div>



<div className="study-stat">

<h3>
Subjects
</h3>

<h1>
{sessions.length}
</h1>


</div>



</div>







<div className="study-card">


<h2>
Add Study Session
</h2>



<input

placeholder="Subject"

value={subject}

onChange={
(e)=>setSubject(e.target.value)
}

/>



<input

placeholder="Hours"

value={hours}

onChange={
(e)=>setHours(e.target.value)
}

/>



<button
onClick={addSession}
>

Add Session

</button>


</div>






<div className="study-card">


<h2>
Subjects Progress
</h2>



{

sessions.map(
(item,index)=>(


<div
className="study-item"
key={index}
>


<h3>
{item.subject}
</h3>


<p>
{item.hours} hours
</p>


</div>


)

)


}


</div>





<StudyChart
data={weeklyData}
/>




</div>


)

}


export default StudyPage;