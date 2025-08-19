import React from "react";
import useEmailSelection from "../hooks/useEmailSelection";
import EmailToolbar from "../components/email/EmailToolbar";
import EmailList from "../components/email/EmailList";
import { getEmailsByCategory } from "../data/advancedEmails";
import { Trash2 } from "lucide-react";

const TrashPage = () => {
  // Mock deleted emails data - in real app this would come from API
  const deletedEmails = getEmailsByCategory("trash");

  const { selectedEmails, selectAll, toggleSelectAll, toggleEmailSelection } =
    useEmailSelection(deletedEmails);

  if (deletedEmails.length === 0) {
    return (
      <>
        <EmailToolbar
          selectedCount={selectedEmails.length}
          selectAll={selectAll}
          onSelectAll={toggleSelectAll}
        />

        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Trash2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Trash is empty
            </h3>
            <p className="text-gray-500">
              Deleted emails will be stored here for 30 days.
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bg-red-50 border-b border-red-200 px-4 md:px-6 py-3">
        <div className="flex items-center justify-between">
          <p className="text-sm text-red-800">
            <Trash2 className="w-4 h-4 inline mr-2" />
            Emails in trash will be permanently deleted after 30 days.
          </p>
          <button className="text-sm text-red-600 hover:text-red-800 font-medium">
            Empty trash
          </button>
        </div>
      </div>

      <EmailToolbar
        selectedCount={selectedEmails.length}
        selectAll={selectAll}
        onSelectAll={toggleSelectAll}
      />

      <EmailList
        emails={deletedEmails}
        selectedEmails={selectedEmails}
        onToggleSelect={toggleEmailSelection}
      />
    </>
  );
};

export default TrashPage;
