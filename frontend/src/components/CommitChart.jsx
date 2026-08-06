import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";


function CommitChart({data}){


return(

<div
className="github-section"
>


<h2>
📈 Commit Activity
</h2>



<ResponsiveContainer
width="100%"
height={300}
>


<LineChart data={data}>


<CartesianGrid stroke="#475569"/>


<XAxis 
dataKey="day"
/>


<YAxis />


<Tooltip />


<Line

type="monotone"

dataKey="commits"

stroke="#3B82F6"

strokeWidth={3}

/>


</LineChart>


</ResponsiveContainer>


</div>


)


}


export default CommitChart;