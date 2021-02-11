

import XlsExport from "/xls-export.js";
const exportBtn = document.querySelector("#exportBtn");
exportBtn.addEventListener("click", () => {
    const fileNameVal = document.querySelector("#fileName").value;
    let dropHistory = JSON.parse(localStorage.getItem("Serial_List")) || [];
    var xls = new XlsExport([...dropHistory], "list");
    xls.exportToXLS(fileNameVal);
  });
  