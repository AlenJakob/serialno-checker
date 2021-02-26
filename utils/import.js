import { getFullDate } from "./validateDate";
import { insertListDom } from "../utils/dom/insertToDom";

import { v4 as uniqueItemId } from "uuid";
let selectedFile;
console.log(window.XLS);
document.getElementById("input").addEventListener("change", (event) => {
  selectedFile = event.target.files[0];
});

let data = [
  {
    id: "jayanth",
    serial: "scd",
  },
];

document.getElementById("importBtn").addEventListener("click", () => {
  const domList = document.querySelector("#list");

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

        rowObject.forEach((e) => {
          e["id"] = uniqueItemId();
          console.log(e);
        });
        localStorage.setItem(
          "Serial_List",
          JSON.stringify(rowObject).replace(/ /g, "")
        );

        const list = JSON.parse(localStorage.getItem("Serial_List"));

        document.getElementById("list").classList.remove("show-off");
        domList.innerHTML = ``;
        insertListDom(domList, list, getFullDate);
      });
    };
  }
});
