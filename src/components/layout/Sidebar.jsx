import React from "react";
import { useState } from "react";
import {
  Inbox,
  Send,
  FileText,
  AlertTriangle,
  Trash2,
  Star,
  Edit3,
  X,
} from "lucide-react";

const Sidebar = ({ isOpen, onClose, isMobile }) => {
  const [activeFolder, setActiveFolder] = useState("inbox");

  const folders = [
    { id: "inbox", name: "Inbox", icon: Inbox, count: 12 },
    { id: "sent", name: "Sent", icon: Send, count: null },
    { id: "drafts", name: "Drafts", icon: FileText, count: 3 },
    { id: "spam", name: "Spam", icon: AlertTriangle, count: 2 },
    { id: "trash", name: "Trash", icon: Trash2, count: null },
    { id: "starred", name: "Starred", icon: Star, count: 5 },
  ];

  if (isMobile && !isOpen) return null;

  return (
    <>
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      <div
        className={`
        ${
          isMobile
            ? "fixed left-0 top-0 h-full z-50 transform transition-transform"
            : "relative"
        }
        ${isMobile && !isOpen ? "-translate-x-full" : "translate-x-0"}
        w-64 bg-white border-r border-gray-200 flex flex-col
      `}
      >
        <div className="p-4">
          {isMobile && (
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          )}

          <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 shadow-md transition-all">
            <Edit3 className="w-5 h-5" />
            <span>Compose</span>
          </button>
        </div>

        <nav className="flex-1 px-4">
          {folders.map((folder) => {
            const Icon = folder.icon;
            return (
              <button
                key={folder.id}
                onClick={() => setActiveFolder(folder.id)}
                className={`
                  w-full flex items-center justify-between px-3 py-2 rounded-lg mb-1 transition-colors
                  ${
                    activeFolder === folder.id
                      ? "bg-blue-50 text-blue-700 border-r-2 border-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }
                `}
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{folder.name}</span>
                </div>
                {folder.count && (
                  <span
                    className={`
                    px-2 py-1 rounded-full text-xs font-medium
                    ${
                      activeFolder === folder.id
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-600"
                    }
                  `}
                  >
                    {folder.count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
