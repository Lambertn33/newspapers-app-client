export const formatDate = (date: Date) => {
  const inputDate = new Date(date);
  const monthNames = [
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

  const year = inputDate.getFullYear();
  const month = monthNames[inputDate.getMonth()];
  const day = inputDate.getDate();

  const formattedDate = `${year} ${month} ${day}`;
  return formattedDate;
};
