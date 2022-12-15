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
/** @typedef {import('./Player').default} Player */

/**
 * Game logic manager.
 *
 * @category Game
 */
class Game {
  /**
   *  @type { number } - Player's index to whose turn it is.
   */
  playerTurn;

  /**
   * @type { boolean } - Represent game status.
   */
  gameOver;

  /**
   * @type { object[][] } - Game's cells grid.
   */
  grid;

  /**
   * @type { Element } - HTML parent element containing game's grid.
   */
  parentElement;

  /**
   * @type { number } - Game's grid size.
   */
  size;

  /**
   * @type { Player[] } - Game's players.
   */
  players;

  /**
   * @description Initializes the game and the grid and prints it.
   *
   * @param { object }   options               - Settings object that configures the game.
   * @param { string }   options.parentElement - Game's Parent CSS selector.
   * @param { number }   options.size          - Game's grid columns and rows count.
   * @param { Player[] } options.players       - Game's players list.
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
    // @ts-ignore
    const { row, col } = cellElement.dataset;
    const cell = this.grid[row][col];

    if (cell.player !== null) return; // cell already played

    const actualPlayer = this.getCurrentPlayer();

    cell.player = actualPlayer;
    // @ts-ignore
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
    parent.innerHTML = Game.buildGridRows(this.grid);

    this.parentElement.appendChild(parent);

    [...parent.querySelectorAll('.game-grid-cell')].forEach((cell) => {
      cell.addEventListener('click', (e) => this.addPlayerToCell(e));
    });
  }

  /**
   * @static
   *
   * @description Generate rows HTML based on given rows.
   *
   * @param   { object[][] } rows - The array of rows that we want to build.
   *
   * @returns { string }          A HTML string that represents the game's rows.
   */
  static buildGridRows(rows) {
    return rows
      .map(
        (row, rowIndex) => /* html */ `
          <div class="game-grid-row" data-row="${rowIndex}">
            ${Game.buildGridCols(row, rowIndex)}
          </div>
        `,
      )
      .join('');
  }

  /**
   * @static
   *
   * @description Generate row's cells HTML based on given row.
   *
   * @param   { object[] } row      - Row of cells to generate.
   * @param   { number }   rowIndex - The index of the row in the grid.
   *
   * @returns { string }            A string of HTML that represents all row's cells.
   */
  static buildGridCols(row, rowIndex) {
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

        // @ts-ignore
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
   * @type { string } - Player's name.
   */
  name;

  /**
   * @type { string } - Player's marker to be displayed inside game cells.
   */
  marker;

  /**
   * @description Initializes the player.
   *
   * @param { object } options        - Settings object that configures the player.
   * @param { string } options.name   - Player's name.
   * @param { string } options.marker - Player's marker to use in cells.
   */
  constructor(options) {
    this.validateOptions(options);
  }

  /**
   * @description Validate if all required parameters are present and wether they are correct.
   *
   * @param   { object } options        - Settings object that configures the player.
   * @param   { string } options.name   - Game's Parent CSS selector.
   * @param   { string } options.marker - Game's grid columns and rows count.
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





// @ts-ignore
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

// @ts-ignore
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (window.game);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUM7QUFDSTtBQUNqQjs7QUFFeEI7QUFDQSxrQkFBa0IseURBQUk7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBTTtBQUNkO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsUUFBUSwyREFBTTtBQUNkO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0EsaUVBQWUsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvY2xhc3Nlcy9HYW1lLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL2NsYXNzZXMvUGxheWVyLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI2dhbWUtZ3JpZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgbWFyZ2luOiAxMDBweCBhdXRvO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5nYW1lLWdyaWQtcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbi5nYW1lLWdyaWQtcm93Om5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggYmxhY2s7XFxufVxcblxcbi5nYW1lLWdyaWQtY2VsbCB7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDIwMHB4O1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4uZ2FtZS1ncmlkLWNlbGw6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIGJvcmRlci1yaWdodDogc29saWQgM3B4IGJsYWNrO1xcbn1cXG5cXG4jZW5kLWdhbWUtc3RhdHVzLWNvbnRhaW5lciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlDQUF5QztBQUMzQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjZ2FtZS1ncmlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBtYXJnaW46IDEwMHB4IGF1dG87XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmdhbWUtZ3JpZC1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuXFxuLmdhbWUtZ3JpZC1yb3c6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCBibGFjaztcXG59XFxuXFxuLmdhbWUtZ3JpZC1jZWxsIHtcXG4gIGhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMjAwcHg7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5nYW1lLWdyaWQtY2VsbDpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAzcHggYmxhY2s7XFxufVxcblxcbiNlbmQtZ2FtZS1zdGF0dXMtY29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qKlxuICogQGZpbGUgR2FtZSBjbGFzcyBmaWxlLlxuICogQGF1dGhvciBEQU5JRUxTLVJPVEggU3RhbiA8Y29udGFjdEBkYW5pZWxzLXJvdGgtc3Rhbi5mcj5cbiAqL1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganNkb2MvdmFsaWQtdHlwZXNcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL1BsYXllcicpLmRlZmF1bHR9IFBsYXllciAqL1xuXG4vKipcbiAqIEdhbWUgbG9naWMgbWFuYWdlci5cbiAqXG4gKiBAY2F0ZWdvcnkgR2FtZVxuICovXG5jbGFzcyBHYW1lIHtcbiAgLyoqXG4gICAqICBAdHlwZSB7IG51bWJlciB9IC0gUGxheWVyJ3MgaW5kZXggdG8gd2hvc2UgdHVybiBpdCBpcy5cbiAgICovXG4gIHBsYXllclR1cm47XG5cbiAgLyoqXG4gICAqIEB0eXBlIHsgYm9vbGVhbiB9IC0gUmVwcmVzZW50IGdhbWUgc3RhdHVzLlxuICAgKi9cbiAgZ2FtZU92ZXI7XG5cbiAgLyoqXG4gICAqIEB0eXBlIHsgb2JqZWN0W11bXSB9IC0gR2FtZSdzIGNlbGxzIGdyaWQuXG4gICAqL1xuICBncmlkO1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7IEVsZW1lbnQgfSAtIEhUTUwgcGFyZW50IGVsZW1lbnQgY29udGFpbmluZyBnYW1lJ3MgZ3JpZC5cbiAgICovXG4gIHBhcmVudEVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIEB0eXBlIHsgbnVtYmVyIH0gLSBHYW1lJ3MgZ3JpZCBzaXplLlxuICAgKi9cbiAgc2l6ZTtcblxuICAvKipcbiAgICogQHR5cGUgeyBQbGF5ZXJbXSB9IC0gR2FtZSdzIHBsYXllcnMuXG4gICAqL1xuICBwbGF5ZXJzO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gSW5pdGlhbGl6ZXMgdGhlIGdhbWUgYW5kIHRoZSBncmlkIGFuZCBwcmludHMgaXQuXG4gICAqXG4gICAqIEBwYXJhbSB7IG9iamVjdCB9ICAgb3B0aW9ucyAgICAgICAgICAgICAgIC0gU2V0dGluZ3Mgb2JqZWN0IHRoYXQgY29uZmlndXJlcyB0aGUgZ2FtZS5cbiAgICogQHBhcmFtIHsgc3RyaW5nIH0gICBvcHRpb25zLnBhcmVudEVsZW1lbnQgLSBHYW1lJ3MgUGFyZW50IENTUyBzZWxlY3Rvci5cbiAgICogQHBhcmFtIHsgbnVtYmVyIH0gICBvcHRpb25zLnNpemUgICAgICAgICAgLSBHYW1lJ3MgZ3JpZCBjb2x1bW5zIGFuZCByb3dzIGNvdW50LlxuICAgKiBAcGFyYW0geyBQbGF5ZXJbXSB9IG9wdGlvbnMucGxheWVycyAgICAgICAtIEdhbWUncyBwbGF5ZXJzIGxpc3QuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy52YWxpZGF0ZU9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICB0aGlzLnBsYXllclR1cm4gPSAwO1xuICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcblxuICAgIHRoaXMuZ3JpZCA9IHRoaXMuaW5pdGlhbGl6ZUdyaWQoKTtcbiAgICB0aGlzLmJ1aWxkR3JpZCgpO1xuICAgIHRoaXMucHJpbnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVmFsaWRhdGUgaWYgYWxsIHJlcXVpcmVkIHBhcmFtZXRlcnMgYXJlIHByZXNlbnQgYW5kIHdldGhlciB0aGV5IGFyZSBjb3JyZWN0LlxuICAgKlxuICAgKiBAcGFyYW0gICB7IG9iamVjdCB9ICAgb3B0aW9ucyAgICAgICAgICAgICAgIC0gU2V0dGluZ3Mgb2JqZWN0IHRoYXQgY29uZmlndXJlcyB0aGUgZ2FtZS5cbiAgICogQHBhcmFtICAgeyBzdHJpbmcgfSAgIG9wdGlvbnMucGFyZW50RWxlbWVudCAtIEdhbWUncyBQYXJlbnQgQ1NTIHNlbGVjdG9yLlxuICAgKiBAcGFyYW0gICB7IG51bWJlciB9ICAgb3B0aW9ucy5zaXplICAgICAgICAgIC0gR2FtZSdzIGdyaWQgY29sdW1ucyBhbmQgcm93cyBjb3VudC5cbiAgICogQHBhcmFtICAgeyBQbGF5ZXJbXSB9IG9wdGlvbnMucGxheWVycyAgICAgICAtIEdhbWUncyBwbGF5ZXJzIGxpc3QuXG4gICAqXG4gICAqIEB0aHJvd3MgIHsgVHlwZUVycm9yfEVycm9yIH0gVGhyb3dzIHZhbGlkYXRpb24gZXJyb3IuXG4gICAqXG4gICAqIEByZXR1cm5zIHsgdm9pZCB9XG4gICAqL1xuICB2YWxpZGF0ZU9wdGlvbnMob3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbnMgbXVzdCBiZSBhbiBvYmplY3QnKTtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5wYXJlbnRFbGVtZW50ICE9PSAnc3RyaW5nJykgdGhyb3cgbmV3IFR5cGVFcnJvcigncGFyZW50RWxlbWVudCBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLnBhcmVudEVsZW1lbnQpO1xuICAgIGlmIChwYXJlbnQgPT09IG51bGwpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJwYXJlbnRFbGVtZW50IG11c3QgcmVmZXIgYW4gZXhpc3RpbmcgZWxlbWVudCdzIElEXCIpO1xuICAgIHRoaXMucGFyZW50RWxlbWVudCA9IHBhcmVudDtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5zaXplICE9PSAnbnVtYmVyJykgdGhyb3cgbmV3IFR5cGVFcnJvcignc2l6ZSBtdXN0IGJlIGEgbnVtYmVyJyk7XG4gICAgaWYgKG9wdGlvbnMuc2l6ZSA8PSAxKSB0aHJvdyBuZXcgRXJyb3IoJ3NpemUgbXVzdCBiZSBhIGF0IGxlYXN0IHN1cGVyaW9yIHRvIG9uZScpO1xuICAgIHRoaXMuc2l6ZSA9IG9wdGlvbnMuc2l6ZTtcblxuICAgIGlmICghQXJyYXkuaXNBcnJheShvcHRpb25zLnBsYXllcnMpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdwbGF5ZXJzIG11c3QgYmUgYW4gYXJyYXknKTtcbiAgICBpZiAob3B0aW9ucy5wbGF5ZXJzLmxlbmd0aCA8IDEpIHRocm93IG5ldyBFcnJvcigncGxheWVycyBtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIHBsYXllcicpO1xuICAgIHRoaXMucGxheWVycyA9IG9wdGlvbnMucGxheWVycztcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gSWYgdGhlIGdhbWUgaXMgbm90IG92ZXIsIGdldCB0aGUgY2VsbCB0aGF0IHdhcyBjbGlja2VkLCBnZXQgdGhlIGN1cnJlbnQgcGxheWVyLFxuICAgKiAgICAgICAgICAgICAgc2V0IHRoZSBjZWxsJ3MgcGxheWVyIHRvIHRoZSBjdXJyZW50IHBsYXllciwgYW5kIGluY3JlbWVudCB0aGUgcGxheWVyIHR1cm4uXG4gICAqXG4gICAqIEBwYXJhbSAgIHsgZXZlbnQgfSBldmVudCAtIFRoZSBjbGljayBldmVudCBvYmplY3QgdGhhdCB3YXMgdHJpZ2dlcmVkIGJ5IHRoZSB1c2VyLlxuICAgKlxuICAgKiBAcmV0dXJucyB7IHZvaWQgfVxuICAgKi9cbiAgYWRkUGxheWVyVG9DZWxsKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZ2FtZU92ZXIpIHJldHVybjtcblxuICAgIGNvbnN0IGNlbGxFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCB7IHJvdywgY29sIH0gPSBjZWxsRWxlbWVudC5kYXRhc2V0O1xuICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdyaWRbcm93XVtjb2xdO1xuXG4gICAgaWYgKGNlbGwucGxheWVyICE9PSBudWxsKSByZXR1cm47IC8vIGNlbGwgYWxyZWFkeSBwbGF5ZWRcblxuICAgIGNvbnN0IGFjdHVhbFBsYXllciA9IHRoaXMuZ2V0Q3VycmVudFBsYXllcigpO1xuXG4gICAgY2VsbC5wbGF5ZXIgPSBhY3R1YWxQbGF5ZXI7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNlbGxFbGVtZW50LmlubmVyVGV4dCA9IGFjdHVhbFBsYXllci5tYXJrZXI7XG5cbiAgICBjb25zdCBnYW1lU3RhdHVzID0gdGhpcy5pc0dhbWVPdmVyKCk7XG4gICAgaWYgKGdhbWVTdGF0dXMgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmVuZEdhbWUoZ2FtZVN0YXR1cyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaW5jcmVtZW50UGxheWVyVHVybigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBJZiB0aGVyZSBpcyBubyB3aW5uZXIsIHJldHVybiBmYWxzZS4gT3RoZXJ3aXNlLCByZXR1cm4gdGhlIHdvbiBnYW1lIHN0YXR1cy5cbiAgICpcbiAgICogQHJldHVybnMgeyBvYmplY3R8bnVsbCB9IEFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxSb3c6IHRoZSByb3cgdGhhdCBoYXMgY2F1c2VkIGdhbWUgdG8gYmUgd29uIG9yIG51bGxcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxDb2w6IHRoZSBjb2x1bW4gdGhhdCBoYXMgY2F1c2VkIGdhbWUgdG8gYmUgd29uIG9yIG51bGxcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxEaWFnOiB0aGUgZGlhZ29uYWwgdGhhdCBoYXMgY2F1c2VkIGdhbWUgdG8gYmUgd29uIG9yIG51bGxcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgIHRpZTogdHJ1ZSBpZiB0aGUgYm9hcmQgaXMgZnVsbCBhbmQgdGhlcmUgaXMgbm8gd2lubmVyIG9yIG51bGwuXG4gICAqL1xuICBpc0dhbWVPdmVyKCkge1xuICAgIGNvbnN0IGdhbWVTdGF0dXMgPSB7XG4gICAgICBmdWxsUm93OiB0aGlzLnNlYXJjaEZvckhvcml6b250YWxXaW4oKSxcbiAgICAgIGZ1bGxDb2w6IHRoaXMuc2VhcmNoRm9yVmVydGljYWxXaW4oKSxcbiAgICAgIGZ1bGxEaWFnOiB0aGlzLnNlYXJjaEZvckRpYWdvbmFsV2luKCksXG4gICAgICB0aWU6IHRoaXMuc2VhcmNoRm9yVGllKCksXG4gICAgfTtcblxuICAgIGlmIChcbiAgICAgIGdhbWVTdGF0dXMuZnVsbFJvdyA9PT0gbnVsbCAmJlxuICAgICAgZ2FtZVN0YXR1cy5mdWxsQ29sID09PSBudWxsICYmXG4gICAgICBnYW1lU3RhdHVzLmZ1bGxEaWFnID09PSBudWxsICYmXG4gICAgICBnYW1lU3RhdHVzLnRpZSA9PT0gbnVsbFxuICAgIClcbiAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiBnYW1lU3RhdHVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIGNvbXBsZXRlIHJvdyB0aGF0IGNhdXNlZCB0aGUgZ2FtZSB0byBiZSB3b25cbiAgICogICAgICAgICAgICAgIG9yIG51bGwgaWYgbm8gcm93IGlzIGZ1bGwgb2YgY2VsbHMgZnJvbSBzYW1lIHBsYXllci5cbiAgICpcbiAgICogQHJldHVybnMgeyBBcnJheXxudWxsIH0gUm93IG9mIGNlbGxzIHRoYXQgY2F1c2VkIHRoZSBnYW1lIHRvIGJlIHdvbiBvclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIGlmIG5vIHJvdyBpcyBmdWxsLlxuICAgKi9cbiAgc2VhcmNoRm9ySG9yaXpvbnRhbFdpbigpIHtcbiAgICBjb25zdCB3b25Sb3cgPSB0aGlzLmdyaWQuZmluZCgocm93KSA9PiB7XG4gICAgICBsZXQgcGxheWVyc09uUm93ID0gbnVsbDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaXplOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHJvd1tpXS5wbGF5ZXIgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHBsYXllcnNPblJvdyAhPT0gbnVsbCAmJiBwbGF5ZXJzT25Sb3cgIT09IHJvd1tpXS5wbGF5ZXIubmFtZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBwbGF5ZXJzT25Sb3cgPSByb3dbaV0ucGxheWVyLm5hbWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB3b25Sb3cgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gUmV0dXJucyBjb21wbGV0ZSBjb2x1bW4gdGhhdCBjYXVzZWQgdGhlIGdhbWUgdG8gYmUgd29uXG4gICAqICAgICAgICAgICAgICBvciBudWxsIGlmIG5vIGNvbHVtbiBpcyBmdWxsIG9mIGNlbGxzIGZyb20gc2FtZSBwbGF5ZXIuXG4gICAqXG4gICAqIEByZXR1cm5zIHsgQXJyYXl8bnVsbCB9IENvbHVtbiBvZiBjZWxscyB0aGF0IGNhdXNlZCB0aGUgZ2FtZSB0byBiZSB3b24gb3JcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCBpZiBubyBjb2x1bW4gaXMgZnVsbC5cbiAgICovXG4gIHNlYXJjaEZvclZlcnRpY2FsV2luKCkge1xuICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCB0aGlzLnNpemU7IGNvbEluZGV4ICs9IDEpIHtcbiAgICAgIGxldCBwbGF5ZXJzT25Db2wgPSBudWxsO1xuICAgICAgY29uc3QgY29sID0gW107XG4gICAgICBsZXQgd29uQ29sID0gdHJ1ZTtcbiAgICAgIGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCB0aGlzLnNpemU7IHJvd0luZGV4ICs9IDEpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ3JpZFtyb3dJbmRleF1bY29sSW5kZXhdO1xuICAgICAgICBpZiAoY2VsbC5wbGF5ZXIgPT09IG51bGwpIHtcbiAgICAgICAgICB3b25Db2wgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxheWVyc09uQ29sICE9PSBudWxsICYmIHBsYXllcnNPbkNvbCAhPT0gY2VsbC5wbGF5ZXIubmFtZSkge1xuICAgICAgICAgIHdvbkNvbCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHBsYXllcnNPbkNvbCA9IGNlbGwucGxheWVyLm5hbWU7XG4gICAgICAgIGNvbC5wdXNoKGNlbGwpO1xuICAgICAgfVxuICAgICAgaWYgKHdvbkNvbCkgcmV0dXJuIGNvbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gUmV0dXJucyBjb21wbGV0ZSBkaWFnb25hbCB0aGF0IGNhdXNlZCB0aGUgZ2FtZSB0byBiZSB3b25cbiAgICogICAgICAgICAgICAgIG9yIG51bGwgaWYgbm8gZGlhZ29uYWwgaXMgZnVsbCBvZiBjZWxscyBmcm9tIHNhbWUgcGxheWVyLlxuICAgKlxuICAgKiBAcmV0dXJucyB7IEFycmF5fG51bGwgfSBEaWFnb25hbCBvZiBjZWxscyB0aGF0IGNhdXNlZCB0aGUgZ2FtZSB0byBiZSB3b24gb3JcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCBpZiBubyBkaWFnb25hbCBpcyBmdWxsLlxuICAgKi9cbiAgc2VhcmNoRm9yRGlhZ29uYWxXaW4oKSB7XG4gICAgbGV0IHBsYXllcnNPbkZpcnN0RGlhZyA9IG51bGw7XG4gICAgY29uc3QgZmlyc3REaWFnID0gW107XG4gICAgbGV0IHdvbkZpcnN0RGlhZyA9IHRydWU7XG5cbiAgICBmb3IgKGxldCBwb3MgPSAwOyBwb3MgPCB0aGlzLnNpemU7IHBvcyArPSAxKSB7XG4gICAgICBjb25zdCBjZWxsID0gdGhpcy5ncmlkW3Bvc11bcG9zXTtcblxuICAgICAgaWYgKGNlbGwucGxheWVyID09PSBudWxsKSB7XG4gICAgICAgIHdvbkZpcnN0RGlhZyA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKHBsYXllcnNPbkZpcnN0RGlhZyAhPT0gbnVsbCAmJiBwbGF5ZXJzT25GaXJzdERpYWcgIT09IGNlbGwucGxheWVyLm5hbWUpIHtcbiAgICAgICAgd29uRmlyc3REaWFnID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcGxheWVyc09uRmlyc3REaWFnID0gY2VsbC5wbGF5ZXIubmFtZTtcbiAgICAgIGZpcnN0RGlhZy5wdXNoKGNlbGwpO1xuICAgIH1cblxuICAgIGlmICh3b25GaXJzdERpYWcpIHJldHVybiBmaXJzdERpYWc7XG5cbiAgICBsZXQgcGxheWVyc09uTGFzdERpYWcgPSBudWxsO1xuICAgIGNvbnN0IGxhc3REaWFnID0gW107XG4gICAgbGV0IHdvbkxhc3REaWFnID0gdHJ1ZTtcblxuICAgIGZvciAobGV0IHBvcyA9IDA7IHBvcyA8IHRoaXMuc2l6ZTsgcG9zICs9IDEpIHtcbiAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdyaWRbcG9zXVt0aGlzLnNpemUgLSAxIC0gcG9zXTtcblxuICAgICAgaWYgKGNlbGwucGxheWVyID09PSBudWxsKSB7XG4gICAgICAgIHdvbkxhc3REaWFnID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAocGxheWVyc09uTGFzdERpYWcgIT09IG51bGwgJiYgcGxheWVyc09uTGFzdERpYWcgIT09IGNlbGwucGxheWVyLm5hbWUpIHtcbiAgICAgICAgd29uTGFzdERpYWcgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBwbGF5ZXJzT25MYXN0RGlhZyA9IGNlbGwucGxheWVyLm5hbWU7XG4gICAgICBsYXN0RGlhZy5wdXNoKGNlbGwpO1xuICAgIH1cblxuICAgIHJldHVybiB3b25MYXN0RGlhZyA/IGxhc3REaWFnIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGVzdCBpZiBnYW1lIGlzIGluIHRpZSBzdGF0ZS5cbiAgICpcbiAgICogQHJldHVybnMgeyB0cnVlfG51bGwgfSBUcnVlIGlmIGdhbWUncyBzdGF0ZSBpcyB0aWUsIG51bGwgaWYgZ2FtZSdzIHN0YXRlIGlzIG5vdCBpbiB0aWUuXG4gICAqL1xuICBzZWFyY2hGb3JUaWUoKSB7XG4gICAgaWYgKHRoaXMuc2VhcmNoRm9ySG9yaXpvbnRhbFdpbigpICE9PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodGhpcy5zZWFyY2hGb3JWZXJ0aWNhbFdpbigpICE9PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodGhpcy5zZWFyY2hGb3JEaWFnb25hbFdpbigpICE9PSBudWxsKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IGZpbGxlZENlbGxzQ291bnQgPSB0aGlzLmdyaWQuZmxhdCgpLmZpbHRlcigoY2VsbCkgPT4gY2VsbC5wbGF5ZXIgIT09IG51bGwpLmxlbmd0aDtcbiAgICByZXR1cm4gZmlsbGVkQ2VsbHNDb3VudCA9PT0gdGhpcy5zaXplICogdGhpcy5zaXplID8gdHJ1ZSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFNldCBnYW1lIHN0YXR1cyB0byBvdmVyIGFuZCBkaXNwbGF5IGVuZCBnYW1lIG1lc3NhZ2UsIHJlZ2FyZGluZyBnYW1lIHN0YXRlLlxuICAgKlxuICAgKiBAcGFyYW0gICB7IG9iamVjdCB9ICAgICBnYW1lU3RhdGUgICAgICAgICAgLSBHYW1lJ3Mgc3RhdGUgb2JqZWN0LlxuICAgKiBAcGFyYW0gICB7IEFycmF5fG51bGwgfSBnYW1lU3RhdGUuZnVsbFJvdyAgLSBDb21wbGV0ZSByb3cgdGhhdCBjYXVzZWQgZ2FtZSB0byBiZSBvdmVyLlxuICAgKiBAcGFyYW0gICB7IEFycmF5fG51bGwgfSBnYW1lU3RhdGUuZnVsbENvbCAgLSBDb21wbGV0ZSBjb2x1bW4gdGhhdCBjYXVzZWQgZ2FtZSB0byBiZSBvdmVyLlxuICAgKiBAcGFyYW0gICB7IEFycmF5fG51bGwgfSBnYW1lU3RhdGUuZnVsbERpYWcgLSBDb21wbGV0ZSBkaWFnb25hbCB0aGF0IGNhdXNlZCBnYW1lIHRvIGJlIG92ZXIuXG4gICAqXG4gICAqIEByZXR1cm5zIHsgdm9pZCB9XG4gICAqL1xuICBlbmRHYW1lKHsgZnVsbFJvdywgZnVsbENvbCwgZnVsbERpYWcgfSkge1xuICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgIGNvbnN0IGVuZEdhbWVTdGF0dXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGVuZEdhbWVTdGF0dXNDb250YWluZXIuaWQgPSAnZW5kLWdhbWUtc3RhdHVzLWNvbnRhaW5lcic7XG5cbiAgICBjb25zdCB3aW5DYXVzZSA9IGZ1bGxSb3cgPz8gZnVsbENvbCA/PyBmdWxsRGlhZztcbiAgICBjb25zdCBuYW1lID0gd2luQ2F1c2UgPyB3aW5DYXVzZVswXS5wbGF5ZXIubmFtZSA6IG51bGw7XG5cbiAgICBlbmRHYW1lU3RhdHVzQ29udGFpbmVyLmlubmVyVGV4dCA9IHdpbkNhdXNlXG4gICAgICA/IGAke25hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpfSBoYXMgd29uIHRoZSBnYW1lICFgXG4gICAgICA6ICdObyBvbmUgaGFzIHdvbiB0aGUgZ2FtZSAhJztcblxuICAgIHRoaXMucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChlbmRHYW1lU3RhdHVzQ29udGFpbmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gR2V0IHRoZSBwbGF5ZXIgd2hvc2UgdHVybiBpdCBpcy5cbiAgICpcbiAgICogQHJldHVybnMgeyBQbGF5ZXIgfSBQbGF5ZXIgd2hvc2UgdHVybiBpdCBpcy5cbiAgICovXG4gIGdldEN1cnJlbnRQbGF5ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGxheWVyc1t0aGlzLnBsYXllclR1cm5dO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBJbmNyZW1lbnQgdGhlIHBsYXllciB3aG9zZSB0dXJuIGl0IGlzLCBhbmQgc2V0IGl0IHRvIDAgaWYgdGhlcmUgaXMgbm8gbW9yZSBwbGF5ZXJzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7IHZvaWQgfVxuICAgKi9cbiAgaW5jcmVtZW50UGxheWVyVHVybigpIHtcbiAgICB0aGlzLnBsYXllclR1cm4gPSB0aGlzLnBsYXllclR1cm4gKyAxICE9PSB0aGlzLnBsYXllcnMubGVuZ3RoID8gdGhpcy5wbGF5ZXJUdXJuICsgMSA6IDA7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIENyZWF0ZXMgYSBwYXJlbnQgZGl2IGVsZW1lbnQsIGFzc2lnbnMgaXQgYW4gaWQsIGFuZCB0aGVuIGFkZHMgdGhlIGdyaWQgcm93cyBhbmQgY2VsbHMgdG8gaXQuXG4gICAqXG4gICAqIEByZXR1cm5zIHsgdm9pZCB9XG4gICAqL1xuICBidWlsZEdyaWQoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFyZW50LmlkID0gJ2dhbWUtZ3JpZCc7XG4gICAgcGFyZW50LmlubmVySFRNTCA9IEdhbWUuYnVpbGRHcmlkUm93cyh0aGlzLmdyaWQpO1xuXG4gICAgdGhpcy5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKHBhcmVudCk7XG5cbiAgICBbLi4ucGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lLWdyaWQtY2VsbCcpXS5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMuYWRkUGxheWVyVG9DZWxsKGUpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3RhdGljXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBHZW5lcmF0ZSByb3dzIEhUTUwgYmFzZWQgb24gZ2l2ZW4gcm93cy5cbiAgICpcbiAgICogQHBhcmFtICAgeyBvYmplY3RbXVtdIH0gcm93cyAtIFRoZSBhcnJheSBvZiByb3dzIHRoYXQgd2Ugd2FudCB0byBidWlsZC5cbiAgICpcbiAgICogQHJldHVybnMgeyBzdHJpbmcgfSAgICAgICAgICBBIEhUTUwgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgZ2FtZSdzIHJvd3MuXG4gICAqL1xuICBzdGF0aWMgYnVpbGRHcmlkUm93cyhyb3dzKSB7XG4gICAgcmV0dXJuIHJvd3NcbiAgICAgIC5tYXAoXG4gICAgICAgIChyb3csIHJvd0luZGV4KSA9PiAvKiBodG1sICovIGBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZS1ncmlkLXJvd1wiIGRhdGEtcm93PVwiJHtyb3dJbmRleH1cIj5cbiAgICAgICAgICAgICR7R2FtZS5idWlsZEdyaWRDb2xzKHJvdywgcm93SW5kZXgpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgLFxuICAgICAgKVxuICAgICAgLmpvaW4oJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWNcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIEdlbmVyYXRlIHJvdydzIGNlbGxzIEhUTUwgYmFzZWQgb24gZ2l2ZW4gcm93LlxuICAgKlxuICAgKiBAcGFyYW0gICB7IG9iamVjdFtdIH0gcm93ICAgICAgLSBSb3cgb2YgY2VsbHMgdG8gZ2VuZXJhdGUuXG4gICAqIEBwYXJhbSAgIHsgbnVtYmVyIH0gICByb3dJbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgcm93IGluIHRoZSBncmlkLlxuICAgKlxuICAgKiBAcmV0dXJucyB7IHN0cmluZyB9ICAgICAgICAgICAgQSBzdHJpbmcgb2YgSFRNTCB0aGF0IHJlcHJlc2VudHMgYWxsIHJvdydzIGNlbGxzLlxuICAgKi9cbiAgc3RhdGljIGJ1aWxkR3JpZENvbHMocm93LCByb3dJbmRleCkge1xuICAgIHJldHVybiByb3dcbiAgICAgIC5tYXAoXG4gICAgICAgIChjZWxsLCBjb2xJbmRleCkgPT4gLyogaHRtbCAqLyBgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImdhbWUtZ3JpZC1jZWxsXCIgZGF0YS1yb3c9XCIke3Jvd0luZGV4fVwiIGRhdGEtY29sPVwiJHtjb2xJbmRleH1cIj48L2Rpdj5cbiAgICAgICAgYCxcbiAgICAgIClcbiAgICAgIC5qb2luKCcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyBnYW1lJ3MgZ3JpZCBhcyBhIDJEIGFycmF5IG9mIHNpemUgYHRoaXMuc2l6ZWAgYW5kIGZpbGxzIGl0IHdpdGggY2VsbHMgb2JqZWN0cywgc3RydWN0dXJlZCBhcyBmb2xsb3dzOlxuICAgKiAgICAgICAgICAgICAgcm93OiByb3cgbnVtYmVyIHdoZXJlIHRoZSBjZWxsIGlzIGxvY2F0ZWQsXG4gICAqICAgICAgICAgICAgICBjb2w6IGNvbHVtbiBudW1iZXIgd2hlcmUgdGhlIGNlbGwgaXMgbG9jYXRlZCxcbiAgICogICAgICAgICAgICAgIHBsYXllcjogcHJvcGVydHkgdGhhdCB3aWxsIGNvbnRhaW4gcGxheWVyIHRoYXQgaGFzIGNob3NlbiB0aGlzIGNlbGwsIGluaXRpYWxpemVkIGFzIG51bGwuXG4gICAqXG4gICAqIEByZXR1cm5zIHtvYmplY3RbXVtdfSBBbiBhcnJheSBvZiBhcnJheXMgb2Ygb2JqZWN0cy5cbiAgICovXG4gIGluaXRpYWxpemVHcmlkKCkge1xuICAgIGNvbnN0IG1hcCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaXplOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHJvdyA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnNpemU7IGogKz0gMSkge1xuICAgICAgICByb3cucHVzaCh7XG4gICAgICAgICAgcm93OiBpLFxuICAgICAgICAgIGNvbDogaixcbiAgICAgICAgICBwbGF5ZXI6IG51bGwsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgbWFwLnB1c2gocm93KTtcbiAgICB9XG4gICAgcmV0dXJuIG1hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVXBkYXRlIGNlbGxzIGlmIG5lZWRlZCwgYXMgZm9sbG93IDpcbiAgICogICAgICAgICAgICAgIElmIHRoZSBjZWxsIGNvbnRhaW5zIG5vIHBsYXllciwgbm90aGluZyBpcyBkb25lLlxuICAgKiAgICAgICAgICAgICAgSWYgdGhlIGNlbGwgY29udGFpbnMgYSBwbGF5ZXIgYW5kIHRoZSBtYXRjaGluZyBjZWxsIG9uIHRoZSBwYWdlIGFscmVhZHkgY29udGFpbnMgcGxheWVyLCBub3RoaW5nIGlzIGRvbmUuXG4gICAqICAgICAgICAgICAgICBFbHNlLCB3ZSBrbm93IHRoZSBjZWxsIGhhcyBiZWVuIHVwZGF0ZWQgdG8gY29udGFpbiBhIHBsYXllciwgc28gd2UgdXBkYXRlIHRoZSBtYXRjaGluZyBjZWxsIG9uIHRoZSBwYWdlIHRvIGNvbnRhaW5zIHBsYXllciBtYXJrLlxuICAgKlxuICAgKiBAcmV0dXJucyB7IHZvaWQgfVxuICAgKi9cbiAgcHJpbnQoKSB7XG4gICAgdGhpcy5ncmlkLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgIHJvdy5mb3JFYWNoKChjZWxsLCBjb2xJbmRleCkgPT4ge1xuICAgICAgICBpZiAoY2VsbC5wbGF5ZXIgPT09IG51bGwpIHJldHVybjsgLy8gbm90aGluZyB0byBiZSBkaXNwbGF5ZWRcblxuICAgICAgICBjb25zdCBjZWxsRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz1cIiR7cm93SW5kZXh9XCJdW2RhdGEtY29sPVwiJHtjb2xJbmRleH1cIl1gKTtcbiAgICAgICAgaWYgKGNlbGxFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhgcGxheWVyJHtjZWxsLnBsYXllci5uYW1lfWApKSByZXR1cm47IC8vIG5vdGhpbmcgdG8gdXBkYXRlXG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjZWxsRWxlbWVudC5pbm5lclRleHQgPSBjZWxsLnBsYXllci5tYXJrZXI7XG4gICAgICAgIGNlbGxFbGVtZW50LmNsYXNzTGlzdC5hZGQoYHBsYXllciR7Y2VsbC5wbGF5ZXIubmFtZX1gKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCIvKipcbiAqIEBmaWxlIFBsYXllciBjbGFzcyBmaWxlLlxuICogQGF1dGhvciBEQU5JRUxTLVJPVEggU3RhbiA8Y29udGFjdEBkYW5pZWxzLXJvdGgtc3Rhbi5mcj5cbiAqL1xuXG4vKipcbiAqIEdhbWUgbG9naWMgbWFuYWdlci5cbiAqXG4gKiBAY2F0ZWdvcnkgR2FtZVxuICovXG5jbGFzcyBQbGF5ZXIge1xuICAvKipcbiAgICogQHR5cGUgeyBzdHJpbmcgfSAtIFBsYXllcidzIG5hbWUuXG4gICAqL1xuICBuYW1lO1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7IHN0cmluZyB9IC0gUGxheWVyJ3MgbWFya2VyIHRvIGJlIGRpc3BsYXllZCBpbnNpZGUgZ2FtZSBjZWxscy5cbiAgICovXG4gIG1hcmtlcjtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEluaXRpYWxpemVzIHRoZSBwbGF5ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7IG9iamVjdCB9IG9wdGlvbnMgICAgICAgIC0gU2V0dGluZ3Mgb2JqZWN0IHRoYXQgY29uZmlndXJlcyB0aGUgcGxheWVyLlxuICAgKiBAcGFyYW0geyBzdHJpbmcgfSBvcHRpb25zLm5hbWUgICAtIFBsYXllcidzIG5hbWUuXG4gICAqIEBwYXJhbSB7IHN0cmluZyB9IG9wdGlvbnMubWFya2VyIC0gUGxheWVyJ3MgbWFya2VyIHRvIHVzZSBpbiBjZWxscy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLnZhbGlkYXRlT3B0aW9ucyhvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVmFsaWRhdGUgaWYgYWxsIHJlcXVpcmVkIHBhcmFtZXRlcnMgYXJlIHByZXNlbnQgYW5kIHdldGhlciB0aGV5IGFyZSBjb3JyZWN0LlxuICAgKlxuICAgKiBAcGFyYW0gICB7IG9iamVjdCB9IG9wdGlvbnMgICAgICAgIC0gU2V0dGluZ3Mgb2JqZWN0IHRoYXQgY29uZmlndXJlcyB0aGUgcGxheWVyLlxuICAgKiBAcGFyYW0gICB7IHN0cmluZyB9IG9wdGlvbnMubmFtZSAgIC0gR2FtZSdzIFBhcmVudCBDU1Mgc2VsZWN0b3IuXG4gICAqIEBwYXJhbSAgIHsgc3RyaW5nIH0gb3B0aW9ucy5tYXJrZXIgLSBHYW1lJ3MgZ3JpZCBjb2x1bW5zIGFuZCByb3dzIGNvdW50LlxuICAgKlxuICAgKiBAdGhyb3dzICB7IFR5cGVFcnJvcnxFcnJvciB9IFRocm93cyB2YWxpZGF0aW9uIGVycm9yLlxuICAgKlxuICAgKiBAcmV0dXJucyB7IHZvaWQgfVxuICAgKi9cbiAgdmFsaWRhdGVPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMubmFtZSAhPT0gJ3N0cmluZycpIHRocm93IG5ldyBUeXBlRXJyb3IoJ25hbWUgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgIGNvbnN0IHJlZ2V4TmFtZSA9IC9eW2Etel0rJC9pO1xuICAgIGlmICghcmVnZXhOYW1lLnRlc3Qob3B0aW9ucy5uYW1lKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignbmFtZSBtdXN0IG9ubHkgY29udGFpbiBsZXR0ZXJzJyk7XG4gICAgdGhpcy5uYW1lID0gb3B0aW9ucy5uYW1lO1xuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLm1hcmtlciAhPT0gJ3N0cmluZycpIHRocm93IG5ldyBUeXBlRXJyb3IoJ21hcmtlciBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgY29uc3QgcmVnZXhNYXJrZXIgPSAvXlthLXpdJC9pO1xuICAgIGlmICghcmVnZXhNYXJrZXIudGVzdChvcHRpb25zLm1hcmtlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ21hcmtlciBtdXN0IG9ubHkgY29udGFpbiBvbmUgbGV0dGVyJyk7XG4gICAgdGhpcy5tYXJrZXIgPSBvcHRpb25zLm1hcmtlcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKipcbiAqIEBmaWxlIEVudHJ5IHBvaW50IGZpbGUuXG4gKiBAYXV0aG9yIERBTklFTFMtUk9USCBTdGFuIDxjb250YWN0QGRhbmllbHMtcm90aC1zdGFuLmZyPlxuICovXG5cbmltcG9ydCBHYW1lIGZyb20gJyRzcmMvY2xhc3Nlcy9HYW1lJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnJHNyYy9jbGFzc2VzL1BsYXllcic7XG5pbXBvcnQgJyRzcmMvc3R5bGUuY3NzJztcblxuLy8gQHRzLWlnbm9yZVxud2luZG93LmdhbWUgPSBuZXcgR2FtZSh7XG4gIHNpemU6IDMsXG4gIHBhcmVudEVsZW1lbnQ6ICcjYXBwJyxcbiAgcGxheWVyczogW1xuICAgIG5ldyBQbGF5ZXIoe1xuICAgICAgbmFtZTogJ3gnLFxuICAgICAgbWFya2VyOiAnWCcsXG4gICAgfSksXG4gICAgbmV3IFBsYXllcih7XG4gICAgICBuYW1lOiAnbycsXG4gICAgICBtYXJrZXI6ICdPJyxcbiAgICB9KSxcbiAgXSxcbn0pO1xuXG4vLyBAdHMtaWdub3JlXG5leHBvcnQgZGVmYXVsdCB3aW5kb3cuZ2FtZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==