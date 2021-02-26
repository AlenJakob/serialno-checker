import XlsExport from "/xls-export.js";
const exportBtn = document.querySelector("#exportBtn");
exportBtn.addEventListener("click", () => {
  const fileNameVal = document.querySelector("#fileName").value;
  let dropHistory = JSON.parse(localStorage.getItem("Serial_List")) || [];
  // var xls = new XlsExport([...dropHistory], "list");
  // retrieve a array of object with properties "serial"
  let values = dropHistory.map((a) => {
    return { serial: a.serial };
  });

  var xls = new XlsExport([...values], "list");

  console.log(values);
  // xls.exportToXLS(fileNameVal);
  xls.exportToXLS(fileNameVal);
});
