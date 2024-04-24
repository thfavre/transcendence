import Game from './Game.js';
import * as maps from './maps/maps.js';

export default class Tournement {
	constructor(scene, playersNb=4) {
		this.scene = scene;
		this.playersNb = playersNb;
		// this.level = new Level(scene, mapArray, playersNb);

		this.initNewGame();
	}

	initNewGame() {
		var randomTournamentMapArray = maps.tournamentMapsArray[Math.floor(Math.random()*maps.tournamentMapsArray.length)];
		randomTournamentMapArray = maps.duck; // ! TODO remove
		this.game = new Game(this.scene, randomTournamentMapArray, this.playersNb);
	}

	update(keysJustPressed) {
		if (this.game)
			this.game.update(keysJustPressed);
	}
}
