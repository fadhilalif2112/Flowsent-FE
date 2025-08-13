import React from "react";
import useEmailSelection from "../hooks/useEmailSelection";
import EmailToolbar from "../components/email/EmailToolbar";
import EmailList from "../components/email/EmailList";
import { getEmailsByCategory } from "../data/advancedEmails";
import { Archive } from "lucide-react";

const ArchivePage = () => {
  // Mock archived emails data - in real app this would come from API
  const archivedEmails = getEmailsByCategory("archive");

  const { selectedEmails, selectAll, toggleSelectAll, toggleEmailSelection } =
    useEmailSelection(archivedEmails);

  const handleUnarchive = () => {
    console.log("Unarchive emails:", selectedEmails);
  };

  const handleDelete = () => {
    console.log("Delete archived emails:", selectedEmails);
  };

  const handleStar = () => {
    console.log("Star archived emails:", selectedEmails);
  };

  if (archivedEmails.length === 0) {
    return (
      <>
        <EmailToolbar
          selectedCount={selectedEmails.length}
          selectAll={selectAll}
          onSelectAll={toggleSelectAll}
          onArchive={handleUnarchive}
          onDelete={handleDelete}
          onStar={handleStar}
        />

        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Archive className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No archived emails
            </h3>
            <p className="text-gray-500">
              Emails you archive will be stored here.
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
        onArchive={handleUnarchive}
        onDelete={handleDelete}
        onStar={handleStar}
      />

      <EmailList
        emails={archivedEmails}
        selectedEmails={selectedEmails}
        onToggleSelect={toggleEmailSelection}
      />
    </>
  );
};

export default ArchivePage;
