import { checkFromProd } from "./utils/countMonths";
import { months } from "./utils/months";
import { cleanClass } from "./utils/cleanClass";
import { footer } from "./footer";
const testNum = "018F7R33010269";
// import { logo } from "./logo";
// document.querySelector(".logoDom").innerHTML = logo;

document.querySelector("#footer-in").innerHTML = footer;
const popup = document.querySelector("#popup");
const serialNumIn = document.querySelector("#serialNum");
const outNumVal = document.querySelector("#outNumVal");
const formTrigger = document.querySelector(".form-trigger");
const checkBtn = document.querySelector("#checkBtn");
const checkInfo = document.querySelector("#checkInfo");
let getDateOfProduction = [];
// is-loading and remove after 1 second.
const control = document.querySelector("#checkBtn");

formTrigger.addEventListener("submit", (e) => {
  e.preventDefault();
});

let OutPut = {
  displaySerialNum4: document.querySelector("#out4"),
  displaySerialNum5: document.querySelector("#out5"),
  displaySerialNum6: document.querySelector("#out6"),
  displaySerialNum7: document.querySelector("#out7"),
  displayMonth: document.querySelector("#out8"),
};

function displaySerialNumberToDom(inputVal) {
  let SNum = inputVal.value.toUpperCase().split("");

  const [n0, n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12] = SNum;
  // separate parts of serial no.
  let partOne = n0 + n1 + n2;
  let partTwo = n3 + n4;
  let partThree = n5 + n6 + n7 + n8;
  let partFour = n9 + n10 + n11 + n12;

  if (inputVal.value.length === 13) {
    OutPut["displaySerialNum4"].innerText = partOne;
    OutPut["displaySerialNum5"].innerText = partTwo;
    OutPut["displaySerialNum6"].innerText = partThree;

    getDateOfProduction = [...partThree];

    OutPut["displaySerialNum7"].innerText = partFour;
  }
  checkDate(getDateOfProduction);
}

// ==========================
let yearQ = 2016;
let yearR = 2017;
let yearS = 2018;
let yearT = 2019;
let yearU = 2020;
let yearV = 2021;
let yearW = 2022;
let yearX = 2023;

// submit form to display data to Dom
formTrigger.addEventListener("submit", () => {
  control.classList.add("is-loading");
  setTimeout(function () {
    control.classList.remove("is-loading");
    checkInput(serialNumIn);
    displaySerialNumberToDom(serialNumIn);
  }, 800);
  outNumVal.innerText = serialNumIn.value;
});

const checkInput = (serialNumber) => {
  const passMessage = [
    `Warning The Serial number length is possible 13 characters`,
    "Serial number length cant be bigger than 15",
    "Serial number is correct",
  ];
  const [serialNumWarning, serialNumCorrect, serialNumWrong] = passMessage;
  //Cleaning class after every checking lenght of serial no.
  if (serialNumber.value.length < 13) {
    popup.innerText = serialNumWarning;
    cleanClass(popup);
    popup.classList.add("check-is-warranty", "message");
  } else if (serialNumber.value.length >= 14) {
    popup.innerText = serialNumCorrect;

    cleanClass(popup);
    popup.classList.add("is-out-warranty", "message");
  } else if (serialNumber.value.length === 13) {
    popup.innerText = serialNumWrong;
    cleanClass(popup);
    popup.classList.add("is-on-warranty", "message");
  }
};

function checkDate(date) {
  let yearData = "";
  let monthData = "";
  let monthDataDecimal = "";
  let dayData = "";
  switch (date[0]) {
    case "Q":
      yearData = yearQ;
      break;
    case "R":
      yearData = yearR;
      break;
    case "S":
      yearData = yearS;
      break;
    case "T":
      yearData = yearT;
      break;
    case "U":
      yearData = yearU;
      break;
    case "V":
      yearData = yearV;
      break;
    case "W":
      yearData = yearW;
      break;
    case "X":
      yearData = yearX;
      break;
    default:
      yearData = "Data is not Reconized";
      console.log(`Sorry, have no information about that  ${date[0]}.`);
  }

  //check month of production and display to Dom
  let month = date[1].toUpperCase();
  let entries = Object.entries(months);
  entries.forEach(([key, val], index) => {
    if (month == key.toUpperCase()) {
      monthData = val;
      monthDataDecimal = index + 1;
    } else {
      //  if month are not correct view a message
      return;
    }
  });
  //Check the day input is correct
  const prodDay = date[2] + date[3];
  if (prodDay <= 0 || prodDay > 31) {
    // here will be handle error message
    console.log("the year cannot be less then 0 or higher than 31 for months");
  } else {
    dayData = prodDay;
    // here will be handle success message
    console.log("the day is correct");
  }

  displayDataToDom(yearData, monthData, dayData);
  const resultOfMonthsFromProd = checkFromProd(
    new Date(yearData, monthDataDecimal),
    new Date()
  );
  OutPut.displayMonth.innerHTML = resultOfMonthsFromProd;
}

// function using to display data into Dom
const displayDataToDom = (...fullDate) => {
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

//  handle checkbox display and hide

checkInfo.addEventListener("change", (e) => {
  let checkbox = e.target;
  if (checkbox.checked) {
    document.querySelector("#infobox").style.display = "block";
  } else if (!checkbox.checked) {
    document.querySelector("#infobox").style.display = "none";
  }
});
