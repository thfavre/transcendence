
import * as constants from './constants.js';
import * as THREE from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';


export default function createText({font, message, size=4, height=0.5, curveSegments=12, bevelEnabled=false, bevelThickness=1, bevelSize=0.5, bevelOffset=0, bevelSegments=1}) {
	const props = {
		font,
		size,
		height,
		curveSegments,
		bevelEnabled,
		bevelThickness,
		bevelSize,
		bevelOffset,
		bevelSegments
	};
	console.log(message)
	const textGroup = new THREE.Object3D();
	const textGeo = new TextGeometry(message, props);
	textGeo.computeBoundingBox();
	// let mat = new THREE.MeshMatcapMaterial({
		// 	// matcap: constants.matcapTexture,
		// 	color: 0x00f0ff
		// });
	let mat = [
		new THREE.MeshBasicMaterial({ color: "#3CD6EB"}), // front
		new THREE.MeshBasicMaterial({ color: "#ABEF85" }) // side
	];
	let mesh = new THREE.Mesh(textGeo, mat);

	// center the text
	const centerOffsetX = - 0.5 * (textGeo.boundingBox.max.x - textGeo.boundingBox.min.x);
	const centerOffsetY = - 0.5 * (textGeo.boundingBox.max.y - textGeo.boundingBox.min.y);
	mesh.position.x = centerOffsetX;
	mesh.position.y = centerOffsetY;

	textGroup.add(mesh);
	return textGroup;

}
