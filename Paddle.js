import * as THREE from 'three';
import * as CANNON from 'cannon-es';

import * as constants from './constants.js';

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
  }

export default class Paddle {

	static materials = [
		new THREE.MeshPhongMaterial({ color: "#ff0000" }),
		new THREE.MeshPhongMaterial({ color: "#00ff00", shininess: 200}),
		new THREE.MeshStandardMaterial({ color: "#0000ff", roughness:0})]; // or should it be defined somewhere else?


	constructor(scene, physicsWorld, startPos, endPos, axeAngle, fieldEdgeDiameter) {
		this.startPos = startPos;
		this.endPos = endPos;
		this.axeAngle = axeAngle;

		this.width = 3;
		this.height = 14; // length of the paddle...
		this.depth = 3;
		this.moveSpeed = 0.6;
		this.maxMovingDistance = (startPos.distanceTo(endPos) - this.height - fieldEdgeDiameter)/2;
		const geometry = new THREE.BoxGeometry(this.width, this.height, this.depth);
		const material = Paddle.materials[0];//new THREE.MeshPhongMaterial({ color: getRandomColor() });
		this.mesh = new THREE.Mesh(geometry, material);
		scene.add(this.mesh);

		// this.angle = this.angle % (2*Math.PI);
		var dX = endPos.x - startPos.x;
		var dY = endPos.y - startPos.y;
		this.centerPos = new THREE.Vector3(startPos.x + dX/2, startPos.y + dY/2, this.depth/2);

		// ---- Physics ----
		this.body = new CANNON.Body({
			mass: 0,
			shape: new CANNON.Box(new CANNON.Vec3(this.width/2, this.height/2, this.depth/2)),
			position: this.centerPos,
			// linearDamping: 0,
			material: new CANNON.Material({ friction: 0, restitution: 1 }),

		});
		this.body.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 0, 1), this.axeAngle);
		physicsWorld.addBody(this.body);

		//
		this.updateMeshPosAndRot();

		// ---- Helpers ----
		var axe = new THREE.AxesHelper(10);
		axe.renderOrder = 2;
		this.mesh.add(axe);
		// // grid
		// var grid = new THREE.GridHelper( FIELD_LENGTH, 20, 0x000000, 0x000000 );
		// // grid.translateZ(3);
		// grid.renderOrder = 1;
		// this.mesh.add(grid);
	}

	getNextMaterial() {
		var matIndex = Paddle.materials.indexOf(this.mesh.material);
		if (matIndex == -1)
			matIndex = 0;
		else
			matIndex = (matIndex + 1) % Paddle.materials.length;
		return Paddle.materials[matIndex];
	}

	getPreviousMaterial() {
		var matIndex = Paddle.materials.indexOf(this.mesh.material);
		if (matIndex == -1)
			matIndex = 0;
		else
		{
			matIndex = matIndex - 1;
			if (matIndex < 0)
				matIndex = Paddle.materials.length - 1;
		}
		return Paddle.materials[matIndex];

	}


	changeMaterial(direction) {
		if (direction > 0)
			this.mesh.material = this.getNextMaterial();
		else
			this.mesh.material = this.getPreviousMaterial();
	}

	move(speed) {
		// make the paddle move in the direction of the angle
		var angle = this.axeAngle + Math.PI/2;
		var depX = speed * Math.cos(angle);
		var depY = speed * Math.sin(angle);
		var newPos = new THREE.Vector3(this.body.position.x + depX, this.body.position.y + depY, this.body.position.z);
		var distanceToCenter = this.centerPos.distanceTo(newPos);
		if (distanceToCenter > this.maxMovingDistance)
			return;
		this.body.position.x += depX;
		this.body.position.y += depY;
	}

	moveUp() {
		this.move(this.moveSpeed);
	}

	moveDown() {
		this.move(-this.moveSpeed);
	}

	bounceBall(ball) {

	}

	updateMeshPosAndRot() {
		this.mesh.position.copy(this.body.position);
		this.mesh.quaternion.copy(this.body.quaternion);
	}

	update() {
		this.updateMeshPosAndRot();
	}
}
