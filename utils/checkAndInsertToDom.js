// function using to display data into Dom
export const displayDataToDom = (...fullDate) => {
  const [yearData, monthData, ...dayData] = fullDate;
  const convertedDay = dayData.join("");
  const displayDate = {
    year: document.querySelector("#outYear"),
    month: document.querySelector("#outMonth"),
    day: document.querySelector("#outDay"),
  };

  for (let el in displayDate) {
    displayDate[el].classList.add("tag", "is-medium");
  }

  displayDate.year.innerText = yearData ? yearData : "No Data";
  displayDate.month.innerText = monthData ? monthData : "No Data";
  displayDate.day.innerText = convertedDay ? convertedDay : "No Data";
};
