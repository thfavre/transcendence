import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import Player from './Player.js';
import Ball from './Ball.js';
import * as constants from './constants.js';
import HumanPlayer from './HumanPlayer.js';
import AiPlayer from './AiPlayer.js';

export default class Game {
	constructor(scene, physicsWorld, camera) {
		this.scene = scene;
		this.physicsWorld = physicsWorld;
		this.camera = camera;

		this.fieldEdgeDiameter = 10;

		this.roundStartTime = 1; // in seconds
		this.roundStartTimeStamp = Date.now();

		this.fieldVertices =  this.createField();
		this.players = [];
		if (constants.SKIP_PLAYER_SELECTION) {
			for (var i = 1; i < (constants.SEGMENTS); i++) {
				this.addPlayer(this.createAiPlayer(i));
			};
			// this.addPlayer(this.createAiPlayer(++i));
		}
		// this.players = this.createPlayers();
		// this.finishRound()

		// lights
		var hemisphereLight = new THREE.HemisphereLight( '#ffffff', 'darkslategrey', 2);
		scene.add(hemisphereLight);
	}


	startNewRound() {
		if (Date.now() - this.roundStartTimeStamp < this.roundStartTime*1000) {
			console.log("Waiting for the round to start");
			this.ball.body.position.set(0, 0, 3);
			return false;
		}
		this.ball.removeMovingVector();
		return true;
	}

	finishRound() {
		if (this.ball)
			this.deleteBall();
		this.ball = this.createBall();
		this.ball.drawMovingVector();

		this.roundStartTimeStamp = Date.now();
	}

	createField() {
		const geometry = new THREE.CircleGeometry( constants.FIELD_DIAMETER/2, constants.SEGMENTS );
		const material = new THREE.MeshPhongMaterial( { color: "#2c3e50" } );
		const field = new THREE.Mesh( geometry, material );
		field.receiveShadow = true;
		this.scene.add(field);

		var fieldVertices = this.getFieldVertices(field);

		// draw the center of the field
		const centerGeometry = new THREE.CircleGeometry( 2, constants.SEGMENTS );
		const centerMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		const centerMesh = new THREE.Mesh( centerGeometry, centerMaterial );
		this.scene.add(centerMesh);

		this.createFieldEdges(fieldVertices);

		return fieldVertices;
	}

	getFieldVertices(field) {
		var fieldVertices = [];
		for (var i = 0; i < field.geometry.attributes.position.count-1; i++) {
			let v = new THREE.Vector3();
			field.getVertexPosition(i, v);

			fieldVertices.push(v);
		}
		return fieldVertices;
	}

	createFieldEdges(fieldVertices) {
		for (var i = 1; i < fieldVertices.length; i++) {
			var vertex = fieldVertices[i];
			// if (i == fieldVertices.length-1) {
			// 	var vertex2 = fieldVertices[0];
			// } else {
			// 	var vertex2 = fieldVertices[i+1];
			// }
			// console.log(vertex1, vertex2);
			this.createEdge(vertex);
		}
	}

	createEdge(position) {
		const cylinderRadius = this.fieldEdgeDiameter/2;
		const cylinderHeight = 10;
		// physics
		const edgeShape = new CANNON.Cylinder(cylinderRadius, cylinderRadius, cylinderHeight, 32);
		const edgeBody = new CANNON.Body({
			mass: 0,
			shape: edgeShape,
			position: new CANNON.Vec3(position.x, position.y, cylinderHeight/2),
			material: new CANNON.Material({ friction: 0, restitution: 1 }),
		});
		edgeBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), Math.PI/2);
		this.physicsWorld.addBody(edgeBody);
		// visual
		const edgeGeometry = new THREE.CylinderGeometry( cylinderRadius, cylinderRadius, cylinderHeight, 32 );
		const edgeMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00} );
		const edgeMesh = new THREE.Mesh( edgeGeometry, edgeMaterial );
		edgeMesh.position.copy(edgeBody.position);
		edgeMesh.quaternion.copy(edgeBody.quaternion);
		this.scene.add(edgeMesh);


	}

	// addHumanPlayer(nb)
	// {
	// 	nb += 1; // to start at 1
	// 	var vertex1 = this.fieldVertices[nb];
	// 	if (nb == this.fieldVertices.length-1) {
	// 		var vertex2 = this.fieldVertices[1];
	// 	} else {
	// 		var vertex2 = this.fieldVertices[nb+1];
	// 	}
	// 	this.players.push(new HumanPlayer(this.scene, this.physicsWorld, nb, vertex1, vertex2, this.fieldEdgeDiameter));
	// }

	// createPlayers() {
	// 	var players = [];
	// 	for (var i = 1; i <= constants.SEGMENTS; i++) {
	// 		// console.log(vertex1, vertex2);
	// 		addPlayer(this.createHumanPlayer(i));
	// 		// break;
	// 	}
	// }

	createHumanPlayer(nb) {
		nb += 1; // to start at 1
		var vertex1 = this.fieldVertices[nb];
		if (nb == this.fieldVertices.length-1) {
			var vertex2 = this.fieldVertices[1];
		} else {
			var vertex2 = this.fieldVertices[nb+1];
		}
		return new HumanPlayer(this.scene, this.physicsWorld, nb, vertex1, vertex2, this.fieldEdgeDiameter, 87, 83);
	}

	createAiPlayer(nb) {
		nb += 1; // to start at 1
		var vertex1 = this.fieldVertices[nb];
		if (nb == this.fieldVertices.length-1) {
			var vertex2 = this.fieldVertices[1];
		} else {
			var vertex2 = this.fieldVertices[nb+1];
		}
		return new AiPlayer(this.scene, this.physicsWorld, nb, vertex1, vertex2, this.fieldEdgeDiameter, this.ball);
	}

	addPlayer(player) {
		this.players.push(player);
		console.log("Player", player.playerNb, "added", this.players);
	}

	createBall() {
		return new Ball(this.scene, this.physicsWorld);
	}

	deleteBall() {
		this.scene.remove(this.ball.mesh);
		this.physicsWorld.removeBody(this.ball.body);
	}

	makeBallPOV() {
		var ballAngle = this.ball.movingAngle;

		this.camera.position.copy(this.ball.mesh.position);
		this.camera.position.z += 20;
		var xComposant = Math.cos(ballAngle) * 10;
		var yComposant = Math.sin(ballAngle) * 10;
		this.camera.position.x -= xComposant;
		this.camera.position.y -= yComposant;

		this.camera.rotation.x = Math.PI/2;
		this.camera.rotation.y =ballAngle + Math.PI/2 + Math.PI;
	}

	makeTopDownPOV() {
		// this.camera.position.x = 0;
		// this.camera.position.y = 0;
		// this.camera.position.z = 100;
		// this.camera.rotation.x = Math.PI/2;
		// vecotr from the center of the field to the ball
	}

	update(dt, keysdown) {
		if (this.startNewRound())
			this.ball.update(dt);

		// this.camera.rotation.z += 0.006;

		this.players.forEach(player => {
			player.update(keysdown);
			if (player.isBallInGoal.a) {
				console.log("Ball is in player", player.playerNb, "goal");
				player.isBallInGoal.a = false;
				this.finishRound();
			}
		});
	}
}
