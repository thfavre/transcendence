import Game from './Game.js';
import * as maps from './maps/maps.js';

export default class Tournement {
	constructor(scene, playersNb=4) {
		this.scene = scene;
		this.playersNb = playersNb;
		// this.level = new Level(scene, mapArray, playersNb);
		this.scores = []
		for (let i = 0; i < playersNb; i++) {
			this.scores.push(0);
		}
		console.log('Tournement constructor', this.scores);

		this.initNewGame();
	}

	initNewGame() {
		var randomTournamentMap = maps.randomTournamentMap[Math.floor(Math.random()*maps.randomTournamentMap.length)];
		// randomTournamentMap = maps.rainbow; // ! TODO remove
		this.game = new Game(this.scene, randomTournamentMap, this.playersNb);
	}

	update(keysJustPressed) {
		if (this.game)
			this.game.update(keysJustPressed);
	}
}
