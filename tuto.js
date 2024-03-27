import * as THREE from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Sizes
const sizes = {
	width: 800,
	height: 600
}

// Screne
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xAAAAAA);
// Camera
const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height);
scene.add( camera );
// Renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
renderer.setSize( sizes.width, sizes.height );
document.body.appendChild( renderer.domElement );

// Object
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshPhongMaterial( { color: 0x44aa88} );
// A mesh is a combination of a geometry (the shape), a material (how it looks) and position/orientation/scale
const cube = new THREE.Mesh( geometry, material);
scene.add( cube );


// light
var light = new THREE.DirectionalLight( 0xFFFFFF, 3);
light.position.set(-1, 2, 4 );
scene.add(light);

// glowy sphere
const sphere = new THREE.Mesh(
	new THREE.SphereGeometry(0.5, 16, 16),
	new THREE.MeshPhongMaterial({ color: 0xff0000 })
);
sphere.position.x = 2;
scene.add(sphere);
// cube.add(sphere); // we can add the sphere to the cube, so it moves with the cube

camera.position.z = 5;

let time = Date.now();
function animate() {
	window.requestAnimationFrame( animate );
	const currentTime = Date.now();
	const deltaTime = currentTime - time;
	time = currentTime;
	console.log(deltaTime);

	cube.rotation.x += 0.001 * deltaTime;
	cube.rotation.y += 0.001 * deltaTime;
	// cube.position.x += 0.001 * deltaTime;
	// change the color when pressing space


	// camera.lookAt( cube.position );
	renderer.render( scene, camera );
}

// check if the user has pressed the space key
document.addEventListener('keydown', (event) => {
	if (event.code === 'Space') {
		cube.material.color.setHex(0xff0000);
	}
});

animate();
