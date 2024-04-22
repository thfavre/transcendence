import Cube from './Cube.js';


export default class Powerup extends Cube {
	constructor({scene, x, y}) {
		super({scene: scene, x: x, y: y, z: 0, width: 0.5, depth: 0.5, color: '#ff0000'});
	}

	update(dt) {
		this.mesh.rotation.x += dt;
		this.mesh.rotation.y += dt;
	}
}
