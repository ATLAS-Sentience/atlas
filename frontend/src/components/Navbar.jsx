import "../styles/navbar.css";

import { FiMenu } from "react-icons/fi";

function Navbar({ sidebarOpen, setSidebarOpen }) {

    return (

        <nav className="navbar">

            <button
                className="menu-button"
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
                <FiMenu />
            </button>

            <h2 className="logo">
                ATLAS
            </h2>

            <div className="user">
                👤 User
            </div>

        </nav>

    );

}

export default Navbar;