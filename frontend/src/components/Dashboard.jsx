import Card from "./Card";

function Dashboard() {
  return (
    <div
      style={{
        flex: 1,
        padding: "30px",
        background: "#111827",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "white" }}>Dashboard</h1>

      <p style={{ color: "#9CA3AF" }}>
        Welcome to ATLAS AI Platform
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        <Card title="Users" value="128" color="#3B82F6" />

        <Card title="Models" value="12" color="#10B981" />

        <Card title="Running Jobs" value="8" color="#F59E0B" />

        <Card title="Accuracy" value="98.7%" color="#EF4444" />
      </div>
    </div>
  );
}

export default Dashboard;