import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";


function Analytics({ accuracy }) {


  const data = [
    {
      name: "Model 1",
      performance: 70
    },
    {
      name: "Model 2",
      performance: 78
    },
    {
      name: "Model 3",
      performance: 86
    },
    {
      name: "Model 4",
      performance: 92
    },
    {
      name: "Current",
      performance: accuracy || 98.7
    }
  ];


  return (

    <div
      style={{
        background:"#1F2937",
        padding:"25px",
        borderRadius:"20px",
        marginTop:"40px",
        width:"80%",
        marginLeft:"auto",
        marginRight:"auto"
      }}
    >


      <h2
        style={{
          color:"white",
          textAlign:"center",
          marginBottom:"20px"
        }}
      >
        Model Performance
      </h2>



      <ResponsiveContainer width="100%" height={300}>

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="name"
            stroke="white"
          />

          <YAxis
            domain={[0,100]}
            stroke="white"
          />

          <Tooltip />


          <Line
            type="monotone"
            dataKey="performance"
            stroke="#3B82F6"
            strokeWidth={3}
          />


        </LineChart>

      </ResponsiveContainer>


    </div>

  );
}


export default Analytics;