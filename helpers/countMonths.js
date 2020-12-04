export function checkFromProd(dateFrom, dateTo) {
  if (dateFrom.getFullYear() > dateTo.getFullYear()) {
    return `is false year `;
  } else {
    return (
      dateTo.getMonth() -
      dateFrom.getMonth() +
      12 * (dateTo.getFullYear() - dateFrom.getFullYear())
    );
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
