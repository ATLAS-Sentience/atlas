import { useState } from "react";
import "../styles/health.css";
import HealthChart from "../components/HealthChart";


function HealthPage(){

const [weight,setWeight]=useState("");
const [calories,setCalories]=useState("");
const [water,setWater]=useState("");
const [sleep,setSleep]=useState("");
const [steps,setSteps]=useState("");

const [records,setRecords]=useState([]);



function addRecord(){

if(
!weight ||
!calories ||
!water ||
!sleep ||
!steps
)
return;


const newRecord={

date:new Date().toLocaleDateString(),

weight:Number(weight),

calories:Number(calories),

water:Number(water),

sleep:Number(sleep),

steps:Number(steps)

};


setRecords([
...records,
newRecord
]);


setWeight("");
setCalories("");
setWater("");
setSleep("");
setSteps("");

}




const latest = records.length
?
records[records.length-1]
:
null;



return(

<div>


<h1 className="health-title">

❤️ Health Dashboard

</h1>



<p className="health-subtitle">

Track your fitness, habits and wellness with Atlas

</p>






<div className="health-stats">



<div className="health-card">

<h3>
Weight
</h3>

<h1>

{
latest
?
`${latest.weight} kg`
:
"--"
}

</h1>

</div>





<div className="health-card">

<h3>
Calories
</h3>

<h1>

{
latest
?
latest.calories
:
"--"
}

</h1>

</div>





<div className="health-card">

<h3>
Water
</h3>

<h1>

{
latest
?
`${latest.water} L`
:
"--"
}

</h1>

</div>





<div className="health-card">

<h3>
Sleep
</h3>

<h1>

{
latest
?
`${latest.sleep} hrs`
:
"--"
}

</h1>

</div>




</div>









<div className="health-form">


<h2>
Add Today's Health Record
</h2>




<input

placeholder="Weight (kg)"

value={weight}

onChange={(e)=>setWeight(e.target.value)}

/>




<input

placeholder="Calories"

value={calories}

onChange={(e)=>setCalories(e.target.value)}

/>




<input

placeholder="Water (litres)"

value={water}

onChange={(e)=>setWater(e.target.value)}

/>




<input

placeholder="Sleep hours"

value={sleep}

onChange={(e)=>setSleep(e.target.value)}

/>




<input

placeholder="Steps"

value={steps}

onChange={(e)=>setSteps(e.target.value)}

/>




<button onClick={addRecord}>

Add Record

</button>



</div>









<div className="health-form">


<h2>
Activity Summary
</h2>




<div className="activity">

<p>
🏃 Steps
</p>

<h3>

{
latest
?
latest.steps
:
"--"
}

</h3>

</div>







<div className="activity">

<p>
🔥 Calories
</p>

<h3>

{
latest
?
latest.calories
:
"--"
}

</h3>

</div>







<div className="activity">

<p>
💪 Workout Status
</p>

<h3>

{
latest
?
"Logged"
:
"--"
}

</h3>

</div>





</div>









<div className="health-form">


<h2>
Health History
</h2>
<HealthChart

data={records}

/>



{

records.length===0

?

<p style={{textAlign:"center"}}>
No records added yet
</p>


:


records.map((item,index)=>(


<div

className="health-history"

key={index}

>


<p>
📅 {item.date}
</p>


<p>
⚖️ {item.weight} kg
</p>


<p>
😴 {item.sleep} hrs
</p>


<p>
🚶 {item.steps} steps
</p>



</div>



))


}




</div>







</div>



)


}


export default HealthPage;