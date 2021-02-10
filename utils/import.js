let selectedFile;
console.log(window.XLSX);
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
  document.querySelector("#list").classList.toggle("list-off");
  XLSX.utils.json_to_sheet(data, "out.xlsx");
  if (selectedFile) {
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile);
    fileReader.onload = (event) => {
      let data = event.target.result;
      let workbook = XLSX.read(data, { type: "binary" });
      console.log(workbook);
      workbook.SheetNames.forEach((sheet) => {
        let rowObject = XLSX.utils.sheet_to_row_object_array(
          workbook.Sheets[sheet]
        );
        console.log(rowObject);
        //     document.getElementById("jsondata").innerHTML = JSON.stringify(
        //       rowObject,
        //       undefined,
        //       4
        //     );
        //   });

        // Test display given data
        // document.getElementById("list").innerHTML = JSON.stringify(
        //   rowObject,
        //   undefined,
        //   4
        // );

        rowObject.forEach((el, i) => {
          console.log(el);
          document.getElementById("list").innerHTML += `
            <li class="list-item"><b>${i} . </b> ${Object.values(el)}</li>
            `;
        });
      });
    };
  }
});
