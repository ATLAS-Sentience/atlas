import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
} from "recharts";


function StudyChart({data}){


return(

<div
style={{
background:"#1E293B",
padding:"25px",
borderRadius:"20px",
marginTop:"30px"
}}
>

<h2
style={{
color:"white",
textAlign:"center"
}}
>
Weekly Study Hours
</h2>


<ResponsiveContainer
width="100%"
height={300}
>

<LineChart data={data}>

<CartesianGrid stroke="#475569"/>

<XAxis dataKey="day"/>

<YAxis/>

<Tooltip/>


<Line
type="monotone"
dataKey="hours"
stroke="#3B82F6"
strokeWidth={3}
/>


</LineChart>


</ResponsiveContainer>


</div>

)


}


export default StudyChart;