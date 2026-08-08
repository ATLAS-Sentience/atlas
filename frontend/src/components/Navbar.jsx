import { useEffect, useState } from "react";
import "../styles/navbar.css";
import { FiMenu } from "react-icons/fi";

function Navbar({ sidebarOpen, setSidebarOpen }) {

    const [username, setUsername] = useState("User");

    useEffect(() => {

        async function loadProfile() {

            try {

                const response = await fetch(
                    "http://127.0.0.1:8000/users/profile"
                );

                if (!response.ok) {
                    return;
                }

                const data = await response.json();

                if (data.username) {
                    setUsername(data.username);
                }

            } catch (error) {

                console.error(
                    "Failed to load profile:",
                    error
                );

            }

        }

        loadProfile();

    }, []);


    return (

        <nav className="navbar">

            <button
                className="menu-button"
                onClick={() =>
                    setSidebarOpen(!sidebarOpen)
                }
            >
                <FiMenu />
            </button>


            <h2 className="logo">
                ATLAS
            </h2>


            <div className="user">
                👤 {username}
            </div>

        </nav>

    );

}

export default Navbar;