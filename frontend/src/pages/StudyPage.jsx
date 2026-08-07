import { useEffect, useState } from "react";
import StudyChart from "../components/StudyChart";
import "../styles/study.css";

import {
    getStudySessions,
    addStudySession,
    getStudyGoal,
    createStudyGoal
} from "../services/studyApi";


function StudyPage(){

const [subject,setSubject]=useState("");
const [hours,setHours]=useState("");

const [goalSubject,setGoalSubject]=useState("");
const [goalHours,setGoalHours]=useState("");

const [goal,setGoal]=useState(null);

const [sessions,setSessions]=useState([]);



useEffect(()=>{

    async function loadData(){

        const sessionData = await getStudySessions();
        const goalData = await getStudyGoal();

        setSessions(sessionData);

        if(goalData){
            setGoal(goalData);
        }

    }

    loadData();

},[]);





async function addSession(){

    if(!subject || !hours) return;


    const newSession={

        subject,
        hours:Number(hours)

    };


    await addStudySession(newSession);


    const data=await getStudySessions();

    setSessions(data);


    setSubject("");
    setHours("");

}





async function addGoal(){

    if(!goalSubject || !goalHours) return;


    const newGoal={

        subject:goalSubject,
        target:Number(goalHours)

    };


    await createStudyGoal(newGoal);


    const data=await getStudyGoal();

    setGoal(data);


    setGoalSubject("");
    setGoalHours("");

}





const totalHours=sessions.reduce(

(sum,item)=>sum+Number(item.hours),

0

);




const subjects=[

...new Set(

sessions.map(item=>item.subject)

)

];





function getSubjectHours(name){

return sessions

.filter(item=>item.subject===name)

.reduce(

(sum,item)=>sum+Number(item.hours),

0

);

}





function calculateStreak(){

if(sessions.length===0)

return 0;


const dates=sessions.map(

item=>item.date

);


return [...new Set(dates)].length;

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





const today=new Date()

.toISOString()

.split("T")[0];





const todayData=sessions

.filter(item=>item.date===today)

.map(item=>({

day:item.subject,

hours:item.hours

}));






return (

<div>



<h1 className="study-title">

📚 Study Tracker

</h1>



<p className="study-subtitle">

Build consistency with Atlas

</p>





<div className="stats-container">



<div className="study-stat">

<h3>Total Hours</h3>

<h1>{totalHours}</h1>

</div>




<div className="study-stat">

<h3>🔥 Streak</h3>

<h1>{calculateStreak()} Days</h1>

</div>




<div className="study-stat">

<h3>Subjects</h3>

<h1>{subjects.length}</h1>

</div>



</div>








<div className="study-card">


<h2>Set Study Goal</h2>


<input

placeholder="Subject"

value={goalSubject}

onChange={(e)=>setGoalSubject(e.target.value)}

/>



<input

placeholder="Target Hours"

value={goalHours}

onChange={(e)=>setGoalHours(e.target.value)}

/>



<button onClick={addGoal}>

Create Goal

</button>



</div>









{

goal &&

<div className="study-card">


<h2>Today's Goal</h2>


<h3>{goal.subject}</h3>


<p>

Target: {goal.target} hours

</p>


<p>

Completed:

{getSubjectHours(goal.subject)} hours

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



<h3>{goalProgress}% Completed</h3>



</div>

}









<div className="study-card">


<h2>Add Study Session</h2>


<input

placeholder="Subject"

value={subject}

onChange={(e)=>setSubject(e.target.value)}

/>



<input

placeholder="Hours"

value={hours}

onChange={(e)=>setHours(e.target.value)}

/>



<button onClick={addSession}>

Add Session

</button>



</div>









<div className="study-card">


<h2>Subject Progress</h2>



{

subjects.length===0 &&

<p className="empty">

No subjects yet 🚀

</p>

}



{

subjects.map((sub,index)=>(


<div

className="study-item"

key={index}

>


<h3>{sub}</h3>


<p>

{getSubjectHours(sub)} Hours

</p>


</div>


))

}



</div>









<div className="study-card">


<h2>Study History</h2>



{

sessions.length===0 &&

<p className="empty">

No study sessions yet. Start learning 🚀

</p>

}





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








<StudyChart data={todayData}/>



</div>

)

}


export default StudyPage;