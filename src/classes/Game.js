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
   * @param   { object } options               - Settings object that configures the game.
   * @param   { string } options.parentElement - Game's Parent CSS selector.
   * @param   { number } options.size          - Game's grid columns and rows count.
   * @param   { Array }  options.players       - Game's players list.
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

export default Game;
