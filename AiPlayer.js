import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import Player from './Player';

export default class AiPlayer extends Player {
	constructor(scene, physicsWorld, playerNb, startPos, endPos, fieldEdgeDiameter, ball) {
		super (scene, physicsWorld, playerNb, startPos, endPos, fieldEdgeDiameter);

		this.physicsWorld = physicsWorld;
		this.ball = ball;
		this.targetPosition = this.goalHiboxBody.centerPos;
		this.paddlePosition = this.paddle.body.position;
	}

	updateBall(ball)
	{
		// this.ball = ball;
		console.log("Ball: ", ball);
		// this.launchRay(ball.body.position, ball.body.velocity);
		this.targetPosition = ball.body.position.clone().vadd(ball.body.velocity.scale(1));
		console.log("predictedBallPosition: ", this.targetPosition);
	}

	// movePaddle() {
	// 	// Ensure targetPosition is initialized before using it
	// 	if (!this.targetPosition) {
	// 		return; // Exit movePaddle if targetPosition is not yet initialized
	// 	}

	// 	const paddlePosition = this.centerPos;

	// 	// Calculate the direction in which the paddle needs to move
	// 	const moveDirection = this.targetPosition.y > paddlePosition.y ? 1 : -1;

	// 	// Calculate the distance between the paddle and the target position
	// 	const distanceToTarget = Math.abs(this.targetPosition.y - paddlePosition.y);

	// 	// Define a threshold to determine when the paddle has reached the target position
	// 	const threshold = 0.1; // Adjust as needed

	// 	// Check if the paddle is within the threshold distance of the target position
	// 	if (distanceToTarget <= threshold) {
	// 		// If the paddle is within the threshold, stop moving
	// 		return;
	// 	}

	// 	// Move the paddle in the appropriate direction
	// 	if (moveDirection === 1) {
	// 		// Move up
	// 		this.paddle.moveUp();
	// 	} else {
	// 		// Move down
	// 		this.paddle.moveDown();
	// 	}
	// }


	movePaddle()
	{
		if (!this.targetPosition)
			return;

		// Compare the current paddle position with the target position

		if (this.paddlePosition.y < this.targetPosition.y) {
			// If the paddle is below the target position, move it up
			this.paddle.moveUp();
		} else if (this.paddlePosition.y > this.targetPosition.y) {
			// If the paddle is above the target position, move it down
			this.paddle.moveDown();
		}
	}

	// launchRay(ballPosition, ballVelocity) {
	// 	const ray = new CANNON.Ray(ballPosition, ballVelocity);

	// 	console.log("Ray origin:", ray.from);
	// 	console.log("Ray direction:", ray.direction);
	// 	console.log("goalHitboxBody position:", this.goalHitboxBody.position);

	// 	const intersection = ray.intersectBody(this.goalHitboxBody);
	// 	console.log("Intersection: ", intersection);

	// 	if (intersection) {
	// 		// Intersection occurred
	// 		console.log("Intersection point:", intersection.hitPointWorld);
	// 	} else {
	// 		// No intersection
	// 	}

	// 	return intersection;
	// }


	launchRay(ballPosition, ballVelocity) {
		console.log("ballPosition: ", ballPosition);
		console.log("ballVelocity: ", ballVelocity);

		const ray = new CANNON.Ray(ballPosition, ballVelocity);

		console.log("Ray: ", ray);

		const result = new CANNON.RaycastResult();
		ray.intersectBody(this.goalHiboxBody, result);

		console.log("result : ", result);


		// this.physicsWorld.raycastClosest(ray.from, ray.to, result);


		// while (result.hasHit) {
		// 	// Handle collision with wall
		// 	const wallNormal = result.hitNormalWorld;
		// 	const incomingVelocity = ray.direction;
		// 	const reflectedVelocity = incomingVelocity.reflect(wallNormal);

		// 	// Update ray direction with reflected velocity
		// 	ray.direction.copy(reflectedVelocity);

		// 	// Move ray origin slightly along the new direction to avoid self-collision
		// 	ray.from.vadd(ray.direction.scale(0.01), ray.from);

		// 	// Perform another raycast with updated ray
		// 	this.physicsWorld.raycastClosest(ray, null, result);
		// }

		// After iterating through all bounces, return the final intersection point
		return result.hitPointWorld || null;
	}





	// movePaddle()
	// {
	// 	if (Math.random() < 0.5) {  // 50% chance to move
	// 		if (Math.random() < 0.5) {
	// 			this.paddle.moveUp();
	// 		} else {
	// 			this.paddle.moveDown();
	// 		}
	// 	}
	// }

	// movePaddle() {
	// 	const result = this.predictBall(); // Get the latest prediction
	// 	if (result.hasHit) {
	// 		const targetY = result.hitPointWorld.y; // Target the predicted bounce point
	// 		if (this.paddle.mesh.position.y < targetY) {
	// 			this.paddle.moveUp();
	// 		} else if (this.paddle.mesh.position.y > targetY) {
	// 			this.paddle.moveDown();
	// 		}
	// 	}
	// }

}
