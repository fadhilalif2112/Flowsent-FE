import React from "react";
import { Archive, Trash2, Mail, Clock } from "lucide-react";

const EmailToolbar = ({
  selectedCount,
  selectAll,
  onSelectAll,
  onArchive,
  onDelete,
  onStar,
}) => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={selectAll}
          onChange={onSelectAll}
          className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500">
          <Archive className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500">
          <Trash2 className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500">
          <Mail className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500">
          <Clock className="w-5 h-5" />
        </button>
      </div>

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors">
        <span>+ Compose</span>
      </button>
    </div>
  );
};

export default EmailToolbar;
