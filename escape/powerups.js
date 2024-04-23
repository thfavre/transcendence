import * as THREE from 'three';

import * as particles from './particles.js';
import Cube from './Cube.js';
import * as constants from './constants.js';

class Powerup extends Cube {
	constructor({scene, x, y, color}) {
		super({scene: scene, x: x, y: y, z: 0, width: 0.5, depth: 0.5, color: color});
		this.position = new THREE.Vector2(x, y);
	}

	update(dt) {
		this.mesh.rotation.x += dt;
		this.mesh.rotation.y += dt;
	}

	activateByPlayer(player) {
		throw new Error('Not implemented');
	}
}

export class SlowPowerup extends Powerup {
	constructor({scene, x, y, players, particlesSystem}) {
		super({scene: scene, x: x, y: y, color: 0x55aaff});
		// cast shadow
		this.players = players;
		this.particlesSystem = particlesSystem;
		// particlesSystem.addParticle(x, y, 0, particles.SnowParticle);
	}

	activateByPlayer(player) {
		console.log('Freeze powerup activated by player', player);
		for (let p of this.players) {
			if (p == player)
				continue;
			console.log('Freezing all other players');
			p.slowDuration = 5;

		}
	}

	update(dt) {
		if (this.particlesSystem.triggerPulse(dt, 3))
			this.particlesSystem.addParticle(this.position.x, this.position.y, 1.5, particles.SnowParticle);
		super.update(dt);
	}
}

export class LightsDownPowerup extends Powerup {
	constructor({scene, x, y, players, particlesSystem}) {
		super({scene: scene, x: x, y: y, color: 0x000000});
		this.scene = scene;
		this.players = players;
		this.particlesSystem = particlesSystem;
		// particlesSystem.addParticle(x, y, 0, particles.SnowParticle);
	}

	activateByPlayer(player) {
		console.log('LightsDown powerup activated by player', player);
		for (let p of this.players) {
			if (p == player)
				continue;
			// p.spotLight.intensity = 10;
			p.spotLightOffDuration = 5;

		}
		// iterate through the scene to set the intensity of the lights to 0
		for (let object of this.scene.children) {
			if (object.type == 'DirectionalLight') {
				object.intensity = 0;
			} else if (object.type == 'AmbientLight') {
				object.intensity = 0.003;
			}
		}
	}

	update(dt) {
		if (this.particlesSystem.triggerPulse(dt, 3))
			this.particlesSystem.addParticle(this.position.x, this.position.y, 0.5, particles.LightAbsorbedParticle);
		super.update(dt);
	}
}

