function Navbar() {
  return (
    <nav
      style={{
        height: "70px",
        background: "#111827",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px",
        color: "white"
      }}
    >
      <h2>ATLAS</h2>

      <div>👤 User</div>
    </nav>
  );
}

export default Navbar;