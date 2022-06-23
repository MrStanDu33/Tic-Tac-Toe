/**
 * @file Entry point file.
 * @author DANIELS-ROTH Stan <contact@daniels-roth-stan.fr>
 */

import Game from '$src/classes/Game';
import Player from '$src/classes/Player';
import '$src/style.css';

window.game = new Game({
  size: 3,
  parentElement: '#app',
  players: [
    new Player({
      name: 'x',
      marker: 'X',
    }),
    new Player({
      name: 'o',
      marker: 'O',
    }),
  ],
});

export default window.game;
