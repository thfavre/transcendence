import * as THREE from 'three';
import Cube from './Cube.js';
import * as maps from './maps/maps.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

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



	constructor({scene, x=0, y=0, depth=1, presetNb=0, preset=presets[presetNb]}) {
		super({scene: scene, x: x, y: y, depth: depth, color: preset.color});
		this.keys = {
			up: preset.upKey,
			left: preset.leftKey,
			down: preset.downKey,
			right: preset.rightKey
		};
		this.canMove = true;
		this.position = new THREE.Vector2(x, y);
		this.movingDirection = new THREE.Vector2(0, 0);
		this.hasWin = false;

		this.meshStartMovingVelocity = -12; // the mesh moving velocity will start at this amount
		this.meshCurrentMovingVelocity = this.meshStartMovingVelocity;
		this.meshMovingAcceleration = 2; // the mesh moving velocity will increase by this amount every frame
		// this.loadSkin('assets/models/Cube Bricks.glb');
	}

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

	updateMovement(dt, mapData, keysJustPressed) {
		this.setMovement(keysJustPressed);

		if (this.movingDirection.x != 0 || this.movingDirection.y != 0)
		{
			// move the player until it hits an obstacle
			while(!this.hasWin && !maps.OBSTACLES.includes(mapData.getCell(this.position.x + this.movingDirection.x, this.position.y + this.movingDirection.y))) {
					this.position.x += this.movingDirection.x;
					this.position.y += this.movingDirection.y;
					this.checkVictory(mapData);
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
		var movingDirection = new THREE.Vector2(this.position.x - this.mesh.position.x, this.position.y - this.mesh.position.y).normalize();
		if (this.position.x != this.mesh.position.x || this.position.y != this.mesh.position.y) {
			this.mesh.position.x += Math.sign(this.position.x - this.mesh.position.x) * this.meshCurrentMovingVelocity * dt;
			this.meshCurrentMovingVelocity += this.meshMovingAcceleration;
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


	update(dt, keysJustPressed, mapData) {
		this.updateMovement(dt, mapData, keysJustPressed);
		if (this.hasWin) {
			if (!this.c)
				this.c = 0;
			this.c += 1;
			this.mesh.material.color = new THREE.Color(this.c%255/255, this.c%122/210, this.c%33/255);
			this.mesh.position.z = (this.c*4)%200*dt;

		}

	}

}
