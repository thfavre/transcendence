import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import Paddle from './Paddle.js';
import * as constants from './constants.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


export default class Player {
	constructor(scene, physicsWorld, playerNb, startPos, endPos, fieldEdgeDiameter) {
		this.physicsWorld = physicsWorld;
		this.playerNb = playerNb;

		this.axeAngle = 2*Math.PI/(constants.SEGMENTS*2) +  2*Math.PI/constants.SEGMENTS*(playerNb-1);  // TODO simplify the formula

		this.paddle = new Paddle(scene, physicsWorld, startPos, endPos, this.axeAngle, fieldEdgeDiameter);

		this.isBallInGoal = {a: false}; // ! TODO find a better way to do this (pass by reference)
		this.createGoalHitBox(scene, physicsWorld, startPos, endPos, fieldEdgeDiameter, this.isBallInGoal);

		this.health = 3;
		this.createHealthMeshes(scene);
		this.createClosedGoalHitBox(scene, physicsWorld, startPos, endPos, fieldEdgeDiameter);

	}

	createHealthMeshes(scene) {
		this.healthMeshes = [];
		const loader = new GLTFLoader();
		loader.load("assets/models/Heart.glb", (gltf) => {
			const model = gltf.scene;
			// get the paddle size
			const paddleSize = this.paddle.mesh.geometry.parameters.height;
			console.log("paddleSize", paddleSize);
			model.scale.set(3, 3, 3);
			model.rotation.set(0, 0, -Math.PI/2);
			for (var i = 0; i < this.health; i++) {
				var modelInstance = model.clone();
				modelInstance.position.set(0.4, -paddleSize/2+paddleSize/(this.health+1)*(i+1), 1.5);
				this.healthMeshes.push(modelInstance);
				this.paddle.mesh.add(modelInstance);
			}
			console.log('Heart model loaded');
		}
		);
	}

	createClosedGoalHitBox(scene, physicsWorld, startPos, endPos, fieldEdgeDiameter) {
		var goalLength = startPos.distanceTo(endPos);
		var dX = endPos.x - startPos.x;
		var dY = endPos.y - startPos.y;
		var width = this.paddle.mesh.geometry.parameters.width
		var depth = this.paddle.mesh.geometry.parameters.depth;
		var centerPos = new THREE.Vector3(startPos.x + dX/2, startPos.y + dY/2, depth/2);

		this.closedGoalHitboxBody = new CANNON.Body({ // Todo rename to make it more explicit ?
			mass: 0,
			shape: new CANNON.Box(new CANNON.Vec3(width/2, goalLength/2, depth/2)),
			position: centerPos,
			material: new CANNON.Material({ friction: 0, restitution: 1 }),
		});
		this.closedGoalHitboxBody.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 0, 1), this.axeAngle);
		this.closedGoalHitboxBody.collisionResponse = false;
		this.closedGoalHitboxBody.isTrigger = true;
	}

	createGoalHitBox(scene, physicsWorld, startPos, endPos, fieldEdgeDiameter, isBallInGoal) {
		var goalLength = startPos.distanceTo(endPos);
		var dX = endPos.x - startPos.x;
		var dY = endPos.y - startPos.y;
		var centerPos = new THREE.Vector3(startPos.x + dX/2, startPos.y + dY/2, 0);
		// make the centerPos a bit back
		centerPos.x += fieldEdgeDiameter/2*Math.cos(this.axeAngle);
		centerPos.y += fieldEdgeDiameter/2*Math.sin(this.axeAngle);


		this.goalHitboxBody = new CANNON.Body({ // Todo rename to make it more explicit ?
			mass: 0,
			shape: new CANNON.Box(new CANNON.Vec3(.2, goalLength/2, 5)),
			position: centerPos,
			material: new CANNON.Material({ friction: 0, restitution: 1 }),
		});
		this.goalHitboxBody.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 0, 1), this.axeAngle);
		this.goalHitboxBody.collisionResponse = false;
		this.goalHitboxBody.isTrigger = true;

		this.goalHitboxBody.addEventListener("collide", function(event){
			// console.log(event.body);
			isBallInGoal.a = true;
		});
		physicsWorld.addBody(this.goalHitboxBody);
	}

	loseHealth() {
		this.health--;
		this.paddle.mesh.remove(this.healthMeshes.pop());
		if (this.health <= 0)
			this.physicsWorld.addBody(this.closedGoalHitboxBody);


		console.log("Ball is in player", this.playerNb, "goal", "Health:", this.health);
	}

	movePaddle(keysdown) {
		// to be implemented in the subclasses
		throw new Error('You have to implement the method movePaddle in a Subclass!');
	}

	update(keysdown) {
		if (this.health <= 0) {
			// move the paddle to the center
			this.paddle.mesh.position.copy(this.paddle.centerPos);
			// increase the size of the paddle
			if (this.paddle.mesh.scale.y < 5)
				this.paddle.scale(0.1)
			return;
		}
		this.movePaddle(keysdown)
		this.paddle.update();
		if (this.isBallInGoal.a)
		{
			this.loseHealth();

			// console.log("Ball is in player", this.playerNb, "goal");
			// this.isBallInGoal.a = false;
			// reset the ball position
		}

	}
}
