console.log("Data base... ");
import { serialNumIn } from "./app";
import { getFullDate } from "./utils/validateDate";

// console.log("TEST:",getFullDate('TC20'));
// count on and out of warranty
let onWarranty = 0;
let OutOfWarranty = 0;
const addToList = document.querySelector("#addToList");

const listOfNum = document.querySelector("#list");
const showListBtn = document.querySelector(".arrow");
const removeBtn = document.querySelector("#remove");
const messageOfStatus = document.querySelector("#message");
(function () {
  if (localStorage.getItem("Serial_List")) {
    // localStorage.setItem("Serial_List", JSON.stringify([]));
    const localList = JSON.parse(localStorage.getItem("Serial_List"));

    localList.reverse().forEach((el, i) => {
      // getFullDate(el.serial.substr(5,4))
      if (el) {
        listOfNum.innerHTML += `
        <li class="list-item" data-id="${getFullDate(
          el.serial.substr(5, 4)
        )}"><b>${i + 1}. </b>
        <span> ${el.serial.toUpperCase()}</span>
        <i class="${getFullDate(
          el.serial.substr(5, 4)
        )} fas fa-check-square"></i></li>
        `;
      }
    });

    localList.forEach((e) => {
      // console.log(e.serial);
    });
  } else {
    listOfNum.innerHTML += `
    empty
    `;
  }
})();

function getSerialNum(ev) {
  ev.preventDefault();
  let itemNum = serialNumIn.value.replace(/ /g, "");
  let dropHistory = JSON.parse(localStorage.getItem("Serial_List")) || [];
  // console.log(checkTwoValues(dropHistory, itemNum));
  // test if the num is on the list
  if (checkTwoValues(dropHistory, itemNum)) {
    hideMessage("is-warning", "The number is already on the list");
  }
  if (itemNum.length === 0) {
    hideMessage("is-danger", "The field cannot be empty");
    return;
  }
  if (itemNum.length <= 12) {
    hideMessage("is-danger", "The Series number cannot be less then 12");
    return;
  }
  if (itemNum.length > 13) {
    hideMessage("is-danger", "The Series number cannot be bigger then 13");
    return;
  } else if (!checkTwoValues(dropHistory, itemNum)) {
    // Success ADDED
    serialNumIn.value = ``.toUpperCase();
    hideMessage("is-success", "You have added you serial number to list");
    listOfNum.innerHTML = ``;
    // Adding number to List
    dropHistory.push({ serial: itemNum.toUpperCase() });
    localStorage.setItem("Serial_List", JSON.stringify(dropHistory));
    dropHistory.reverse().forEach((el, i) => {
      listOfNum.innerHTML += `
    <li class="list-item item"><b>${i + 1}. </b> ${
        el.serial
      }  <i class="${getFullDate(
        el.serial.substr(5, 4)
      )} fas fa-check-square"></i></li>
  `;
    });
  }
}
// helper to return 1 true or 0 false

function checkTwoValues(listOfNumbers, givenNumber) {
  let arrList = JSON.parse(localStorage.getItem("Serial_List")) || [];
  const list = arrList.map((el) => {
    return el.serial;
  });

  if (list.includes(givenNumber.toUpperCase())) {
    return true;
  }
  if (givenNumber.length < 12 || givenNumber.length > 13) {
    return true;
  }
  if (givenNumber.length === 0) {
    return true;
  } else {
    return false;
  }

  // console.log(givenNumber);
}

addToList.addEventListener("click", getSerialNum);
document.querySelector("#ico1").classList.add("is-hidden");
showListBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  listOfNum.classList.toggle("show-off");

  if (!listOfNum.classList.contains("show-off")) {
    document.querySelector("#ico1").classList.add("is-hidden");
    document.querySelector("#ico2").classList.remove("is-hidden");
  } else {
    document.querySelector("#ico1").classList.remove("is-hidden");
    document.querySelector("#ico2").classList.add("is-hidden");
  }
});

removeBtn.addEventListener("click", () => {
  localStorage.clear();
  listOfNum.innerHTML = `empty`;
  hideMessage("is-warning", "List has been cleared");
});

function hideMessage(classStatus, msg) {
  messageOfStatus.innerHTML = msg;
  messageOfStatus.classList.remove("show-off");
  messageOfStatus.classList.add(classStatus, "tag");
  setTimeout(function () {
    messageOfStatus.classList.add("show-off");
    messageOfStatus.classList.remove(classStatus, "tag");
  }, 1500);
}
