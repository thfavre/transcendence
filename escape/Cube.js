import * as THREE from 'three';


export default class Cube {
	constructor({scene, x=0, y=0, z=0, width=1, depth=1, color='#ffffff'}) {
		this.x = x;
		this.y = y;
		this.z = z;
		this.width = width;
		this.depth = depth;
		this.color = color;

		this.mesh = this.createMesh();
		scene.add(this.mesh);


	}

	createMesh() {
		const geometry = new THREE.BoxGeometry(this.width, this.width, this.depth);
		const material = new THREE.MeshStandardMaterial({color: this.color});
		const mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(this.x, this.y, this.z);
		return mesh;
	}

}
