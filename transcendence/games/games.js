import pongGame from './pong/script.js';
import exitGame from './exit/main.js';


window.pongGame = pongGame;
window.exitGame = exitGame;


pongGame(['Tjom','Bob'], 1, 'tournament', '#webgl1', false, (game) => {
	console.log('Game is over', game);
	game.time;
});

// ! TODO add activate / desactivate powerups
// exitGame(4, 2, "tournament", '#webgl2', false, (tournament) => {
// 	if (tournament.isOver) {
// 		console.log('Tournament is over', tournament.scores);
// 	}
// });
