import { useEffect, useState } from "react";
import "../styles/settings.css";

import {
    getProfile,
    updateProfile
} from "../services/settingsAPI";


function SettingsPage() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") !== "false"
);

const [studyReminder, setStudyReminder] = useState(
    localStorage.getItem("studyReminder") !== "false"
);

const [taskAlert, setTaskAlert] = useState(
    localStorage.getItem("taskAlert") !== "false"
);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");


    useEffect(() => {

        async function loadProfile() {

            try {

                const profile = await getProfile();

                setUsername(profile.username || "");
                setEmail(profile.email || "");

            } catch (error) {

                console.error(
                    "Failed to load profile:",
                    error
                );

                setMessage(
                    "Unable to load profile"
                );

            } finally {

                setLoading(false);

            }

        }


        loadProfile();

    }, []);

    useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    localStorage.setItem("studyReminder", studyReminder);
    localStorage.setItem("taskAlert", taskAlert);

    document.body.classList.toggle("dark-mode", darkMode);
}, [darkMode, studyReminder, taskAlert]);


    async function saveProfile() {

        if (!username.trim() || !email.trim()) {

            setMessage(
                "Username and email are required"
            );

            return;

        }


        try {

            setSaving(true);
            setMessage("");


            const updatedProfile =
                await updateProfile(
                    username,
                    email
                );


            setUsername(
                updatedProfile.username
            );

            setEmail(
                updatedProfile.email
            );


            /*
             * Keep Navbar synchronized
             * without requiring a refresh.
             */

            localStorage.setItem(
                "username",
                updatedProfile.username
            );


            localStorage.setItem(
                "email",
                updatedProfile.email
            );


            window.dispatchEvent(
                new Event("profileUpdated")
            );


            setMessage(
                "Profile updated successfully"
            );


        } catch (error) {

            console.error(
                "Failed to update profile:",
                error
            );


            setMessage(
                "Failed to update profile"
            );


        } finally {

            setSaving(false);

        }

    }


    function clearLocalData() {

        localStorage.removeItem(
            "username"
        );

        localStorage.removeItem(
            "email"
        );


        window.dispatchEvent(
            new Event("profileUpdated")
        );


        setMessage(
            "Local data cleared"
        );

    }


    if (loading) {

        return (

            <div className="settings-container">

                <h1>
                    ⚙️ Settings
                </h1>

                <p className="settings-subtitle">
                    Loading settings...
                </p>

            </div>

        );

    }


    return (

        <div className="settings-container">


            <h1>
                ⚙️ Settings
            </h1>


            <p className="settings-subtitle">
                Customize your Atlas experience
            </p>


            {message && (

                <p className="settings-message">
                    {message}
                </p>

            )}


            {/* PROFILE */}

            <div className="settings-card">

                <h2>
                    👤 Profile
                </h2>


                <div className="setting-item">

                    <p>
                        Username
                    </p>


                    <input
                        type="text"
                        value={username}
                        onChange={(e) =>
                            setUsername(e.target.value)
                        }
                        placeholder="Enter username"
                    />

                </div>


                <div className="setting-item">

                    <p>
                        Email
                    </p>


                    <input
                        type="email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        placeholder="Enter email"
                    />

                </div>


                <button
                    onClick={saveProfile}
                    disabled={saving}
                >

                    {saving
                        ? "Saving..."
                        : "Save Profile"
                    }

                </button>


            </div>


            {/* APPEARANCE */}

            <div className="settings-card">

                <h2>
                    🎨 Appearance
                </h2>


                <div className="setting-item">

                    <p>
                        Dark Mode
                    </p>


                    <button
                        onClick={() =>
                            setDarkMode(!darkMode)
                        }
                    >

                        {darkMode
                            ? "Enabled"
                            : "Disabled"
                        }

                    </button>

                </div>

            </div>


            {/* NOTIFICATIONS */}

            <div className="settings-card">

                <h2>
                    🔔 Notifications
                </h2>


                <div className="setting-item">

                    <p>
                        Study Reminders
                    </p>


                    <button
                        onClick={() =>
                            setStudyReminder(
                                !studyReminder
                            )
                        }
                    >

                        {studyReminder
                            ? "ON"
                            : "OFF"
                        }

                    </button>

                </div>


                <div className="setting-item">

                    <p>
                        Task Alerts
                    </p>


                    <button
                        onClick={() =>
                            setTaskAlert(
                                !taskAlert
                            )
                        }
                    >

                        {taskAlert
                            ? "ON"
                            : "OFF"
                        }

                    </button>

                </div>

            </div>


            {/* DATA */}

            <div className="settings-card">

                <h2>
                    🗂 Data Management
                </h2>


                <button
                    className="danger-btn"
                    onClick={clearLocalData}
                >

                    Clear Local Data

                </button>

            </div>


        </div>

    );

}


export default SettingsPage;