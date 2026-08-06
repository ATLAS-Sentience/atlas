import { useState } from "react";
import StudyChart from "../components/StudyChart";
import "../styles/study.css";


function StudyPage(){

const [subject,setSubject]=useState("");
const [hours,setHours]=useState("");

const [goalSubject,setGoalSubject]=useState("");
const [goalHours,setGoalHours]=useState("");

const [goal,setGoal]=useState(null);

const [sessions,setSessions]=useState([]);



function addSession(){

if(!subject || !hours)
return;


const newSession={

subject:subject,

hours:Number(hours),

date:new Date().toISOString().split("T")[0]

};


setSessions([
...sessions,
newSession
]);


setSubject("");
setHours("");

}




function addGoal(){

if(!goalSubject || !goalHours)
return;


setGoal({

subject:goalSubject,

target:Number(goalHours)

});


setGoalSubject("");
setGoalHours("");

}




const totalHours=sessions.reduce(

(sum,item)=>sum+item.hours,

0

);





const subjects=[

...new Set(

sessions.map(item=>item.subject)

)

];





function getSubjectHours(name){

return sessions

.filter(
(item)=>item.subject===name
)

.reduce(

(sum,item)=>sum+item.hours,

0

);

}






function calculateStreak(){

if(sessions.length===0)
return 0;


let dates=sessions.map(

item=>item.date

);


dates=[...new Set(dates)];


return dates.length;

}






let goalProgress=0;


if(goal){

const completed=getSubjectHours(goal.subject);


goalProgress=Math.min(

Math.round(
(completed/goal.target)*100
),

100

);

}

const today = new Date()
.toISOString()
.split("T")[0];


const todayData = sessions

.filter(
(item)=>item.date===today
)

.map(
(item)=>({

day:item.subject,

hours:item.hours

})

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
🔥 {calculateStreak()} Days
</h1>

</div>





<div className="study-stat">

<h3>
Subjects
</h3>

<h1>
{subjects.length}
</h1>

</div>



</div>








<div className="study-card">


<h2>
Set Study Goal
</h2>


<input

placeholder="Subject"

value={goalSubject}

onChange={(e)=>
setGoalSubject(e.target.value)
}

/>



<input

placeholder="Target Hours"

value={goalHours}

onChange={(e)=>
setGoalHours(e.target.value)
}

/>



<button onClick={addGoal}>

Create Goal

</button>



</div>








{

goal &&

<div className="study-card">


<h2>
Today's Goal
</h2>


<h3>

{goal.subject}

</h3>


<p>

Target:
{goal.target} hours

</p>



<p>

Completed:

{getSubjectHours(goal.subject)}

hours

</p>



<div className="progress-bar">


<div

className="progress-fill"

style={{

width:`${goalProgress}%`

}}

>

</div>


</div>



<h3>

{goalProgress}% Completed

</h3>



</div>

}





<div className="study-card">


<h2>
Add Study Session
</h2>



<input

placeholder="Subject"

value={subject}

onChange={(e)=>
setSubject(e.target.value)
}

/>



<input

placeholder="Hours"

value={hours}

onChange={(e)=>
setHours(e.target.value)
}

/>



<button onClick={addSession}>

Add Session

</button>


</div>









<div className="study-card">


<h2>
Subject Progress
</h2>



{

subjects.map((sub,index)=>{


let hrs=getSubjectHours(sub);


return(

<div

className="study-item"

key={index}

>


<div>

<h3>
{sub}
</h3>


<p>

{hrs} Hours

</p>


</div>



</div>


)

})


}



</div>








<div className="study-card">


<h2>
Study History
</h2>


{

sessions.map((item,index)=>(


<div

className="study-item"

key={index}

>


<h3>

{item.subject}

</h3>


<p>

{item.hours} hrs

</p>


</div>



))

}



</div>







<StudyChart
data={todayData}
/>





</div>


)

}


export default StudyPage;