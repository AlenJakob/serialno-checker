console.log("Data base... ");
import { serialNumIn } from "./app";
import { getFullDate } from "./utils/validateDate";

// console.log("TEST:",getFullDate('TC20'));

const addToList = document.querySelector("#addToList");

const listOfNum = document.querySelector("#list");
const showListBtn = document.querySelector(".arrow");
const removeBtn = document.querySelector("#remove");
const messageOfStatus = document.querySelector("#message");
(function () {
  if (localStorage.getItem("Serial_List")) {
    // localStorage.setItem("Serial_List", JSON.stringify([]));
    const localList = JSON.parse(localStorage.getItem("Serial_List"));

    localList.forEach((el, i) => {
      // getFullDate(el.serialNumber.substr(5,4))
      console.log();
      listOfNum.innerHTML += `
    <li class="list-item"><b>${i}. </b> ${
        el.serialNumber
      }  <i class="${getFullDate(
        el.serialNumber ? el.serialNumber.substr(5, 4) : ""
      )} fas fa-check-square"></i></li>
    `;
    });

    localList.forEach((e) => {
      console.log(e.serialNumber);
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
    serialNumIn.value = ``;
    hideMessage("is-success", "You have added you serial number to list");
    listOfNum.innerHTML = ``;
    dropHistory.push({ serialNumber: itemNum });
    localStorage.setItem("Serial_List", JSON.stringify(dropHistory));
    dropHistory.forEach((el, i) => {
      listOfNum.innerHTML += `
      <li class="list-item"><b> ${i}.</b> ${
        el.serialNumber
      } <i class="${getFullDate(
        el.serialNumber ? el.serialNumber.substr(5, 4) : ""
      )} fas fa-check-square"></i></li>
      `;
    });
  }
}
function checkTwoValues(listOfNumbers, givenNumber) {
  let arrList = [];
  listOfNumbers.map((el) => {
    arrList.push(Object.values(el)[0]);
  });

  if (arrList.includes(givenNumber)) {
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

showListBtn.addEventListener("click", () => {
  listOfNum.classList.toggle("show-off");
  showListBtn.classList.toggle("is-orange");
});

removeBtn.addEventListener("click", () => {
  localStorage.clear();
  listOfNum.innerHTML = ``;
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
