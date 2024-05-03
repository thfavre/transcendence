import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as constants from './constants.js';


export default class Ball {
	constructor(scene, physicsWorld) {
		var radius = 4;
		const geometry = new THREE.SphereGeometry(radius, 20, 14);
		// no material
		const material = new THREE.MeshStandardMaterial({ color: 0x000000 });
		this.mesh = new THREE.Mesh(geometry, material);
		this.mesh.castShadow = true;
		scene.add(this.mesh);
		// scene.add(constants.modelBall);
		const loader = new GLTFLoader();
		loader.load(constants.ballsModel, (gltf) => { // ! TODO do this in static
			const model = gltf.scene;
			model.scale.set(radius, radius, radius);
			this.mesh.material.colorWrite = false;
			this.mesh.material.depthWrite = false;
			this.mesh.add(model);
			this.mesh.add(model);
		}
		);


		this.moveSpeed = 10000; //3000
		this.acceleration = 250;
		this.maxMoveSpeed = 100000;

		this.movingAngle = 0; // will be updated in the move function // TODO! change method of doing this

		// ---- Physics ----
		this.body = new CANNON.Body({
			mass: 5,
			shape: new CANNON.Sphere(radius),
			position: new CANNON.Vec3(0, 0, radius),
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

	isTooFar() {
		const pos = this.body.position;
		const tooFar = constants.FIELD_DIAMETER/1.5 + 10;
		if (pos.x > tooFar || pos.x < -tooFar || pos.y > tooFar || pos.y < -tooFar)
			return true;
		return false;
	}

	move(dt) {
		// make sure the ball move at a constant speed
		this.movingAngle = Math.atan2(this.body.velocity.y, this.body.velocity.x);
		var xComposant = Math.cos(this.movingAngle) * this.moveSpeed * dt;
		var yComposant = Math.sin(this.movingAngle) * this.moveSpeed * dt;
		this.body.velocity.x = xComposant;
		this.body.velocity.y = yComposant;
		this.body.velocity.z = 0; // make sure the ball doesn't move up or down
		// Making a ball rotate in the direction it is moving
		var xRot =  -this.body.velocity.y/500; // control the rotation speed
		var yRot =  this.body.velocity.x/500;
		this.mesh.rotation.x += xRot;
		this.mesh.rotation.y += yRot;
		// this.body.angularVelocity.set(xRot, yRot, 0);
	}

	updateMeshPosAndRot() {
		this.mesh.position.copy(this.body.position);
		// this.mesh.quaternion.copy(this.body.quaternion);
	}

	increaseMoveSpeed(dt) {
		this.moveSpeed += this.acceleration * dt;
		if (this.moveSpeed > this.maxMoveSpeed)
			this.moveSpeed = this.maxMoveSpeed;
	}

	update(dt) {
		this.updateMeshPosAndRot();
		this.move(dt);
		this.increaseMoveSpeed(dt);

	}

}
