export const formatTime = (timestamp) => {
  const now = new Date();
  const emailDate = new Date(timestamp);
  const diffInHours = (now - emailDate) / (1000 * 60 * 60);

  if (diffInHours < 1) {
    return "now";
  } else if (diffInHours < 24) {
    return `${Math.floor(diffInHours)}h`;
  } else {
    const diffInDays = Math.floor(diffInHours / 24);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${months[emailDate.getMonth()]} ${emailDate.getDate()}`;
  }
};
