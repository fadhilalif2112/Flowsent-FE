import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
const MainLayout = () => {
  return (
    <>
      <Topbar onMenuToggle={handleMenuToggle} isMobile={isMobile} />

      <div className="flex-1 flex overflow-hidden">
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          isMobile={isMobile}
        />
      </div>
    </>
  );
};

export default MainLayout;
