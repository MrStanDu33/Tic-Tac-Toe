/**
 * @file Player class file.
 * @author DANIELS-ROTH Stan <contact@daniels-roth-stan.fr>
 */

export default class Player {
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
