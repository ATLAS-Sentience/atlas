import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Home(){

    return(
        <>
            <Navbar />

            <div className="layout">

                <Sidebar />

                <div className="content">
                    <Outlet />
                </div>

            </div>
        </>
    );

}

export default Home;