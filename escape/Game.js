
import * as maps from './maps/maps.js';
import * as THREE from 'three';


import * as constants from './constants.js';
import Level from './Level.js';
// import muzzle1 from './particles.js';



export default class Game {
	constructor(scene, mapArray, playersNb=4) {
	// 	this.scene = scene;
		this.clock = new THREE.Clock();
		this.level = new Level(scene, mapArray, playersNb);

	// 	this.initNewGame();
	}

	// initNewGame() {
	// 	this.game = new Game(this.scene);
	// }

	update(keysJustPressed) {
		var dt = this.clock.getDelta();
		if (this.level)
			this.level.update(dt, keysJustPressed);
	}
}
