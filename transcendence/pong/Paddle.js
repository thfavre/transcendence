import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import * as constants from './constants.js';

import createLine from './createLine.js';

export default class Paddle {
	// Mesh materials
	// Basic : no shading
	// Lambert : matte material (emissive color)
	// Phong : shiny material (specular color, shininess)
	// Standard : combination of Lambert and Phong (metalness, roughness)

	// Line materials

	// Points materials

	static materials = [
		new THREE.MeshBasicMaterial(
			{
				color: "#666666",
				// emissive: "#ff0f00",
				// emissiveIntensity: .7,

			}
		),
		new THREE.MeshPhongMaterial({ color: "#ff0000" }),
		new THREE.MeshPhysicalMaterial(
			{
				// map: constants.textureLoader.load("assets/textures/crate.gif")
				color: "#ffcfff",
				transmission: 1,
				roughness: 0.3,
				ior: 1.7,
				thickness: 0.5,
				specularIntensity: 1,
				clearcoat: 1,
				sheen: 1,
				sheenColor: new THREE.Color(0xff0000),

			}
		),

		new THREE.MeshPhongMaterial({ color: "#00ff00", shininess: 200}),
		new THREE.MeshStandardMaterial({ color: "#0000ff", roughness:0}), // or should it be defined somewhere else?
		new THREE.MeshStandardMaterial(
			{
				map: constants.textureCratesBaseColor,
			}
		),
		new THREE.MeshStandardMaterial(
			{
				map: constants.textureMetalBaseColor,
				normalMap: constants.textureMetalNormalMap,
				displacementMap: constants.textureMetalHeightMap,
				displacementScale: 0.07,
				roughnessMap: constants.textureMetalRoughnessMap,
				roughness: 0.5,
				aoMap: constants.textureMetalAmbientOcclusionMap,
				aoMapIntensity: 1,
				// metalnessMap: constants.textureMetallic,
				// metalness: 1,
			}
		),
	];


	constructor(scene, physicsWorld, startPos, endPos, axeAngle, fieldEdgeDiameter) {
		this.axeAngle = axeAngle;

		var goalSize = startPos.distanceTo(endPos) - fieldEdgeDiameter;

		// ---- Sizes ----
		var width = 3;
		var percentLengthSize = 0.2; // 0.5 = 50% of the goal size
		var height = goalSize * percentLengthSize ; // length of the paddle...
		var depth = 3;

		// ---- Moving ----
		this.maxMovingDistance = goalSize/2 - height/2;
		var goalDeplacementTime = 1; // time to go from one side to the other [s]
		this.moveSpeed = this.maxMovingDistance * 2 / goalDeplacementTime;

		// ---- Mesh ----
		const geometry = new THREE.BoxGeometry(width, height, depth);
		geometry.attributes.uv2 = geometry.attributes.uv; // for the aoMap
		const material = Paddle.materials[0];
		this.mesh = new THREE.Mesh(geometry, material);
		this.mesh.castShadow = true;
		scene.add(this.mesh);

		// edge colors
		var edgePoints = [];
		// geometry.ed
		const edgesGeometry = new THREE.EdgesGeometry(geometry);
		for (var i = 0; i < edgesGeometry.attributes.position.array.length; i++) {
			if (i >= 21 && i <30)
				continue;
			edgePoints.push(edgesGeometry.attributes.position.array[i]);
			// if (i==2)
			// 	break
		}


		this.mesh.add(createLine({points: edgePoints})); // edgesGeometry.attributes.position.array
		// const lineGeometry = new LineGeometry();
		// lineGeometry.setPositions(edgesGeometry.attributes.position.array);
		// // const edgesGeometry = new LineGeometry();
		// // edgesGeometry.setPositions(geometry.attributes.position.array);

		// const edgesMaterial = new LineMaterial({
		// 	color: '#3CD6EB',
		// 	linewidth: 0.005, // in pixels
		// });

		// const edgeLine = new Line2(lineGeometry, edgesMaterial);
		// this.mesh.add(edgeLine);




		// ---- Physics ----
		this.centerPos = new THREE.Vector3(startPos.x + (endPos.x - startPos.x)/2, startPos.y + (endPos.y - startPos.y)/2, depth/2);
		this.body = new CANNON.Body({
			mass: 0,
			shape: new CANNON.Box(new CANNON.Vec3(width/2, height/2, depth/2)),
			position: this.centerPos,
			// linearDamping: 0,
			material: new CANNON.Material({ friction: 0, restitution: 1 }),

		});
		this.body.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 0, 1), this.axeAngle);
		physicsWorld.addBody(this.body);

		this.updateMeshPosAndRot();
	}

	getNextMaterial() {
		var matIndex = Paddle.materials.indexOf(this.mesh.material);
		if (matIndex == -1)
			matIndex = 0;
		else
			matIndex = (matIndex + 1) % Paddle.materials.length;
		return Paddle.materials[matIndex];
	}

	getPreviousMaterial() {
		var matIndex = Paddle.materials.indexOf(this.mesh.material);
		if (matIndex == -1)
			matIndex = 0;
		else
		{
			matIndex = matIndex - 1;
			if (matIndex < 0)
				matIndex = Paddle.materials.length - 1;
		}
		return Paddle.materials[matIndex];

	}


	changeMaterial(direction) {
		if (direction > 0)
			this.mesh.material = this.getNextMaterial();
		else
			this.mesh.material = this.getPreviousMaterial();
	}

	move(dt, speed) {
		// make the paddle move in the direction of the angle
		var angle = this.axeAngle + Math.PI/2;
		var depX = speed * Math.cos(angle) * dt;
		var depY = speed * Math.sin(angle) * dt;
		var newPos = new THREE.Vector3(this.body.position.x + depX, this.body.position.y + depY, this.body.position.z);
		var distanceToCenter = this.centerPos.distanceTo(newPos);
		if (distanceToCenter > this.maxMovingDistance)
			return;
		this.body.position.x += depX;
		this.body.position.y += depY;
	}

	moveUp(dt) {
		this.move(dt, this.moveSpeed);
	}

	moveDown(dt) {
		this.move(dt, -this.moveSpeed);
	}

	scale(scale) {
		this.mesh.scale.y += scale;
	}

	updateMeshPosAndRot() {
		this.mesh.position.copy(this.body.position);
		this.mesh.quaternion.copy(this.body.quaternion);
	}

	update() {
		this.updateMeshPosAndRot();
	}
}
