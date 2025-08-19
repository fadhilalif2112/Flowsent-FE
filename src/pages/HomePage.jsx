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

  if (allEmails.length === 0) {
    return (
      <>
        <EmailToolbar
          selectedCount={selectedEmails.length}
          selectAll={selectAll}
          onSelectAll={toggleSelectAll}
        />

        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Archive className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No Emails in Inbox
            </h3>
            <p className="text-gray-500">Emails you get will be shown here.</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <EmailToolbar
        selectedCount={selectedEmails.length}
        selectAll={selectAll}
        onSelectAll={toggleSelectAll}
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
