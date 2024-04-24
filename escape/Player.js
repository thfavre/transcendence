import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import Cube from './Cube.js';
import * as maps from './maps/maps.js';
import * as particles from './particles.js';
import * as constants from './constants.js';
import {LightsDownPowerup} from './powerups.js';


const presets = [
	{
		color: '#ff0000',
		upKey: 87,
		leftKey: 65,
		downKey: 83,
		rightKey: 68

	},
	{
		color: '#00ff00',
		upKey: 38,
		leftKey: 37,
		downKey: 40,
		rightKey: 39
	},
	{
		color: '#0000ff',
		upKey: 73,
		leftKey: 74,
		downKey: 75,
		rightKey: 76
	},
	{
		color: '#ff00ff',
		upKey: 84,
		leftKey: 70,
		downKey: 71,
		rightKey: 72
	}
]

export default class Player extends Cube{



	constructor({scene, x=0, y=0, depth=1, presetNb=0, preset=presets[presetNb], particlesSystem}) {
		super({scene: scene, x: x, y: y, depth: depth, color: preset.color});
		this.scene = scene;
		this.depth = depth;
		this.particlesSystem = particlesSystem;
		// position and movement
		this.keys = {
			up: preset.upKey,
			left: preset.leftKey,
			down: preset.downKey,
			right: preset.rightKey
		};
		this.position = new THREE.Vector2(x, y);
		this.movingDirection = new THREE.Vector2(0, 0);
		this.canMove = true;
		this.meshStartMovingVelocity = -8; // the mesh moving velocity will start at this amount
		this.meshCurrentMovingVelocity = this.meshStartMovingVelocity;
		this.meshMovingAcceleration = 1; // the mesh moving velocity will increase by this amount every frame
		// light
		this.spotLightIntensity = 155;
		this.spotLight = this.createSpotlight(this.spotLightIntensity);

		this.hasWin = false;
		// this.loadSkin('assets/models/Cube Bricks.glb');
		// this.smallCubesMeshes = this.createSmallerCubes();

		// powerups
		// slow
		this.slowDuration = 0;
		this.slowedMeshMovingVelocity = 12;
		// lights down
		this.spotLightOffDuration = 0;
		// dazed effect
		this.dazedDuration = 0;
		this.dazedKeys = {up: this.keys.down, down: this.keys.up, left: this.keys.right, right: this.keys.left};
		this.defaultKeys = {up: this.keys.up, down: this.keys.down, left: this.keys.left, right: this.keys.right};
	}

	createSpotlight(intensity) {
		const color = this.mesh.material.color;
		var light = new THREE.SpotLight(color, intensity, 12, Math.PI/4, 0.5, 2);
		light.position.set(0, 0, 8);
		// light.target.position.set(0, 0, 0);
		this.mesh.add(light);
		this.mesh.add(light.target);
		// helper
		if (constants.DEBUG)
			this.mesh.add(new THREE.SpotLightHelper(light));
		return light;
	}

	// createSmallerCubes() {
	// 	var smallCubesMeshes = [];
	// 	var cubeMeshWidth = this.mesh.geometry.parameters.width;
	// 	var cubeMeshClone = this.mesh.clone();
	// 	for (let i = 0; i < 2; i++) {
	// 		for (let j = 0; j < 2; j++) {
	// 			var smallCubeMesh = cubeMeshClone.clone();
	// 			smallCubeMesh.scale.set(.5, .5, 1);
	// 			smallCubeMesh.position.set(-cubeMeshWidth/4 + (cubeMeshWidth/2) * i, -cubeMeshWidth/4 + (cubeMeshWidth/2) * j, 0);
	// 			this.mesh.add(smallCubeMesh);
	// 			smallCubesMeshes.push(smallCubeMesh);
	// 		}
	// 	}
	// 	return smallCubesMeshes;

	// }

	// loadSkin(skinPath) {
	// 	const loader = new GLTFLoader();
	// 	loader.load(skinPath, (gltf) => {
	// 		const model = gltf.scene;
	// 		model.scale.set(.55, .55, .55);
	// 		this.mesh.add(model);
	// 	}
	// 	);
	// TODO see https://stackoverflow.com/questions/52271397/centering-and-resizing-gltf-models-automatically-in-three-js
	// }
	moveRight() {
		this.movingDirection.x = 1;
		this.canMove = false;
	}
	moveLeft() {
		this.movingDirection.x = -1;
		this.canMove = false;
	}
	moveUp() {
		this.movingDirection.y = 1;
		this.canMove = false;
	}
	moveDown() {
		this.movingDirection.y = -1;
		this.canMove = false;
	}

	setMovement(keysJustPressed) {
		if (this.canMove) {
			if (keysJustPressed.includes(this.keys.up)) {
				this.moveUp();
			}
			else if (keysJustPressed.includes(this.keys.down)) {
				this.moveDown();
			}
			else if (keysJustPressed.includes(this.keys.left)) {
				this.moveLeft();
			}
			else if (keysJustPressed.includes(this.keys.right)) {
				this.moveRight();
			}
		}
	}

	activatePowerup(powerups) {
		for (let powerup of powerups) {
			if (this.position.x == powerup.position.x && this.position.y == powerup.position.y) {
				powerup.activateByPlayer(this);
			}
		}
	}

	updateMovement(dt, mapData, keysJustPressed, powerups) {
		this.setMovement(keysJustPressed);

		if (this.movingDirection.x != 0 || this.movingDirection.y != 0)
		{
			// move the player until it hits an obstacle
			while(!this.hasWin && !maps.OBSTACLES.includes(mapData.getCell(this.position.x + this.movingDirection.x, this.position.y + this.movingDirection.y))) {
					this.position.x += this.movingDirection.x;
					this.position.y += this.movingDirection.y;
					this.checkVictory(mapData);
					this.activatePowerup(powerups)
				}
			// else {
			// }
			this.movingDirection.x = 0;
			this.movingDirection.y = 0;
		}
		this.canMove = this.moveMeshToPosition(dt);
		if (this.canMove)
			this.meshCurrentMovingVelocity = this.meshStartMovingVelocity;
	}

	moveMeshToPosition(dt) {
		// if (this.mesh.position.z > 0)
		// 	this.mesh.position.z -= 2*dt;
		// if (!this.canMove && this.mesh.position.z > 0)
		// 	this.mesh.position.z -= 4*dt;
		var movingDirection = new THREE.Vector2(this.position.x - this.mesh.position.x, this.position.y - this.mesh.position.y).normalize();
		if (this.position.x != this.mesh.position.x || this.position.y != this.mesh.position.y) {

			this.mesh.position.x += Math.sign(this.position.x - this.mesh.position.x) * this.meshCurrentMovingVelocity * dt;
			this.mesh.position.y += Math.sign(this.position.y - this.mesh.position.y) * this.meshCurrentMovingVelocity * dt;
			this.meshCurrentMovingVelocity += this.meshMovingAcceleration;

			// check if the mesh has reached (or is behind) the position
			var newMovingDirection = new THREE.Vector2(this.position.x - this.mesh.position.x, this.position.y - this.mesh.position.y).normalize();
			if (Math.sign(movingDirection.x) != Math.sign(newMovingDirection.x) || Math.sign(movingDirection.y) != Math.sign(newMovingDirection.y))
				this.mesh.position.copy(new THREE.Vector3(this.position.x, this.position.y, 0));
			return false;
		}
		return true;
	}

	checkVictory(mapData) {
		if (mapData.isOutOfBounds(this.position.x, this.position.y)) {
			this.hasWin = true;
			console.log('You have won!');
		}

	}

	updatePowerups(dt) {
		// slow effect
		if (this.slowDuration > 0)
		{
			// particles
			if (this.particlesSystem.triggerPulse(dt, this.canMove ? 4 : 22 ))
				this.particlesSystem.addParticle(this.mesh.position.x, this.mesh.position.y, this.mesh.position.z+1.5, particles.SnowParticle);
			if (this.meshCurrentMovingVelocity >= 0)
				this.meshCurrentMovingVelocity = this.slowedMeshMovingVelocity;
			this.slowDuration -= dt;
		}
		// lights down effect
		if (this.spotLightOffDuration > 0)
		{
			this.spotLight.intensity = 2;
			this.spotLightOffDuration -= dt;
			if (this.spotLightOffDuration <= 0) {
				this.spotLight.intensity = this.spotLightIntensity;
			// activate the big lights
			console.log('LightsDown powerup deactivated');
			LightsDownPowerup.activateSceneLights(this.scene);
			this.spotLightOffDuration = -1;
			}
		}
		// daze effect
		if (this.dazedDuration > 0)
		{
			if (this.particlesSystem.triggerPulse(dt, 4))
				this.particlesSystem.addParticle(this.mesh.position.x, this.mesh.position.y, this.mesh.position.z+1, particles.DazedParticle);
			this.keys = this.dazedKeys;
			this.dazedDuration -= dt;
			if (this.dazedDuration <= 0) {
				this.keys = this.defaultKeys;
			}
		}
	}


	update(dt, keysJustPressed, mapData, powerups) {
		this.updateMovement(dt, mapData, keysJustPressed, powerups);
		this.updatePowerups(dt);
		if (this.hasWin) {
			if (!this.winTimer)
				this.winTimer = 0;
			this.winTimer += dt;
			this.mesh.position.z = Math.abs(Math.sin(this.winTimer*3))*1.5;
			//(this.c*4)%200*dt;
		}

	}

}
