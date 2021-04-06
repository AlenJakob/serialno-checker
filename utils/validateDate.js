import { months } from "./months";
import { checkFromProd } from "./countMonths";
import { displayDataToDom } from "./checkAndInsertToDom"
// ==========================
let yearQ = 2016;
let yearR = 2017;
let yearS = 2018;
let yearT = 2019;
let yearU = 2020;
let yearV = 2021;
let yearW = 2022;
let yearX = 2023;
// ==========================
const displayMonth = document.querySelector("#out8");



// Test Year
export function getFullDate(date) {
  let serialNumStatus = "";
  let year = "";
  let month = "";
  let dayData = "";
  let monthDecimal = "";
  switch (date[0]) {
    case "Q":
      year = yearQ;
      break;
    case "R":
      year = yearR;
      break;
    case "S":
      year = yearS;
      break;
    case "T":
      year = yearT;
      break;
    case "U":
      year = yearU;
      break;
    case "V":
      year = yearV;
      break;
    case "W":
      year = yearW;
      break;
    case "X":
      year = yearX;
      break;
    default:
      year = "No Data !!!";
      console.log(`Sorry, have no information about that  ${date[0]}.`);
  }

  let currentMonth = date ? date[1].toUpperCase() : "";
  let entries = Object.entries(months);
  if (entries) {
    entries.forEach(([key, val], index) => {
      if (currentMonth == key.toUpperCase()) {
        month = val;
        monthDecimal = index + 1;
      } else {
        //  if month are not correct view a message
        return;
      }
    });
  }


  const resultOfMonthsFromProd = checkFromProd(
    new Date(year, monthDecimal),
    new Date()
  );
  displayMonth.innerHTML = resultOfMonthsFromProd
    ? resultOfMonthsFromProd
    : "No data to calulate !";
  //Return Day
  dayData = date[2] + date[3];

  let currFromProd = checkFromProd(new Date(year, monthDecimal), new Date());
  if (currFromProd > 30) {
    serialNumStatus = "has-text-danger";
  } else if (currFromProd < 30) {
    serialNumStatus = "has-text-success";
  } else {
    serialNumStatus = "has-text-danger-dark";
  }
  displayDataToDom(year, month, dayData)
  return serialNumStatus;
  //   return [year, month, date[2] + date[3]];
}
