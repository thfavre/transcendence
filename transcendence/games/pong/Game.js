 import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import AIPlayer from './AIPlayer.js';
import Ball from './Ball.js';
import * as constants from './constants.js';
import HumanPlayer from './HumanPlayer.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import createLine from './createLine.js';
import Background from './Background.js';

export default class Game {
	constructor(scene, physicsWorld, camera, humanPlayerNb, AIPlayerNb) {
		this.scene = scene;
		this.physicsWorld = physicsWorld;
		this.camera = camera;

		this.playersNb = humanPlayerNb + AIPlayerNb;

		this.fieldEdgeDiameter = 10;

		this.roundStartTime = 1.5; // [s]
		this.roundStartTimeStamp = Date.now();

		this.fieldVertices =  this.createField(this.playersNb==2? 4 : this.playersNb);
		this.players = [];
		this.clock = new THREE.Clock();

		if (this.playersNb == 2)
			this.create2PlayerField()
		// this.createPlayers();

		this.createLights();
		this.background = new Background(scene);
	}

	delete() {
		this.players.forEach((player) => {
			player.delete();
		} );
		this.deleteBall();
		this.background.delete();
		this.fieldMeshes.forEach((mesh) => {
			this.scene.remove(mesh);
		});
		this.fieldEdgeBodies.forEach((body) => {
			this.physicsWorld.removeBody(body);
		});
		this.scene.remove(this.directionalLightBallTargeted);
		if (this.directionalLightBallTargetedShadowHelper)
			this.scene.remove(this.directionalLightBallTargetedShadowHelper);
		this.scene.remove(this.hemisphereLight);
	}

	create2PlayerField() {
		var wall1 = this.createHumanPlayer(1)
		wall1.health = 0;
		wall1.closeGoal(0, true);
		this.addPlayer(wall1);
		wall1.paddle.mesh.material.color.set('#3CD6EB');

		var wall2 = this.createHumanPlayer(3);
		wall2.health = 0;
		wall2.paddle.mesh.material.color.set('#3CD6EB');
		wall2.closeGoal(0, true);
		this.addPlayer(wall2);
	}

	// createPlayers() {
	// 	throw new Error("createPlayers() must be implemented by the subclass");
	// }

	createDirectionalLightTargetedOnBall(x, y, z) {
		// spotlights
		var spotLight = new THREE.SpotLight( '#ffdeb0', 10, 90, Math.PI/6, 0.8, 0.2);
		spotLight.position.set(x, y, z);
		spotLight.target = this.ball.mesh;
		spotLight.castShadow = true;
		spotLight.shadow.camera.top = constants.FIELD_DIAMETER/2;
		spotLight.shadow.camera.bottom = -constants.FIELD_DIAMETER/2;
		spotLight.shadow.camera.left = -constants.FIELD_DIAMETER/2;
		spotLight.shadow.camera.right = constants.FIELD_DIAMETER/2;
		spotLight.shadow.camera.near = 45;
		spotLight.shadow.camera.far = 100;
		//shadowHelper
		// var shadowHelper = new THREE.CameraHelper( spotLight.shadow.camera );

		// helper
		if (constants.DEBUG) {
			if (this.directionalLightBallTargetedShadowHelper)
				this.scene.remove(this.directionalLightBallTargetedShadowHelper);
			this.directionalLightBallTargetedShadowHelper = new THREE.CameraHelper( spotLight.shadow.camera );
			this.scene.add( this.directionalLightBallTargetedShadowHelper );
		}

		// var directionalLight = new THREE.DirectionalLight( '#ffffff', 0.5);
		// directionalLight.position.set(x, y, z);

		// // directionalLight.target.position.set(0, 0, 0);
		// directionalLight.target = this.ball.mesh;
		// directionalLight.castShadow = true;
		// directionalLight.shadow.camera.top = constants.FIELD_DIAMETER/2;
		// directionalLight.shadow.camera.bottom = -constants.FIELD_DIAMETER/2;
		// directionalLight.shadow.camera.left = -constants.FIELD_DIAMETER/2;
		// directionalLight.shadow.camera.right = constants.FIELD_DIAMETER/2;
		// directionalLight.shadow.camera.near = 0.1;
		// directionalLight.shadow.camera.far = 500;
		// // directionalLight.shadow.mapSize.width = 1024;
		// if (constants.DEBUG) {
		// 	var helper = new THREE.DirectionalLightHelper( directionalLight, 3 );
		// 	this.scene.add( helper );
		// }
		this.scene.add(spotLight);
		return spotLight;
	}

	// createDirectionalLightsTargetedOnBall() {
	// 	if (this.directionalLights) { // erease the previous lights
	// 		this.directionalLights.forEach((light) => {
	// 			this.scene.remove(light);
	// 		});
	// 	}
	// 	this.directionalLights = [];
	// 	for (var i = 1; i < this.fieldVertices.length; i++) {
	// 		var vertex = this.fieldVertices[i];
	// 		// draw a circle with three js
	// 		// vector going from the center of the field to the vertex

	// 		var centerToVertex = new THREE.Vector3(vertex.x, vertex.y, 0);
	// 		// centerToVertex.multiplyScalar(1.1);
	// 		// centerToVertex
	// 		centerToVertex.z = 30;
	// 		var directionalLight = this.createDirectionalLightTargetedOnBall(centerToVertex.x, centerToVertex.y, centerToVertex.z);
	// 		this.directionalLights.push(directionalLight);
	// 	}

	// }


	createLights() {
		this.hemisphereLight = new THREE.HemisphereLight( '#aaaaad', '#111111', 2);
		this.hemisphereLight.position.set(0, 0, 200);
		this.scene.add(this.hemisphereLight);
		// helper
		if (constants.DEBUG) {
			var helper = new THREE.HemisphereLightHelper( this.hemisphereLight, 5 );
			this.scene.add( helper );
		}

		// sun light, cast shadow
		// this.createDirectionalLights();
		// helper



		var ambientLight = new THREE.AmbientLight( 0x101010 ); // soft white light

		// this.scene.add( ambientLight );
	}




	createField(segmentsNb) {
		this.fieldMeshes = [];
		this.fieldEdgeBodies = [];
		const geometry = new THREE.CircleGeometry( constants.FIELD_DIAMETER/2, segmentsNb );
		const material = new THREE.MeshPhongMaterial( { color: "#666666" } );
		const field = new THREE.Mesh( geometry, material );
		field.receiveShadow = true;
		this.scene.add(field);
		this.fieldMeshes.push(field);
		// field border lines colors
		const line = createLine({points: geometry.attributes.position.array.slice(3), color: '#3CD6EB', lineWidth: 0.004})
		this.fieldMeshes.push(line);
		this.scene.add(line);

		var fieldVertices = this.getFieldVertices(field);

		// draw the center of the field
		const centerGeometry = new THREE.CircleGeometry( 2, segmentsNb );
		const centerMaterial = new THREE.MeshBasicMaterial( { color: '#C2F988' } );
		const centerMesh = new THREE.Mesh( centerGeometry, centerMaterial );
		centerMesh.position.set(0, 0, 1);
		this.scene.add(centerMesh);
		this.fieldMeshes.push(centerMesh);

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

	createFieldEdges(fieldVertices) { // ? TODO : rename Edge to pylons
		for (var i = 1; i < fieldVertices.length; i++) {
			var vertex = fieldVertices[i];
			this.createEdge(vertex);
		}
	}

	createEdge(position) {
		const cylinderRadius = this.fieldEdgeDiameter/2;
		const cylinderHeight = 3.2;
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
		const edgeMaterial = new THREE.MeshStandardMaterial( {color: '#3CD6EB'} );
		const edgeMesh = new THREE.Mesh( edgeGeometry, edgeMaterial );
		edgeMesh.castShadow = true;
		edgeMesh.receiveShadow = true;
		//wireframe
		// edgeMesh.material.wireframe = true;
		edgeMesh.position.copy(edgeBody.position);
		edgeMesh.quaternion.copy(edgeBody.quaternion);
		this.scene.add(edgeMesh);
		this.fieldMeshes.push(edgeMesh);
		this.fieldEdgeBodies.push(edgeBody);
	}

	getPlayerVertices(nb) {
		nb += 1; // to start at 1
		var vertex1 = this.fieldVertices[nb];
		if (nb == this.fieldVertices.length-1) {
			var vertex2 = this.fieldVertices[1];
		} else {
			var vertex2 = this.fieldVertices[nb+1];
		}
		return [vertex1, vertex2];
	}

	createHumanPlayer(nb, name='NoName') {
		var [vertex1, vertex2] = this.getPlayerVertices(nb);
		return new HumanPlayer(this.scene, this.physicsWorld, nb, vertex1, vertex2, this.fieldEdgeDiameter, 87, 83, this.playersNb==2 ? 4 : this.playersNb, name);
	}

	createAiPlayer(nb) {
		var [vertex1, vertex2] = this.getPlayerVertices(nb);
		return new AIPlayer(this.scene, this.physicsWorld, nb, vertex1, vertex2, this.fieldEdgeDiameter, this.ball, this.fieldVertices, this.playersNb==2 ? 4 : this.playersNb);
	}

	addPlayer(player) {
		this.players.push(player);
	}

	createBall() {
		// will create the ball at the center of the field moving through one of the players
		var playersPos = [];
		this.players.forEach(player => {
			if (player.health > 0)
				playersPos.push(player.paddle.mesh.position);
		});
		return new Ball(this.scene, this.physicsWorld, playersPos);
	}

	deleteBall() {
		this.scene.remove(this.ball.mesh);
		this.physicsWorld.removeBody(this.ball.body);
	}

	makeBallPOV() {
		var ballAngle = this.ball.movingAngle;

		this.camera.position.copy(this.ball.mesh.position);
		this.camera.position.z += 5;
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

	newRoundTimer() {

		if (Date.now() - this.roundStartTimeStamp < this.roundStartTime*1000) {
			this.ball.body.position.set(0, 0, 3);
			return false;
		}
		this.ball.removeMovingVector();
		return true;
	}

	createNewRound() {
		if (this.ball)
			this.deleteBall();
		this.ball = this.createBall();
		// this.createDirectionalLightsTargetedOnBall();
		if (this.directionalLightBallTargeted)
			this.scene.remove(this.directionalLightBallTargeted);
		this.directionalLightBallTargeted = this.createDirectionalLightTargetedOnBall(0, 0, 60)
		this.ball.drawMovingVector();

		this.roundStartTimeStamp = Date.now();
	}

	updateAIVision(delay) {
		if (!this.previousVisionTime)
			this.previousVisionTime = 0;
		if (this.clock.getElapsedTime() - this.previousVisionTime > delay) {
			this.players.forEach(player => {
				if (player instanceof AIPlayer)
					player.updateBall(this.ball);
			});
			this.previousVisionTime = this.clock.getElapsedTime();
		}
	}

	// Return the player that got the goal
	getGoalPlayer() {
		for (var i = 0; i < this.players.length; i++) {
			if (this.players[i].isBallInGoal.a) {
				this.players[i].isBallInGoal.a = false;
				return this.players[i];
			}
		}
		return null;
	}

	update(dt, keysdown) {
		if (this.directionalLightBallTargetedShadowHelper)
			this.directionalLightBallTargetedShadowHelper.update();
		this.background.update();
		// this.makeBallPOV()
		if (this.newRoundTimer())
			this.ball.update(dt);

		// this.camera.rotation.z += 0.006;

		// update the AI vison
		this.updateAIVision(constants.AI_VISION_DELAY);

		this.players.forEach(player => {
			player.update(dt, keysdown);
		// 	if (player.isBallInGoal.a) {
		// 		player.isBallInGoal.a = false;
		// 		this.createNewRound();
			// }
		});
		// check if the ball is too far
		if (this.ball.isTooFar()) {
			this.createNewRound();
		}
	}
}
