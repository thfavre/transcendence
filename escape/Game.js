
import * as maps from './maps/maps.js';
import * as THREE from 'three';

import ParticlesSystem from './particles.js';
import * as constants from './constants.js';
import Level from './Level.js';
// import muzzle1 from './particles.js';



export default class Game {
	constructor(scene, camera, map, playersNb=4) {
	// 	this.scene = scene;
		this.clock = new THREE.Clock();
		this.particlesSystem = new ParticlesSystem(scene);
		this.level = new Level(scene, camera, map, playersNb, this.particlesSystem);

	// 	this.initNewGame();
	}

	// initNewGame() {
	// 	this.game = new Game(this.scene);
	// }

	update(keysJustPressed) {
		var dt = this.clock.getDelta();
		this.particlesSystem.update(dt);
		this.level.update(dt, keysJustPressed);
	}
}
