import React from "react";
import useEmailSelection from "../hooks/useEmailSelection";
import EmailToolbar from "../components/email/EmailToolbar";
import EmailList from "../components/email/EmailList";
import { getEmailsByCategory } from "../data/advancedEmails";

const HomePage = () => {
  // Show all emails (inbox)
  const allEmails = getEmailsByCategory("inbox");

  const { selectedEmails, selectAll, toggleSelectAll, toggleEmailSelection } =
    useEmailSelection(allEmails);

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
    <>
      <EmailToolbar
        selectedCount={selectedEmails.length}
        selectAll={selectAll}
        onSelectAll={toggleSelectAll}
        onArchive={handleArchive}
        onDelete={handleDelete}
        onStar={handleStar}
      />

      <EmailList
        emails={allEmails}
        selectedEmails={selectedEmails}
        onToggleSelect={toggleEmailSelection}
      />
    </>
  );
};

export default HomePage;
