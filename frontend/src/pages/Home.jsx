import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Home(){

    return(
        <>

            <Navbar />

            <div 
                className="layout"
                style={{
                    display:"flex",
                    width:"100%",
                }}
            >

                <Sidebar />

                <div 
                    className="content"
                    style={{
                        flex:1,
                        padding:"20px",
                    }}
                >
                    <Outlet />
                </div>

            </div>

        </>
    );

}

export default Home;