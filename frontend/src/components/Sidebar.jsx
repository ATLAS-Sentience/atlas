import "../styles/sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {

    return (
        <aside className="sidebar">

            <h3>
                ATLAS
            </h3>


            <NavLink to="/">
                🏠 Home
            </NavLink>


            <NavLink to="/dashboard">
                📊 Dashboard
            </NavLink>


            <NavLink to="/finance">
                💰 Finance
            </NavLink>


            <NavLink to="/calendar">
                📅 Calendar
            </NavLink>


            <NavLink to="/study">
                📚 Study
            </NavLink>


            <NavLink to="/github">
                💻 GitHub
            </NavLink>


            <NavLink to="/health">
                ❤️ Health
            </NavLink>


            <NavLink to="/productivity">
                ⚡ Productivity
            </NavLink>


            <NavLink to="/simulation">
                🌎 Simulation
            </NavLink>


            <NavLink to="/settings">
                ⚙ Settings
            </NavLink>

            <NavLink to="/finance">
    💰 Finance
</NavLink>

        </aside>
    );
}

export default Sidebar;