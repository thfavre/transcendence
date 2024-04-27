import Game from './Game.js';
import * as maps from './maps/maps.js';

export default class Tournement {
	constructor(scene, camera, playersNb=2) {
		this.scene = scene;
		this.camera = camera;
		this.playersNb = playersNb;
		this.currentGameNb = 0;
		this.BO = 2; // Best of 3
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
		this.currentGameNb++;
	}

	destroyGame() {
		this.game.delete();
		this.game = null;
	}

	onGameOver(winner) {
		console.log('Game over, winner is player ' + winner, this.currentGameNb);
		if (this.currentGameNb >= this.BO) {
			this.onTournamentOver();
		} else {
			this.scores[winner]++;
			this.destroyGame();
			this.initNewGame();
		}
	}
	onTournamentOver() {
		console.log('Tournament over');
	}

	winScreen() {
		this.game.winner.mesh.position.z = 10;
	}


	update(keysJustPressed) {
		if (this.game) {
			this.game.update(keysJustPressed);
			if (this.game.level.winner !== null && keysJustPressed.includes(13)) {
				this.onGameOver(this.game.level.winner.playerNb);
			}
		}

		if (this.currentGameNb > this.BO) {
			console.log('Tournament over');
		}


	}
}
