
import * as maps from './maps/maps.js';
import * as THREE from 'three';


import * as constants from './constants.js';
import Level from './Level.js';
// import muzzle1 from './particles.js';



export default class Game {
	constructor(scene) {
		this.scene = scene;
		this.clock = new THREE.Clock();
		this.dt = 0;

		this.level = new Level(scene, maps.trans);
		this.createLights();
	}

	createLights() {
		const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
		this.scene.add(ambientLight);

		var directionalLight = new THREE.DirectionalLight( '#ffffff', 1.5);
		directionalLight.shadow.camera.near = 0.1;
		directionalLight.shadow.camera.far = 500;
		directionalLight.position.set(-10, -5, 12);
		this.scene.add(directionalLight);
		if (constants.DEBUG) {
			this.scene.add(new THREE.DirectionalLightHelper(directionalLight, 3));
		}
	}



	update(keysJustPressed) {
		this.dt = this.clock.getDelta();

		this.level.update(this.dt, keysJustPressed);
	}
}
