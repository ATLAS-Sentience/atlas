import "../styles/sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {

    return (
        <aside className="sidebar">

            <h3>Menu</h3>

            <NavLink to="/">
                🏠 Home
            </NavLink>

            <NavLink to="/dashboard">
                📊 Dashboard
            </NavLink>

            <NavLink to="/users">
                👥 Users
            </NavLink>

            <NavLink to="/models">
                🧠 Models
            </NavLink>

            <NavLink to="/settings">
                ⚙ Settings
            </NavLink>

        </aside>
    );
}

export default Sidebar;