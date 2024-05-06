import pongGame from './pong/script.js';
import exitGame from './exit/main.js';


window.pongGame = pongGame;
window.exitGame = exitGame;


pongGame(['Bob', 'BigName2001'], 2, 'versus', 'en', '#webgl1', false, (game) => {
	console.log('Game is over', game);
	game.time;
});

// exitGame(4, 2, true, "tournament", 'fr', '#webgl1', false, (tournament) => {
// 		console.log('Game is over', tournament.scores);
// });
