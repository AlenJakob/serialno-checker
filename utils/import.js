import { getFullDate } from "./validateDate";
let selectedFile;
console.log(window.XLS);
document.getElementById("input").addEventListener("change", (event) => {
  selectedFile = event.target.files[0];
});

let data = [
  {
    name: "jayanth",
    data: "scd",
    abc: "sdef",
  },
];

document.getElementById("importBtn").addEventListener("click", () => {
  const domList = document.querySelector("#list");
  //   domList.classList.contains("list-off")
  //     ? domList.classList.remove("list-off")
  //     : domList.classList
  //         .add("list-off");

  XLS.utils.json_to_sheet(data, "out.xls");
  if (selectedFile) {
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile);
    fileReader.onload = (event) => {
      let data = event.target.result;
      let workbook = XLS.read(data, { type: "binary" });
      workbook.SheetNames.forEach((sheet) => {
        let rowObject = XLS.utils.sheet_to_row_object_array(
          workbook.Sheets[sheet]
        );

        localStorage.setItem(
          "Serial_List",
          JSON.stringify(rowObject).replace(/ /g, "")
        );

        const list = JSON.parse(localStorage.getItem("Serial_List"));
        // for (let item of list) {
        //   console.log(item);
        // }? el.serialNumber.substr(5, 4) : "Try Again"
        document.getElementById("list").classList.remove("show-off");
        document.getElementById("list").innerHTML = ``;

        list.forEach((el, i) => {
          if (el != undefined) {
            document.getElementById("list").innerHTML += `
            <li class="list-item"><b>${i + 1}. </b> ${
              el.serial
            }  <i class="${getFullDate(el.serial.substr(5, 4))}
           fas fa-check-square"></i></li>
            `;
          }
        });
      });
    };
  }
});
