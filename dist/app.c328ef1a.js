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
  var countedMonth = dateTo.getMonth() - dateFrom.getMonth() + 12 * (dateTo.getFullYear() - dateFrom.getFullYear());

  if (dateFrom.getFullYear() > dateTo.getFullYear()) {
    return "is false year ";
  } else if (countedMonth < 0) {
    return 0;
  } else {
    return countedMonth;
  }
} // months pattern


var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
},{}],"footer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.footer = void 0;
var footer = "  <footer class=\"footer\">\n<div class=\"content has-text-centered\">\n    <p>\n        <strong>2021</strong> Created by <b class=\"has-text-info\">Alen Jakob</b>\n    </p>\n    <p>check\n\n        <a class=\"has-text-black\" href=\"https://github.com/AlenJakob\"><i class=\" fab fa-github-alt fa-lg\"></i>\n            My\n            Github</a> / <a href=\"https://www.linkedin.com/in/alen-jakob/\"><i class=\"fab fa-linkedin fa-lg\"></i>\n            Linkedin</a> or just contact me\n        via email <a href=\"mailto:alenjakob@gmail.com\">alenjakob@gmail.com</a>\n    </p>\n</div>\n</footer>";
exports.footer = footer;
},{}],"app.js":[function(require,module,exports) {
"use strict";

var _countMonths = require("./helpers/countMonths");

var _footer = require("./footer");

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

var testNum = "018F7R33010269"; // document.querySelector(".logoDom").innerHTML = logo;

document.querySelector("#footer-in").innerHTML = _footer.footer;
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
},{"./helpers/countMonths":"helpers/countMonths.js","./footer":"footer.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52744" + '/');

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