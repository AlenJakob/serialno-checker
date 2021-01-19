// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"helpers/countMonths.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkFromProd = checkFromProd;

function checkFromProd(dateFrom, dateTo) {
  if (dateFrom.getFullYear() > dateTo.getFullYear()) {
    return "is false year ";
  } else {
    return dateTo.getMonth() - dateFrom.getMonth() + 12 * (dateTo.getFullYear() - dateFrom.getFullYear());
  }
} // months pattern


var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
},{}],"logo.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logo = void 0;
var logo = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 199 91.36\"><defs><clipPath id=\"a\"><path fill=\"none\" d=\"M459.81 416.04h197.76v50.4H459.81z\"/></clipPath><clipPath id=\"b\" transform=\"translate(-459 -425.64)\"><path fill=\"none\" d=\"M459 439.08h199V517H459z\"/></clipPath><mask id=\"c\" x=\".81\" y=\"-9.6\" width=\"197.76\" height=\"50.4\" maskUnits=\"userSpaceOnUse\"><g clip-path=\"url(#a)\" transform=\"translate(-459 -425.64)\"><image width=\"412\" height=\"105\" transform=\"matrix(.48 0 0 .48 459.81 416.04)\" xlink:href=\"data:image/png;base64,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\"/></g></mask><clipPath id=\"d\" transform=\"translate(-459 -425.64)\"><path fill=\"none\" d=\"M471.33 425.64h173.28v36.48H471.33z\"/></clipPath></defs><title>bafang-logo-header</title><g clip-path=\"url(#b)\" data-name=\"Ebene 1\" style=\"isolation:isolate\"><path d=\"M171 35.36H28a28 28 0 0 0 0 56h143a28 28 0 0 0 0-56\" fill=\"#eb6608\"/><path d=\"M164.39 75.6a12.26 12.26 0 0 1-12.58-12.5 12.57 12.57 0 0 1 12.66-12.51 12.42 12.42 0 0 1 8.18 2.63 2.19 2.19 0 0 1 .43 3 2.06 2.06 0 0 1-2.87.52 9.37 9.37 0 0 0-5.82-2 8.09 8.09 0 0 0-8.08 8.19c0 5 3.55 8.47 8.15 8.47a8.77 8.77 0 0 0 4.72-1.29v-4.75h-4a2 2 0 0 1 0-3.91h8.43v10.76a14.27 14.27 0 0 1-9.22 3.42m-17.58-2.27a2.3 2.3 0 0 1-4.6 0V61.05c0-3.3-2.27-6.08-5.66-6.08s-5.66 2.78-5.66 6.08v12.31a2.3 2.3 0 0 1-4.59 0V60.81a10.28 10.28 0 0 1 10.33-10.22 10.15 10.15 0 0 1 10.18 10.22zM115.9 62.68h-12.68v-1.24c0-3.68 2.35-6.67 6.34-6.67s6.34 3 6.34 6.67zm-6.26-12.09a10.85 10.85 0 0 0-10.86 10.77v12a2.22 2.22 0 0 0 4.44 0v-6.84h12.68v6.84a2.22 2.22 0 0 0 4.43 0v-12a10.71 10.71 0 0 0-10.69-10.78m-16.07 4.78H83v6.93h9.22a1.89 1.89 0 0 1 1.93 1.93 1.93 1.93 0 0 1-1.93 1.94H83v7.2a2.22 2.22 0 0 1-4.43 0V51.23h14.95a2 2 0 0 1 2.1 2.05 2.05 2.05 0 0 1-2 2.06m-25.43 7.33H55.46v-1.24c0-3.68 2.35-6.67 6.34-6.67s6.34 3 6.34 6.67zm-6.26-12.09A10.85 10.85 0 0 0 51 61.36v12a2.22 2.22 0 0 0 4.44 0v-6.84h12.68v6.84a2.22 2.22 0 0 0 4.44 0v-12a10.72 10.72 0 0 0-10.7-10.78m-23.69 20.5h-8v-6.3h8.09a3 3 0 0 1 3.31 3.08 3.23 3.23 0 0 1-3.38 3.23m-8-16h7.54a3 3 0 0 1 3.17 3 3 3 0 0 1-3.24 3h-7.47zm12.53 7.4a5.66 5.66 0 0 0 2.59-4.52c0-4-3.07-6.74-7.35-6.74h-12.1v23.71h12.49c4.11 0 7.63-3 7.63-7.11a5.87 5.87 0 0 0-3.26-5.34\" fill=\"#fff\"/><g clip-path=\"url(#d)\" mask=\"url(#c)\" class=\"__web-inspector-hide-shortcut__\"><path style=\"mix-blend-mode:multiply\" fill=\"#1d1d1b\" opacity=\".0\" d=\"M12.33 0h173.28v36.48H12.33z\"/></g><path d=\"M166.39 13.61v9.41h6.11v-1.66h-3.93v-2.25h3.56v-1.75h-3.56v-2.11h3.83v-1.68zm-9.2 0v9.41h2.21V19.2h3.32v-1.67h-3.32V15.3h3.48v-1.69zm-4 0H151v9.41h2.23zm-9.22 0h-2.22v9.41h6v-1.75H144zm-16.15 1.64h.5c1.35 0 2.09.22 2.09 1.15s-.67 1.24-2.09 1.24h-.5zm-2.24-1.64v9.41h2.24v-3.76h.53c1 0 1.31.27 1.67 1.27l.91 2.49h2.37l-1.39-3.45a1.72 1.72 0 0 0-1.29-1.23 2.17 2.17 0 0 0 2-2.24c0-2-1.74-2.46-4.1-2.46zm-3.94 0h-2.15v5.75c0 1.48-.61 2.17-1.8 2.17s-1.69-.71-1.69-2.17v-5.73h-2.23v5.68c0 2.63 1.25 3.89 3.93 3.89 2.44 0 4-1.14 4-3.89zm-16.19 1.49c1.47 0 2.42 1.2 2.42 3.25s-1 3.19-2.36 3.19-2.39-1.23-2.39-3.19.93-3.25 2.33-3.25m.12-1.66c-3 0-4.79 1.76-4.79 4.86s1.84 4.9 4.66 4.9 4.75-1.84 4.75-4.91-1.84-4.85-4.62-4.85m-16 .17l3.47 5.78v3.63h2.22v-3.59l3.4-5.82h-2.41l-1 1.9c-.33.63-.81 1.64-1 2.13-.21-.5-.7-1.5-1-2.13l-1-1.9zm-13 1.64h.5c1.35 0 2.1.22 2.1 1.15s-.68 1.24-2.1 1.24h-.5zm-2.23-1.64v9.41h2.23v-3.76h.53c1 0 1.31.27 1.67 1.27l.91 2.49h2.37l-1.39-3.45a1.71 1.71 0 0 0-1.29-1.23 2.17 2.17 0 0 0 2-2.24c0-2-1.74-2.46-4.1-2.46zm-9.84 0v9.41h6.11v-1.66H66.7v-2.25h3.57v-1.75H66.7v-2.11h3.84v-1.68zm-8.38 9.41H59l2.33-9.41h-2.18L58 18.83c-.08.36-.35 1.82-.43 2.46-.09-.66-.36-2.14-.43-2.46L56 13.61h-2.94l-1 5.22c-.07.32-.32 1.78-.42 2.46-.08-.68-.37-2.14-.44-2.46L50 13.61h-2.33l2.4 9.41H53l1.21-6c.1-.45.23-1.33.3-1.88.06.55.23 1.43.32 1.88zM40.17 15.1c1.47 0 2.42 1.2 2.42 3.25s-1 3.19-2.36 3.19-2.39-1.23-2.39-3.19.93-3.25 2.33-3.25m.12-1.66c-3 0-4.79 1.76-4.79 4.86s1.84 4.9 4.66 4.9 4.75-1.84 4.75-4.91-1.84-4.85-4.62-4.85m-12.24 1.77h.45c1.11 0 1.92.31 1.92 1.36s-.88 1.37-1.92 1.37h-.45zm-2.22-1.6v9.41h2.22v-3.45h.58c2.08 0 4-.66 4-3s-1.84-2.95-4-2.95z\" fill=\"#e16529\"/></g></svg>";
exports.logo = logo;
},{}],"app.js":[function(require,module,exports) {
"use strict";

var _countMonths = require("./helpers/countMonths");

var _logo = require("./logo");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var testNum = "018F7R33010269";
document.querySelector(".logoDom").innerHTML = _logo.logo;
var popup = document.querySelector("#popup");
var serialNumIn = document.querySelector("#serialNum");
var outNumVal = document.querySelector("#outNumVal");
var formTrigger = document.querySelector(".form-trigger");
var checkBtn = document.querySelector("#checkBtn");
var checkInfo = document.querySelector("#checkInfo");
var getDateOfProduction = []; // is-loading and remove after 1 second.

var control = document.querySelector("#checkBtn");
formTrigger.addEventListener("submit", function (e) {
  console.log("s");
  e.preventDefault();
  console.log("s");
});
var yearData = document.querySelector("#yearData");
var monthData = document.querySelector("#monthData");
var dayData = document.querySelector("#dayData");
var OutPut = {
  displaySerialNum4: document.querySelector("#out4"),
  displaySerialNum5: document.querySelector("#out5"),
  displaySerialNum6: document.querySelector("#out6"),
  displaySerialNum7: document.querySelector("#out7"),
  displayMonth: document.querySelector("#out8")
};

function displaySerialNumberToDom(inputVal) {
  var SNum = inputVal.value.toUpperCase().split("");

  var _SNum = _slicedToArray(SNum, 13),
      n0 = _SNum[0],
      n1 = _SNum[1],
      n2 = _SNum[2],
      n3 = _SNum[3],
      n4 = _SNum[4],
      n5 = _SNum[5],
      n6 = _SNum[6],
      n7 = _SNum[7],
      n8 = _SNum[8],
      n9 = _SNum[9],
      n10 = _SNum[10],
      n11 = _SNum[11],
      n12 = _SNum[12]; // separate parts of serial no.


  var partOne = n0 + n1 + n2;
  var partTwo = n3 + n4;
  var partThree = n5 + n6 + n7 + n8;
  var partFour = n9 + n10 + n11 + n12;

  if (inputVal.value.length === 13) {
    OutPut["displaySerialNum4"].innerText = partOne;
    OutPut["displaySerialNum5"].innerText = partTwo;
    OutPut["displaySerialNum6"].innerText = partThree;
    getDateOfProduction = _toConsumableArray(partThree);
    OutPut["displaySerialNum7"].innerText = partFour;
  }

  checkDate(getDateOfProduction);
} // ==========================


var yearQ = 2016;
var yearR = 2017;
var yearS = 2018;
var yearT = 2019;
var yearU = 2020;
var yearV = 2021;
var yearW = 2022;
var yearX = 2023;
var months = {
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
}; // submit form to display data to Dom

formTrigger.addEventListener("submit", function () {
  control.classList.add("is-loading");
  setTimeout(function () {
    control.classList.remove("is-loading");
    checkInput(serialNumIn);
    displaySerialNumberToDom(serialNumIn);
  }, 800);
  outNumVal.innerText = serialNumIn.value;
});

var cleanClass = function cleanClass(element) {
  return element.className = "";
};

var setMessageAlert = function setMessageAlert(message) {
  // warning message
  popup.classList.add("check-is-warranty", "message"); // correct message

  popup.classList.add("is-on-warranty", "message"); // alert message

  popup.classList.add("is-out-warranty", "message");
};

var checkInput = function checkInput(serialNumber) {
  var passMessage = ["Warning The Serial number length is possible 13 characters", "Serial number length cant be bigger than 15", "Serial number is correct"];
  var serialNumWarning = passMessage[0],
      serialNumCorrect = passMessage[1],
      serialNumWrong = passMessage[2]; //Cleaning class after every checking lenght of serial no.

  if (serialNumber.value.length < 13) {
    popup.innerText = serialNumWarning;
    cleanClass(popup);
    popup.classList.add("check-is-warranty", "message");
  } else if (serialNumber.value.length >= 14) {
    popup.innerText = serialNumCorrect;
    cleanClass(popup);
    popup.classList.add("is-out-warranty", "message");
  } else if (serialNumber.value.length === 13) {
    popup.innerText = serialNumWrong;
    cleanClass(popup);
    popup.classList.add("is-on-warranty", "message");
  }
};

function checkDate(date) {
  var yearData = "";
  var monthData = "";
  var monthDataDecimal = "";
  var dayData = "";

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

    case "U":
      yearData = yearU;
      break;

    case "V":
      yearData = yearV;
      break;

    case "W":
      yearData = yearW;
      break;

    case "X":
      yearData = yearX;
      break;

    default:
      yearData = "Data is not Reconized";
      console.log("Sorry, have no information about that  ".concat(date[0], "."));
  } //check month of production and display to Dom


  var month = date[1].toUpperCase();
  var entries = Object.entries(months);
  console.log("entries", entries);
  entries.forEach(function (_ref, index) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        val = _ref2[1];

    if (month == key.toUpperCase()) {
      monthData = val;
      monthDataDecimal = index + 1;
    } else {
      //  if month are not correct view a message
      return;
    }
  }); //Check the day input is correct

  var prodDay = date[2] + date[3];

  if (prodDay <= 0 || prodDay > 31) {
    // here will be handle error message
    console.log("wrong data for day of production");
  } else {
    dayData = prodDay; // here will be handle success message

    console.log(" Day of production :" + prodDay);
  }

  displayDataToDom(yearData, monthData, dayData);
  var d = new Date();
  var dateOfYearAndMonth = "".concat(d.getFullYear(), " ").concat(d.getMonth());
  var resultOfMonthsFromProd = (0, _countMonths.checkFromProd)(new Date(yearData, monthDataDecimal), new Date());
  console.log(resultOfMonthsFromProd);
  OutPut.displayMonth.innerHTML = resultOfMonthsFromProd;
} // function using to display data into Dom


var displayDataToDom = function displayDataToDom() {
  for (var _len = arguments.length, fullDate = new Array(_len), _key = 0; _key < _len; _key++) {
    fullDate[_key] = arguments[_key];
  }

  var yearData = fullDate[0],
      monthData = fullDate[1],
      dayData = fullDate[2];
  var displayDate = {
    year: document.querySelector("#outYear"),
    month: document.querySelector("#outMonth"),
    day: document.querySelector("#outDay")
  };
  displayDate.year.innerText = yearData;
  displayDate.month.innerText = monthData;
  displayDate.day.innerText = dayData;
}; //  handle checkbox display and hide


checkInfo.addEventListener("change", function (e) {
  var checkbox = e.target;

  if (checkbox.checked) {
    document.querySelector("#infobox").style.display = "block";
  } else if (!checkbox.checked) {
    document.querySelector("#infobox").style.display = "none";
  }
});
},{"./helpers/countMonths":"helpers/countMonths.js","./logo":"logo.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57407" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map