import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";

import "../styles/global.css";

function Home() {
  return (
    <>
      <Navbar />

      <div className="layout">
        <Sidebar />

        <main className="content">
          <Dashboard />
        </main>
      </div>
    </>
  );
}

export default Home;