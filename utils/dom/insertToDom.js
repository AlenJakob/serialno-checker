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

  const listItem = document.querySelectorAll("#list li");
  listItem.forEach((e) => {
    //  if(e.target){
    e.addEventListener("click", (e) => {
      // console.log(e.target);
      if (e.target.classList.contains("delete")) {
        console.log(e.target.getAttribute("data-id"));
      }
    });
    //  }
  });
}
