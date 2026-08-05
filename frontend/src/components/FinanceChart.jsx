import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";


function FinanceChart({data}) {


    const chartData = [
        {
            name:"Salary",
            value:data.salary
        },
        {
            name:"Savings",
            value:data.savings
        },
        {
            name:"Expense",
            value:data.expense
        }
    ];



    return (

        <div
        style={{
            background:"#1F2937",
            padding:"30px",
            borderRadius:"20px",
            margin:"40px auto",
            width:"80%"
        }}
        >

        <h2
        style={{
            color:"white",
            textAlign:"center"
        }}
        >
            Financial Overview
        </h2>


        <ResponsiveContainer width="100%" height={350}>

            <BarChart data={chartData}>

                <XAxis 
                dataKey="name"
                stroke="white"
                />

                <YAxis 
                stroke="white"
                />

                <Tooltip />


                <Bar
                dataKey="value"
                fill="#3B82F6"
                />

            </BarChart>

        </ResponsiveContainer>


        </div>

    );

}


export default FinanceChart;