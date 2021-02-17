export function checkFromProd(dateFrom, dateTo) {
  console.log("date from", dateFrom)
  console.log("date too", dateTo)
  const countedMonth =
    dateTo.getMonth() -
    dateFrom.getMonth() +
    12 * (dateTo.getFullYear() - dateFrom.getFullYear());

  if (dateFrom.getFullYear() > dateTo.getFullYear()) {
    return `is false year `;
  } else if (countedMonth < 0) {
    return 0;
  } else {
    return countedMonth;
  }
}
// months pattern
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
