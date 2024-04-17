// import * as THREE from 'three';
// import * as CANNON from 'cannon-es';
import Player from './Player';

export default class AiPlayer extends Player {
	constructor(scene, physicsWorld, playerNb, startPos, endPos, fieldEdgeDiameter, ball) {
		super (scene, physicsWorld, playerNb, startPos, endPos, fieldEdgeDiameter);

		this.physicsWorld = physicsWorld;
		this.ball = ball;
		// this.targetPosition = this.goalHiboxBody;
		this.paddlePosition = this.paddle.body.position;

	}

	// updateBall(ball) {
	// 	// Clone ball's position and add its velocity to get target position
	// 	this.targetPosition = ball.body.position.clone().vadd(ball.body.velocity.scale(1));

	// 	// Check if targetPosition is inside the goal's bounding box
	// 	if (this.isInsideGoal(this.targetPosition)) {
	// 		// Handle case when targetPosition is inside the goal
	// 		console.log("Target position is inside the goal");
	// 	} else {
	// 		// Handle case when targetPosition is outside the goal
	// 		console.log("Target position is outside the goal");
	// 	}
	// }

	// isInsideGoal(position) {
	// 	// Get the position of the goal's bounding box
	// 	const goalPosition = this.goalHiboxBody.position;
	// 	const goalHalfExtents = this.goalHiboxBody.shape.halfExtents;

	// 	// Check if the target position is within the bounding box of the goal
	// 	return (
	// 		position.x >= goalPosition.x - goalHalfExtents.x &&
	// 		position.x <= goalPosition.x + goalHalfExtents.x &&
	// 		position.y >= goalPosition.y - goalHalfExtents.y &&
	// 		position.y <= goalPosition.y + goalHalfExtents.y
	// 	);
	// }


	updateBall(ball)
	{
		// this.ball = ball;
		console.log("ball: ", ball);
		// this.launchRay(ball.body.position, ball.body.velocity);
		this.targetPosition = ball.body.position.clone().vadd(ball.body.velocity.scale(1));
		// Create a sphere geometry for the target position marker
		// const targetGeometry = new THREE.SphereGeometry(0.5); // Adjust the radius as needed
		// const targetMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Choose a color
		// const targetMarker = new THREE.Mesh(targetGeometry, targetMaterial);

		// // Set the position of the target marker to the target position
		// targetMarker.position.copy(this.targetPosition);

		// // Add the target marker to your scene
		// this.scene.add(targetMarker);

		console.log("targetPosition: ", this.targetPosition);
		console.log("paddle: ", this.paddle);
	}



	movePaddle()
	{
		if (!this.targetPosition) {
			return;
		}

		const movementTolerance = 0.05;

		if (this.paddlePosition.distanceTo(this.targetPosition) < movementTolerance) {
			// Paddle is close enough - don't move.
		} else if (this.paddlePosition.y < this.targetPosition.y) {
			this.paddle.moveUp();
		} else if (this.paddlePosition.y > this.targetPosition.y) {
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

	// launchRay(ballPosition, ballVelocity) {
	// 	console.log("ballPosition: ", ballPosition);
	// 	console.log("ballVelocity: ", ballVelocity);

	// const ray = new CANNON.Ray(ballPosition, ballVelocity);

	// 	console.log("Ray: ", ray);

	// 	const result = new CANNON.RaycastResult();
	// 	ray.intersectBody(this.goalHiboxBody, result);

	// 	console.log("result : ", result);


	// 	// this.physicsWorld.raycastClosest(ray.from, ray.to, result);


	// 	// while (result.hasHit) {
	// 	// 	// Handle collision with wall
	// 	// 	const wallNormal = result.hitNormalWorld;
	// 	// 	const incomingVelocity = ray.direction;
	// 	// 	const reflectedVelocity = incomingVelocity.reflect(wallNormal);

	// 	// 	// Update ray direction with reflected velocity
	// 	// 	ray.direction.copy(reflectedVelocity);

	// 	// 	// Move ray origin slightly along the new direction to avoid self-collision
	// 	// 	ray.from.vadd(ray.direction.scale(0.01), ray.from);

	// 	// 	// Perform another raycast with updated ray
	// 	// 	this.physicsWorld.raycastClosest(ray, null, result);
	// 	// }

	// 	// After iterating through all bounces, return the final intersection point
	// 	return result.hitPointWorld || null;
	// }
}
