console.log("Data base... ");
import { serialNumIn } from "./app";
const addToList = document.querySelector("#addToList");

const listOfNum = document.querySelector("#list");
const showListBtn = document.querySelector(".arrow");
const ico = document.querySelector("#ico");
const removeBtn = document.querySelector("#remove");
const messageOfStatus = document.querySelector("#message");
(function () {
  if (localStorage.getItem("Serial_List")) {
    // localStorage.setItem("Serial_List", JSON.stringify([]));
    JSON.parse(localStorage.getItem("Serial_List")).forEach((el) => {
      listOfNum.innerHTML += `
      <li class="list-item">${el.serialNumber}</li>
      `;
    });
    console.log(JSON.parse(localStorage.getItem("Serial_List")));
  } else {
    listOfNum.innerHTML += `
    empty
    `;
  }
})();

function getSerialNum(ev) {
  ev.preventDefault();
  let itemNum = serialNumIn.value;
  let dropHistory = JSON.parse(localStorage.getItem("Serial_List")) || [];

  if (dropHistory.includes(itemNum)) {
    console.log("yes");
    messageOfStatus.innerHTML = `The number is already on the list`;
    if (itemNum < 13) {
      messageOfStatus.innerHTML = `The lentgth is not enought`;
      return;
    }
  } else if (!dropHistory.includes(itemNum)) {
    // Success ADDED
    serialNumIn.value = ``;
    setTimeout(hideMessage, 1000);
    messageOfStatus.innerHTML = `You have added you serial number to list`;
    listOfNum.innerHTML = ``;
    console.log("the array doesnt include that num add them  ");
    dropHistory.push({ serialNumber: itemNum });
    localStorage.setItem("Serial_List", JSON.stringify(dropHistory));
    dropHistory.forEach((el) => {
      console.log("element from foreach after adding", el.serialNumber);

      listOfNum.innerHTML += `
      <li class="list-item">${el.serialNumber}</li>
      `;
    });
    console.log(dropHistory);
  }
}

addToList.addEventListener("click", getSerialNum);

showListBtn.addEventListener("click", () => {
  listOfNum.classList.toggle("list-off");
  showListBtn.classList.toggle("is-orange");
});

removeBtn.addEventListener("click", () => {
  localStorage.clear();
  listOfNum.innerHTML = ``;
  messageOfStatus.innerHTML = `List has been cleared`;
  setTimeout(hideMessage, 1000);
});

function hideMessage() {
  messageOfStatus.innerHTML = ``;
  messageOfStatus.classList.remove("is-danger");
}

// get data from input

// store in array

// add data to localstorage

// When adding new get back the array check if there is existing record

// if record is not in array add item to array

// Click event to handle

//  npm install xlsexport --save for exporting array to XLS file
