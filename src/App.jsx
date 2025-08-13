import React from "react";
import useEmailSelection from "./hooks/useEmailSelection";
import EmailToolbar from "./components/email/EmailToolbar";
import EmailList from "./components/email/EmailList";
import { sampleEmails } from "./data/sampleEmails";
import MainLayout from "./components/layout/MainLayout";
import "./App.css";

function App() {
  const { selectedEmails, selectAll, toggleSelectAll, toggleEmailSelection } =
    useEmailSelection(sampleEmails);

  const handleArchive = () => {
    console.log("Archive emails:", selectedEmails);
  };

  const handleDelete = () => {
    console.log("Delete emails:", selectedEmails);
  };

  const handleStar = () => {
    console.log("Star emails:", selectedEmails);
  };

  return (
    <MainLayout>
      <EmailToolbar
        selectedCount={selectedEmails.length}
        selectAll={selectAll}
        onSelectAll={toggleSelectAll}
        onArchive={handleArchive}
        onDelete={handleDelete}
        onStar={handleStar}
      />

      <EmailList
        emails={sampleEmails}
        selectedEmails={selectedEmails}
        onToggleSelect={toggleEmailSelection}
      />
    </MainLayout>
  );
}

export default App;
