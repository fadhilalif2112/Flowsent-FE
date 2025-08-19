import React from "react";
import useEmailSelection from "../hooks/useEmailSelection";
import EmailToolbar from "../components/email/EmailToolbar";
import EmailList from "../components/email/EmailList";
import { getEmailsByCategory } from "../data/advancedEmails";
import { Send } from "lucide-react";

const SentPage = () => {
  // Mock sent emails data - in real app this would come from API
  const sentEmails = getEmailsByCategory("sent");

  const { selectedEmails, selectAll, toggleSelectAll, toggleEmailSelection } =
    useEmailSelection(sentEmails);

  if (sentEmails.length === 0) {
    return (
      <>
        <EmailToolbar
          selectedCount={selectedEmails.length}
          selectAll={selectAll}
          onSelectAll={toggleSelectAll}
        />

        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Send className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No sent emails
            </h3>
            <p className="text-gray-500">Emails you send will appear here.</p>
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
        emails={sentEmails}
        selectedEmails={selectedEmails}
        onToggleSelect={toggleEmailSelection}
      />
    </>
  );
};

export default SentPage;
