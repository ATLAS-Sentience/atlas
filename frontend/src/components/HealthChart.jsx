import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
CartesianGrid,
ResponsiveContainer
} from "recharts";


function CustomTooltip({active,payload}){


if(active && payload && payload.length){

const item = payload[0].payload;


return(

<div
style={{
background:"#0F172A",
padding:"15px",
borderRadius:"12px",
color:"white",
fontSize:"15px"
}}
>

<p>📅 {item.date}</p>

<p>⚖️ Weight: {item.weight} kg</p>

<p>🔥 Calories: {item.calories}</p>

<p>💧 Water: {item.water} L</p>

<p>😴 Sleep: {item.sleep} hrs</p>

<p>🚶 Steps: {item.steps}</p>


</div>

)

}


return null;

}





function HealthChart({data}){


return(

<div
style={{
background:"#1E293B",
padding:"30px",
borderRadius:"20px",
margin:"30px auto",
width:"750px"
}}
>


<h2
style={{
color:"white",
textAlign:"center"
}}
>
Health Progress
</h2>



{
data.length < 2

?

<p
style={{
color:"#94A3B8",
textAlign:"center",
padding:"50px"
}}
>
Add at least 2 health records to view progress graph
</p>


:

<ResponsiveContainer
width="100%"
height={350}
>


<LineChart
data={data}
margin={{
top:20,
right:50,
left:20,
bottom:30
}}
>


<CartesianGrid
strokeDasharray="3 3"
/>



<XAxis

dataKey="date"

/>



<YAxis

domain={["auto","auto"]}

/>



<Tooltip
content={<CustomTooltip/>}
/>



<Line

type="monotone"

dataKey="weight"

stroke="#3B82F6"

strokeWidth={3}

dot={{
r:6
}}

/>



</LineChart>



</ResponsiveContainer>

}



</div>


)


}


export default HealthChart;