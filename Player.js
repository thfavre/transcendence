import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import Paddle from './Paddle.js';
import * as constants from './constants.js';


export default class Player {
	constructor(scene, physicsWorld, playerNb, startPos, endPos, fieldEdgeDiameter) {
		this.playerNb = playerNb;

		this.axeAngle = 2*Math.PI/(constants.SEGMENTS*2) +  2*Math.PI/constants.SEGMENTS*(playerNb-1);  // TODO simplify the formula

		this.paddle = new Paddle(scene, physicsWorld, startPos, endPos, this.axeAngle, fieldEdgeDiameter);

		this.isBallInGoal = {a: false}; // ! TODO find a better way to do this
		this.createGoal(scene, physicsWorld, startPos, endPos, fieldEdgeDiameter, this.isBallInGoal);
	}

	createGoal(scene, physicsWorld, startPos, endPos, fieldEdgeDiameter, isBallInGoal) {
		var goalLength = startPos.distanceTo(endPos);
		var dX = endPos.x - startPos.x;
		var dY = endPos.y - startPos.y;
		var centerPos = new THREE.Vector3(startPos.x + dX/2, startPos.y + dY/2, 0);
		// make the centerPos a bit back
		centerPos.x += fieldEdgeDiameter/2*Math.cos(this.axeAngle);
		centerPos.y += fieldEdgeDiameter/2*Math.sin(this.axeAngle);


		this.goalHiboxBody = new CANNON.Body({ // Todo rename to make it more explicit ?
			mass: 0,
			shape: new CANNON.Box(new CANNON.Vec3(.2, goalLength/2, 5)),
			position: centerPos,
			material: new CANNON.Material({ friction: 0, restitution: 1 }),
		});
		this.goalHiboxBody.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 0, 1), this.axeAngle);
		this.goalHiboxBody.collisionResponse = false;
		this.goalHiboxBody.isTrigger = true;

		this.goalHiboxBody.addEventListener("collide", function(event){
			// console.log(event.body);
			isBallInGoal.a = true;
		});
		physicsWorld.addBody(this.goalHiboxBody);
	}

	movePaddle(keysdown) {
		// to be implemented in the subclasses
		throw new Error('You have to implement the method movePaddle in a Subclass!');
	}

	update(keysdown) {
		this.movePaddle(keysdown)
		this.paddle.update();
		if (this.isBallInGoal.a)
		{
			// console.log("Ball is in player", this.playerNb, "goal");
			// this.isBallInGoal.a = false;
			// reset the ball position
		}

	}
}
