import * as THREE from 'three';
import * as CANNON from 'cannon-es';

import * as constants from './constants.js';

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
  }

export default class Paddle {
	// Mesh materials
	// Basic : no shading
	// Lambert : matte material (emissive color)
	// Phong : shiny material (specular color, shininess)
	// Standard : combination of Lambert and Phong (metalness, roughness)

	// Line materials

	// Points materials

	static materials = [
		new THREE.MeshLambertMaterial(
			{
				color: "#FF0000",
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
		var goalDeplacementTime = 1.5; // time to go from one side to the other [s]
		this.moveSpeed = this.maxMovingDistance / goalDeplacementTime / constants.FPS;

		// ---- Mesh ----
		const geometry = new THREE.BoxGeometry(width, height, depth, 1, 1);
		geometry.attributes.uv2 = geometry.attributes.uv; // for the aoMap
		const material = Paddle.materials[0];
		this.mesh = new THREE.Mesh(geometry, material);
		this.mesh.castShadow = true;
		scene.add(this.mesh);

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

	move(speed) {
		// make the paddle move in the direction of the angle
		var angle = this.axeAngle + Math.PI/2;
		var depX = speed * Math.cos(angle);
		var depY = speed * Math.sin(angle);
		var newPos = new THREE.Vector3(this.body.position.x + depX, this.body.position.y + depY, this.body.position.z);
		var distanceToCenter = this.centerPos.distanceTo(newPos);
		if (distanceToCenter > this.maxMovingDistance)
			return;
		this.body.position.x += depX;
		this.body.position.y += depY;
	}

	moveUp() {
		this.move(this.moveSpeed);
	}

	moveDown() {
		this.move(-this.moveSpeed);
	}

	bounceBall(ball) {

	}

	updateMeshPosAndRot() {
		this.mesh.position.copy(this.body.position);
		this.mesh.quaternion.copy(this.body.quaternion);
	}

	update() {
		this.updateMeshPosAndRot();
	}
}
