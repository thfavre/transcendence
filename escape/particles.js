import * as THREE from 'three';
import * as constants from './constants.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';



export default class ParticlesSystem {
	constructor(scene) {
		this.scene = scene;
		this._particles = [];
	}

	/** Returns true frequency times per seconds in average*/
	triggerPulse(dt, frequency) {
		return Math.random() < frequency*dt;
	}

	/** Returns true frequency times per seconds in average*/
	static triggerPulse(dt, frequency) {
		return Math.random() < frequency*dt;
	}

	addParticle(x, y, z, type) {
		// console.log('adding particle', type.name);
		this._particles.push(new type({scene: this.scene, x: x, y: y, z: z}));
	}

	update(dt) {
		// console.log('updating particles');
		for (var particle of this._particles) {
			if (particle.shouldRemove()) {
				this.scene.remove(particle.mesh);
				this._particles.splice(this._particles.indexOf(particle), 1);
				continue;
			}
			particle.update(dt);
		}
	}
}

class Particle {
	constructor({scene, x, y, z}) {
		this.scene = scene;
		this.position = new THREE.Vector3(x, y, z);
	}
	shouldRemove() {
		throw new Error('Not implemented');
	}

	update(dt) {
		throw new Error('Not implemented');
	}
}

export class SnowParticle extends Particle {
	// static model = null;

	// static async loadModel() {
	// 	const loader = new GLTFLoader(); // Assuming you're using GLTFLoader
	// 	loader.load('assets/models/Snowflake.glb', (gltf) => {
	// 		SnowParticle.model = gltf.scene;
	// 		SnowParticle.model.scale.set(0.4, 0.4, 0.4);
	// 		// add some lights

	// 	});
	// 	// this.model.scene.scale.set(21, 21, 21);
	// 	console.log('model loaded');
	//   }

	constructor({scene, x, y, z}) {
		// if (!SnowParticle.model)
		// 	SnowParticle.loadModel();
		var randomOffsetX = Math.random() - 0.5;
		var randomOffsetY = Math.random() - 0.5;
		super({scene: scene, x: x+randomOffsetX, y: y+randomOffsetY, z: z});
		this.velocity = new THREE.Vector3(0, 0, -0.3);
		var min = 0.04,
        	max = 0.1,
        	radius = Math.random() * (max - min) + min;
		this.mesh = new THREE.Mesh(new THREE.SphereGeometry(radius), new THREE.MeshBasicMaterial({color: '#ffffff'}));
		this.mesh.position.copy(this.position);
		this.mesh.castShadow = true;
		scene.add(this.mesh);
		// var clone = SnowParticle.model.clone();
		// // rotation
		// clone.rotation.x = Math.random() * Math.PI;
		// clone.rotation.y = Math.random() * Math.PI;
		// clone.rotation.z = Math.random() * Math.PI;
		// this.mesh.add(clone);

	}
	shouldRemove() {
		return this.position.z <= -0.5;
	}

	move(dt) {
		this.position.add(this.velocity.clone().multiplyScalar(dt));
		var c = this.position.clone();
		c.x += Math.sin(this.position.z*4) * 0.1;
		c.y += Math.cos(this.position.z*5) * 0.1;
		this.mesh.position.copy(c);

	}

	update(dt) {
		this.move(dt);
	}

}
// SnowParticle.loadModel();


export class LightAbsorbedParticle extends Particle {
	constructor({scene, x, y, z}) {
		var min = -0.4,
        	max = 0.4;
        x += Math.random() * (max - min) + min;
		y += Math.random() * (max - min) + min;
		z += Math.random() * (max - min) + min;

		super({scene: scene, x: x, y: y, z: z});
		this.mesh = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 4), new THREE.MeshBasicMaterial({color: '#fff376'}));
		this.mesh.position.copy(this.position);
		scene.add(this.mesh);
		this.maxBlackDots = 40;
		this.currentBlackDots = 0;
	}
	shouldRemove() {
		return this.mesh.scale.x <= 0.1;
	}

	decreaseLightIntensity(dt) {
	// change progressivly the color to black
	// console.log(this.mesh.material.color.getRGB())
	// var currentColor = this.mesh.material.color.getRGB();
	// this.mesh.material.color = newColor;
	// this.mesh.material.color = this.mesh.material.color.getHex() - 0x010101;
	}

	decreaseRadius(dt) {
		this.mesh.scale.x -= dt;
		this.mesh.scale.y -= dt;
		this.mesh.scale.z -= dt;
	}

	spawnBlackDots(dt){
		if (this.currentBlackDots >= this.maxBlackDots)
			return;
		if (ParticlesSystem.triggerPulse(dt, 20)) {
			this.currentBlackDots += 1;
			const radius = Math.random() * 0.1 + 0.01;
			var black = new THREE.Mesh(new THREE.SphereGeometry(radius, 8, 4), new THREE.MeshBasicMaterial({color: '#000000'}));
			black.position.x += Math.random() - 0.5;
			black.position.y += Math.random() - 0.5;
			black.position.z += Math.random() - 0.5;
			this.mesh.add(black);
		}

	}


	move(dt) {
		// this.position.add(this.velocity.clone().multiplyScalar(dt));
		// this.mesh.position.copy(this.position);
	}

	update(dt) {
		this.decreaseLightIntensity(dt);
		this.decreaseRadius(dt);
		this.move(dt);
		this.spawnBlackDots(dt);

	}
}


export class DazedParticle extends Particle {

	static spriteUrls = [
		'assets/star.png',
		'assets/star.png',
		'assets/star.png',
		'assets/planet.png',
		'assets/exclamation.png',
		'assets/interogation.png',
	];

	constructor({scene, x, y, z, orbitRadius=0.7, orbitSpeed=Math.PI*2/1.5, lifeTime=2, startScale=0.5}) {
		super({scene: scene, x: x, y: y, z: z});
		this.orbitRadius = orbitRadius;
		this.orbitSpeed = orbitSpeed; // in radians per second
		this.time = 0;
		this.lifeTime = lifeTime; // in seconds
		this.startScale = startScale;
		this.angleOffset = Math.random() * Math.PI * 2;

		const map = new THREE.TextureLoader().load( DazedParticle.spriteUrls[Math.floor(Math.random()*DazedParticle.spriteUrls.length)] );
		const material = new THREE.SpriteMaterial( { map: map } );

		this.sprite = new THREE.Sprite( material );
		this.sprite.scale.set(this.startScale, this.startScale, 0);
		this.sprite.position.copy(this.position);
		scene.add( this.sprite );
		this.mesh = this.sprite;

	}
	shouldRemove() {
		return this.time >= this.lifeTime;
	}

	scaleDown() {
		var completion = this.time/this.lifeTime;
		this.sprite.scale.set(this.startScale*(1-completion)+0.1, this.startScale*(1-completion)+0.1, 0);
	}

	move(dt) {
		this.time += dt;
		this.sprite.position.x = Math.sin(this.time * this.orbitSpeed+this.angleOffset) * this.orbitRadius;
		this.sprite.position.y = Math.cos(this.time * this.orbitSpeed+this.angleOffset) * this.orbitRadius;
		this.sprite.position.x += this.position.x;
		this.sprite.position.y += this.position.y;

	}

	update(dt) {
		this.move(dt);
		this.scaleDown()
	}
}
