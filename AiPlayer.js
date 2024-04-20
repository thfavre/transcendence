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
		// this.targetPosition = this.goalHiboxBody;
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

		console.log("ball: ", ball);
		console.log("targetPosition: ", this.targetPosition);
	}

	getInter(ball)
	{
		var dX = ball.moveSpeed * Math.cos(ball.movingAngle);
		var dY = ball.moveSpeed * Math.sin(ball.movingAngle);
		var ballSlope = dX / dY;
		var ballIntercept = ball.mesh.position.y - ballSlope * ball.mesh.position.x;

		var wallAngle = this.quatToRad();
		var halfLen = this.goalLength / 2;
		var end1_x = ball.mesh.position.x + halfLen * Math.cos(wallAngle);
		var end1_y = ball.mesh.position.y + halfLen * Math.sin(wallAngle);
		var end2_x = ball.mesh.position.x - halfLen * Math.cos(wallAngle);
		var end2_y = ball.mesh.position.y - halfLen * Math.sin(wallAngle);

		var wallSlope = (end2_y - end1_y) / (end2_x - end1_x);
		var wallIntercept = end1_y - wallSlope * end1_x;

		const inter = new CANNON.Vec3();
		inter.x = (wallIntercept - ballIntercept) / (ballSlope - wallSlope);
		inter.y = ballSlope * inter.x + ballIntercept;
		inter.z = 0;

		return inter;
	}

	quatToRad()
	{
		let eulerAngles = new CANNON.Vec3();
		this.goalHiboxBody.quaternion.toEuler(eulerAngles);

		return eulerAngles.x;
	}

	movePaddle()
	{
		if (!this.targetPosition) {
			return;
		}

		const forwardDirection = new THREE.Vector3(0, 1, 0).applyQuaternion(this.paddle.mesh.quaternion);
		const offsetToTarget = new THREE.Vector3().subVectors(this.targetPosition, this.paddlePosition);
		const projectionDistance = offsetToTarget.dot(forwardDirection);

		if (projectionDistance > 0) {
			this.paddle.moveUp();
		} else if (projectionDistance < 0) {
			this.paddle.moveDown();
		}
	}

	update()
	{
		this.movePaddle();
		this.paddle.update();
		// if (/* some condition */) {
			// super.update(keysdown);  // Call the parent class's update()
		// }
	}
}
