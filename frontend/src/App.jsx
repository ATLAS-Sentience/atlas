import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DashboardPage from "./pages/DashboardPage";
import UsersPage from "./pages/UsersPage";
import ModelsPage from "./pages/ModelsPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>

        <Route index element={<DashboardPage />} />

        <Route path="dashboard" element={<DashboardPage />} />

        <Route path="users" element={<UsersPage />} />

        <Route path="models" element={<ModelsPage />} />

        <Route path="settings" element={<SettingsPage />} />

      </Route>
    </Routes>
  );
}

export default App;