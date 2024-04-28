import * as THREE from 'three';
import Game from './Game.js';
import * as maps from './maps/maps.js';

export default class Tournement {
	constructor(scene, camera, playersNb=3) {
		this.scene = scene;
		this.clock = new THREE.Clock();
		this.camera = camera;
		this.playersNb = playersNb;
		this.gameToWin = 2; // number of games to win
		this.isOver = false;
		// this.level = new Level(scene, mapArray, playersNb);
		this.scores = []
		for (let i = 0; i < playersNb; i++) {
			this.scores.push(0);
		}
		this.initNewGame();
	}

	initNewGame() {
		var randomTournamentMap = maps.randomTournamentMap[Math.floor(Math.random()*maps.randomTournamentMap.length)];
		// randomTournamentMap = maps.speedySquare; // ! TODO remove
		this.game = new Game(this.scene, this.camera, randomTournamentMap, this.playersNb);
	}

	destroyGame() {
		this.game.delete();
		this.game = null;
	}

	onGameOver(winner) {
		this.scores[winner.playerNb]++;
		console.log('Game over, winner is player ');
		if (this.scores[winner.playerNb] >= this.gameToWin) {
			// this.playersMeshes = this.game.getPlayersMeshesCopy();
			this.isOver = true;
		} else {
			this.destroyGame();
			this.initNewGame();
		}
	}

	winScreen(dt) {
		this.game.particlesSystem.update(dt);
		for (let player of this.game.players) {
			player.update(dt, [], this.game.mapData, this.game.powerups, false);
		}
		var mapWidth = this.game.mapData.getWidth();
		for (var i = 0; i < this.scores.length; i++) {
			var player = this.game.players[i];
			if (player == this.game.winner) { // winner
				player.tpToPosition(i*1.5+mapWidth/2, -4);
				player.do360(dt);
			} else { // loosers
				player.tpToPosition(i*1.5+mapWidth/2, -2);
				player.mesh.position.z = 0;
				player.deceptionAnimation(dt);

			}
			// this.game.players[i].mesh.position.z = 2;
		}
		// this.game.updateCamera(dt, {maxDistFromCenter: 10, moveSpeed: .3});
		this.camera.position.z = 5;
		this.camera.position.x = this.game.winner.mesh.position.x;
		this.camera.position.y = this.game.winner.mesh.position.y-3;
		// this.camera.lookAt(this.game.winner.mesh.position);
		this.camera.rotation.x = .7;
		this.camera.rotation.y = 0;
		this.camera.rotation.z = 0;

	// 	console.log('Tournement over, winner is player ', winner, winner.mesh.position.z);
	// 	// winner.mesh.position.z = 2;
	// 	winner.mesh.position.x = -2;
	// 	winner.mesh.position.y = -2;
	// 	winner.position.x = -2;
	// 	winner.position.y = -2;
	}


	update(keysJustPressed) {
		var dt = this.clock.getDelta();
		if (this.game && !this.isOver) {
			this.game.update(keysJustPressed);
			if (this.game.winner !== null && keysJustPressed.includes(13)) {
				this.onGameOver(this.game.winner);
			}
		}

		if (this.isOver) {
			this.winScreen(dt);
		}


	}
}
