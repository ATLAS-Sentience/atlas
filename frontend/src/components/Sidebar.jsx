function Sidebar() {
  return (
    <aside
      style={{
        width: "220px",
        background: "#1F2937",
        color: "white",
        height: "calc(100vh - 70px)",
        padding: "20px"
      }}
    >
      <h3>Menu</h3>

      <p>🏠 Home</p>

      <p>📊 Dashboard</p>

      <p>🧠 Models</p>

      <p>⚙ Settings</p>
    </aside>
  );
}

export default Sidebar;