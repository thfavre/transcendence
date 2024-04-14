import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import Player from './Player';

export default class AiPlayer extends Player {
	constructor(scene, physicsWorld, playerNb, startPos, endPos, fieldEdgeDiameter, ball) {
		super (scene, physicsWorld, playerNb, startPos, endPos, fieldEdgeDiameter);

		this.physicsWorld = physicsWorld;
		this.ball = ball;
		console.log("this:", this);
		console.log("this.ball:", this.ball);
		// this.sceneSize = bbox.getSize(new THREE.Vector3()); // size.x, size.y, size.z
		// this.predictBall();
	}

	// predictWallBounce(ball) {
	// 	const bbox = new THREE.Box3().setFromObject(scene); // Assuming the scene bounds match the playing field
	// 	const wallHit = new THREE.Vector3();
	// 	const reflectedVelocity = new THREE.Vector3();

	// 	// Predict top/bottom wall bounce
	// 	if (ball.velocity.y > 0 && ball.position.y + ball.velocity.y > bbox.max.y) {
	// 		wallHit.y = bbox.max.y;
	// 		reflectedVelocity.y = -ball.velocity.y;
	// 	} else if (ball.velocity.y < 0 && ball.position.y + ball.velocity.y < bbox.min.y) {
	// 		wallHit.y = bbox.min.y;
	// 		reflectedVelocity.y = -ball.velocity.y;
	// 	}

	// 	// ... (Similarly handle X-axis bounces with bbox.min.x and bbox.max.x)

	// 	return { wallHit, reflectedVelocity };
	// }

	// predictPaddleIntercept(ball, aiPaddle) {
	// 	const timeToReachWall = (bbox.max.x - ball.position.x) / ball.velocity.x;
	// 	const predictedY = ball.position.y + ball.velocity.y * timeToReachWall;

	// 	// Naive strategy: If predictedY is within the paddle's range of motion,
	// 	// move the AI paddle towards that position (add constraints for paddle's max speed)
	// }

	updateBall(ball)
	{
		this.ball = ball;
		console.log("this.ball:", this.ball);
		console.log("Ray: ", this.launchRay(this.ball.body.position, this.ball.body.velocity));
	}

	predictBall()
	{
		this.launchRay(this.ball.body.position, this.ball.body.velocity.clone().normalize());
		console.log("Ray: ", this.launchRay);
	}

	// launch a ray and return the result
	launchRay(ballPosition, ballVelocity) {
		const ray = new CANNON.Ray(ballPosition, ballVelocity);

		// Assuming 'physicsWorld' is in scope where you use the Ball class
		console.log("Physics world: ", this.physicsWorld);
		console.log("goalHiboxBody:", this.goalHiboxBody);
		const result = this.physicsWorld.raycastClosest(ray.from, ray.to, {
			collisionFilterMask: this.goalHiboxBody.collisionFilterMask,  // Check only for collisions with the wall
			skipBackfaces: true // Optional, to only detect front-face collisions
		});
		if (hasHit) {
			const intersectionPoint = result.hitPointWorld;
			console.log(hsHist )
		}
		// Process the result (example)
		// if (result.hasHit) {
		// 	console.log("Hit point:", result.hitPointWorld);
		// }
		console.log("result of ray: ", result);

		return result; // Optional, if you need to use the result elsewhere
	}

	movePaddle()
	{
		if (Math.random() < 0.5) {  // 50% chance to move
			if (Math.random() < 0.5) {
				this.paddle.moveUp();
			} else {
				this.paddle.moveDown();
			}
		}
	}

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
