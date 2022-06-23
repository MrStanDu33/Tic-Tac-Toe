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
   * @returns { Player }                Player's instance.
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

export default Player;
