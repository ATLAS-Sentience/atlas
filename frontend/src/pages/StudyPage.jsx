import { useEffect, useState } from "react";
import StudyChart from "../components/StudyChart";
import "../styles/study.css";

import {
    getStudySessions,
    addStudySession,
    getStudyGoal,
    createStudyGoal,
    getStudyAnalytics
} from "../services/studyApi";


function StudyPage() {


    const [subject, setSubject] = useState("");
    const [hours, setHours] = useState("");

    const [goalSubject, setGoalSubject] = useState("");
    const [goalHours, setGoalHours] = useState("");

    const [goal, setGoal] = useState(null);

    const [sessions, setSessions] = useState([]);


    const [analytics, setAnalytics] = useState({
        total_hours: 0,
        subjects: 0,
        streak: 0
    });



    useEffect(() => {

        async function loadData() {

            try {

                const sessionData =
                    await getStudySessions();


                const goalData =
                    await getStudyGoal();


                const analyticsData =
                    await getStudyAnalytics();



                setSessions(
                    sessionData || []
                );


                setGoal(
                    goalData || null
                );


                setAnalytics(
                    analyticsData || {
                        total_hours:0,
                        subjects:0,
                        streak:0
                    }
                );


            } catch(error){

                console.error(
                    "Failed loading study data",
                    error
                );

            }

        }


        loadData();


    }, []);





    async function addSession(){


        if(!subject.trim() || !hours)
            return;



        const newSession = {

            subject,

            hours:Number(hours)

        };



        await addStudySession(
            newSession
        );



        const updatedSessions =
            await getStudySessions();


        const updatedAnalytics =
            await getStudyAnalytics();



        setSessions(
            updatedSessions || []
        );


        setAnalytics(
            updatedAnalytics || {
                total_hours:0,
                subjects:0,
                streak:0
            }
        );



        setSubject("");

        setHours("");

    }





    async function addGoal(){


        if(!goalSubject.trim() || !goalHours)
            return;



        const newGoal = {

            subject:goalSubject,

            target:Number(goalHours)

        };



        await createStudyGoal(
            newGoal
        );



        const goalData =
            await getStudyGoal();



        setGoal(
            goalData || null
        );



        setGoalSubject("");

        setGoalHours("");

    }





    function getSubjectHours(name){


        return sessions

            .filter(
                item =>
                item.subject === name
            )

            .reduce(
                (sum,item)=>
                sum + Number(item.hours),
                0
            );

    }





    const subjects = [

        ...new Set(
            sessions.map(
                item=>item.subject
            )
        )

    ];





    let goalProgress = 0;


    if(goal){


        const completed =
            getSubjectHours(
                goal.subject
            );



        goalProgress =
            Math.min(
                Math.round(
                    (completed / goal.target) * 100
                ),
                100
            );

    }





    const today =
        new Date()
        .toISOString()
        .split("T")[0];



    const todayData =

        sessions

        .filter(
            item =>
            item.date === today
        )

        .map(
            item => ({

                day:item.subject,

                hours:item.hours

            })
        );






return (

<div className="study-container">


<h1>
📚 Study Tracker
</h1>


<p className="study-subtitle">
Build consistency with Atlas
</p>





<div className="study-card">


<h2>
Set Study Goal
</h2>



<input

placeholder="Subject"

value={goalSubject}

onChange={
(e)=>
setGoalSubject(e.target.value)
}

/>



<input

placeholder="Target Hours"

type="number"

value={goalHours}

onChange={
(e)=>
setGoalHours(e.target.value)
}

/>



<button onClick={addGoal}>

Create Goal

</button>



{
goal && (

<div>

<h3>
Today's Goal
</h3>


<p>
{goal.subject}
</p>


<p>
Target: {goal.target} hours
</p>


<p>
Completed:
{
getSubjectHours(goal.subject)
}
hours
</p>



<div className="progress-bar">

<div

className="progress-fill"

style={{
width:`${goalProgress}%`
}}

></div>


</div>


<p>
{goalProgress}% Completed
</p>


</div>

)

}



</div>






<div className="study-card">


<h2>
Add Study Session
</h2>



<input

placeholder="Subject"

value={subject}

onChange={
(e)=>
setSubject(e.target.value)
}

/>



<input

placeholder="Hours"

type="number"

value={hours}

onChange={
(e)=>
setHours(e.target.value)
}

/>



<button onClick={addSession}>

Add Session

</button>



</div>







<div className="study-card">


<h2>
Analytics
</h2>


<p>
Total Hours:
{
analytics?.total_hours || 0
}
</p>


<p>
Subjects:
{
analytics?.subjects || 0
}
</p>


<p>
🔥 Streak:
{
analytics?.streak || 0
}
Days
</p>



</div>








<div className="study-card">


<h2>
Subject Progress
</h2>



{
subjects.length === 0 ?

<p>
No study sessions yet
</p>


:

subjects.map(
(sub,index)=>{


const hrs =
getSubjectHours(sub);



return (

<div

className="subject-progress"

key={index}

>


<div

style={{

display:"flex",

justifyContent:"space-between"

}}

>

<span>
{sub}
</span>


<span>
{hrs} hrs
</span>


</div>



<div className="progress-bar">


<div

className="progress-fill"

style={{

width:
`${Math.min(hrs*10,100)}%`

}}

>


</div>


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

sessions.length===0 ?

<p>
No sessions added yet
</p>


:

sessions.map(
(item,index)=>(

<p key={index}>

{item.subject}
-
{item.hours} hrs

</p>

)

)

}



</div>






<StudyChart

data={todayData}

/>




</div>


);


}


export default StudyPage;