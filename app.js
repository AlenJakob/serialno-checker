let testNum = "018F7R33010269";
let popup = document.querySelector("#popup");
let serialNumIn = document.querySelector("#serialNum");
let outNumVal = document.querySelector("#outNumVal");
let checkBtn = document.querySelector("#checkBtn");
let checkInfo = document.querySelector("#checkInfo");
let getDateOfProduction = [];
// is-loading and remove after 1 second.
let control = document.querySelector(".control");



let outYear = document.querySelector("#outYear");
let outMonth = document.querySelector("#outMonth");
let outDay = document.querySelector("#outDay");

let fullData = {
    year: document.querySelector("#outYear"),
    month: document.querySelector("#outMonth"),
    day: document.querySelector("#outDay")
}

let yearData = document.querySelector("#yearData");
let monthData = document.querySelector("#monthData");
let dayData = document.querySelector("#dayData");

let OutPut = {
    out4: document.querySelector("#out4"),
    out5: document.querySelector("#out5"),
    out6: document.querySelector("#out6"),
    out7: document.querySelector("#out7")
};

function getInputVal(data) {
    let SNum = data.value.toUpperCase().split("");
    let partOne = SNum[0] + SNum[1] + SNum[2];
    let partTwo = SNum[3] + SNum[4];
    let partThree = SNum[5] + SNum[6] + SNum[7] + SNum[8];
    let partFour = SNum[9] + SNum[10] + SNum[11] + SNum[12];
    if (val.value.length === 13) {
        OutPut["out4"].innerText = partOne;
        OutPut["out5"].innerText = partTwo;
        OutPut["out6"].innerText = partThree;
        getDateOfProduction = [...partThree];

        OutPut["out7"].innerText = partFour;
    }
    checkDate(getDateOfProduction);
}

// ==========================
let yearQ = 2016;
let yearR = 2017;
let yearS = 2018;
let yearT = 2019;
let yearW = 2020;

let months = {
    1: "january",
    2: "february",
    3: "march",
    4: "april",
    5: "may",
    6: "june",
    7: "july",
    8: "august",
    9: "september",
    a: "october",
    b: "november",
    c: "december"
};
//trigger keyup
serialNumIn.addEventListener("keyup", () => {

    control.classList.add("is-loading")
    setTimeout(function () {
        control.classList.remove("is-loading")
        checkInput(serialNumIn);
        getInputVal(serialNumIn);
    }, 800);

    outNumVal.innerText = serialNumIn.value;
});
//trigger click
checkBtn.addEventListener("click", () => {
    control.classList.add("is-loading")
    setTimeout(function () {
        control.classList.remove("is-loading")
        checkInput(serialNumIn);
        getInputVal(serialNumIn);
    }, 1000);

    outNumVal.innerText = serialNumIn.value;
});

function checkInput(input) {
    console.log("its input " + input.value + " " + input.value.length);
    if (input.value.length < 13) {
        popup.innerText = "Serial number length possible 13 characters";
        popup.style.color = "#fff";
        popup.style.backgroundColor = "orange"
    } else if (input.value.length >= 14) {
        popup.innerText = "Serial number length cant be bigger than 15";

        popup.style.backgroundColor = "red"

    } else if (input.value.length === 13) {
        popup.innerText = "Serial number is correct";
        popup.style.color = "#fff";
        popup.style.backgroundColor = "green"
    }
}

function checkDate(date) {
    let yearData = "";
    let monthData = "";
    let dayData = "";

    switch (date[0]) {
        case "Q":
            yearData = yearQ;
            break;
        case "R":
            yearData = yearR;
            break;
        case "S":
            yearData = yearS;
            break;
        case "T":
            yearData = yearT;
            break;
        case "W":
            yearData = yearW;
            break;
        default:
            yearData = "Data is not Reconized";
            console.log(`Sorry, have no information about that  ${date[0]}.`);
    }

    //check month of production
    let month = date[1].toUpperCase();
    let entries = Object.entries(months);

    entries.forEach(([key, val]) => {
        if (month == key.toUpperCase()) {
            monthData = val;
        } else {
            //       if month are not correct view a message
            return;
        }
    });
    //Check the day input is correct
    const prodDay = date[2] + date[3];
    if (prodDay <= 0 || prodDay > 31) {
        // here will be handle error message
        console.log("wrong data for day of production");
    } else {
        dayData = prodDay;

        // here will be handle success message
        console.log(" Day of production :" + prodDay);
    }

    let fullDate = [yearData, monthData, dayData];
    //   get full date of motor calculated by pattern
    console.log("full date", fullDate);
    fullData.year.innerText = fullDate[0]
    fullData.month.innerText = fullDate[1]
    fullData.day.innerText = fullDate[2]
}


//  handle checkbox

checkInfo.addEventListener("change", (e) => {
    let checkbox = e.target
    if (checkbox.checked) {
        document.querySelector("#infobox").style.display = "none";
    } else if (!checkbox.checked) {
        document.querySelector("#infobox").style.display = "block";
    }
})
