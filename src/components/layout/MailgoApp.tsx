import React, { useState } from "react";
import {
  Search,
  Filter,
  Download,
  Menu,
  Home,
  Users,
  Zap,
  CheckSquare,
  BarChart3,
  Bell,
  MoreHorizontal,
  Plus,
  Inbox,
  Send,
  FileText,
  Star,
  Trash2,
  Settings,
  Archive,
  LogOut,
  User,
  Edit,
  Check,
  Square,
} from "lucide-react";

const MailgoApp = () => {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [selectedEmails, setSelectedEmails] = useState<number[]>([]);
  const [currentView, setCurrentView] = useState<string>("inbox");
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [emailsData, setEmailsData] = useState([
    {
      id: 1,
      sender: "GitHub",
      subject: "Your security alert",
      preview: "We detected a new sign-in to your account from a new device...",
      time: "10:30 AM",
      isRead: false,
      isStarred: false,
    },
    {
      id: 2,
      sender: "Netflix",
      subject: "New movies this week",
      preview: "Check out the latest additions to your watchlist...",
      time: "9:15 AM",
      isRead: true,
      isStarred: true,
    },
    {
      id: 3,
      sender: "LinkedIn",
      subject: "Weekly digest",
      preview: "See what your network has been up to this week...",
      time: "Yesterday",
      isRead: true,
      isStarred: false,
    },
  ]);

  // Sample data
  const subscribers = [
    {
      id: 1,
      name: "Alivika tony",
      email: "alivikatory@example.com",
      date: "Friday, February 3, 2023",
      confirmed: true,
      avatar: "AT",
    },
    {
      id: 2,
      name: "Liam James",
      email: "liamjames@example.com",
      date: "Friday, February 3, 2023",
      confirmed: true,
      avatar: "LJ",
    },
    {
      id: 3,
      name: "Olivia Emma",
      email: "oliviaemma@example.com",
      date: "Friday, February 3, 2023",
      confirmed: true,
      avatar: "OE",
    },
    {
      id: 4,
      name: "Alivika tony",
      email: "alivikatory@example.com",
      date: "Friday, February 3, 2023",
      confirmed: true,
      avatar: "AT",
    },
    {
      id: 5,
      name: "Olivia Emma",
      email: "oliviaemma@example.com",
      date: "Friday, February 3, 2023",
      confirmed: true,
      avatar: "OE",
    },
    {
      id: 6,
      name: "Henry Theodore",
      email: "henrytheodore@example.com",
      date: "Monday, February 5, 2023",
      confirmed: true,
      avatar: "HT",
    },
    {
      id: 7,
      name: "Liam James",
      email: "liamjames@example.com",
      date: "Friday, February 3, 2023",
      confirmed: true,
      avatar: "LJ",
    },
  ];

  const emails = [
    {
      id: 1,
      sender: "GitHub",
      subject: "Your security alert",
      preview: "We detected a new sign-in to your account from a new device...",
      time: "10:30 AM",
      isRead: false,
      isStarred: false,
    },
    {
      id: 2,
      sender: "Netflix",
      subject: "New movies this week",
      preview: "Check out the latest additions to your watchlist...",
      time: "9:15 AM",
      isRead: true,
      isStarred: true,
    },
    {
      id: 3,
      sender: "LinkedIn",
      subject: "Weekly digest",
      preview: "See what your network has been up to this week...",
      time: "Yesterday",
      isRead: true,
      isStarred: false,
    },
  ];

  const sidebarItems = [
    { icon: Home, label: "Home", key: "home" },
    { icon: Edit, label: "Compose", key: "compose" },
    { icon: Star, label: "Starred", key: "starred" },
    { icon: Send, label: "Sent", key: "sent" },
    { icon: FileText, label: "Drafts", key: "drafts", count: 2 },
    { icon: Archive, label: "Archive", key: "archive" },
    { icon: Trash2, label: "Trash", key: "trash" },
  ];

  const toggleEmailSelection = (emailId: number) => {
    setSelectedEmails((prev) =>
      prev.includes(emailId)
        ? prev.filter((id) => id !== emailId)
        : [...prev, emailId]
    );
  };

  const toggleSelectAll = () => {
    const filteredEmails = getFilteredEmails();
    if (selectAll) {
      setSelectedEmails([]);
      setSelectAll(false);
    } else {
      setSelectedEmails(filteredEmails.map((email) => email.id));
      setSelectAll(true);
    }
  };

  const handleArchiveSelected = () => {
    console.log("Archiving emails:", selectedEmails);
    setSelectedEmails([]);
    setSelectAll(false);
  };

  const handleTrashSelected = () => {
    console.log("Moving to trash:", selectedEmails);
    setSelectedEmails([]);
    setSelectAll(false);
  };

  const toggleStar = (
    emailId: number,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();
    setEmailsData((prevEmails) =>
      prevEmails.map((email) =>
        email.id === emailId ? { ...email, isStarred: !email.isStarred } : email
      )
    );
  };

  const getFilteredEmails = () => {
    switch (currentView) {
      case "starred":
        return emailsData.filter((email) => email.isStarred);
      case "sent":
        return emailsData; // In real app, would filter sent emails
      case "drafts":
        return emailsData; // In real app, would filter draft emails
      case "archive":
        return emailsData; // In real app, would filter archived emails
      case "trash":
        return emailsData; // In real app, would filter trashed emails
      default: // inbox
        return emailsData;
    }
  };

  type AvatarProps = { name: string; size?: string };
  const Avatar: React.FC<AvatarProps> = ({ name, size = "w-8 h-8" }) => {
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-red-500",
    ];
    const colorIndex = name.length % colors.length;

    return (
      <div
        className={`${size} ${colors[colorIndex]} rounded-full flex items-center justify-center text-white text-sm font-medium`}
      >
        {initials}
      </div>
    );
  };

  const renderSubscribers = () => (
    <div className="flex-1 bg-slate-800 text-white">
      {/* Header */}
      <div className="border-b border-slate-700 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
              title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <Menu size={18} />
            </button>
            <h1 className="text-2xl font-bold">Subscribers</h1>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <Plus size={16} />
            Export
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
            <Filter size={16} />
            Filters
          </button>
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-700 rounded-lg">
            <span className="text-sm">Friday, February 3, 2023</span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-auto">
        <table className="w-full">
          <thead className="bg-slate-700 sticky top-0">
            <tr>
              <th className="text-left p-4 font-medium">Username</th>
              <th className="text-left p-4 font-medium">Date</th>
              <th className="text-left p-4 font-medium">Confirmed</th>
              <th className="w-12"></th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((subscriber) => (
              <tr
                key={subscriber.id}
                className="border-b border-slate-700 hover:bg-slate-750"
              >
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <Avatar name={subscriber.name} />
                    <div>
                      <div className="font-medium">{subscriber.name}</div>
                      <div className="text-sm text-slate-400">
                        {subscriber.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-slate-300">{subscriber.date}</td>
                <td className="p-4">
                  <span className="text-green-400">Yes</span>
                </td>
                <td className="p-4">
                  <button className="text-slate-400 hover:text-white">
                    <MoreHorizontal size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderEmails = () => (
    <div className="flex-1 bg-white">
      {/* Search Header */}
      <div className="border-b border-slate-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <Menu size={18} />
            </button>
            <h1 className="text-xl font-bold capitalize">{currentView}</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-slate-100 rounded">
              <Settings size={16} />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
            size={16}
          />
          <input
            type="text"
            placeholder="Search emails..."
            className="w-full bg-slate-50 pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:border-blue-500 focus:outline-none focus:bg-white"
          />
        </div>
      </div>

      {/* Action Bar */}
      <div className="border-b border-slate-200 p-4">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSelectAll}
            className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded transition-colors"
            title={selectAll ? "Deselect all" : "Select all"}
          >
            {selectAll ? <Check size={16} /> : <Square size={16} />}
            <span className="text-sm">
              {selectAll ? "Deselect all" : "Select all"}
            </span>
          </button>

          {selectedEmails.length > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-600">
                {selectedEmails.length} selected
              </span>
              <button
                onClick={handleArchiveSelected}
                className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
              >
                <Archive size={16} />
                Archive
              </button>
              <button
                onClick={handleTrashSelected}
                className="flex items-center gap-2 px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
              >
                <Trash2 size={16} />
                Trash
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="divide-y divide-slate-200">
        {getFilteredEmails().map((email) => (
          <div
            key={email.id}
            className={`p-4 hover:bg-slate-50 cursor-pointer transition-colors ${
              !email.isRead ? "bg-blue-50" : ""
            } ${selectedEmails.includes(email.id) ? "bg-blue-100" : ""}`}
            onClick={() => toggleEmailSelection(email.id)}
          >
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={selectedEmails.includes(email.id)}
                onChange={() => toggleEmailSelection(email.id)}
                className="mt-1"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                className={`mt-1 ${
                  email.isStarred ? "text-yellow-500" : "text-slate-300"
                } hover:text-yellow-400 transition-colors`}
                onClick={(e) => toggleStar(email.id, e)}
                title={email.isStarred ? "Remove star" : "Add star"}
              >
                <Star
                  size={16}
                  fill={email.isStarred ? "currentColor" : "none"}
                />
              </button>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`font-medium ${
                      !email.isRead ? "font-bold" : ""
                    }`}
                  >
                    {email.sender}
                  </span>
                  <span className="text-sm text-slate-500">{email.time}</span>
                </div>
                <div className={`mb-1 ${!email.isRead ? "font-semibold" : ""}`}>
                  {email.subject}
                </div>
                <div className="text-sm text-slate-600 truncate">
                  {email.preview}
                </div>
              </div>
            </div>
          </div>
        ))}

        {getFilteredEmails().length === 0 && currentView === "starred" && (
          <div className="p-8 text-center text-slate-500">
            <Star size={48} className="mx-auto mb-4 text-slate-300" />
            <p className="text-lg font-medium mb-2">No starred messages</p>
            <p>
              Stars let you give messages a special status to make them easier
              to find.
            </p>
            <p>
              To star a message, click on the star outline beside any message.
            </p>
          </div>
        )}
      </div>
    </div>
  );

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
            {/* Circular Logo with rough edges */}
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 100 100" className="w-10 h-10">
                {/* Rough circular background */}
                <path
                  d="M50,5 C75,8 92,25 95,50 C92,75 75,92 50,95 C25,92 8,75 5,50 C8,25 25,8 50,5 Z"
                  fill="#4a5568"
                  stroke="#4a5568"
                  strokeWidth="2"
                />
                {/* Inner circle with gradient */}
                <circle cx="50" cy="50" r="40" fill="url(#logoGradient)" />
                {/* Kirim text */}
                <text
                  x="50"
                  y="42"
                  textAnchor="middle"
                  fill="white"
                  fontSize="16"
                  fontFamily="Arial, sans-serif"
                  fontWeight="normal"
                  style={{ fontStyle: "italic" }}
                >
                  Kirim
                </text>
                {/* Underline */}
                <line
                  x1="25"
                  y1="48"
                  x2="75"
                  y2="48"
                  stroke="white"
                  strokeWidth="1"
                />
                {/* EMAIL text */}
                <text
                  x="50"
                  y="62"
                  textAnchor="middle"
                  fill="white"
                  fontSize="10"
                  fontFamily="Arial, sans-serif"
                  fontWeight="bold"
                  letterSpacing="1"
                >
                  EMAIL
                </text>

                {/* Gradient definition */}
                <defs>
                  <linearGradient
                    id="logoGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#667eea", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#764ba2", stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {!sidebarCollapsed && (
              <div className="flex flex-col">
                <span className="text-white font-light text-xl italic">
                  Kirim
                </span>
                <span className="text-white font-bold text-sm tracking-widest -mt-1">
                  EMAIL
                </span>
              </div>
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
              onClick={() => {
                setActiveTab(item.key);
                if (item.key === "home") {
                  setCurrentView("inbox");
                } else if (
                  ["starred", "sent", "drafts", "archive", "trash"].includes(
                    item.key
                  )
                ) {
                  setCurrentView(item.key);
                  setActiveTab("home"); // Keep home as active tab for email views
                }
                // Reset selections when changing views
                setSelectedEmails([]);
                setSelectAll(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-colors relative ${
                activeTab === item.key ||
                (activeTab === "home" && currentView === item.key)
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
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <User size={16} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-white text-sm font-medium">John Doe</div>
                  <div className="text-slate-400 text-xs">
                    john.doe@example.com
                  </div>
                </div>
              </div>
              <button className="w-full flex items-center gap-3 px-3 py-2 mt-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <div className="space-y-2">
              <button
                className="w-full p-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors flex items-center justify-center"
                title="Profile"
              >
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <User size={12} className="text-white" />
                </div>
              </button>
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

      {/* Main Content */}
      {activeTab === "compose" ? (
        <div className="flex-1 bg-white p-8">
          <h1 className="text-2xl font-bold mb-6">Compose Email</h1>
          <div className="max-w-4xl">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  To
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="recipient@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Email subject"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={12}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Type your message..."
                ></textarea>
              </div>
              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Send
                </button>
                <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                  Save Draft
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        renderEmails()
      )}
    </div>
  );
};

export default MailgoApp;
