import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import Player from './Player';

export default class AiPlayer extends Player {
	constructor(scene, physicsWorld, playerNb, startPos, endPos, fieldEdgeDiameter) {
		super (scene, physicsWorld, playerNb, startPos, endPos, fieldEdgeDiameter);

		this.ball = scene.ball();
		this.sceneSize = bbox.getSize(new THREE.Vector3()); // size.x, size.y, size.z

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

	predictBall()
	{
		this.launchRay(this.ball.mesh.position, this.ball.velocity.clone().normalize);
	}

	// launch a ray and return the result
	launchRay(ballPosition, ballVelocity)
	{
		const	ray = new THREE.ray(ballPosition, ballVelocity);
		const	result = physicsWorld.rayTest(ray.origin, ray.direction);
		return result;
	}


}
