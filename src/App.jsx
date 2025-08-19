import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/HomePage";
import StarredPage from "./pages/StarredPage";
import SentPage from "./pages/SentPage";
import DraftsPage from "./pages/DraftsPage";
import ArchivePage from "./pages/ArchivePage";
import TrashPage from "./pages/TrashPage";
import NotFound from "./pages/NotFound";
import ComposePage from "./pages/ComposePage";
import ProfilePage from "./pages/ProfilePage";
import "./App.css";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          {/* Routes ketika path tidak ada */}
          <Route path="*" element={<NotFound />} />
          {/* Routes */}
          <Route path="/" element={<Navigate to="/inbox" replace />} />
          <Route path="/inbox" element={<HomePage />} />
          <Route path="/starred" element={<StarredPage />} />
          <Route path="/sent" element={<SentPage />} />
          <Route path="/drafts" element={<DraftsPage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/trash" element={<TrashPage />} />
          <Route path="/compose" element={<ComposePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
