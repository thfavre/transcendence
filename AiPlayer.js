import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { Vec3 } from 'cannon-es';
import Player from './Player';
import { OBB } from 'three/addons/math/OBB.js';
import * as constants from './constants.js';
// import { PointLightShadow } from 'three';

export default class AiPlayer extends Player {
	constructor(scene, physicsWorld, playerNb, startPos, endPos, fieldEdgeDiameter, ball, fieldVertices) {
		super (scene, physicsWorld, playerNb, startPos, endPos, fieldEdgeDiameter);

		this.totalPlayers = constants.SEGMENTS;
		this.physicsWorld = physicsWorld;
		this.ball = ball;
		this.targetPosition = this.goalHitboxBody.position;
		this.paddlePosition = this.paddle.body.position;
		this.startPos = startPos;
		this.endPos = endPos;
		this.scene = scene

		console.log("physicsWorld: ", physicsWorld);

		// Wall
		this.goalLength = startPos.distanceTo(endPos);
		let dX = endPos.x - startPos.x;
		let dY = endPos.y - startPos.y;
		this.centerPos = new THREE.Vector3(startPos.x + dX/2, startPos.y + dY/2, 0);
		this.centerPos.x += fieldEdgeDiameter/2*Math.cos(this.axeAngle);
		this.centerPos.y += fieldEdgeDiameter/2*Math.sin(this.axeAngle);
		this.drawSphere(this.centerPos);
		this.drawSphere(this.startPos);
		this.drawSphere(this.endPos);

		console.log("nb of player: ", this.totalPlayers);
		console.log("startPos: ", this.startPos);
		console.log("endPos: ", this.endPos);

		this.goal = this.createWall(this.startPos, this.endPos);
		this.wallArray = [];
		// create arrayWall of all walls except goal
		for (let nbWalls = 1; nbWalls < this.totalPlayers; nbWalls++)
		{
			if (fieldVertices[nbWalls] == this.startPos)
				continue;
			else
			{
				this.wallArray.push(this.createWall(fieldVertices[nbWalls], fieldVertices[nbWalls+1]));

			}
		}
		this.goalPos = this.wallArray.length;
		this.wallArray.push(this.goal);
		console.log("goal box: ", this.wallArray[this.goalPos].box);
		console.log("wallArray: ", this.wallArray);
	}


	// ---------- Preparing the walls and goal ----------


	// create the wall object based on the startPos, and endPos
	createWall(startPos, endPos)
	{
		return {
			startPos: new THREE.Vector3(startPos.x, startPos.y, startPos.z),
			endPos: new THREE.Vector3(endPos.x, endPos.y, endPos.z),
			slope: this.calculateSlope(startPos, endPos),
			angle: this.getAngle(),
			normal: this.calculateNormal(startPos, endPos),
			equation: (x) => this.calculateSlope(startPos, endPos) * x + (startPos.y - this.calculateSlope(startPos, endPos) * startPos.x),
			segment: new THREE.Line3(startPos, endPos)
		};
	}

	// returns the angle between walls based on nb of players
	getAngle()
	{
		switch (this.totalPlayers) {
			case 2:
				return 90;
			case 3:
				return 60;
			case 4:
				return 90;
			case 5:
				return 72;
			default:
				return null;
		}
	}

	calculateNormal(startPos, endPos)
	{
		// Calculate the direction vector of the wall
		const directionVector = [endPos.x - startPos.x, endPos.y - startPos.y];

		// Calculate the perpendicular vector (normal vector) by rotating the direction vector by 90 degrees counterclockwise
		const normalVector = [-directionVector[1], directionVector[0]];

		// Normalize the normal vector
		const normalLength = Math.sqrt(normalVector[0] * normalVector[0] + normalVector[1] * normalVector[1]);
		const normalizedNormal = new THREE.Vector3(0, 0, 0);
		normalizedNormal.x = normalVector[0] / normalLength;
		normalizedNormal.y = normalVector[1] / normalLength;

		return normalizedNormal;
	}

	calculateSlope(startPos, endPos)
	{
		return ((endPos.y - startPos.y) / (endPos.x - startPos.x));
	}



	// ---------- Predicting ball position ----------

	// calculates the velocity after it reflects on a wall
	calculateReflectedVelocity(ballVelocity, wallNormal) {
		// Normalize the normal vector
		wallNormal.normalize();

		// Compute the dot product of velocity and normal
		const dotProduct = ballVelocity.dot(wallNormal);

		// Compute the reflected velocity
		const reflectedVelocity = ballVelocity.clone().sub(wallNormal.multiplyScalar(2 * dotProduct));

		// Return the reflected velocity as an array [vx, vy]
		return reflectedVelocity;
	}

	// calculate the final velocity after collision
	calculateFinalVelocity(ballVelocity, wallNormal, wallVelocity = new THREE.Vector2())
	{
		const relativeVelocity = new THREE.Vector2().subVectors(ballVelocity, wallVelocity);

		const parallelComponent = wallNormal.clone().multiplyScalar(relativeVelocity.dot(wallNormal));

		const reflectedComponent = this.calculateReflectedVelocity(parallelComponent, wallNormal);

		const finalVelocity = reflectedComponent.add(wallVelocity);
		this.drawSphere(finalVelocity);

		return finalVelocity;
	}


	// // true if ball is behind the wall
	// isBehindGoal(ballPosition, slope)
	// {
	// 	const b = -(slope * ballPosition.x) + ballPosition.y;
	// 	if (b < 0)
	// 	{
	// 		console.log("TRUE FOR BEHIND THE WALL");
	// 		return true;
	// 	}
	// 	else
	// 		return false;
	// }

	// pointsDistance(startPos, endPos)
	// {
	// 	return Math.sqrt(Math.pow((endPos.x - startPos.x), 2) + Math.pow((endPos.y - startPos.y), 2));
	// }

	// // return true if the ball is behind the wall
	// isBehindWall(startPos, endPos, ballPos)
	// {
	// 	const threshold = 5;
	// 	const wallLen = this.pointsDistance(startPos, endPos) + threshold;
	// 	const startToBall = this.pointsDistance(startPos, ballPos);
	// 	const endToBall = this.pointsDistance(endPos, ballPos);

	// 	const sumDistances = startToBall + endToBall;

	// 	// console.log("sumDistances: ", sumDistances);
	// 	// console.log("wallLen: ", wallLen);

	// 	if ((sumDistances < wallLen) || (sumDistances > wallLen))
	// 		return false;
	// 	else
	// 	{
	// 		return true;
	// 	}
	// }

	wallCollision(ballPosition, ballVelocity, wallStartPos, wallEndPos, ballRadius) {
		// Vector from start to end of the wall
		let wallVector = new THREE.Vector3().subVectors(wallEndPos, wallStartPos);

		// Vector from ball's position to start of the wall
		let ballToWallStart = new THREE.Vector3().subVectors(wallStartPos, ballPosition);

		// Project ball-to-wall vector onto wall vector
		let projection = ballToWallStart.dot(wallVector.normalize());

		// Closest point on wall to ball's position
		let closestPointOnWall = wallStartPos.clone().add(wallVector.clone().multiplyScalar(projection));

		// Calculate distance between ball's position and closest point on wall
		let distanceToWall = ballPosition.distanceTo(closestPointOnWall);

		// Check if the distance is less than or equal to the sum of the ball's radius and a small threshold (to handle floating point errors)
		if (distanceToWall <= ballRadius + 0.01) {
			// Collision detected, calculate reflection of velocity vector
			let wallNormal = wallVector.clone().normalize(); // Normal vector of the wall
			let reflection = ballVelocity.clone().reflect(wallNormal); // Reflect ball's velocity off the wall
			return { collision: true, reflection: reflection };
		} else {
			// No collision
			return { collision: false, reflection: null };
		}
	}


	// returns true if the pointsToCheck(x, y) is on the wall (wallStartPos, wallEndPos)
	pointOnSegment(pointToCheck, wallStartPos, wallEndPos, wallSlope)
	{
		// const expectedY = wallSlope * (pointToCheck.x - wallStartPos.x) + wallStartPos.y;

		// // if (pointToCheck.y !== expectedY)
		// // 	return false;

		// if (Math.abs(pointToCheck.y - expectedY) > Number.EPSILON)
		// return false;

		// if ((pointToCheck.x >= Math.min(wallStartPos.x, wallEndPos.x)) && (pointToCheck.x <= Math.max(wallStartPos.x, wallEndPos.x)))
		// 	return true;

		// return false;
	}

	// pointOnSegment(wall, pointToCheck)
	// {
	// 	let x = ((wall.endPos.y - wall.slope * wall.endPos.x) - (wall.startPos.y - wall.slope * wall.startPos.x)) /
	// }

	calculateYIntercept(startPos, slope)
	{
		return (startPos.y - slope * startPos.x);
	}

	calculateBallSlope(ball)
	{
		return ball.body.velocity.y / ball.body.velocity.x;
	}

	// return the intersection point of the ball and the wall
	getInter(ball, wall)
	{
		let x = (this.calculateYIntercept(ball.body.position, this.calculateBallSlope(ball)) - (this.calculateYIntercept(wall.startPos, wall.slope))) / (this.calculateBallSlope(ball) - wall.slope);

		let y = wall.equation(x);
		return new THREE.Vector2(x, y);
	}


	// predicts the position of the ball after time in ms
	getBallPositionTime(ballPosition, ballVelocity, time) {
		// Convert time from milliseconds to seconds
		let t = time / 1000;

		// Calculate the new position using constant velocity
		let predictedPosition = new THREE.Vector3();
		predictedPosition.x = ballPosition.x + ballVelocity.x * t;
		predictedPosition.y = ballPosition.y + ballVelocity.y * t;
		// this.drawSphere(predictedPosition);

		return predictedPosition;
	}


	// get the new position where the ball intersects with the goal
	predictBallPosition(ballPosition, ballVelocity)
	{
		const simTime = 1000;
		const incrTime = 50;


		let predictedBallPos = ballPosition.clone(); // Initialize predicted position with current ball position
		let currVelocity = ballVelocity.clone(); // Initialize current velocity

		for (let t = 0; t < simTime; t += incrTime) {
			// Check for collision with walls
			for (let i = 0; i < this.wallArray.length; i++) {
				const collisionInfo = this.wallCollision(predictedBallPos, currVelocity, this.wallArray[i].startPos, this.wallArray[i].endPos, this.ball.radius);
				if (collisionInfo.collision) {
					// Collision detected, update velocity
					currVelocity = collisionInfo.reflection;
					// Update predicted position with new velocity
					predictedBallPos = this.getBallPositionTime(predictedBallPos, currVelocity, incrTime);
					break;
				}
			}

			// Update predicted position with current velocity
			predictedBallPos = this.getBallPositionTime(predictedBallPos, currVelocity, incrTime);

			// Check if ball reaches goal
			if (this.pointOnSegment(predictedBallPos, this.goal.startPos, this.goal.endPos, this.goal.slope)) {
				break;
			}
		}

		// predictedBallPos = getBallPositionTime(ballPosition, ballVelocity, currTime);
		// for (let t = 0; t < simTime; t += incrTime)
		// {
		// 	predictedBallPos = this.getBallPositionTime(ballPosition, ballVelocity, t);

		// 	for (let i = 0; i < this.wallArray.length; i++) {
		// 		if (this.wallCollision(predictedBallPos, ballVelocity, this.wallArray[i].startPos, this.wallArray[i].endPos, this.ball.radius)) {
		// 			// Collision detected, update velocity
		// 			ballVelocity = this.calculateFinalVelocity(ballVelocity, this.wallArray[i].normal);
		// 			// Update predicted position with new velocity
		// 			predictedBallPos = this.getBallPositionTime(predictedBallPos, ballVelocity, incrTime);
		// 			break;
		// 		}
		// 	}

		// 	// Check if ball reaches goal
		// 	if (this.pointOnSegment(predictedBallPos, this.goal.startPos, this.goal.endPos, this.goal.slope)) {
		// 		break;
		// 	}
		// 	// if (this.pointOnSegment(predictedBallPos, this.goal.startPos, this.goal.endPos, this.goal.slope))
		// 	// 	break;
		// 	// for (var i = 0; i < this.wallArray.length; i++)
		// 	// {
		// 	// 	if (this.pointOnSegment(predictedBallPos, this.wallArray[i].startPos, this.wallArray[i].endPos, this.wallArray[i].slope))
		// 	// 	{
		// 	// 		console.log("ball velocity before reflection: ", ballVelocity);
		// 	// 		ballVelocity = this.calculateFinalVelocity(ballVelocity, this.wallArray[i].normal);
		// 	// 		console.log("ball velocity after reflection: ", ballVelocity);
		// 	// 		break ;
		// 	// 	}
		// 	// }

		// 	// if (this.wallCollision(predictedBallPos, ballVelocity, this.goal.startPos, this.goal.endPos, this.ball.radius))
		// 	// 	break;
		// 	// for (var i = 0; i < this.wallArray.length; i++)
		// 	// {
		// 	// 	if (this.wallCollision(predictedBallPos, ballVelocity, this.wallArray[i].startPos, this.wallArray[i].endPos, this.ball.radius))
		// 	// 	{
		// 	// 		console.log("ball velocity before reflection: ", ballVelocity);
		// 	// 		ballVelocity = this.calculateFinalVelocity(ballVelocity, this.wallArray[i].normal);
		// 	// 		console.log("ball velocity after reflection: ", ballVelocity);
		// 	// 		break ;
		// 	// 	}
		// 	// }
		// }
		// console.log("predictedBallPos: ", predictedBallPos);
		// this.drawSphere(predictedBallPos);

		return predictedBallPos;
	}

	calculateWallNormal(startPos, endPos) {
		// Find the direction vector of the segment
		const directionVector = {
			x: endPos.x - startPos.x,
			y: endPos.y - startPos.y
		};

		// Rotate the direction vector by 90 degrees
		const normalVector = {
			x: -directionVector.y,
			y: directionVector.x
		};

		// Normalize the normal vector
		const length = Math.sqrt(normalVector.x * normalVector.x + normalVector.y * normalVector.y);
		const normalizedNormal = new THREE.Vector3(normalVector.x / length, normalVector.y / length, 0);

		return normalizedNormal;
	}

	normalizeV3(vector)
	{
		const magnitude = Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2) + Math.pow(vector.z, 2));
		const nromalizedV3 = new THREE.Vector3(vector.x / magnitude, vector.y / magnitude, vector.z / magnitude);

	}


	getBallInterWithray()
	{
		// const ray = new THREE.Ray(this.ball.body.position, this.ball.body.velocity);

		// ray.intersectBox(this.wallArray[this.goalPos].box, target);

		let pointOnRay = new THREE.Vector3();
		let pointOnSegment = new THREE.Vector3();
		const normalizedVelocity = new THREE.Vector3(this.ball.body.velocity.x, this.ball.body.velocity.y, this.ball.body.velocity.z);
		normalizedVelocity.normalize();
		const ray = new THREE.Ray(this.ball.body.position, normalizedVelocity);
		ray.distanceSqToSegment(this.startPos, this.endPos, pointOnRay, pointOnSegment);
		// this.drawSphere(pointOnRay);
		return pointOnRay;


		// // for (wallIndex = 0; wallIndex < this.wallArray.length; wallIndex++)
		// // {
		// // 	if (ray.intersectLine(this.wallArray[wallIndex].segment, target))
		// // 		break;
		// // }
		// // const closestPointToBall = new THREE.Vector3();
		// // ray.distanceSqToSegment(this.wallArray[this.goalPos].startPos, this.wallArray[this.goalPos].endPos, useless, closestPointToBall);
		// const closestPoint = new THREE.Vector3();
		// ray.closestPointToPoint(this.wallArray[this.goalPos].startPos, closestPoint);

		// // Check if the closest point lies within the segment bounds
		// const isInsideSegmentBounds = this.wallArray[this.goalPos].startPos.distanceToSquared(closestPoint) <= this.wallArray[this.goalPos].startPos.distanceToSquared(this.wallArray[this.goalPos].endPos) &&
		// this.wallArray[this.goalPos].endPos.distanceToSquared(closestPoint) <= this.wallArray[this.goalPos].startPos.distanceToSquared(this.wallArray[this.goalPos].endPos);

		// // If the closest point is within the segment bounds, it's an intersection
		// if (isInsideSegmentBounds) {
		// 	this.drawSphere(closestPoint);
		// 	return closestPoint;
		// }

	}

	// ---------- Working DO NOT TOUCH ----------

	updateBall(ball)
	{
		this.ball = ball;
		const	ballVelocity = new THREE.Vector3(ball.body.velocity.x, ball.body.velocity.y, 0);
		// this.targetPosition = this.predictBallPosition(ball.body.position, ballVelocity);
		this.targetPosition = this.getBallInterWithray();
		console.log("targetPosition: ", this.targetPosition);
		// this.drawSphere(this.targetPosition);

	}

	movePaddle() {
		if (!this.targetPosition) {
			return; // Do nothing if there's no target position
		}
		const	startToTarget = this.startPos.distanceTo(this.targetPosition);
		const	startToPaddle = this.startPos.distanceTo(this.paddle.body.position);
		const	endToTarget = this.endPos.distanceTo(this.targetPosition);
		const	endToPaddle = this.endPos.distanceTo(this.paddle.body.position);

		if (startToTarget < startToPaddle)
			this.paddle.moveDown();
		else if (endToTarget < endToPaddle)
			this.paddle.moveUp();

			// console.log("targetPosition: ", this.targetPosition, " paddlePosition:")
	}

	drawSphere(newPosition) {
		// Remove existing sphere (if any)
		if (this.currentSphereMesh) {
			this.paddle.mesh.remove(this.currentSphereMesh);
			this.currentSphereMesh = null; // Reset the reference
		}
		var colors = ['#ff0000', '#00ff00', '#0000ff', '#ffffff','#f000f0', '#00bff']
		var color=colors[this.playerNb];
		// Create a new sphere
		const geometry = new THREE.SphereGeometry(4, 5, 5);
		const material = new THREE.MeshBasicMaterial({ color: color});
		this.currentSphereMesh = new THREE.Mesh(geometry, material);
		this.currentSphereMesh.position.copy(newPosition);

		// Add to the scene
		this.scene.add(this.currentSphereMesh);
	}
}
