import React, { useState } from "react";
import { Menu, Mail, Search } from "lucide-react";
import ProfileDropdown from "../ui/ProfileDropdown";
import {
  Home,
  Edit,
  Star,
  Send,
  FileText,
  Archive,
  Trash2,
  LogOut,
} from "lucide-react";

const sidebarItems = [
  { icon: Home, label: "Home", key: "home" },
  { icon: Edit, label: "Compose", key: "compose" },
  { icon: Star, label: "Starred", key: "starred" },
  { icon: Send, label: "Sent", key: "sent" },
  { icon: FileText, label: "Drafts", key: "drafts", count: 2 },
  { icon: Archive, label: "Archive", key: "archive" },
  { icon: Trash2, label: "Trash", key: "trash" },
];

const MainLayout = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="h-screen flex bg-slate-900">
      {/* Sidebar */}
      <div
        className={`bg-slate-900 border-r border-slate-700 flex flex-col transition-all duration-300 ${
          sidebarCollapsed ? "w-16" : "w-64"
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-white" />
            </div>
            {!sidebarCollapsed && (
              <span className="text-white font-bold text-xl italic">
                FLOWSENT
              </span>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav
          className={`space-y-1 flex-1 ${
            sidebarCollapsed ? "px-2" : "px-4"
          } py-4`}
        >
          {sidebarItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveTab(item.key)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-colors relative ${
                activeTab === item.key
                  ? "bg-slate-700 text-white"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              } ${sidebarCollapsed ? "justify-center" : ""}`}
              title={sidebarCollapsed ? item.label : ""}
            >
              <item.icon size={18} />
              {!sidebarCollapsed && (
                <>
                  <span>{item.label}</span>
                  {item.count && (
                    <div className="ml-auto bg-slate-600 text-white text-xs px-2 py-1 rounded-full">
                      {item.count}
                    </div>
                  )}
                </>
              )}
              {sidebarCollapsed && item.count && (
                <div className="absolute -top-1 -right-1 bg-slate-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {item.count}
                </div>
              )}
            </button>
          ))}
        </nav>

        {/* Profile Section */}
        <div
          className={`border-t border-slate-700 ${
            sidebarCollapsed ? "p-2" : "p-4"
          }`}
        >
          {!sidebarCollapsed ? (
            <>
              <button className="w-full flex items-center gap-3 px-3 py-2 mt-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <div className="space-y-2">
              <button
                className="w-full p-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors flex items-center justify-center"
                title="Logout"
              >
                <LogOut size={16} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Topbar/Nav */}
      <div className="flex-1 flex flex-col">
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-2 text-gray-400 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors"
              title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search emails..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <ProfileDropdown
            isOpen={profileOpen}
            onToggle={() => setProfileOpen(!profileOpen)}
          />
        </div>
        {/* Main Content */}
        <div className="flex-1 overflow-auto bg-white">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
