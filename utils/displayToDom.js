// function using to display data into Dom
export const displayDataToDom = (...fullDate) => {
  const [yearData, monthData, dayData] = fullDate;
  const displayDate = {
    year: document.querySelector("#outYear"),
    month: document.querySelector("#outMonth"),
    day: document.querySelector("#outDay"),
  };
  displayDate.year.innerText = yearData;
  displayDate.month.innerText = monthData;
  displayDate.day.innerText = dayData;
};
