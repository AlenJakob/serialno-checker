import { checkFromProd } from "./utils/countMonths";
import { months } from "./utils/months";
import { getFullDate } from "./utils/validateDate";
import { cleanClass } from "./utils/cleanClass";
import { footer } from "./utils/footer";

const testNum = "018F7R33010269";
// logotype display


document.querySelector("#footer-in").innerHTML = footer;

const popup = document.querySelector("#popup");
const serialNumber = document.querySelector("#serialNum");
// .replace(/[.\s]/g, "");
const outNumVal = document.querySelector("#outNumVal");

const checkInfo = document.querySelector("#checkInfo");
let getDateOfProduction = [];

// is-loading and remove after 1 second.
const checkButton = document.querySelector("#checkBtn");

let OutPut = {
  displaySerialNum4: document.querySelector("#out4"),
  displaySerialNum5: document.querySelector("#out5"),
  displaySerialNum6: document.querySelector("#out6"),
  displaySerialNum7: document.querySelector("#out7")
};

function displaySerialNumberToDom(serial) {
  let SerialNum = serial.value.toUpperCase().replace(/[.\s]/g, "").split("");
  console.log(SerialNum);
  const [n0, n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12] = SerialNum;
  // separate parts of serial no.
  let partOne = n0 + n1 + n2;
  let partTwo = n3 + n4;
  let partThree = n5 + n6 + n7 + n8;
  let partFour = n9 + n10 + n11 + n12;

  if (SerialNum.length === 13) {
    OutPut["displaySerialNum4"].innerText = partOne;
    OutPut["displaySerialNum5"].innerText = partTwo;
    OutPut["displaySerialNum6"].innerText = partThree;

    getDateOfProduction = [...partThree];
    OutPut["displaySerialNum7"].innerText = partFour;
    for (let el in OutPut) {
      OutPut[el].classList.add("tag", "is-medium");
    }
  }

  console.log(getDateOfProduction)
  getFullDate(getDateOfProduction)
  // checkDate(getDateOfProduction);
}

document.querySelector("#serialNum").addEventListener("keyup", (e) => {
  e.stopImmediatePropagation();
  document.querySelector("#characters").innerText = e.target.value.replace(
    /\s+/,
    ""
  ).length;
});

// submit form to display data to Dom form
checkButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.value === undefined) {
    return false;
  } else {
    checkButton.classList.add("is-loading");
    setTimeout(function () {
      checkButton.classList.remove("is-loading");
      // Check Input swap to other check function
      checkInput(serialNumber);
      displaySerialNumberToDom(serialNumber);
    }, 800);
  }
  serialNumber.value
    ? (outNumVal.innerText = serialNumber.value)
    : (outNumVal.innerText = "missing value");
});
// Methods that set message and check the length
//This Funcionality have to be switched by existing better validation
// DRY HERE !!!!!
const checkInput = (serialNumber) => {
  const passMessage = [
    `Warning The Serial number length is possible 13 characters`,
    "Serial number length cant be bigger than 13",
    "Serial number is correct",
  ];
  let convertedSerial = serialNumber;

  // serialNumber.value.replace(/ /g, "")
  const [serialNumWarning, serialNumCorrect, serialNumWrong] = passMessage;
  //Cleaning class after every checking lenght of serial no.
  if (convertedSerial.length < 13) {
    popup.innerText = serialNumWarning;
    cleanClass(popup);
    popup.classList.add("check-is-warranty", "message");
  } else if (convertedSerial.length >= 14) {
    popup.innerText = serialNumCorrect;
    cleanClass(popup);
    popup.classList.add("is-out-warranty", "message");
  } else if (convertedSerial.length === 13) {
    popup.innerText = serialNumWrong;
    cleanClass(popup);
    popup.classList.add("is-on-warranty", "message");
  }
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
