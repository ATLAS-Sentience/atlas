import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";


function ExpenseChart({food, rent, travel, other}) {


    const data = [
        {
            name:"Food",
            value:Number(food) || 0
        },
        {
            name:"Rent",
            value:Number(rent) || 0
        },
        {
            name:"Travel",
            value:Number(travel) || 0
        },
        {
            name:"Other",
            value:Number(other) || 0
        }
    ];


    const filteredData = data.filter(
        item => item.value > 0
    );


    const COLORS = [
        "#10B981", // green - food
        "#3B82F6", // blue - rent
        "#F59E0B", // orange - travel
        "#EF4444"  // red - other
    ];



    return (

        <div
        style={{
            background:"#1F2937",
            padding:"30px",
            borderRadius:"20px",
            width:"80%",
            margin:"40px auto",
            boxShadow:"0 10px 25px rgba(0,0,0,0.3)"
        }}
        >

        <h2
        style={{
            color:"white",
            textAlign:"center",
            marginBottom:"20px"
        }}
        >
            Expense Breakdown
        </h2>



        <ResponsiveContainer
        width="100%"
        height={350}
        >

        <PieChart>


            <Pie
            data={filteredData}
            dataKey="value"
            nameKey="name"
            outerRadius={120}
            label
            >


            {
                filteredData.map(
                    (entry,index)=>(
                        <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        />
                    )
                )
            }


            </Pie>



            <Tooltip
            contentStyle={{
                background:"#111827",
                border:"none",
                color:"white",
                borderRadius:"10px"
            }}
            />



            <Legend
            wrapperStyle={{
                color:"white"
            }}
            />



        </PieChart>


        </ResponsiveContainer>


        </div>

    );

}


export default ExpenseChart;