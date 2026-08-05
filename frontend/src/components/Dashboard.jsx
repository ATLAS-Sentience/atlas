import { useEffect, useState } from "react";
import Card from "./Card";
import { getDashboard } from "../services/api";
import Users from "./Users";

function Dashboard() {

  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    async function fetchDashboard() {

      try {

        const data = await getDashboard();
        setDashboardData(data);

      } catch (error) {

        console.error("Error fetching dashboard:", error);

      } finally {

        setLoading(false);

      }

    }

    fetchDashboard();

  }, []);



  if (loading) {

    return (

      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "24px"
        }}
      >
        Loading Dashboard...
      </div>

    );

  }



  return (

    <div
      style={{
        width: "100%",
        minHeight: "100%",
        padding: "20px",
        boxSizing: "border-box"
      }}
    >

      <h1
        style={{
          color: "white",
          textAlign: "center",
          fontSize: "50px"
        }}
      >
        Dashboard
      </h1>


      <p
        style={{
          color: "#9CA3AF",
          textAlign: "center",
          fontSize: "22px"
        }}
      >
        Welcome to ATLAS AI Platform
      </p>



      <div
        style={{
          display: "flex",
          gap: "25px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "40px"
        }}
      >

        <Card
          title="Users"
          value={dashboardData.users}
          color="#3B82F6"
        />


        <Card
          title="Models"
          value={dashboardData.models}
          color="#10B981"
        />


        <Card
          title="Running Jobs"
          value={dashboardData.running_jobs}
          color="#F59E0B"
        />


        <Card
          title="Accuracy"
          value={`${dashboardData.accuracy}%`}
          color="#EF4444"
        />

      </div>


      <Users />

    </div>

  );

}


export default Dashboard;