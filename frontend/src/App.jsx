import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import DashboardPage from "./pages/DashboardPage";
import UsersPage from "./pages/UsersPage";
import ModelsPage from "./pages/ModelsPage";
import SettingsPage from "./pages/SettingsPage";

import FinancePage from "./pages/FinancePage";
import CalendarPage from "./pages/CalendarPage";
import StudyPage from "./pages/StudyPage";
import GithubPage from "./pages/GithubPage";
import HealthPage from "./pages/HealthPage";
import ProductivityPage from "./pages/ProductivityPage";
import SimulationPage from "./pages/SimulationPage";


function App() {

  return (

    <Routes>

      <Route path="/" element={<Home />}>

        <Route index element={<DashboardPage />} />

        <Route path="dashboard" element={<DashboardPage />} />

        <Route path="users" element={<UsersPage />} />

        <Route path="models" element={<ModelsPage />} />


        {/* ATLAS Modules */}

        <Route path="finance" element={<FinancePage />} />

        <Route path="calendar" element={<CalendarPage />} />

        <Route path="study" element={<StudyPage />} />

        <Route path="github" element={<GithubPage />} />

        <Route path="health" element={<HealthPage />} />

        <Route path="productivity" element={<ProductivityPage />} />

        <Route path="simulation" element={<SimulationPage />} />

        <Route path="settings" element={<SettingsPage />} />


      </Route>

    </Routes>

  );

}


export default App;