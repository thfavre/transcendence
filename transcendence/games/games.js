import pongGame from './pong/script.js';
import exitGame from './exit/main.js';


window.pongGame = pongGame;
window.exitGame = exitGame;


// pongGame(['Thom','Bob', 'Greg'], 0, 'tournament', '#webgl1', false, (game) => {
// 	console.log('Game is over', game);
// 	game.time;
// });

// exitGame(4, 2, false, "tournament", '#webgl2', false, (tournament) => {
// 	if (tournament.isOver) {
// 		console.log('Tournament is over', tournament.scores);
// 	}
// });
