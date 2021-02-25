export function insertListDom(domList, arrayList, getFullDate) {
  return arrayList.reverse().forEach((el, i) => {
    console.log(el);
    domList.innerHTML += `
        <li class="list-item item" data-id="${i}"><b>${i + 1}. </b> ${
      el.serial
    }  <i class="${getFullDate(
      el.serial.substr(5, 4)
    )} fas fa-check-square"></i>
          <i class="delete" style="float:right";></i>
          </li>
      `;
  });
}
