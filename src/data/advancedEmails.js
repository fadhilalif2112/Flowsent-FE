// Enhanced sample data untuk mendukung semua routing
export const sampleEmails = [
  {
    id: 1,
    sender: "Diana",
    subject: "Your Daily Work Summary",
    preview: "And they'd probably do a lot of damage to an...",
    timestamp: new Date("2024-03-26"),
    read: false,
    starred: true,
    isNew: true,
    avatar: null,
    category: "inbox",
  },
  {
    id: 2,
    sender: "Unsplash Team",
    subject: "Get involved for International Women's Day - with link 😊",
    preview: "The link below is now clickable for Chrome users...",
    timestamp: new Date("2023-12-16"),
    read: true,
    starred: false,
    isNew: false,
    avatar: null,
    attachments: ["Winter", "Coffee"],
    category: "inbox",
  },
  {
    id: 3,
    sender: "Goodreads",
    subject: "Goodreads Newsletter: March 5, 2019",
    preview:
      "The most anticipated books of spring, a rocking read, and more! Goodreads Spring...",
    timestamp: new Date("2024-03-05"),
    read: true,
    starred: false,
    isNew: false,
    avatar: null,
    category: "inbox",
  },
  {
    id: 4,
    sender: "Spectrum",
    subject: "Spectrum Weekly Digest: ZEIT watercooler, Escape Room!",
    preview: "You didn't gain any reputation last week. Reputation is an...",
    timestamp: new Date("2024-02-21"),
    read: true,
    starred: false,
    isNew: false,
    avatar: null,
    category: "inbox",
  },
  {
    id: 5,
    sender: "Bruce Banner",
    subject: "Invitation for migration",
    preview: "Bruce Wayne, you have an invitation of migration...",
    timestamp: new Date("2023-10-26"),
    read: true,
    starred: false,
    isNew: false,
    avatar: null,
    attachments: ["Invitation"],
    category: "inbox",
  },
];

// Sent emails data
export const sentEmails = [
  {
    id: 101,
    sender: "You",
    subject: "Project Update - Q1 2024",
    preview:
      "Hi team, I wanted to share the latest updates on our Q1 progress and upcoming milestones...",
    timestamp: new Date("2024-03-25"),
    read: true,
    starred: false,
    isNew: false,
    avatar: null,
    category: "sent",
    recipient: "team@company.com",
  },
  {
    id: 102,
    sender: "You",
    subject: "Meeting Follow-up",
    preview:
      "Thank you for attending today's meeting. Here are the action items we discussed...",
    timestamp: new Date("2024-03-24"),
    read: true,
    starred: true,
    isNew: false,
    avatar: null,
    category: "sent",
    recipient: "john.doe@company.com",
  },
  {
    id: 103,
    sender: "You",
    subject: "Quarterly Report Submission",
    preview:
      "Please find attached the quarterly report for Q1 2024. The report includes...",
    timestamp: new Date("2024-03-20"),
    read: true,
    starred: false,
    isNew: false,
    avatar: null,
    attachments: ["Q1_Report.pdf", "Analytics.xlsx"],
    category: "sent",
    recipient: "manager@company.com",
  },
];

// Draft emails data
export const draftEmails = [
  {
    id: 201,
    sender: "Draft",
    subject: "Re: Marketing Campaign Ideas",
    preview:
      "I think we should consider a multi-channel approach for the upcoming product launch...",
    timestamp: new Date("2024-03-26"),
    read: false,
    starred: false,
    isNew: false,
    avatar: null,
    category: "draft",
  },
  {
    id: 202,
    sender: "Draft",
    subject: "Vacation Request",
    preview:
      "I would like to request vacation days from April 15-20. I have completed all current projects...",
    timestamp: new Date("2024-03-20"),
    read: false,
    starred: false,
    isNew: false,
    avatar: null,
    category: "draft",
  },
  {
    id: 202,
    sender: "Draft",
    subject: "Shibal",
    preview: "I would like to discuss the Shibal project...",
    timestamp: new Date("2024-03-20"),
    read: false,
    starred: false,
    isNew: false,
    avatar: null,
    category: "draft",
  },
];

// Archived emails data
export const archivedEmails = [
  {
    id: 301,
    sender: "Newsletter",
    subject: "Weekly Tech Updates",
    preview:
      "This week in technology: AI advances, new frameworks, and industry insights...",
    timestamp: new Date("2024-03-15"),
    read: true,
    starred: false,
    isNew: false,
    avatar: null,
    category: "archive",
  },
  {
    id: 302,
    sender: "Company HR",
    subject: "Policy Update Notification",
    preview:
      "We have updated our remote work policy. Please review the changes and acknowledge...",
    timestamp: new Date("2024-03-10"),
    read: true,
    starred: false,
    isNew: false,
    avatar: null,
    attachments: ["Remote_Work_Policy.pdf"],
    category: "archive",
  },
  {
    id: 303,
    sender: "Conference Organizer",
    subject: "Thank you for attending TechConf 2024",
    preview:
      "Thank you for being part of TechConf 2024. We hope you found the sessions valuable...",
    timestamp: new Date("2024-02-28"),
    read: true,
    starred: true,
    isNew: false,
    avatar: null,
    category: "archive",
  },
];

// Trash emails data
export const trashEmails = [
  {
    id: 401,
    sender: "Spam Sender",
    subject: "You've won a million dollars!",
    preview:
      "Congratulations! You've been selected as our lucky winner in our daily lottery...",
    timestamp: new Date("2024-03-18"),
    read: true,
    starred: false,
    isNew: false,
    avatar: null,
    category: "trash",
    deletedAt: new Date("2024-03-19"),
  },
  {
    id: 402,
    sender: "Old Newsletter",
    subject: "Outdated Product Updates",
    preview:
      "Check out our old product features that are no longer relevant or supported...",
    timestamp: new Date("2024-02-25"),
    read: true,
    starred: false,
    isNew: false,
    avatar: null,
    category: "trash",
    deletedAt: new Date("2024-03-15"),
  },
];

// Helper functions untuk filter data
export const getEmailsByCategory = (category) => {
  switch (category) {
    case "inbox":
      return sampleEmails;
    case "sent":
      return sentEmails;
    case "draft":
      return draftEmails;
    case "archive":
      return archivedEmails;
    case "trash":
      return trashEmails;
    case "starred":
      return [...sampleEmails, ...sentEmails, ...archivedEmails].filter(
        (email) => email.starred
      );
    default:
      return [];
  }
};

export const getEmailCounts = () => {
  return {
    inbox: sampleEmails.filter((email) => !email.read).length,
    sent: sentEmails.length,
    draft: draftEmails.length,
    archive: archivedEmails.length,
    trash: trashEmails.length,
    starred: [...sampleEmails, ...sentEmails, ...archivedEmails].filter(
      (email) => email.starred
    ).length,
  };
};
