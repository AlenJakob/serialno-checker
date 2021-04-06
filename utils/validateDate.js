import { months } from "./months";
import { checkFromProd } from "./countMonths";
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

export default function validateDate(date) {
  const regex = /^[A-z0-9]{4}/i;
  // console.log(num.match(regex)) COMING_SOON !

  //   let txt = date.substr(5, 4).split("");
  //   let result = txt.match(regex);
  //   console.log(txt);
  //   console.log(result);
  //   console.log("***Date*********************************************");
  //   console.log(txt);
  //   console.log("***Date*********************************************");
}

// validateDate("040F5TC200584");

// Test Year
export function getFullDate(date) {
  let onWarranty = 0;
  let OutOfWarranty = 0;
  let serialNumStatus = "";
  let year = "";
  let month = "";
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
      year = "Data is not Recognized";
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
        console.log("Year is not recognized");
        return;
      }
    });
  }

  let currFromProd = checkFromProd(new Date(year, monthDecimal), new Date());
  if (currFromProd > 30) {
    serialNumStatus = "has-text-danger";
  } else if (currFromProd < 30) {
    serialNumStatus = "has-text-success";
  } else {
    serialNumStatus = "has-text-danger-dark";
  }

  return serialNumStatus;
  //   return [year, month, date[2] + date[3]];
}
