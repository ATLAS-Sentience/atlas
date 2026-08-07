import { useEffect, useState } from "react";
import "../styles/productivity.css";


function ProductivityPage(){

const [taskName,setTaskName]=useState("");
const [taskTime,setTaskTime]=useState("");
const [priority,setPriority]=useState("Medium");

const [tasks,setTasks]=useState([]);


const [focusMinutes,setFocusMinutes]=useState("");
const [timer,setTimer]=useState(0);
const [isFocus,setIsFocus]=useState(false);



useEffect(()=>{

if(!isFocus || timer<=0)
return;


const interval=setInterval(()=>{

setTimer(prev=>prev-1);

},1000);


return ()=>clearInterval(interval);


},[isFocus,timer]);





function addTask(){

if(!taskName || !taskTime)
return;


const newTask={

name:taskName,

time:Number(taskTime),

priority,

completed:false

};


const updatedTasks = [
    ...tasks,
    newTask
];


const priorityOrder = {

    High: 1,
    Medium: 2,
    Low: 3

};


updatedTasks.sort(

(a,b)=>

priorityOrder[a.priority] -
priorityOrder[b.priority]

);


setTasks(updatedTasks);


setTaskName("");
setTaskTime("");
setPriority("Medium");

}





function toggleTask(index){

const updated=[...tasks];


updated[index].completed=
!updated[index].completed;


setTasks(updated);

}





function startFocus(){

if(!focusMinutes)
return;


setTimer(Number(focusMinutes)*60);

setIsFocus(true);

}





function stopFocus(){

setIsFocus(false);

setTimer(0);

}





const completedTasks=tasks.filter(

item=>item.completed

).length;




const score=tasks.length===0

?0

:

Math.round(

(completedTasks/tasks.length)*100

);





const minutes=Math.floor(timer/60);

const seconds=timer%60;





return(

<div>



<h1 className="productivity-title">

⚡ Productivity Dashboard

</h1>



<p className="productivity-subtitle">

Track your daily performance with Atlas

</p>







<div className="productivity-stats">



<div className="productivity-card">

<h3>

Productivity Score

</h3>

<h1>

{score}%

</h1>

</div>




<div className="productivity-card">

<h3>

Tasks

</h3>

<h1>

{tasks.length}

</h1>

</div>




<div className="productivity-card">

<h3>

Completed

</h3>

<h1>

{completedTasks}

</h1>

</div>



</div>









<div className="productivity-card large">


<h2>

Daily Tasks

</h2>



<input

placeholder="Task name"

value={taskName}

onChange={(e)=>
setTaskName(e.target.value)
}

/>



<input

placeholder="Estimated time (hours)"

value={taskTime}

onChange={(e)=>
setTaskTime(e.target.value)
}

/>





<select

value={priority}

onChange={(e)=>
setPriority(e.target.value)
}

>

<option>
High
</option>


<option>
Medium
</option>


<option>
Low
</option>


</select>





<button onClick={addTask}>

Add Task

</button>





{

tasks.length===0 &&

<p className="empty">

No tasks added yet 🚀

</p>

}





{

tasks.map((item,index)=>(


<div className={`task-item ${item.priority.toLowerCase()}`}>

<div>


<h3 className={item.completed?"completed":""}>

{item.name}

</h3>


<p>

⏱ {item.time} hours

</p>


<p>

🔥 {item.priority}

</p>


</div>





<button

onClick={()=>toggleTask(index)}

>

{

item.completed

?

"Completed"

:

"Complete"

}


</button>



</div>



))


}



</div>









<div

className={

isFocus

?

"focus-card active"

:

"focus-card"

}

>



<h2>

{

isFocus

?

"🔥 Deep Focus Mode"

:

"Focus Tracker"

}

</h2>





{

!isFocus

?

<>


<input

placeholder="Focus duration (minutes)"

value={focusMinutes}

onChange={(e)=>
setFocusMinutes(e.target.value)
}

/>



<button

onClick={startFocus}

>

Start Focus

</button>


</>


:


<>


<h1 className="timer">

{minutes}:

{seconds<10?"0":""}

{seconds}

</h1>



<button

onClick={stopFocus}

>

Stop

</button>


</>

}



</div>







</div>

)


}


export default ProductivityPage;