import * as THREE from 'three';
import * as constants from './constants.js';


function getRandomPointAnnulus(radius1, radius2) {
	// n = 50;
	const r = Math.sqrt(radius1*radius1 + (radius2*radius2 - radius1*radius1) * Math.random());
	const theta = Math.random()*Math.PI*2;
	const x = r*Math.cos(theta);
	const y = r*Math.sin(theta);
	return [x, y];
}


class Star {
	constructor() {

	}

}

export default class Background {
	constructor(scene) {
		this.scene = scene;
		this.starsNumber = 100;
		this.stars = this.createStars();
	}

	createStars() {
		const stars = new THREE.Group();
		const maxDistance = 200; // max distance from the center of the field
		const safeZoneAroundFieldBorder = 20; // will not put stars in this zone around the field

		for (let i = 0; i < this.starsNumber; i++) {
			var minDistance = safeZoneAroundFieldBorder + constants.FIELD_DIAMETER/2;
			const z = THREE.MathUtils.randFloatSpread(maxDistance * 2);
			if (z < -safeZoneAroundFieldBorder)
				minDistance = 0; // put stars below the field
			const [x, y] = getRandomPointAnnulus(minDistance, maxDistance);
			const distanceToCenter2D = Math.sqrt(x*x + y*y);
			// if (safeZoneAroundFieldBorder + constants.FIELD_DIAMETER/2 > distanceToCenter2D && z > 0
			// 		) // don't put stars above the field
			// 	continue;
			const distanceToCenter = Math.sqrt(x*x + y*y + z*z);
			const sphereRadius = THREE.MathUtils.randFloat(0.1, 0.9)
			const starGeometry = new THREE.SphereGeometry(sphereRadius, 12, 12);
			const starMaterial = new THREE.MeshBasicMaterial({ color: '#ff0000' });
			const star = new THREE.Mesh(starGeometry, starMaterial);
			star.position.set(x, y, z);
			stars.add(star);
		}

		this.scene.add(stars);
		return stars;
	}
}

