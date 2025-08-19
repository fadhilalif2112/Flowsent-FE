import React from "react";
import useEmailSelection from "../hooks/useEmailSelection";
import EmailToolbar from "../components/email/EmailToolbar";
import EmailList from "../components/email/EmailList";
import { getEmailsByCategory } from "../data/advancedEmails";
import { FileText } from "lucide-react";

const DraftsPage = () => {
  // Mock drafts data - in real app this would come from API
  const draftEmails = getEmailsByCategory("draft");

  const { selectedEmails, selectAll, toggleSelectAll, toggleEmailSelection } =
    useEmailSelection(draftEmails);

  if (draftEmails.length === 0) {
    return (
      <>
        <EmailToolbar
          selectedCount={selectedEmails.length}
          selectAll={selectAll}
          onSelectAll={toggleSelectAll}
        />

        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No drafts
            </h3>
            <p className="text-gray-500">
              Your draft emails will be saved here.
            </p>
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
        emails={draftEmails}
        selectedEmails={selectedEmails}
        onToggleSelect={toggleEmailSelection}
      />
    </>
  );
};

export default DraftsPage;
