import { getFullDate } from "../validateDate";
export function insertListDom(domList, arrayList, getFullDate) {
  arrayList.forEach((el, i) => {
    // console.log(el.id);

    domList.innerHTML += `
        <li class="list-item item"><b>${i + 1}. </b> ${
      el.serial
    }  <i class="${getFullDate(
      el.serial.substr(5, 4)
    )} fas fa-check-square"></i>
          <i  data-id="${el.id}" class="delete" style="float:right";></i>
          </li>
      `;
  });

  function removeElemFromList(ListWithRemovedItem, id) {
    let newArr = ListWithRemovedItem.filter((item) => {
      return item.id != id;
    });
    console.log(newArr);
    localStorage.setItem("Serial_List", JSON.stringify(newArr));
  }

  let list = JSON.parse(localStorage.getItem("Serial_List")) || [];
  const listItem = document.querySelectorAll("#list li");

  listItem.forEach((el) => {
    el.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete")) {
        let id = e.target.getAttribute("data-id");
        e.target.parentElement.remove();
        removeElemFromList(list, id);
      }
    });
  });
}
