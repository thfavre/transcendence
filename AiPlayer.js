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
		this.startPos = startPos;
		this.endPos = endPos;

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
		// this.targetPosition = this.getInter(ball);

		// Example usage
		// const x0 = 0; // Initial x position
		// const y0 = 10; // Initial y position
		// const vx = 5; // Initial x velocity
		// const vy = -2; // Initial y velocity (negative because it's upwards)
		// const goalY = 0; // Y-coordinate of the goal line

		this.targetPosition = this.predictIntersection(ball.body.position.x, ball.body.position.y, ball.body.velocity.x, ball.body.velocity.y, (this.startPos.y + this.endPos.y) / 2);
		if (this.targetPosition) {
			console.log("Intersection point:", this.targetPosition);
		} else {
			console.log("The ball does not intersect the goal line.");
		}

		// if (this.isBehindWall(this.targetPosition))
		// 	this.adjustTargetPosition();

		console.log("ball: ", ball);
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

		const goalLineStart = new THREE.Vector2(ball.mesh.position.x + halfLen * Math.cos(wallAngle), ball.mesh.position.y + halfLen * Math.sin(wallAngle));
		const goalLineEnd = new THREE.Vector2(ball.mesh.position.x - halfLen * Math.cos(wallAngle), ball.mesh.position.y - halfLen * Math.sin(wallAngle));

		const	end1_x = ball.mesh.position.x + halfLen * Math.cos(wallAngle);
		const	end1_y = ball.mesh.position.y + halfLen * Math.sin(wallAngle);
		const	end2_x = ball.mesh.position.x - halfLen * Math.cos(wallAngle);
		const	end2_y = ball.mesh.position.y - halfLen * Math.sin(wallAngle);

		const	wallSlope = (end2_y - end1_y) / (end2_x - end1_x);
		const	wallIntercept = end1_y - wallSlope * end1_x;

		const	interX = (wallIntercept - ballIntercept) / (ballSlope - wallSlope);
		const	interY = ballSlope * interX + ballIntercept;
		const	inter = new THREE.Vector3(interX, interY, 0);

		const	clampedIntersectionPoint = this.clampToLineSegment(inter, this.targetPosition, goalLineStart, goalLineEnd);
		console.log("clampedInter: ", clampedIntersectionPoint);
		this.drawSphere(clampedIntersectionPoint);

		return clampedIntersectionPoint;
	}

	clampToLineSegment(point, start, end) {
		// Vector from start point to end point
		const line = end.clone().sub(start);

		// Vector from start point to the given point
		const pointToStart = point.clone().sub(start);

		// Calculate the scalar projection of pointToStart onto the line
		const t = pointToStart.dot(line) / line.lengthSq();

		// Clamp t to the range [0, 1] to ensure it lies on the line segment
		const clampedT = Math.max(0, Math.min(t, 1));

		// Calculate the closest point on the line segment to the given point
		const closestPoint = new THREE.Vector2(start.x + line.x * clampedT, start.y + line.y * clampedT);

		return closestPoint;
	}



	quatToRad()
	{
		const eulerAngles = new CANNON.Vec3();
		this.goalHitboxBody.quaternion.toEuler(eulerAngles);

		return eulerAngles.z;
	}

	movePaddle() {
		if (!this.targetPosition) {
			return; // Do nothing if there's no target position
		}

		const initialDistance = this.paddlePosition.distanceTo(this.targetPosition);

		// Move the paddle up
		this.paddle.moveUp();
		const distanceUp = this.paddlePosition.distanceTo(this.targetPosition);

		// Move the paddle down
		this.paddle.moveDown();
		const distanceDown = this.paddlePosition.distanceTo(this.targetPosition);

		// Choose the direction that brings the paddle closer to the target
		if (distanceUp < distanceDown) {
			// If moving up brings the paddle closer, move it up
			this.paddle.moveUp();
		} else {
			// If moving down brings the paddle closer or the distances are equal, move it down
			this.paddle.moveDown();
		}
	}

	// movePaddle()
	// {
	// 	if (!this.targetPosition) {
	// 		return;
	// 	}

	// 	const forwardDirection = new THREE.Vector3(0, 1, 0).applyQuaternion(this.paddle.mesh.quaternion);
	// 	const offsetToTarget = new THREE.Vector3().subVectors(this.targetPosition, this.paddlePosition);
	// 	const projectionDistance = offsetToTarget.dot(forwardDirection);

	// 	const threshold = 0;

	// 	if (projectionDistance > threshold) {
	// 		this.paddle.moveUp();
	// 	} else if (projectionDistance < -threshold) {
	// 		this.paddle.moveDown();
	// 	}
	// }

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

	// Function to predict intersection of ball with goal line
	predictIntersection(x0, y0, vx, vy, goalY) {
		// Constants
		const g = 9.81; // Acceleration due to gravity (m/s^2)

		// Quadratic equation coefficients
		const a = 0.5 * g;
		const b = vy;
		const c = y0 - goalY;

		// Solve quadratic equation
		const discriminant = b * b - 4 * a * c;
		if (discriminant < 0) {
			// No real roots, ball doesn't intersect goal line
			return null;
		}

		// Calculate valid time(s)
		const t1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		const t2 = (-b - Math.sqrt(discriminant)) / (2 * a);

		// Check validity of solutions
		if (t1 < 0 && t2 < 0) {
			// Both solutions are negative, ball doesn't intersect goal line in the future
			return null;
		}

		// Get the valid intersection time
		this.tIntersection = (t1 >= 0 && t1 < t2) ? t1 : t2;

		// Calculate intersection point
		const xIntersection = x0 + vx * this.tIntersection;
		const yIntersection = goalY;
		const intersectionPoint = new THREE.Vector3(xIntersection, yIntersection, 0);

		return intersectionPoint;
	}

}
