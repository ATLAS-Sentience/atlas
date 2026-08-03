import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";

function Home() {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />
        <Dashboard />
      </div>
    </>
  );
}

export default Home;