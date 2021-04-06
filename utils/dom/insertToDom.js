
export function insertListDom(domList, arrayList, getFullDate) {
  arrayList.forEach((el, i) => {
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
    ListWithRemovedItem = ListWithRemovedItem.filter((obj) => obj.id !== id);
    localStorage.setItem("Serial_List", JSON.stringify(ListWithRemovedItem));
  }

  const listItem = document.querySelectorAll("#list li");

  // let list = JSON.parse(localStorage.getItem("Serial_List")) || [];
  listItem.forEach((el) => {
    el.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete")) {
        let id = e.target.getAttribute("data-id");
        e.target.parentElement.remove();
        removeElemFromList(
          JSON.parse(localStorage.getItem("Serial_List")) || [],
          id
        );
      }
    });
  });
}
