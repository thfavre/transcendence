import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as constants from './constants.js';


export default class Ball {
	constructor(scene, physicsWorld) {
		this.radius = 3;
		const geometry = new THREE.SphereGeometry(this.radius, 16, 16);
		const material = new THREE.MeshNormalMaterial();
		this.mesh = new THREE.Mesh(geometry, material);
		this.mesh.castShadow = true;
		scene.add(this.mesh);
		// scene.add(constants.modelBall);
		const loader = new GLTFLoader();
		loader.load(constants.ballsModels[2], (gltf) => {
			const model = gltf.scene;
			model.scale.set(13, 13, 13);
			this.mesh.add(model);
			console.log('Ball model loaded');
		}
		);


		this.moveSpeed = 3;
		this.movingAngle = 0; // will be updated in the move function


		// ---- Physics ----
		this.body = new CANNON.Body({
			mass: 5,
			shape: new CANNON.Sphere(this.radius),
			position: new CANNON.Vec3(0, 0, this.radius),
			// linearDamping: 0,
			// angularDamping: .5,
			velocity: new CANNON.Vec3(Math.random()-0.5, Math.random()-0.5, 0), // initial angle (will be set to a constant speed)
			material: new CANNON.Material({ friction: 1, restitution: 1 }),
		});
		physicsWorld.addBody(this.body);
		this.updateMeshPosAndRot();


		// this.direction = new THREE.Vector3(1, 1);
		// ---- Helpers ----
		// var axe = new THREE.AxesHelper(10);
		// axe.renderOrder = 2;
		// this.mesh.add(axe);

	}

	drawMovingVector() {
		this.removeMovingVector();
		var direction = new THREE.Vector3(this.body.velocity.x, this.body.velocity.y, 0);
		direction.normalize();
		var origin = new THREE.Vector3(0, 0, 0);
		var length = 10;
		var hex = 0xffff00;
		this.arrowHelper = new THREE.ArrowHelper(direction, origin, length, hex);
		this.mesh.add(this.arrowHelper);
	}
	removeMovingVector() {
		if (this.arrowHelper)
		{
			this.mesh.remove(this.arrowHelper);
			this.arrowHelper.dispose();
		}
	}

	move(dt) {
		// make sure the ball move at a constant speed
		this.movingAngle = Math.atan2(this.body.velocity.y, this.body.velocity.x);
		var xComposant = Math.cos(this.movingAngle) * this.moveSpeed;
		var yComposant = Math.sin(this.movingAngle) * this.moveSpeed;
		this.body.velocity.x = xComposant;
		this.body.velocity.y = yComposant;
		this.body.velocity.z = 0; // make sure the ball doesn't move up or down
		// Making a ball rotate in the direction it is moving
		var xRot =  -this.body.velocity.y/4500; // control the rotation speed
		var yRot =  this.body.velocity.x/500;
		this.mesh.rotation.x += xRot;
		this.mesh.rotation.y += yRot;
		// this.body.angularVelocity.set(xRot, yRot, 0);
	}

	updateMeshPosAndRot() {
		this.mesh.position.copy(this.body.position);
		// this.mesh.quaternion.copy(this.body.quaternion);
	}

	update(dt) {
		this.move(dt);
		this.updateMeshPosAndRot();
		// increase the speed
		this.moveSpeed += 2/100;

	}

}
