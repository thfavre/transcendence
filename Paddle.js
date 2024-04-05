import * as THREE from 'three';
import * as CANNON from 'cannon-es';

import * as constants from './constants.js';



export default class Paddle {
	constructor(scene, physicsWorld, startPos, endPos, axeAngle, fieldEdgeDiameter) {
		this.startPos = startPos;
		this.endPos = endPos;
		this.axeAngle = axeAngle;

		this.width = 3;
		this.height = 20;
		this.depth = 3;
		this.moveSpeed = 0.4;
		this.maxMovingDistance = (startPos.distanceTo(endPos) - this.height - fieldEdgeDiameter)/2;

		const geometry = new THREE.BoxGeometry(this.width, this.height, this.depth);
		const material = new THREE.MeshPhongMaterial({ color: "#686de0" });
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
		// make the body static

		physicsWorld.addBody(this.body);

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

	update() {
		this.mesh.position.copy(this.body.position);
		this.mesh.quaternion.copy(this.body.quaternion);
	}
}
