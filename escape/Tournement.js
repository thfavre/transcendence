import Game from './Game.js';
import * as maps from './maps/maps.js';

export default class Tournement {
	constructor(scene, camera, playersNb=2) {
		this.scene = scene;
		this.camera = camera;
		this.playersNb = playersNb;
		// this.level = new Level(scene, mapArray, playersNb);
		this.scores = []
		for (let i = 0; i < playersNb; i++) {
			this.scores.push(0);
		}
		this.initNewGame();
	}

	initNewGame() {
		var randomTournamentMap = maps.randomTournamentMap[Math.floor(Math.random()*maps.randomTournamentMap.length)];
		randomTournamentMap = maps.speedySquare; // ! TODO remove
		this.game = new Game(this.scene, this.camera, randomTournamentMap, this.playersNb);
	}

	update(keysJustPressed) {
		if (this.game)
			this.game.update(keysJustPressed);
	}
}
