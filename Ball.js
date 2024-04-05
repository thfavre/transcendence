import * as THREE from 'three';
import * as CANNON from 'cannon-es';


export default class Ball {
	constructor(scene, physicsWorld) {
		this.radius = 3;
		const geometry = new THREE.SphereGeometry(this.radius, 16, 16);
		const material = new THREE.MeshNormalMaterial();
		this.mesh = new THREE.Mesh(geometry, material);
		scene.add(this.mesh);

		this.moveSpeed = 40;
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

		// this.direction = new THREE.Vector3(1, 1);
		// ---- Helpers ----
		var axe = new THREE.AxesHelper(10);
		axe.renderOrder = 2;
		this.mesh.add(axe);

	}

	move(dt) {
		// make sure the ball move at a constant speed
		this.movingAngle = Math.atan2(this.body.velocity.y, this.body.velocity.x);
		var xComposant = Math.cos(this.movingAngle) * this.moveSpeed;
		var yComposant = Math.sin(this.movingAngle) * this.moveSpeed;
		this.body.velocity.x = xComposant;
		this.body.velocity.y = yComposant;

	}

	update(dt) {
		this.move(dt);
		// update the mesh position and rotation
		this.mesh.position.copy(this.body.position);
		this.mesh.quaternion.copy(this.body.quaternion);
		// icrease the move speed by 1 each second
		this.moveSpeed += 1/70;

	}

}
