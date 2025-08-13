import React from "react";
import useEmailSelection from "../hooks/useEmailSelection";
import EmailToolbar from "../components/email/EmailToolbar";
import EmailList from "../components/email/EmailList";
import { getEmailsByCategory } from "../data/advancedEmails";
import { Star } from "lucide-react";

const StarredPage = () => {
  // Filter only starred emails
  const starredEmails = getEmailsByCategory("starred");

  const { selectedEmails, selectAll, toggleSelectAll, toggleEmailSelection } =
    useEmailSelection(starredEmails);

  const handleArchive = () => {
    console.log("Archive starred emails:", selectedEmails);
  };

  const handleDelete = () => {
    console.log("Delete starred emails:", selectedEmails);
  };

  const handleStar = () => {
    console.log("Unstar emails:", selectedEmails);
  };

  if (starredEmails.length === 0) {
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

        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Star className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No starred emails
            </h3>
            <p className="text-gray-500">
              Star important emails to find them easily later.
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
        onArchive={handleArchive}
        onDelete={handleDelete}
        onStar={handleStar}
      />

      <EmailList
        emails={starredEmails}
        selectedEmails={selectedEmails}
        onToggleSelect={toggleEmailSelection}
      />
    </>
  );
};

export default StarredPage;
