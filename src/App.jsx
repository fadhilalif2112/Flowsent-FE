import React from "react";
import useResponsive from "./hooks/useResponsive";
import useEmailSelection from "./hooks/useEmailSelection";
import Topbar from "./components/layout/Topbar";
import Sidebar from "./components/layout/Sidebar";
import EmailToolbar from "./components/email/EmailToolbar";
import EmailList from "./components/email/EmailList";
import { sampleEmails } from "./data/sampleEmails";
import MainLayout from "./components/layout/MainLayout";
import "./App.css";

function App() {
  const { isMobile, sidebarOpen, setSidebarOpen } = useResponsive();
  const { selectedEmails, selectAll, toggleSelectAll, toggleEmailSelection } =
    useEmailSelection(sampleEmails);

  const handleMenuToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

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
    <div className="h-screen flex flex-col bg-gray-50">
      <Topbar onMenuToggle={handleMenuToggle} isMobile={isMobile} />

      <div className="flex-1 flex overflow-hidden">
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          isMobile={isMobile}
        />

        <div className="flex-1 flex flex-col m-3">
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
        </div>
      </div>
    </div>
  );

  // return (
  //   <MainLayout>
  //     <EmailToolbar
  //       selectedCount={selectedEmails.length}
  //       selectAll={selectAll}
  //       onSelectAll={toggleSelectAll}
  //       onArchive={handleArchive}
  //       onDelete={handleDelete}
  //       onStar={handleStar}
  //     />

  //     <EmailList
  //       emails={sampleEmails}
  //       selectedEmails={selectedEmails}
  //       onToggleSelect={toggleEmailSelection}
  //     />
  //   </MainLayout>
  // );
}

export default App;
