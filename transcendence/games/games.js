import pongGame from './pong/script.js';
import exitGame from './exit/main.js';


window.pongGame = pongGame;
window.exitGame = exitGame;


pongGame(['Thom','Bob', 'Jo'], 2, 'tournament', 'en', '#webgl1', false, (game) => {
	console.log('Game is over', game);
	game.time;
});

// exitGame(4, 2, false, "solo", 'fr', '#webgl1', false, (tournament) => {
// 		console.log('Tournament is over', tournament.scores);
// });
