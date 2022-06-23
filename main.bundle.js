/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#game-grid {\n  display: flex;\n  flex-flow: column nowrap;\n  width: max-content;\n  margin: 100px auto;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.game-grid-row {\n  display: flex;\n  flex-flow: row nowrap;\n  width: max-content;\n}\n\n.game-grid-row:not(:last-of-type) {\n  border-bottom: solid 3px black;\n}\n\n.game-grid-cell {\n  height: 200px;\n  width: 200px;\n  text-align: center;\n  line-height: 200px;\n  font-size: 40px;\n}\n\n.game-grid-cell:not(:last-of-type) {\n  border-right: solid 3px black;\n}\n\n#end-game-status-container {\n  text-align: center;\n  font-family: Arial, Helvetica, sans-serif;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,wBAAwB;EACxB,kBAAkB;EAClB,kBAAkB;EAClB,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,yCAAyC;AAC3C","sourcesContent":["#game-grid {\n  display: flex;\n  flex-flow: column nowrap;\n  width: max-content;\n  margin: 100px auto;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.game-grid-row {\n  display: flex;\n  flex-flow: row nowrap;\n  width: max-content;\n}\n\n.game-grid-row:not(:last-of-type) {\n  border-bottom: solid 3px black;\n}\n\n.game-grid-cell {\n  height: 200px;\n  width: 200px;\n  text-align: center;\n  line-height: 200px;\n  font-size: 40px;\n}\n\n.game-grid-cell:not(:last-of-type) {\n  border-right: solid 3px black;\n}\n\n#end-game-status-container {\n  text-align: center;\n  font-family: Arial, Helvetica, sans-serif;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/classes/Game.js":
/*!*****************************!*\
  !*** ./src/classes/Game.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @file Game class file.
 * @author DANIELS-ROTH Stan <contact@daniels-roth-stan.fr>
 */

// eslint-disable-next-line jsdoc/valid-types
/** @typedef {import('./Player').Player} Player */

/**
 * Game logic manager.
 *
 * @category Game
 */
class Game {
  /**
   * @description Player's index to whose turn it is.
   *
   * @type { number }
   */
  playerTurn;

  /**
   * @description Represent game status.
   *
   * @type { boolean }
   */
  gameOver;

  /**
   * @description Game's cells grid.
   *
   * @type { object[][] }
   */
  grid;

  /**
   * @description HTML parent element containing game's grid.
   *
   * @type { HTMLElement }
   */
  parentElement;

  /**
   * @description Game's grid size.
   *
   * @type { number }
   */
  size;

  /**
   * @description Game's players.
   *
   * @type { Player[] }
   */
  players;

  /**
   * @description Initializes the game and the grid and prints it.
   *
   * @param   { object }   options               - Settings object that configures the game.
   * @param   { string }   options.parentElement - Game's Parent CSS selector.
   * @param   { number }   options.size          - Game's grid columns and rows count.
   * @param   { Player[] } options.players       - Game's players list.
   *
   * @returns { Game }                           Game instance.
   */
  constructor(options) {
    this.validateOptions(options);

    this.playerTurn = 0;
    this.gameOver = false;

    this.grid = this.initializeGrid();
    this.buildGrid();
    this.print();
  }

  /**
   * @description Validate if all required parameters are present and wether they are correct.
   *
   * @param   { object }   options               - Settings object that configures the game.
   * @param   { string }   options.parentElement - Game's Parent CSS selector.
   * @param   { number }   options.size          - Game's grid columns and rows count.
   * @param   { Player[] } options.players       - Game's players list.
   *
   * @throws  { TypeError|Error } Throws validation error.
   *
   * @returns { void }
   */
  validateOptions(options) {
    if (typeof options !== 'object') throw new TypeError('options must be an object');

    if (typeof options.parentElement !== 'string') throw new TypeError('parentElement must be a string');
    const parent = document.querySelector(options.parentElement);
    if (parent === null) throw new TypeError("parentElement must refer an existing element's ID");
    this.parentElement = parent;

    if (typeof options.size !== 'number') throw new TypeError('size must be a number');
    if (options.size <= 1) throw new Error('size must be a at least superior to one');
    this.size = options.size;

    if (!Array.isArray(options.players)) throw new TypeError('players must be an array');
    if (options.players.length < 1) throw new Error('players must contain at least one player');
    this.players = options.players;
  }

  /**
   * @description If the game is not over, get the cell that was clicked, get the current player,
   *              set the cell's player to the current player, and increment the player turn.
   *
   * @param   { event } event - The click event object that was triggered by the user.
   *
   * @returns { void }
   */
  addPlayerToCell(event) {
    if (this.gameOver) return;

    const cellElement = event.target;
    const { row, col } = cellElement.dataset;
    const cell = this.grid[row][col];

    if (cell.player !== null) return; // cell already played

    const actualPlayer = this.getCurrentPlayer();

    cell.player = actualPlayer;
    cellElement.innerText = actualPlayer.marker;

    const gameStatus = this.isGameOver();
    if (gameStatus !== false) {
      this.endGame(gameStatus);
      return;
    }
    this.incrementPlayerTurn();
  }

  /**
   * @description If there is no winner, return false. Otherwise, return the won game status.
   *
   * @returns { object|null } An object with the following properties:
   *                          fullRow: the row that has caused game to be won or null
   *                          fullCol: the column that has caused game to be won or null
   *                          fullDiag: the diagonal that has caused game to be won or null
   *                          tie: true if the board is full and there is no winner or null.
   */
  isGameOver() {
    const gameStatus = {
      fullRow: this.searchForHorizontalWin(),
      fullCol: this.searchForVerticalWin(),
      fullDiag: this.searchForDiagonalWin(),
      tie: this.searchForTie(),
    };

    if (
      gameStatus.fullRow === null &&
      gameStatus.fullCol === null &&
      gameStatus.fullDiag === null &&
      gameStatus.tie === null
    )
      return false;

    return gameStatus;
  }

  /**
   * @description Returns complete row that caused the game to be won
   *              or null if no row is full of cells from same player.
   *
   * @returns { Array|null } Row of cells that caused the game to be won or
   *                         null if no row is full.
   */
  searchForHorizontalWin() {
    const wonRow = this.grid.find((row) => {
      let playersOnRow = null;
      for (let i = 0; i < this.size; i += 1) {
        if (row[i].player === null) return false;
        if (playersOnRow !== null && playersOnRow !== row[i].player.name) return false;
        playersOnRow = row[i].player.name;
      }
      return true;
    });

    return wonRow || null;
  }

  /**
   * @description Returns complete column that caused the game to be won
   *              or null if no column is full of cells from same player.
   *
   * @returns { Array|null } Column of cells that caused the game to be won or
   *                         null if no column is full.
   */
  searchForVerticalWin() {
    for (let colIndex = 0; colIndex < this.size; colIndex += 1) {
      let playersOnCol = null;
      const col = [];
      let wonCol = true;
      for (let rowIndex = 0; rowIndex < this.size; rowIndex += 1) {
        const cell = this.grid[rowIndex][colIndex];
        if (cell.player === null) {
          wonCol = false;
          break;
        }
        if (playersOnCol !== null && playersOnCol !== cell.player.name) {
          wonCol = false;
          break;
        }
        playersOnCol = cell.player.name;
        col.push(cell);
      }
      if (wonCol) return col;
    }

    return null;
  }

  /**
   * @description Returns complete diagonal that caused the game to be won
   *              or null if no diagonal is full of cells from same player.
   *
   * @returns { Array|null } Diagonal of cells that caused the game to be won or
   *                         null if no diagonal is full.
   */
  searchForDiagonalWin() {
    let playersOnFirstDiag = null;
    const firstDiag = [];
    let wonFirstDiag = true;

    for (let pos = 0; pos < this.size; pos += 1) {
      const cell = this.grid[pos][pos];

      if (cell.player === null) {
        wonFirstDiag = false;
        break;
      }

      if (playersOnFirstDiag !== null && playersOnFirstDiag !== cell.player.name) {
        wonFirstDiag = false;
        break;
      }
      playersOnFirstDiag = cell.player.name;
      firstDiag.push(cell);
    }

    if (wonFirstDiag) return firstDiag;

    let playersOnLastDiag = null;
    const lastDiag = [];
    let wonLastDiag = true;

    for (let pos = 0; pos < this.size; pos += 1) {
      const cell = this.grid[pos][this.size - 1 - pos];

      if (cell.player === null) {
        wonLastDiag = false;
        break;
      }

      if (playersOnLastDiag !== null && playersOnLastDiag !== cell.player.name) {
        wonLastDiag = false;
        break;
      }
      playersOnLastDiag = cell.player.name;
      lastDiag.push(cell);
    }

    return wonLastDiag ? lastDiag : null;
  }

  /**
   * @description Test if game is in tie state.
   *
   * @returns { true|null } True if game's state is tie, null if game's state is not in tie.
   */
  searchForTie() {
    if (this.searchForHorizontalWin() !== null) return null;
    if (this.searchForVerticalWin() !== null) return null;
    if (this.searchForDiagonalWin() !== null) return null;

    const filledCellsCount = this.grid.flat().filter((cell) => cell.player !== null).length;
    return filledCellsCount === this.size * this.size ? true : null;
  }

  /**
   * @description Set game status to over and display end game message, regarding game state.
   *
   * @param   { object }     gameState          - Game's state object.
   * @param   { Array|null } gameState.fullRow  - Complete row that caused game to be over.
   * @param   { Array|null } gameState.fullCol  - Complete column that caused game to be over.
   * @param   { Array|null } gameState.fullDiag - Complete diagonal that caused game to be over.
   *
   * @returns { void }
   */
  endGame({ fullRow, fullCol, fullDiag }) {
    this.gameOver = true;
    const endGameStatusContainer = document.createElement('h1');
    endGameStatusContainer.id = 'end-game-status-container';

    const winCause = fullRow ?? fullCol ?? fullDiag;
    const name = winCause ? winCause[0].player.name : null;

    endGameStatusContainer.innerText = winCause
      ? `${name.charAt(0).toUpperCase() + name.slice(1)} has won the game !`
      : 'No one has won the game !';

    this.parentElement.appendChild(endGameStatusContainer);
  }

  /**
   * @description Get the player whose turn it is.
   *
   * @returns { Player } Player whose turn it is.
   */
  getCurrentPlayer() {
    return this.players[this.playerTurn];
  }

  /**
   * @description Increment the player whose turn it is, and set it to 0 if there is no more players.
   *
   * @returns { void }
   */
  incrementPlayerTurn() {
    this.playerTurn = this.playerTurn + 1 !== this.players.length ? this.playerTurn + 1 : 0;
  }

  /**
   * @description Creates a parent div element, assigns it an id, and then adds the grid rows and cells to it.
   *
   * @returns { void }
   */
  buildGrid() {
    const parent = document.createElement('div');
    parent.id = 'game-grid';
    parent.innerHTML = this.buildGridRows(this.grid);

    this.parentElement.appendChild(parent);

    [...parent.querySelectorAll('.game-grid-cell')].forEach((cell) => {
      cell.addEventListener('click', (e) => this.addPlayerToCell(e));
    });
  }

  /**
   * @description Generate rows HTML based on given rows.
   *
   * @param   { object[][] } rows - The array of rows that we want to build.
   *
   * @returns { string }          A HTML string that represents the game's rows.
   */
  buildGridRows(rows) {
    return rows
      .map(
        (row, rowIndex) => /* html */ `
          <div class="game-grid-row" data-row="${rowIndex}">
            ${this.buildGridCols(row, rowIndex)}
          </div>
        `,
      )
      .join('');
  }

  /**
   * @description Generate row's cells HTML based on given row.
   *
   * @param   { object[] } row      - Row of cells to generate.
   * @param   { number }   rowIndex - The index of the row in the grid.
   *
   * @returns { string }            A string of HTML that represents all row's cells.
   */
  // eslint-disable-next-line class-methods-use-this
  buildGridCols(row, rowIndex) {
    return row
      .map(
        (cell, colIndex) => /* html */ `
          <div class="game-grid-cell" data-row="${rowIndex}" data-col="${colIndex}"></div>
        `,
      )
      .join('');
  }

  /**
   * @description Creates game's grid as a 2D array of size `this.size` and fills it with cells objects, structured as follows:
   *              row: row number where the cell is located,
   *              col: column number where the cell is located,
   *              player: property that will contain player that has chosen this cell, initialized as null.
   *
   * @returns {object[][]} An array of arrays of objects.
   */
  initializeGrid() {
    const map = [];
    for (let i = 0; i < this.size; i += 1) {
      const row = [];
      for (let j = 0; j < this.size; j += 1) {
        row.push({
          row: i,
          col: j,
          player: null,
        });
      }
      map.push(row);
    }
    return map;
  }

  /**
   * @description Update cells if needed, as follow :
   *              If the cell contains no player, nothing is done.
   *              If the cell contains a player and the matching cell on the page already contains player, nothing is done.
   *              Else, we know the cell has been updated to contain a player, so we update the matching cell on the page to contains player mark.
   *
   * @returns { void }
   */
  print() {
    this.grid.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (cell.player === null) return; // nothing to be displayed

        const cellElement = document.querySelector(`[data-row="${rowIndex}"][data-col="${colIndex}"]`);
        if (cellElement.classList.contains(`player${cell.player.name}`)) return; // nothing to update

        cellElement.innerText = cell.player.marker;
        cellElement.classList.add(`player${cell.player.name}`);
      });
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);


/***/ }),

/***/ "./src/classes/Player.js":
/*!*******************************!*\
  !*** ./src/classes/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @file Player class file.
 * @author DANIELS-ROTH Stan <contact@daniels-roth-stan.fr>
 */

/**
 * Game logic manager.
 *
 * @category Game
 */
class Player {
  /**
   * @description Player's name.
   *
   * @type { string }
   */
  name;

  /**
   * @description Player's marker to be displayed inside game cells.
   *
   * @type { string }
   */
  marker;

  /**
   * @description Initializes the player.
   *
   * @param   { object } options        - Settings object that configures the player.
   * @param   { string } options.name   - Player's name.
   * @param   { number } options.marker - Player's marker to use in cells.
   *
   * @returns { Player }                Player instance.
   */
  constructor(options) {
    this.validateOptions(options);
  }

  /**
   * @description Validate if all required parameters are present and wether they are correct.
   *
   * @param   { object } options        - Settings object that configures the player.
   * @param   { string } options.name   - Game's Parent CSS selector.
   * @param   { number } options.marker - Game's grid columns and rows count.
   *
   * @throws  { TypeError|Error } Throws validation error.
   *
   * @returns { void }
   */
  validateOptions(options) {
    if (typeof options !== 'object') throw new TypeError('options must be an object');

    if (typeof options.name !== 'string') throw new TypeError('name must be a string');
    const regexName = /^[a-z]+$/i;
    if (!regexName.test(options.name)) throw new TypeError('name must only contain letters');
    this.name = options.name;

    if (typeof options.marker !== 'string') throw new TypeError('marker must be a string');
    const regexMarker = /^[a-z]$/i;
    if (!regexMarker.test(options.marker)) throw new TypeError('marker must only contain one letter');
    this.marker = options.marker;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var $src_classes_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $src/classes/Game */ "./src/classes/Game.js");
/* harmony import */ var $src_classes_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! $src/classes/Player */ "./src/classes/Player.js");
/* harmony import */ var $src_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! $src/style.css */ "./src/style.css");
/**
 * @file Entry point file.
 * @author DANIELS-ROTH Stan <contact@daniels-roth-stan.fr>
 */





window.game = new $src_classes_Game__WEBPACK_IMPORTED_MODULE_0__["default"]({
  size: 3,
  parentElement: '#app',
  players: [
    new $src_classes_Player__WEBPACK_IMPORTED_MODULE_1__["default"]({
      name: 'x',
      marker: 'X',
    }),
    new $src_classes_Player__WEBPACK_IMPORTED_MODULE_1__["default"]({
      name: 'o',
      marker: 'O',
    }),
  ],
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (window.game);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUM7QUFDSTtBQUNqQjs7QUFFeEIsa0JBQWtCLHlEQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQU07QUFDZDtBQUNBO0FBQ0EsS0FBSztBQUNMLFFBQVEsMkRBQU07QUFDZDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aWMtdGFjdC10b2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RpYy10YWN0LXRvZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGljLXRhY3QtdG9lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGljLXRhY3QtdG9lLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RpYy10YWN0LXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90aWMtdGFjdC10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RpYy10YWN0LXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90aWMtdGFjdC10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGljLXRhY3QtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGljLXRhY3QtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGljLXRhY3QtdG9lLy4vc3JjL2NsYXNzZXMvR2FtZS5qcyIsIndlYnBhY2s6Ly90aWMtdGFjdC10b2UvLi9zcmMvY2xhc3Nlcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdGljLXRhY3QtdG9lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RpYy10YWN0LXRvZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90aWMtdGFjdC10b2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RpYy10YWN0LXRvZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RpYy10YWN0LXRvZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RpYy10YWN0LXRvZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGljLXRhY3QtdG9lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI2dhbWUtZ3JpZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgbWFyZ2luOiAxMDBweCBhdXRvO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5nYW1lLWdyaWQtcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbi5nYW1lLWdyaWQtcm93Om5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggYmxhY2s7XFxufVxcblxcbi5nYW1lLWdyaWQtY2VsbCB7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDIwMHB4O1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4uZ2FtZS1ncmlkLWNlbGw6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIGJvcmRlci1yaWdodDogc29saWQgM3B4IGJsYWNrO1xcbn1cXG5cXG4jZW5kLWdhbWUtc3RhdHVzLWNvbnRhaW5lciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlDQUF5QztBQUMzQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjZ2FtZS1ncmlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBtYXJnaW46IDEwMHB4IGF1dG87XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmdhbWUtZ3JpZC1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuXFxuLmdhbWUtZ3JpZC1yb3c6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCBibGFjaztcXG59XFxuXFxuLmdhbWUtZ3JpZC1jZWxsIHtcXG4gIGhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMjAwcHg7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5nYW1lLWdyaWQtY2VsbDpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAzcHggYmxhY2s7XFxufVxcblxcbiNlbmQtZ2FtZS1zdGF0dXMtY29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qKlxuICogQGZpbGUgR2FtZSBjbGFzcyBmaWxlLlxuICogQGF1dGhvciBEQU5JRUxTLVJPVEggU3RhbiA8Y29udGFjdEBkYW5pZWxzLXJvdGgtc3Rhbi5mcj5cbiAqL1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganNkb2MvdmFsaWQtdHlwZXNcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL1BsYXllcicpLlBsYXllcn0gUGxheWVyICovXG5cbi8qKlxuICogR2FtZSBsb2dpYyBtYW5hZ2VyLlxuICpcbiAqIEBjYXRlZ29yeSBHYW1lXG4gKi9cbmNsYXNzIEdhbWUge1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFBsYXllcidzIGluZGV4IHRvIHdob3NlIHR1cm4gaXQgaXMuXG4gICAqXG4gICAqIEB0eXBlIHsgbnVtYmVyIH1cbiAgICovXG4gIHBsYXllclR1cm47XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBSZXByZXNlbnQgZ2FtZSBzdGF0dXMuXG4gICAqXG4gICAqIEB0eXBlIHsgYm9vbGVhbiB9XG4gICAqL1xuICBnYW1lT3ZlcjtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEdhbWUncyBjZWxscyBncmlkLlxuICAgKlxuICAgKiBAdHlwZSB7IG9iamVjdFtdW10gfVxuICAgKi9cbiAgZ3JpZDtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEhUTUwgcGFyZW50IGVsZW1lbnQgY29udGFpbmluZyBnYW1lJ3MgZ3JpZC5cbiAgICpcbiAgICogQHR5cGUgeyBIVE1MRWxlbWVudCB9XG4gICAqL1xuICBwYXJlbnRFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gR2FtZSdzIGdyaWQgc2l6ZS5cbiAgICpcbiAgICogQHR5cGUgeyBudW1iZXIgfVxuICAgKi9cbiAgc2l6ZTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEdhbWUncyBwbGF5ZXJzLlxuICAgKlxuICAgKiBAdHlwZSB7IFBsYXllcltdIH1cbiAgICovXG4gIHBsYXllcnM7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBJbml0aWFsaXplcyB0aGUgZ2FtZSBhbmQgdGhlIGdyaWQgYW5kIHByaW50cyBpdC5cbiAgICpcbiAgICogQHBhcmFtICAgeyBvYmplY3QgfSAgIG9wdGlvbnMgICAgICAgICAgICAgICAtIFNldHRpbmdzIG9iamVjdCB0aGF0IGNvbmZpZ3VyZXMgdGhlIGdhbWUuXG4gICAqIEBwYXJhbSAgIHsgc3RyaW5nIH0gICBvcHRpb25zLnBhcmVudEVsZW1lbnQgLSBHYW1lJ3MgUGFyZW50IENTUyBzZWxlY3Rvci5cbiAgICogQHBhcmFtICAgeyBudW1iZXIgfSAgIG9wdGlvbnMuc2l6ZSAgICAgICAgICAtIEdhbWUncyBncmlkIGNvbHVtbnMgYW5kIHJvd3MgY291bnQuXG4gICAqIEBwYXJhbSAgIHsgUGxheWVyW10gfSBvcHRpb25zLnBsYXllcnMgICAgICAgLSBHYW1lJ3MgcGxheWVycyBsaXN0LlxuICAgKlxuICAgKiBAcmV0dXJucyB7IEdhbWUgfSAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWUgaW5zdGFuY2UuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy52YWxpZGF0ZU9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICB0aGlzLnBsYXllclR1cm4gPSAwO1xuICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcblxuICAgIHRoaXMuZ3JpZCA9IHRoaXMuaW5pdGlhbGl6ZUdyaWQoKTtcbiAgICB0aGlzLmJ1aWxkR3JpZCgpO1xuICAgIHRoaXMucHJpbnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVmFsaWRhdGUgaWYgYWxsIHJlcXVpcmVkIHBhcmFtZXRlcnMgYXJlIHByZXNlbnQgYW5kIHdldGhlciB0aGV5IGFyZSBjb3JyZWN0LlxuICAgKlxuICAgKiBAcGFyYW0gICB7IG9iamVjdCB9ICAgb3B0aW9ucyAgICAgICAgICAgICAgIC0gU2V0dGluZ3Mgb2JqZWN0IHRoYXQgY29uZmlndXJlcyB0aGUgZ2FtZS5cbiAgICogQHBhcmFtICAgeyBzdHJpbmcgfSAgIG9wdGlvbnMucGFyZW50RWxlbWVudCAtIEdhbWUncyBQYXJlbnQgQ1NTIHNlbGVjdG9yLlxuICAgKiBAcGFyYW0gICB7IG51bWJlciB9ICAgb3B0aW9ucy5zaXplICAgICAgICAgIC0gR2FtZSdzIGdyaWQgY29sdW1ucyBhbmQgcm93cyBjb3VudC5cbiAgICogQHBhcmFtICAgeyBQbGF5ZXJbXSB9IG9wdGlvbnMucGxheWVycyAgICAgICAtIEdhbWUncyBwbGF5ZXJzIGxpc3QuXG4gICAqXG4gICAqIEB0aHJvd3MgIHsgVHlwZUVycm9yfEVycm9yIH0gVGhyb3dzIHZhbGlkYXRpb24gZXJyb3IuXG4gICAqXG4gICAqIEByZXR1cm5zIHsgdm9pZCB9XG4gICAqL1xuICB2YWxpZGF0ZU9wdGlvbnMob3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbnMgbXVzdCBiZSBhbiBvYmplY3QnKTtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5wYXJlbnRFbGVtZW50ICE9PSAnc3RyaW5nJykgdGhyb3cgbmV3IFR5cGVFcnJvcigncGFyZW50RWxlbWVudCBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLnBhcmVudEVsZW1lbnQpO1xuICAgIGlmIChwYXJlbnQgPT09IG51bGwpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJwYXJlbnRFbGVtZW50IG11c3QgcmVmZXIgYW4gZXhpc3RpbmcgZWxlbWVudCdzIElEXCIpO1xuICAgIHRoaXMucGFyZW50RWxlbWVudCA9IHBhcmVudDtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5zaXplICE9PSAnbnVtYmVyJykgdGhyb3cgbmV3IFR5cGVFcnJvcignc2l6ZSBtdXN0IGJlIGEgbnVtYmVyJyk7XG4gICAgaWYgKG9wdGlvbnMuc2l6ZSA8PSAxKSB0aHJvdyBuZXcgRXJyb3IoJ3NpemUgbXVzdCBiZSBhIGF0IGxlYXN0IHN1cGVyaW9yIHRvIG9uZScpO1xuICAgIHRoaXMuc2l6ZSA9IG9wdGlvbnMuc2l6ZTtcblxuICAgIGlmICghQXJyYXkuaXNBcnJheShvcHRpb25zLnBsYXllcnMpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdwbGF5ZXJzIG11c3QgYmUgYW4gYXJyYXknKTtcbiAgICBpZiAob3B0aW9ucy5wbGF5ZXJzLmxlbmd0aCA8IDEpIHRocm93IG5ldyBFcnJvcigncGxheWVycyBtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIHBsYXllcicpO1xuICAgIHRoaXMucGxheWVycyA9IG9wdGlvbnMucGxheWVycztcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gSWYgdGhlIGdhbWUgaXMgbm90IG92ZXIsIGdldCB0aGUgY2VsbCB0aGF0IHdhcyBjbGlja2VkLCBnZXQgdGhlIGN1cnJlbnQgcGxheWVyLFxuICAgKiAgICAgICAgICAgICAgc2V0IHRoZSBjZWxsJ3MgcGxheWVyIHRvIHRoZSBjdXJyZW50IHBsYXllciwgYW5kIGluY3JlbWVudCB0aGUgcGxheWVyIHR1cm4uXG4gICAqXG4gICAqIEBwYXJhbSAgIHsgZXZlbnQgfSBldmVudCAtIFRoZSBjbGljayBldmVudCBvYmplY3QgdGhhdCB3YXMgdHJpZ2dlcmVkIGJ5IHRoZSB1c2VyLlxuICAgKlxuICAgKiBAcmV0dXJucyB7IHZvaWQgfVxuICAgKi9cbiAgYWRkUGxheWVyVG9DZWxsKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZ2FtZU92ZXIpIHJldHVybjtcblxuICAgIGNvbnN0IGNlbGxFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IHsgcm93LCBjb2wgfSA9IGNlbGxFbGVtZW50LmRhdGFzZXQ7XG4gICAgY29uc3QgY2VsbCA9IHRoaXMuZ3JpZFtyb3ddW2NvbF07XG5cbiAgICBpZiAoY2VsbC5wbGF5ZXIgIT09IG51bGwpIHJldHVybjsgLy8gY2VsbCBhbHJlYWR5IHBsYXllZFxuXG4gICAgY29uc3QgYWN0dWFsUGxheWVyID0gdGhpcy5nZXRDdXJyZW50UGxheWVyKCk7XG5cbiAgICBjZWxsLnBsYXllciA9IGFjdHVhbFBsYXllcjtcbiAgICBjZWxsRWxlbWVudC5pbm5lclRleHQgPSBhY3R1YWxQbGF5ZXIubWFya2VyO1xuXG4gICAgY29uc3QgZ2FtZVN0YXR1cyA9IHRoaXMuaXNHYW1lT3ZlcigpO1xuICAgIGlmIChnYW1lU3RhdHVzICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5lbmRHYW1lKGdhbWVTdGF0dXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmluY3JlbWVudFBsYXllclR1cm4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gSWYgdGhlcmUgaXMgbm8gd2lubmVyLCByZXR1cm4gZmFsc2UuIE90aGVyd2lzZSwgcmV0dXJuIHRoZSB3b24gZ2FtZSBzdGF0dXMuXG4gICAqXG4gICAqIEByZXR1cm5zIHsgb2JqZWN0fG51bGwgfSBBbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsUm93OiB0aGUgcm93IHRoYXQgaGFzIGNhdXNlZCBnYW1lIHRvIGJlIHdvbiBvciBudWxsXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsQ29sOiB0aGUgY29sdW1uIHRoYXQgaGFzIGNhdXNlZCBnYW1lIHRvIGJlIHdvbiBvciBudWxsXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsRGlhZzogdGhlIGRpYWdvbmFsIHRoYXQgaGFzIGNhdXNlZCBnYW1lIHRvIGJlIHdvbiBvciBudWxsXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICB0aWU6IHRydWUgaWYgdGhlIGJvYXJkIGlzIGZ1bGwgYW5kIHRoZXJlIGlzIG5vIHdpbm5lciBvciBudWxsLlxuICAgKi9cbiAgaXNHYW1lT3ZlcigpIHtcbiAgICBjb25zdCBnYW1lU3RhdHVzID0ge1xuICAgICAgZnVsbFJvdzogdGhpcy5zZWFyY2hGb3JIb3Jpem9udGFsV2luKCksXG4gICAgICBmdWxsQ29sOiB0aGlzLnNlYXJjaEZvclZlcnRpY2FsV2luKCksXG4gICAgICBmdWxsRGlhZzogdGhpcy5zZWFyY2hGb3JEaWFnb25hbFdpbigpLFxuICAgICAgdGllOiB0aGlzLnNlYXJjaEZvclRpZSgpLFxuICAgIH07XG5cbiAgICBpZiAoXG4gICAgICBnYW1lU3RhdHVzLmZ1bGxSb3cgPT09IG51bGwgJiZcbiAgICAgIGdhbWVTdGF0dXMuZnVsbENvbCA9PT0gbnVsbCAmJlxuICAgICAgZ2FtZVN0YXR1cy5mdWxsRGlhZyA9PT0gbnVsbCAmJlxuICAgICAgZ2FtZVN0YXR1cy50aWUgPT09IG51bGxcbiAgICApXG4gICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gZ2FtZVN0YXR1cztcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gUmV0dXJucyBjb21wbGV0ZSByb3cgdGhhdCBjYXVzZWQgdGhlIGdhbWUgdG8gYmUgd29uXG4gICAqICAgICAgICAgICAgICBvciBudWxsIGlmIG5vIHJvdyBpcyBmdWxsIG9mIGNlbGxzIGZyb20gc2FtZSBwbGF5ZXIuXG4gICAqXG4gICAqIEByZXR1cm5zIHsgQXJyYXl8bnVsbCB9IFJvdyBvZiBjZWxscyB0aGF0IGNhdXNlZCB0aGUgZ2FtZSB0byBiZSB3b24gb3JcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCBpZiBubyByb3cgaXMgZnVsbC5cbiAgICovXG4gIHNlYXJjaEZvckhvcml6b250YWxXaW4oKSB7XG4gICAgY29uc3Qgd29uUm93ID0gdGhpcy5ncmlkLmZpbmQoKHJvdykgPT4ge1xuICAgICAgbGV0IHBsYXllcnNPblJvdyA9IG51bGw7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2l6ZTsgaSArPSAxKSB7XG4gICAgICAgIGlmIChyb3dbaV0ucGxheWVyID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChwbGF5ZXJzT25Sb3cgIT09IG51bGwgJiYgcGxheWVyc09uUm93ICE9PSByb3dbaV0ucGxheWVyLm5hbWUpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcGxheWVyc09uUm93ID0gcm93W2ldLnBsYXllci5uYW1lO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gd29uUm93IHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFJldHVybnMgY29tcGxldGUgY29sdW1uIHRoYXQgY2F1c2VkIHRoZSBnYW1lIHRvIGJlIHdvblxuICAgKiAgICAgICAgICAgICAgb3IgbnVsbCBpZiBubyBjb2x1bW4gaXMgZnVsbCBvZiBjZWxscyBmcm9tIHNhbWUgcGxheWVyLlxuICAgKlxuICAgKiBAcmV0dXJucyB7IEFycmF5fG51bGwgfSBDb2x1bW4gb2YgY2VsbHMgdGhhdCBjYXVzZWQgdGhlIGdhbWUgdG8gYmUgd29uIG9yXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgaWYgbm8gY29sdW1uIGlzIGZ1bGwuXG4gICAqL1xuICBzZWFyY2hGb3JWZXJ0aWNhbFdpbigpIHtcbiAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgdGhpcy5zaXplOyBjb2xJbmRleCArPSAxKSB7XG4gICAgICBsZXQgcGxheWVyc09uQ29sID0gbnVsbDtcbiAgICAgIGNvbnN0IGNvbCA9IFtdO1xuICAgICAgbGV0IHdvbkNvbCA9IHRydWU7XG4gICAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgdGhpcy5zaXplOyByb3dJbmRleCArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdyaWRbcm93SW5kZXhdW2NvbEluZGV4XTtcbiAgICAgICAgaWYgKGNlbGwucGxheWVyID09PSBudWxsKSB7XG4gICAgICAgICAgd29uQ29sID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYXllcnNPbkNvbCAhPT0gbnVsbCAmJiBwbGF5ZXJzT25Db2wgIT09IGNlbGwucGxheWVyLm5hbWUpIHtcbiAgICAgICAgICB3b25Db2wgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBwbGF5ZXJzT25Db2wgPSBjZWxsLnBsYXllci5uYW1lO1xuICAgICAgICBjb2wucHVzaChjZWxsKTtcbiAgICAgIH1cbiAgICAgIGlmICh3b25Db2wpIHJldHVybiBjb2w7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFJldHVybnMgY29tcGxldGUgZGlhZ29uYWwgdGhhdCBjYXVzZWQgdGhlIGdhbWUgdG8gYmUgd29uXG4gICAqICAgICAgICAgICAgICBvciBudWxsIGlmIG5vIGRpYWdvbmFsIGlzIGZ1bGwgb2YgY2VsbHMgZnJvbSBzYW1lIHBsYXllci5cbiAgICpcbiAgICogQHJldHVybnMgeyBBcnJheXxudWxsIH0gRGlhZ29uYWwgb2YgY2VsbHMgdGhhdCBjYXVzZWQgdGhlIGdhbWUgdG8gYmUgd29uIG9yXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgaWYgbm8gZGlhZ29uYWwgaXMgZnVsbC5cbiAgICovXG4gIHNlYXJjaEZvckRpYWdvbmFsV2luKCkge1xuICAgIGxldCBwbGF5ZXJzT25GaXJzdERpYWcgPSBudWxsO1xuICAgIGNvbnN0IGZpcnN0RGlhZyA9IFtdO1xuICAgIGxldCB3b25GaXJzdERpYWcgPSB0cnVlO1xuXG4gICAgZm9yIChsZXQgcG9zID0gMDsgcG9zIDwgdGhpcy5zaXplOyBwb3MgKz0gMSkge1xuICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ3JpZFtwb3NdW3Bvc107XG5cbiAgICAgIGlmIChjZWxsLnBsYXllciA9PT0gbnVsbCkge1xuICAgICAgICB3b25GaXJzdERpYWcgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChwbGF5ZXJzT25GaXJzdERpYWcgIT09IG51bGwgJiYgcGxheWVyc09uRmlyc3REaWFnICE9PSBjZWxsLnBsYXllci5uYW1lKSB7XG4gICAgICAgIHdvbkZpcnN0RGlhZyA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHBsYXllcnNPbkZpcnN0RGlhZyA9IGNlbGwucGxheWVyLm5hbWU7XG4gICAgICBmaXJzdERpYWcucHVzaChjZWxsKTtcbiAgICB9XG5cbiAgICBpZiAod29uRmlyc3REaWFnKSByZXR1cm4gZmlyc3REaWFnO1xuXG4gICAgbGV0IHBsYXllcnNPbkxhc3REaWFnID0gbnVsbDtcbiAgICBjb25zdCBsYXN0RGlhZyA9IFtdO1xuICAgIGxldCB3b25MYXN0RGlhZyA9IHRydWU7XG5cbiAgICBmb3IgKGxldCBwb3MgPSAwOyBwb3MgPCB0aGlzLnNpemU7IHBvcyArPSAxKSB7XG4gICAgICBjb25zdCBjZWxsID0gdGhpcy5ncmlkW3Bvc11bdGhpcy5zaXplIC0gMSAtIHBvc107XG5cbiAgICAgIGlmIChjZWxsLnBsYXllciA9PT0gbnVsbCkge1xuICAgICAgICB3b25MYXN0RGlhZyA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKHBsYXllcnNPbkxhc3REaWFnICE9PSBudWxsICYmIHBsYXllcnNPbkxhc3REaWFnICE9PSBjZWxsLnBsYXllci5uYW1lKSB7XG4gICAgICAgIHdvbkxhc3REaWFnID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcGxheWVyc09uTGFzdERpYWcgPSBjZWxsLnBsYXllci5uYW1lO1xuICAgICAgbGFzdERpYWcucHVzaChjZWxsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd29uTGFzdERpYWcgPyBsYXN0RGlhZyA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFRlc3QgaWYgZ2FtZSBpcyBpbiB0aWUgc3RhdGUuXG4gICAqXG4gICAqIEByZXR1cm5zIHsgdHJ1ZXxudWxsIH0gVHJ1ZSBpZiBnYW1lJ3Mgc3RhdGUgaXMgdGllLCBudWxsIGlmIGdhbWUncyBzdGF0ZSBpcyBub3QgaW4gdGllLlxuICAgKi9cbiAgc2VhcmNoRm9yVGllKCkge1xuICAgIGlmICh0aGlzLnNlYXJjaEZvckhvcml6b250YWxXaW4oKSAhPT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgaWYgKHRoaXMuc2VhcmNoRm9yVmVydGljYWxXaW4oKSAhPT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgaWYgKHRoaXMuc2VhcmNoRm9yRGlhZ29uYWxXaW4oKSAhPT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBmaWxsZWRDZWxsc0NvdW50ID0gdGhpcy5ncmlkLmZsYXQoKS5maWx0ZXIoKGNlbGwpID0+IGNlbGwucGxheWVyICE9PSBudWxsKS5sZW5ndGg7XG4gICAgcmV0dXJuIGZpbGxlZENlbGxzQ291bnQgPT09IHRoaXMuc2l6ZSAqIHRoaXMuc2l6ZSA/IHRydWUgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBTZXQgZ2FtZSBzdGF0dXMgdG8gb3ZlciBhbmQgZGlzcGxheSBlbmQgZ2FtZSBtZXNzYWdlLCByZWdhcmRpbmcgZ2FtZSBzdGF0ZS5cbiAgICpcbiAgICogQHBhcmFtICAgeyBvYmplY3QgfSAgICAgZ2FtZVN0YXRlICAgICAgICAgIC0gR2FtZSdzIHN0YXRlIG9iamVjdC5cbiAgICogQHBhcmFtICAgeyBBcnJheXxudWxsIH0gZ2FtZVN0YXRlLmZ1bGxSb3cgIC0gQ29tcGxldGUgcm93IHRoYXQgY2F1c2VkIGdhbWUgdG8gYmUgb3Zlci5cbiAgICogQHBhcmFtICAgeyBBcnJheXxudWxsIH0gZ2FtZVN0YXRlLmZ1bGxDb2wgIC0gQ29tcGxldGUgY29sdW1uIHRoYXQgY2F1c2VkIGdhbWUgdG8gYmUgb3Zlci5cbiAgICogQHBhcmFtICAgeyBBcnJheXxudWxsIH0gZ2FtZVN0YXRlLmZ1bGxEaWFnIC0gQ29tcGxldGUgZGlhZ29uYWwgdGhhdCBjYXVzZWQgZ2FtZSB0byBiZSBvdmVyLlxuICAgKlxuICAgKiBAcmV0dXJucyB7IHZvaWQgfVxuICAgKi9cbiAgZW5kR2FtZSh7IGZ1bGxSb3csIGZ1bGxDb2wsIGZ1bGxEaWFnIH0pIHtcbiAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICBjb25zdCBlbmRHYW1lU3RhdHVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBlbmRHYW1lU3RhdHVzQ29udGFpbmVyLmlkID0gJ2VuZC1nYW1lLXN0YXR1cy1jb250YWluZXInO1xuXG4gICAgY29uc3Qgd2luQ2F1c2UgPSBmdWxsUm93ID8/IGZ1bGxDb2wgPz8gZnVsbERpYWc7XG4gICAgY29uc3QgbmFtZSA9IHdpbkNhdXNlID8gd2luQ2F1c2VbMF0ucGxheWVyLm5hbWUgOiBudWxsO1xuXG4gICAgZW5kR2FtZVN0YXR1c0NvbnRhaW5lci5pbm5lclRleHQgPSB3aW5DYXVzZVxuICAgICAgPyBgJHtuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKX0gaGFzIHdvbiB0aGUgZ2FtZSAhYFxuICAgICAgOiAnTm8gb25lIGhhcyB3b24gdGhlIGdhbWUgISc7XG5cbiAgICB0aGlzLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZW5kR2FtZVN0YXR1c0NvbnRhaW5lcik7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEdldCB0aGUgcGxheWVyIHdob3NlIHR1cm4gaXQgaXMuXG4gICAqXG4gICAqIEByZXR1cm5zIHsgUGxheWVyIH0gUGxheWVyIHdob3NlIHR1cm4gaXQgaXMuXG4gICAqL1xuICBnZXRDdXJyZW50UGxheWVyKCkge1xuICAgIHJldHVybiB0aGlzLnBsYXllcnNbdGhpcy5wbGF5ZXJUdXJuXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gSW5jcmVtZW50IHRoZSBwbGF5ZXIgd2hvc2UgdHVybiBpdCBpcywgYW5kIHNldCBpdCB0byAwIGlmIHRoZXJlIGlzIG5vIG1vcmUgcGxheWVycy5cbiAgICpcbiAgICogQHJldHVybnMgeyB2b2lkIH1cbiAgICovXG4gIGluY3JlbWVudFBsYXllclR1cm4oKSB7XG4gICAgdGhpcy5wbGF5ZXJUdXJuID0gdGhpcy5wbGF5ZXJUdXJuICsgMSAhPT0gdGhpcy5wbGF5ZXJzLmxlbmd0aCA/IHRoaXMucGxheWVyVHVybiArIDEgOiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIGEgcGFyZW50IGRpdiBlbGVtZW50LCBhc3NpZ25zIGl0IGFuIGlkLCBhbmQgdGhlbiBhZGRzIHRoZSBncmlkIHJvd3MgYW5kIGNlbGxzIHRvIGl0LlxuICAgKlxuICAgKiBAcmV0dXJucyB7IHZvaWQgfVxuICAgKi9cbiAgYnVpbGRHcmlkKCkge1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhcmVudC5pZCA9ICdnYW1lLWdyaWQnO1xuICAgIHBhcmVudC5pbm5lckhUTUwgPSB0aGlzLmJ1aWxkR3JpZFJvd3ModGhpcy5ncmlkKTtcblxuICAgIHRoaXMucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChwYXJlbnQpO1xuXG4gICAgWy4uLnBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZS1ncmlkLWNlbGwnKV0uZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLmFkZFBsYXllclRvQ2VsbChlKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEdlbmVyYXRlIHJvd3MgSFRNTCBiYXNlZCBvbiBnaXZlbiByb3dzLlxuICAgKlxuICAgKiBAcGFyYW0gICB7IG9iamVjdFtdW10gfSByb3dzIC0gVGhlIGFycmF5IG9mIHJvd3MgdGhhdCB3ZSB3YW50IHRvIGJ1aWxkLlxuICAgKlxuICAgKiBAcmV0dXJucyB7IHN0cmluZyB9ICAgICAgICAgIEEgSFRNTCBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSBnYW1lJ3Mgcm93cy5cbiAgICovXG4gIGJ1aWxkR3JpZFJvd3Mocm93cykge1xuICAgIHJldHVybiByb3dzXG4gICAgICAubWFwKFxuICAgICAgICAocm93LCByb3dJbmRleCkgPT4gLyogaHRtbCAqLyBgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImdhbWUtZ3JpZC1yb3dcIiBkYXRhLXJvdz1cIiR7cm93SW5kZXh9XCI+XG4gICAgICAgICAgICAke3RoaXMuYnVpbGRHcmlkQ29scyhyb3csIHJvd0luZGV4KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYCxcbiAgICAgIClcbiAgICAgIC5qb2luKCcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gR2VuZXJhdGUgcm93J3MgY2VsbHMgSFRNTCBiYXNlZCBvbiBnaXZlbiByb3cuXG4gICAqXG4gICAqIEBwYXJhbSAgIHsgb2JqZWN0W10gfSByb3cgICAgICAtIFJvdyBvZiBjZWxscyB0byBnZW5lcmF0ZS5cbiAgICogQHBhcmFtICAgeyBudW1iZXIgfSAgIHJvd0luZGV4IC0gVGhlIGluZGV4IG9mIHRoZSByb3cgaW4gdGhlIGdyaWQuXG4gICAqXG4gICAqIEByZXR1cm5zIHsgc3RyaW5nIH0gICAgICAgICAgICBBIHN0cmluZyBvZiBIVE1MIHRoYXQgcmVwcmVzZW50cyBhbGwgcm93J3MgY2VsbHMuXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICBidWlsZEdyaWRDb2xzKHJvdywgcm93SW5kZXgpIHtcbiAgICByZXR1cm4gcm93XG4gICAgICAubWFwKFxuICAgICAgICAoY2VsbCwgY29sSW5kZXgpID0+IC8qIGh0bWwgKi8gYFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lLWdyaWQtY2VsbFwiIGRhdGEtcm93PVwiJHtyb3dJbmRleH1cIiBkYXRhLWNvbD1cIiR7Y29sSW5kZXh9XCI+PC9kaXY+XG4gICAgICAgIGAsXG4gICAgICApXG4gICAgICAuam9pbignJyk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIENyZWF0ZXMgZ2FtZSdzIGdyaWQgYXMgYSAyRCBhcnJheSBvZiBzaXplIGB0aGlzLnNpemVgIGFuZCBmaWxscyBpdCB3aXRoIGNlbGxzIG9iamVjdHMsIHN0cnVjdHVyZWQgYXMgZm9sbG93czpcbiAgICogICAgICAgICAgICAgIHJvdzogcm93IG51bWJlciB3aGVyZSB0aGUgY2VsbCBpcyBsb2NhdGVkLFxuICAgKiAgICAgICAgICAgICAgY29sOiBjb2x1bW4gbnVtYmVyIHdoZXJlIHRoZSBjZWxsIGlzIGxvY2F0ZWQsXG4gICAqICAgICAgICAgICAgICBwbGF5ZXI6IHByb3BlcnR5IHRoYXQgd2lsbCBjb250YWluIHBsYXllciB0aGF0IGhhcyBjaG9zZW4gdGhpcyBjZWxsLCBpbml0aWFsaXplZCBhcyBudWxsLlxuICAgKlxuICAgKiBAcmV0dXJucyB7b2JqZWN0W11bXX0gQW4gYXJyYXkgb2YgYXJyYXlzIG9mIG9iamVjdHMuXG4gICAqL1xuICBpbml0aWFsaXplR3JpZCgpIHtcbiAgICBjb25zdCBtYXAgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2l6ZTsgaSArPSAxKSB7XG4gICAgICBjb25zdCByb3cgPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5zaXplOyBqICs9IDEpIHtcbiAgICAgICAgcm93LnB1c2goe1xuICAgICAgICAgIHJvdzogaSxcbiAgICAgICAgICBjb2w6IGosXG4gICAgICAgICAgcGxheWVyOiBudWxsLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIG1hcC5wdXNoKHJvdyk7XG4gICAgfVxuICAgIHJldHVybiBtYXA7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFVwZGF0ZSBjZWxscyBpZiBuZWVkZWQsIGFzIGZvbGxvdyA6XG4gICAqICAgICAgICAgICAgICBJZiB0aGUgY2VsbCBjb250YWlucyBubyBwbGF5ZXIsIG5vdGhpbmcgaXMgZG9uZS5cbiAgICogICAgICAgICAgICAgIElmIHRoZSBjZWxsIGNvbnRhaW5zIGEgcGxheWVyIGFuZCB0aGUgbWF0Y2hpbmcgY2VsbCBvbiB0aGUgcGFnZSBhbHJlYWR5IGNvbnRhaW5zIHBsYXllciwgbm90aGluZyBpcyBkb25lLlxuICAgKiAgICAgICAgICAgICAgRWxzZSwgd2Uga25vdyB0aGUgY2VsbCBoYXMgYmVlbiB1cGRhdGVkIHRvIGNvbnRhaW4gYSBwbGF5ZXIsIHNvIHdlIHVwZGF0ZSB0aGUgbWF0Y2hpbmcgY2VsbCBvbiB0aGUgcGFnZSB0byBjb250YWlucyBwbGF5ZXIgbWFyay5cbiAgICpcbiAgICogQHJldHVybnMgeyB2b2lkIH1cbiAgICovXG4gIHByaW50KCkge1xuICAgIHRoaXMuZ3JpZC5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICByb3cuZm9yRWFjaCgoY2VsbCwgY29sSW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGNlbGwucGxheWVyID09PSBudWxsKSByZXR1cm47IC8vIG5vdGhpbmcgdG8gYmUgZGlzcGxheWVkXG5cbiAgICAgICAgY29uc3QgY2VsbEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9XCIke3Jvd0luZGV4fVwiXVtkYXRhLWNvbD1cIiR7Y29sSW5kZXh9XCJdYCk7XG4gICAgICAgIGlmIChjZWxsRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoYHBsYXllciR7Y2VsbC5wbGF5ZXIubmFtZX1gKSkgcmV0dXJuOyAvLyBub3RoaW5nIHRvIHVwZGF0ZVxuXG4gICAgICAgIGNlbGxFbGVtZW50LmlubmVyVGV4dCA9IGNlbGwucGxheWVyLm1hcmtlcjtcbiAgICAgICAgY2VsbEVsZW1lbnQuY2xhc3NMaXN0LmFkZChgcGxheWVyJHtjZWxsLnBsYXllci5uYW1lfWApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsIi8qKlxuICogQGZpbGUgUGxheWVyIGNsYXNzIGZpbGUuXG4gKiBAYXV0aG9yIERBTklFTFMtUk9USCBTdGFuIDxjb250YWN0QGRhbmllbHMtcm90aC1zdGFuLmZyPlxuICovXG5cbi8qKlxuICogR2FtZSBsb2dpYyBtYW5hZ2VyLlxuICpcbiAqIEBjYXRlZ29yeSBHYW1lXG4gKi9cbmNsYXNzIFBsYXllciB7XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gUGxheWVyJ3MgbmFtZS5cbiAgICpcbiAgICogQHR5cGUgeyBzdHJpbmcgfVxuICAgKi9cbiAgbmFtZTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFBsYXllcidzIG1hcmtlciB0byBiZSBkaXNwbGF5ZWQgaW5zaWRlIGdhbWUgY2VsbHMuXG4gICAqXG4gICAqIEB0eXBlIHsgc3RyaW5nIH1cbiAgICovXG4gIG1hcmtlcjtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEluaXRpYWxpemVzIHRoZSBwbGF5ZXIuXG4gICAqXG4gICAqIEBwYXJhbSAgIHsgb2JqZWN0IH0gb3B0aW9ucyAgICAgICAgLSBTZXR0aW5ncyBvYmplY3QgdGhhdCBjb25maWd1cmVzIHRoZSBwbGF5ZXIuXG4gICAqIEBwYXJhbSAgIHsgc3RyaW5nIH0gb3B0aW9ucy5uYW1lICAgLSBQbGF5ZXIncyBuYW1lLlxuICAgKiBAcGFyYW0gICB7IG51bWJlciB9IG9wdGlvbnMubWFya2VyIC0gUGxheWVyJ3MgbWFya2VyIHRvIHVzZSBpbiBjZWxscy5cbiAgICpcbiAgICogQHJldHVybnMgeyBQbGF5ZXIgfSAgICAgICAgICAgICAgICBQbGF5ZXIgaW5zdGFuY2UuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy52YWxpZGF0ZU9wdGlvbnMob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFZhbGlkYXRlIGlmIGFsbCByZXF1aXJlZCBwYXJhbWV0ZXJzIGFyZSBwcmVzZW50IGFuZCB3ZXRoZXIgdGhleSBhcmUgY29ycmVjdC5cbiAgICpcbiAgICogQHBhcmFtICAgeyBvYmplY3QgfSBvcHRpb25zICAgICAgICAtIFNldHRpbmdzIG9iamVjdCB0aGF0IGNvbmZpZ3VyZXMgdGhlIHBsYXllci5cbiAgICogQHBhcmFtICAgeyBzdHJpbmcgfSBvcHRpb25zLm5hbWUgICAtIEdhbWUncyBQYXJlbnQgQ1NTIHNlbGVjdG9yLlxuICAgKiBAcGFyYW0gICB7IG51bWJlciB9IG9wdGlvbnMubWFya2VyIC0gR2FtZSdzIGdyaWQgY29sdW1ucyBhbmQgcm93cyBjb3VudC5cbiAgICpcbiAgICogQHRocm93cyAgeyBUeXBlRXJyb3J8RXJyb3IgfSBUaHJvd3MgdmFsaWRhdGlvbiBlcnJvci5cbiAgICpcbiAgICogQHJldHVybnMgeyB2b2lkIH1cbiAgICovXG4gIHZhbGlkYXRlT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0JykgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9ucyBtdXN0IGJlIGFuIG9iamVjdCcpO1xuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLm5hbWUgIT09ICdzdHJpbmcnKSB0aHJvdyBuZXcgVHlwZUVycm9yKCduYW1lIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICBjb25zdCByZWdleE5hbWUgPSAvXlthLXpdKyQvaTtcbiAgICBpZiAoIXJlZ2V4TmFtZS50ZXN0KG9wdGlvbnMubmFtZSkpIHRocm93IG5ldyBUeXBlRXJyb3IoJ25hbWUgbXVzdCBvbmx5IGNvbnRhaW4gbGV0dGVycycpO1xuICAgIHRoaXMubmFtZSA9IG9wdGlvbnMubmFtZTtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5tYXJrZXIgIT09ICdzdHJpbmcnKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdtYXJrZXIgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgIGNvbnN0IHJlZ2V4TWFya2VyID0gL15bYS16XSQvaTtcbiAgICBpZiAoIXJlZ2V4TWFya2VyLnRlc3Qob3B0aW9ucy5tYXJrZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdtYXJrZXIgbXVzdCBvbmx5IGNvbnRhaW4gb25lIGxldHRlcicpO1xuICAgIHRoaXMubWFya2VyID0gb3B0aW9ucy5tYXJrZXI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyoqXG4gKiBAZmlsZSBFbnRyeSBwb2ludCBmaWxlLlxuICogQGF1dGhvciBEQU5JRUxTLVJPVEggU3RhbiA8Y29udGFjdEBkYW5pZWxzLXJvdGgtc3Rhbi5mcj5cbiAqL1xuXG5pbXBvcnQgR2FtZSBmcm9tICckc3JjL2NsYXNzZXMvR2FtZSc7XG5pbXBvcnQgUGxheWVyIGZyb20gJyRzcmMvY2xhc3Nlcy9QbGF5ZXInO1xuaW1wb3J0ICckc3JjL3N0eWxlLmNzcyc7XG5cbndpbmRvdy5nYW1lID0gbmV3IEdhbWUoe1xuICBzaXplOiAzLFxuICBwYXJlbnRFbGVtZW50OiAnI2FwcCcsXG4gIHBsYXllcnM6IFtcbiAgICBuZXcgUGxheWVyKHtcbiAgICAgIG5hbWU6ICd4JyxcbiAgICAgIG1hcmtlcjogJ1gnLFxuICAgIH0pLFxuICAgIG5ldyBQbGF5ZXIoe1xuICAgICAgbmFtZTogJ28nLFxuICAgICAgbWFya2VyOiAnTycsXG4gICAgfSksXG4gIF0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgd2luZG93LmdhbWU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=