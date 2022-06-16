/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/Game.js":
/*!*****************************!*\
  !*** ./src/classes/Game.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
class Game {
  constructor(options) {
    this.validateOptions(options);

    this.playerTurn = 0;

    this.grid = this.initializeGrid();
    this.buildGrid();
    this.print();
  }

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

  addPlayerToCell(event) {
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

  searchForTie() {
    if (this.searchForHorizontalWin() !== null) return null;
    if (this.searchForVerticalWin() !== null) return null;
    if (this.searchForDiagonalWin() !== null) return null;

    const filledCellsCount = this.grid.flat().filter((cell) => cell.player !== null).length;
    return filledCellsCount === this.size * this.size ? true : null;
  }

  endGame({ fullRow, fullCol, fullDiag }) {
    const endGameStatusContainer = document.createElement('h1');
    endGameStatusContainer.id = 'end-game-status-container';

    const winCause = fullRow ?? fullCol ?? fullDiag;
    const name = winCause ? winCause[0].player.name : null;

    endGameStatusContainer.innerText = winCause
      ? `${name.charAt(0).toUpperCase() + name.slice(1)} has won the game !`
      : 'No one has won the game !';

    this.parentElement.appendChild(endGameStatusContainer);
  }

  getCurrentPlayer() {
    return this.players[this.playerTurn];
  }

  incrementPlayerTurn() {
    this.playerTurn = this.playerTurn + 1 !== this.players.length ? this.playerTurn + 1 : 0;
  }

  buildGrid() {
    const parent = document.createElement('div');
    parent.id = 'game-grid';
    parent.innerHTML = this.buildGridRows(this.grid);

    this.parentElement.appendChild(parent);

    [...parent.querySelectorAll('.game-grid-cell')].forEach((cell) => {
      cell.addEventListener('click', (e) => this.addPlayerToCell(e));
    });
  }

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


/***/ }),

/***/ "./src/classes/Player.js":
/*!*******************************!*\
  !*** ./src/classes/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
class Player {
  constructor(options) {
    this.validateOptions(options);
  }

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
/******/ 			// no module.id needed
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxRQUFRLDJEQUFNO0FBQ2Q7QUFDQTtBQUNBLEtBQUs7QUFDTCxRQUFRLDJEQUFNO0FBQ2Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQsaUVBQWUsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGljLXRhY3QtdG9lLy4vc3JjL2NsYXNzZXMvR2FtZS5qcyIsIndlYnBhY2s6Ly90aWMtdGFjdC10b2UvLi9zcmMvY2xhc3Nlcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdGljLXRhY3QtdG9lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RpYy10YWN0LXRvZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGljLXRhY3QtdG9lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGljLXRhY3QtdG9lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGljLXRhY3QtdG9lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy52YWxpZGF0ZU9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICB0aGlzLnBsYXllclR1cm4gPSAwO1xuXG4gICAgdGhpcy5ncmlkID0gdGhpcy5pbml0aWFsaXplR3JpZCgpO1xuICAgIHRoaXMuYnVpbGRHcmlkKCk7XG4gICAgdGhpcy5wcmludCgpO1xuICB9XG5cbiAgdmFsaWRhdGVPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMucGFyZW50RWxlbWVudCAhPT0gJ3N0cmluZycpIHRocm93IG5ldyBUeXBlRXJyb3IoJ3BhcmVudEVsZW1lbnQgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5wYXJlbnRFbGVtZW50KTtcbiAgICBpZiAocGFyZW50ID09PSBudWxsKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwicGFyZW50RWxlbWVudCBtdXN0IHJlZmVyIGFuIGV4aXN0aW5nIGVsZW1lbnQncyBJRFwiKTtcbiAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSBwYXJlbnQ7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuc2l6ZSAhPT0gJ251bWJlcicpIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NpemUgbXVzdCBiZSBhIG51bWJlcicpO1xuICAgIGlmIChvcHRpb25zLnNpemUgPD0gMSkgdGhyb3cgbmV3IEVycm9yKCdzaXplIG11c3QgYmUgYSBhdCBsZWFzdCBzdXBlcmlvciB0byBvbmUnKTtcbiAgICB0aGlzLnNpemUgPSBvcHRpb25zLnNpemU7XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkob3B0aW9ucy5wbGF5ZXJzKSkgdGhyb3cgbmV3IFR5cGVFcnJvcigncGxheWVycyBtdXN0IGJlIGFuIGFycmF5Jyk7XG4gICAgaWYgKG9wdGlvbnMucGxheWVycy5sZW5ndGggPCAxKSB0aHJvdyBuZXcgRXJyb3IoJ3BsYXllcnMgbXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSBwbGF5ZXInKTtcbiAgICB0aGlzLnBsYXllcnMgPSBvcHRpb25zLnBsYXllcnM7XG4gIH1cblxuICBhZGRQbGF5ZXJUb0NlbGwoZXZlbnQpIHtcbiAgICBjb25zdCBjZWxsRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCB7IHJvdywgY29sIH0gPSBjZWxsRWxlbWVudC5kYXRhc2V0O1xuICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdyaWRbcm93XVtjb2xdO1xuXG4gICAgaWYgKGNlbGwucGxheWVyICE9PSBudWxsKSByZXR1cm47IC8vIGNlbGwgYWxyZWFkeSBwbGF5ZWRcblxuICAgIGNvbnN0IGFjdHVhbFBsYXllciA9IHRoaXMuZ2V0Q3VycmVudFBsYXllcigpO1xuXG4gICAgY2VsbC5wbGF5ZXIgPSBhY3R1YWxQbGF5ZXI7XG4gICAgY2VsbEVsZW1lbnQuaW5uZXJUZXh0ID0gYWN0dWFsUGxheWVyLm1hcmtlcjtcblxuICAgIGNvbnN0IGdhbWVTdGF0dXMgPSB0aGlzLmlzR2FtZU92ZXIoKTtcbiAgICBpZiAoZ2FtZVN0YXR1cyAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuZW5kR2FtZShnYW1lU3RhdHVzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pbmNyZW1lbnRQbGF5ZXJUdXJuKCk7XG4gIH1cblxuICBpc0dhbWVPdmVyKCkge1xuICAgIGNvbnN0IGdhbWVTdGF0dXMgPSB7XG4gICAgICBmdWxsUm93OiB0aGlzLnNlYXJjaEZvckhvcml6b250YWxXaW4oKSxcbiAgICAgIGZ1bGxDb2w6IHRoaXMuc2VhcmNoRm9yVmVydGljYWxXaW4oKSxcbiAgICAgIGZ1bGxEaWFnOiB0aGlzLnNlYXJjaEZvckRpYWdvbmFsV2luKCksXG4gICAgICB0aWU6IHRoaXMuc2VhcmNoRm9yVGllKCksXG4gICAgfTtcblxuICAgIGlmIChcbiAgICAgIGdhbWVTdGF0dXMuZnVsbFJvdyA9PT0gbnVsbCAmJlxuICAgICAgZ2FtZVN0YXR1cy5mdWxsQ29sID09PSBudWxsICYmXG4gICAgICBnYW1lU3RhdHVzLmZ1bGxEaWFnID09PSBudWxsICYmXG4gICAgICBnYW1lU3RhdHVzLnRpZSA9PT0gbnVsbFxuICAgIClcbiAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiBnYW1lU3RhdHVzO1xuICB9XG5cbiAgc2VhcmNoRm9ySG9yaXpvbnRhbFdpbigpIHtcbiAgICBjb25zdCB3b25Sb3cgPSB0aGlzLmdyaWQuZmluZCgocm93KSA9PiB7XG4gICAgICBsZXQgcGxheWVyc09uUm93ID0gbnVsbDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaXplOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHJvd1tpXS5wbGF5ZXIgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHBsYXllcnNPblJvdyAhPT0gbnVsbCAmJiBwbGF5ZXJzT25Sb3cgIT09IHJvd1tpXS5wbGF5ZXIubmFtZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBwbGF5ZXJzT25Sb3cgPSByb3dbaV0ucGxheWVyLm5hbWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB3b25Sb3cgfHwgbnVsbDtcbiAgfVxuXG4gIHNlYXJjaEZvclZlcnRpY2FsV2luKCkge1xuICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCB0aGlzLnNpemU7IGNvbEluZGV4ICs9IDEpIHtcbiAgICAgIGxldCBwbGF5ZXJzT25Db2wgPSBudWxsO1xuICAgICAgY29uc3QgY29sID0gW107XG4gICAgICBsZXQgd29uQ29sID0gdHJ1ZTtcbiAgICAgIGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCB0aGlzLnNpemU7IHJvd0luZGV4ICs9IDEpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ3JpZFtyb3dJbmRleF1bY29sSW5kZXhdO1xuICAgICAgICBpZiAoY2VsbC5wbGF5ZXIgPT09IG51bGwpIHtcbiAgICAgICAgICB3b25Db2wgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxheWVyc09uQ29sICE9PSBudWxsICYmIHBsYXllcnNPbkNvbCAhPT0gY2VsbC5wbGF5ZXIubmFtZSkge1xuICAgICAgICAgIHdvbkNvbCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHBsYXllcnNPbkNvbCA9IGNlbGwucGxheWVyLm5hbWU7XG4gICAgICAgIGNvbC5wdXNoKGNlbGwpO1xuICAgICAgfVxuICAgICAgaWYgKHdvbkNvbCkgcmV0dXJuIGNvbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHNlYXJjaEZvckRpYWdvbmFsV2luKCkge1xuICAgIGxldCBwbGF5ZXJzT25GaXJzdERpYWcgPSBudWxsO1xuICAgIGNvbnN0IGZpcnN0RGlhZyA9IFtdO1xuICAgIGxldCB3b25GaXJzdERpYWcgPSB0cnVlO1xuXG4gICAgZm9yIChsZXQgcG9zID0gMDsgcG9zIDwgdGhpcy5zaXplOyBwb3MgKz0gMSkge1xuICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ3JpZFtwb3NdW3Bvc107XG5cbiAgICAgIGlmIChjZWxsLnBsYXllciA9PT0gbnVsbCkge1xuICAgICAgICB3b25GaXJzdERpYWcgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChwbGF5ZXJzT25GaXJzdERpYWcgIT09IG51bGwgJiYgcGxheWVyc09uRmlyc3REaWFnICE9PSBjZWxsLnBsYXllci5uYW1lKSB7XG4gICAgICAgIHdvbkZpcnN0RGlhZyA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHBsYXllcnNPbkZpcnN0RGlhZyA9IGNlbGwucGxheWVyLm5hbWU7XG4gICAgICBmaXJzdERpYWcucHVzaChjZWxsKTtcbiAgICB9XG5cbiAgICBpZiAod29uRmlyc3REaWFnKSByZXR1cm4gZmlyc3REaWFnO1xuXG4gICAgbGV0IHBsYXllcnNPbkxhc3REaWFnID0gbnVsbDtcbiAgICBjb25zdCBsYXN0RGlhZyA9IFtdO1xuICAgIGxldCB3b25MYXN0RGlhZyA9IHRydWU7XG5cbiAgICBmb3IgKGxldCBwb3MgPSAwOyBwb3MgPCB0aGlzLnNpemU7IHBvcyArPSAxKSB7XG4gICAgICBjb25zdCBjZWxsID0gdGhpcy5ncmlkW3Bvc11bdGhpcy5zaXplIC0gMSAtIHBvc107XG5cbiAgICAgIGlmIChjZWxsLnBsYXllciA9PT0gbnVsbCkge1xuICAgICAgICB3b25MYXN0RGlhZyA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKHBsYXllcnNPbkxhc3REaWFnICE9PSBudWxsICYmIHBsYXllcnNPbkxhc3REaWFnICE9PSBjZWxsLnBsYXllci5uYW1lKSB7XG4gICAgICAgIHdvbkxhc3REaWFnID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcGxheWVyc09uTGFzdERpYWcgPSBjZWxsLnBsYXllci5uYW1lO1xuICAgICAgbGFzdERpYWcucHVzaChjZWxsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd29uTGFzdERpYWcgPyBsYXN0RGlhZyA6IG51bGw7XG4gIH1cblxuICBzZWFyY2hGb3JUaWUoKSB7XG4gICAgaWYgKHRoaXMuc2VhcmNoRm9ySG9yaXpvbnRhbFdpbigpICE9PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodGhpcy5zZWFyY2hGb3JWZXJ0aWNhbFdpbigpICE9PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodGhpcy5zZWFyY2hGb3JEaWFnb25hbFdpbigpICE9PSBudWxsKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IGZpbGxlZENlbGxzQ291bnQgPSB0aGlzLmdyaWQuZmxhdCgpLmZpbHRlcigoY2VsbCkgPT4gY2VsbC5wbGF5ZXIgIT09IG51bGwpLmxlbmd0aDtcbiAgICByZXR1cm4gZmlsbGVkQ2VsbHNDb3VudCA9PT0gdGhpcy5zaXplICogdGhpcy5zaXplID8gdHJ1ZSA6IG51bGw7XG4gIH1cblxuICBlbmRHYW1lKHsgZnVsbFJvdywgZnVsbENvbCwgZnVsbERpYWcgfSkge1xuICAgIGNvbnN0IGVuZEdhbWVTdGF0dXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGVuZEdhbWVTdGF0dXNDb250YWluZXIuaWQgPSAnZW5kLWdhbWUtc3RhdHVzLWNvbnRhaW5lcic7XG5cbiAgICBjb25zdCB3aW5DYXVzZSA9IGZ1bGxSb3cgPz8gZnVsbENvbCA/PyBmdWxsRGlhZztcbiAgICBjb25zdCBuYW1lID0gd2luQ2F1c2UgPyB3aW5DYXVzZVswXS5wbGF5ZXIubmFtZSA6IG51bGw7XG5cbiAgICBlbmRHYW1lU3RhdHVzQ29udGFpbmVyLmlubmVyVGV4dCA9IHdpbkNhdXNlXG4gICAgICA/IGAke25hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpfSBoYXMgd29uIHRoZSBnYW1lICFgXG4gICAgICA6ICdObyBvbmUgaGFzIHdvbiB0aGUgZ2FtZSAhJztcblxuICAgIHRoaXMucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChlbmRHYW1lU3RhdHVzQ29udGFpbmVyKTtcbiAgfVxuXG4gIGdldEN1cnJlbnRQbGF5ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGxheWVyc1t0aGlzLnBsYXllclR1cm5dO1xuICB9XG5cbiAgaW5jcmVtZW50UGxheWVyVHVybigpIHtcbiAgICB0aGlzLnBsYXllclR1cm4gPSB0aGlzLnBsYXllclR1cm4gKyAxICE9PSB0aGlzLnBsYXllcnMubGVuZ3RoID8gdGhpcy5wbGF5ZXJUdXJuICsgMSA6IDA7XG4gIH1cblxuICBidWlsZEdyaWQoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFyZW50LmlkID0gJ2dhbWUtZ3JpZCc7XG4gICAgcGFyZW50LmlubmVySFRNTCA9IHRoaXMuYnVpbGRHcmlkUm93cyh0aGlzLmdyaWQpO1xuXG4gICAgdGhpcy5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKHBhcmVudCk7XG5cbiAgICBbLi4ucGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lLWdyaWQtY2VsbCcpXS5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMuYWRkUGxheWVyVG9DZWxsKGUpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGJ1aWxkR3JpZFJvd3Mocm93cykge1xuICAgIHJldHVybiByb3dzXG4gICAgICAubWFwKFxuICAgICAgICAocm93LCByb3dJbmRleCkgPT4gLyogaHRtbCAqLyBgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImdhbWUtZ3JpZC1yb3dcIiBkYXRhLXJvdz1cIiR7cm93SW5kZXh9XCI+XG4gICAgICAgICAgICAke3RoaXMuYnVpbGRHcmlkQ29scyhyb3csIHJvd0luZGV4KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYCxcbiAgICAgIClcbiAgICAgIC5qb2luKCcnKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gIGJ1aWxkR3JpZENvbHMocm93LCByb3dJbmRleCkge1xuICAgIHJldHVybiByb3dcbiAgICAgIC5tYXAoXG4gICAgICAgIChjZWxsLCBjb2xJbmRleCkgPT4gLyogaHRtbCAqLyBgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImdhbWUtZ3JpZC1jZWxsXCIgZGF0YS1yb3c9XCIke3Jvd0luZGV4fVwiIGRhdGEtY29sPVwiJHtjb2xJbmRleH1cIj48L2Rpdj5cbiAgICAgICAgYCxcbiAgICAgIClcbiAgICAgIC5qb2luKCcnKTtcbiAgfVxuXG4gIGluaXRpYWxpemVHcmlkKCkge1xuICAgIGNvbnN0IG1hcCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaXplOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHJvdyA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnNpemU7IGogKz0gMSkge1xuICAgICAgICByb3cucHVzaCh7XG4gICAgICAgICAgcm93OiBpLFxuICAgICAgICAgIGNvbDogaixcbiAgICAgICAgICBwbGF5ZXI6IG51bGwsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgbWFwLnB1c2gocm93KTtcbiAgICB9XG4gICAgcmV0dXJuIG1hcDtcbiAgfVxuXG4gIHByaW50KCkge1xuICAgIHRoaXMuZ3JpZC5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICByb3cuZm9yRWFjaCgoY2VsbCwgY29sSW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGNlbGwucGxheWVyID09PSBudWxsKSByZXR1cm47IC8vIG5vdGhpbmcgdG8gYmUgZGlzcGxheWVkXG5cbiAgICAgICAgY29uc3QgY2VsbEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9XCIke3Jvd0luZGV4fVwiXVtkYXRhLWNvbD1cIiR7Y29sSW5kZXh9XCJdYCk7XG4gICAgICAgIGlmIChjZWxsRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoYHBsYXllciR7Y2VsbC5wbGF5ZXIubmFtZX1gKSkgcmV0dXJuOyAvLyBub3RoaW5nIHRvIHVwZGF0ZVxuXG4gICAgICAgIGNlbGxFbGVtZW50LmlubmVyVGV4dCA9IGNlbGwucGxheWVyLm1hcmtlcjtcbiAgICAgICAgY2VsbEVsZW1lbnQuY2xhc3NMaXN0LmFkZChgcGxheWVyJHtjZWxsLnBsYXllci5uYW1lfWApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLnZhbGlkYXRlT3B0aW9ucyhvcHRpb25zKTtcbiAgfVxuXG4gIHZhbGlkYXRlT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0JykgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9ucyBtdXN0IGJlIGFuIG9iamVjdCcpO1xuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLm5hbWUgIT09ICdzdHJpbmcnKSB0aHJvdyBuZXcgVHlwZUVycm9yKCduYW1lIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICBjb25zdCByZWdleE5hbWUgPSAvXlthLXpdKyQvaTtcbiAgICBpZiAoIXJlZ2V4TmFtZS50ZXN0KG9wdGlvbnMubmFtZSkpIHRocm93IG5ldyBUeXBlRXJyb3IoJ25hbWUgbXVzdCBvbmx5IGNvbnRhaW4gbGV0dGVycycpO1xuICAgIHRoaXMubmFtZSA9IG9wdGlvbnMubmFtZTtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5tYXJrZXIgIT09ICdzdHJpbmcnKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdtYXJrZXIgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgIGNvbnN0IHJlZ2V4TWFya2VyID0gL15bYS16XSQvaTtcbiAgICBpZiAoIXJlZ2V4TWFya2VyLnRlc3Qob3B0aW9ucy5tYXJrZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdtYXJrZXIgbXVzdCBvbmx5IGNvbnRhaW4gb25lIGxldHRlcicpO1xuICAgIHRoaXMubWFya2VyID0gb3B0aW9ucy5tYXJrZXI7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEdhbWUgZnJvbSAnJHNyYy9jbGFzc2VzL0dhbWUnO1xuaW1wb3J0IFBsYXllciBmcm9tICckc3JjL2NsYXNzZXMvUGxheWVyJztcblxud2luZG93LmdhbWUgPSBuZXcgR2FtZSh7XG4gIHNpemU6IDMsXG4gIHBhcmVudEVsZW1lbnQ6ICcjYXBwJyxcbiAgcGxheWVyczogW1xuICAgIG5ldyBQbGF5ZXIoe1xuICAgICAgbmFtZTogJ3gnLFxuICAgICAgbWFya2VyOiAnWCcsXG4gICAgfSksXG4gICAgbmV3IFBsYXllcih7XG4gICAgICBuYW1lOiAnbycsXG4gICAgICBtYXJrZXI6ICdPJyxcbiAgICB9KSxcbiAgXSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB3aW5kb3cuZ2FtZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==