import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import Player from './Player.js';
import Ball from './Ball.js';
import * as constants from './constants.js';
import HumanPlayer from './HumanPlayer.js';
import AiPlayer from './AiPlayer.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import createLine from './createLine.js';
import Background from './Background.js';

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
		this.createLights();


		// arena
		// const fbxLoader = new FBXLoader();
		// const material = new THREE.MeshNormalMaterial()
		// fbxLoader.load(
		// 	'assets/models/untitled.fbx',
		// 	(object) => {
		// 		object.traverse(function (child) {
		// 		    // if (child.isMesh) {
		// 			// 	child.material = material
		// 			// 	if (child.material) {
		// 		    //         child.material.transparent = false
		// 		    //     }
		// 		    // }
		// 		})
		// 		object.scale.set(5, 5, 5)
		// 		object.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), Math.PI/2)
		// 		scene.add(object)
		// 	},
		// 	(xhr) => {
		// 		console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
		// 	},
		// 	(error) => {
		// 		console.log(error)
		// 	}
		// );

		this.background = new Background(scene);
	}

	createDirectionalLightTargetedOnBall(x, y, z) {
		var directionalLight = new THREE.DirectionalLight( '#ffffff', 0.5);
		directionalLight.position.set(x, y, z);

		// directionalLight.target.position.set(0, 0, 0);
		directionalLight.target = this.ball.mesh;
		directionalLight.castShadow = true;
		directionalLight.shadow.camera.top = constants.FIELD_DIAMETER/2;
		directionalLight.shadow.camera.bottom = -constants.FIELD_DIAMETER/2;
		directionalLight.shadow.camera.left = -constants.FIELD_DIAMETER/2;
		directionalLight.shadow.camera.right = constants.FIELD_DIAMETER/2;
		directionalLight.shadow.camera.near = 0.1;
		directionalLight.shadow.camera.far = 500;
		// directionalLight.shadow.mapSize.width = 1024;
		if (constants.DEBUG) {
			var helper = new THREE.DirectionalLightHelper( directionalLight, 3 );
			this.scene.add( helper );
		}
		return directionalLight;
	}

	createDirectionalLightsTargetedOnBall() {
		if (this.directionalLights) { // erase the previous lights
			this.directionalLights.forEach((light) => {
				this.scene.remove(light);
			});
		}
		this.directionalLights = [];
		for (var i = 1; i < this.fieldVertices.length; i++) {
			var vertex = this.fieldVertices[i];
			// draw a circle with three js
			// vector going from the center of the field to the vertex

			var centerToVertex = new THREE.Vector3(vertex.x, vertex.y, 0);
			centerToVertex.multiplyScalar(1.1);
			// centerToVertex
			centerToVertex.z = 60;
			var directionalLight = this.createDirectionalLightTargetedOnBall(centerToVertex.x, centerToVertex.y, centerToVertex.z);
			this.directionalLights.push(directionalLight);
			this.scene.add(directionalLight);

		}

	}

	createLights() {
		var hemisphereLight = new THREE.HemisphereLight( '#ddddbb', '#111111', 1);
		console.log(hemisphereLight)
		hemisphereLight.position.set(0, 0, 200);
		this.scene.add(hemisphereLight);
		// helper
		if (constants.DEBUG) {
			var helper = new THREE.HemisphereLightHelper( hemisphereLight, 5 );
			this.scene.add( helper );
		}

		// sun light, cast shadow
		// this.createDirectionalLights();
		// helper



		var ambientLight = new THREE.AmbientLight( 0x101010 ); // soft white light

		// this.scene.add( ambientLight );
	}




	createField() {
		const geometry = new THREE.CircleGeometry( constants.FIELD_DIAMETER/2, constants.SEGMENTS );
		const material = new THREE.MeshPhongMaterial( { color: "#666666" } );
		const field = new THREE.Mesh( geometry, material );
		field.receiveShadow = true;
		this.scene.add(field);
		// field border lines colors
		this.scene.add(createLine({points: geometry.attributes.position.array.slice(3), color: '#3CD6EB', lineWidth: 0.004}));

		var fieldVertices = this.getFieldVertices(field);

		// draw the center of the field
		const centerGeometry = new THREE.CircleGeometry( 2, constants.SEGMENTS );
		const centerMaterial = new THREE.MeshBasicMaterial( { color: '#C2F988' } );
		const centerMesh = new THREE.Mesh( centerGeometry, centerMaterial );
		centerMesh.position.set(0, 0, 1);
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

	createFieldEdges(fieldVertices) { // ? TODO : rename Edge to pylons
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
		const cylinderHeight = 3;
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
		this.createDirectionalLightsTargetedOnBall();
		this.ball.drawMovingVector();

		this.roundStartTimeStamp = Date.now();
	}

	update(dt, keysdown) {
		this.background.update();
		// this.makeBallPOV()
		if (this.startNewRound())
			this.ball.update(dt);

		// this.camera.rotation.z += 0.006;

		this.players.forEach(player => {
			player.update(keysdown);
			if (player.isBallInGoal.a) {
				// console.log("Ball is in player", player.playerNb, "goal");
				player.isBallInGoal.a = false;
				this.finishRound();
			}
		});
	}
}
