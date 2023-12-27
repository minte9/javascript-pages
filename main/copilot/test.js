function calculateDaysBetweenDates(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const days = Math.floor((end - start) / (1000 * 60 * 60 * 24));
  return days;
}

console.log(calculateDaysBetweenDates('2020-01-01', '2020-01-31'));
alert(calculateDaysBetweenDates('2020-01-01', '2020-01-31'));

// Ctrl + Alt + I // Open Sidebar Chat
// Ctrl + I // Open Copilot Chat - Inline