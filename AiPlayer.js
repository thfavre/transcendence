import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { Vec3 } from 'cannon-es';
import Player from './Player';
import { OBB } from 'three/addons/math/OBB.js';
// import { PointLightShadow } from 'three';

export default class AiPlayer extends Player {
	constructor(scene, physicsWorld, playerNb, startPos, endPos, fieldEdgeDiameter, ball) {
		super (scene, physicsWorld, playerNb, startPos, endPos, fieldEdgeDiameter);

		this.physicsWorld = physicsWorld;
		this.ball = ball;
		this.targetPosition = this.goalHitboxBody.position;
		this.paddlePosition = this.paddle.body.position;

		// Wall
		this.goalLength = startPos.distanceTo(endPos);
		var dX = endPos.x - startPos.x;
		var dY = endPos.y - startPos.y;
		this.centerPos = new THREE.Vector3(startPos.x + dX/2, startPos.y + dY/2, 0);
		this.centerPos.x += fieldEdgeDiameter/2*Math.cos(this.axeAngle);
		this.centerPos.y += fieldEdgeDiameter/2*Math.sin(this.axeAngle);
	}

	updateBall(ball)
	{
		this.targetPosition = this.getInter(ball);

		// if (this.isBehindWall(this.targetPosition))
		// 	this.adjustTargetPosition();

		console.log("ball: ", ball);
		console.log("targetPosition: ", this.targetPosition);
	}

	isBehindWall(position) {
		// Check if the position is behind the wall based on the wall's center position and length
		const distanceToCenter = position.distanceTo(this.centerPos);
		return distanceToCenter > this.goalLength / 2;
	}

	adjustTargetPosition() {
		// Adjust the targetPosition to be on the wall
		const directionToCenter = new THREE.Vector3().subVectors(this.centerPos, this.targetPosition).normalize();
		const adjustedPosition = new THREE.Vector3().copy(this.centerPos).add(directionToCenter.multiplyScalar(this.goalLength / 2));
		this.targetPosition.copy(adjustedPosition);
	}

	getInter(ball)
	{
		const	dX = ball.moveSpeed * Math.cos(ball.movingAngle);
		const	dY = ball.moveSpeed * Math.sin(ball.movingAngle);
		const	ballSlope = dX / dY;
		const	ballIntercept = ball.mesh.position.y - ballSlope * ball.mesh.position.x;

		const	wallAngle = this.quatToRad();
		const	halfLen = this.goalLength / 2;
		const	end1_x = ball.mesh.position.x + halfLen * Math.cos(wallAngle);
		const	end1_y = ball.mesh.position.y + halfLen * Math.sin(wallAngle);
		const	end2_x = ball.mesh.position.x - halfLen * Math.cos(wallAngle);
		const	end2_y = ball.mesh.position.y - halfLen * Math.sin(wallAngle);

		const	wallSlope = (end2_y - end1_y) / (end2_x - end1_x);
		const	wallIntercept = end1_y - wallSlope * end1_x;

		const	interX = (wallIntercept - ballIntercept) / (ballSlope - wallSlope);
		const	interY = ballSlope * interX + ballIntercept;
		const inter = new CANNON.Vec3(interX, interY, 0);

		this.drawSphere(inter);
		return inter;
	}

	quatToRad()
	{
		const eulerAngles = new CANNON.Vec3();
		this.goalHitboxBody.quaternion.toEuler(eulerAngles);

		return eulerAngles.z;
	}

	movePaddle()
	{
		if (!this.targetPosition) {
			return;
		}

		const forwardDirection = new THREE.Vector3(0, 1, 0).applyQuaternion(this.paddle.mesh.quaternion);
		const offsetToTarget = new THREE.Vector3().subVectors(this.targetPosition, this.paddlePosition);
		const projectionDistance = offsetToTarget.dot(forwardDirection);

		const threshold = 0;

		if (projectionDistance > threshold) {
			this.paddle.moveUp();
		} else if (projectionDistance < -threshold) {
			this.paddle.moveDown();
		}
	}

	drawSphere(newPosition) {
		// Remove existing sphere (if any)
		if (this.currentSphereMesh) {
			this.paddle.mesh.remove(this.currentSphereMesh);
			this.currentSphereMesh = null; // Reset the reference
		}

		// Create a new sphere
		const geometry = new THREE.SphereGeometry(4, 5, 5);
		const material = new THREE.MeshBasicMaterial({ color: 0xff0022 });
		this.currentSphereMesh = new THREE.Mesh(geometry, material);
		this.currentSphereMesh.position.copy(newPosition);

		// Add to the paddle
		this.paddle.mesh.add(this.currentSphereMesh);
	}

	update()
	{
		this.movePaddle();
		this.paddle.update();
		// this.drawSphere();
		// if (/* some condition */) {
			// super.update(keysdown);  // Call the parent class's update()
		// }
	}
}
