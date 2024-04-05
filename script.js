import * as THREE from 'three';
import { OBB } from 'three/addons/math/OBB.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as CANNON from 'cannon-es';
import CannonDebugger from 'cannon-es-debugger';

// import {Ball} from './Ball.js';
import Game from './Game.js';
import * as constants from './constants.js';


// Canvas
const canvas = document.querySelector('canvas.webgl');

// Sizes
const sizes = {
	width: 1000,
	height: 800
}

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xAAAAAA);
const axesHelper = new THREE.AxesHelper(10);
scene.add(axesHelper);

// Camera
const camera = new THREE.PerspectiveCamera( 90, sizes.width / sizes.height, 0.1, 10000);
scene.add( camera );


// Renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
renderer.setSize( sizes.width, sizes.height );
renderer.shadowMap.enabled = true;
document.body.appendChild( renderer.domElement );

// light

// plane
// const planeGeometry = new THREE.BoxGeometry(FIELD_LENGTH, FIELD_WIDTH, 5, 1, 1, 1);
// const planeMaterial = new THREE.MeshPhongMaterial({ color: '#badc58' });
// const plane = new THREE.Mesh(planeGeometry, planeMaterial);
// // plane.getVertexPosition(3, v);
// plane.translateY(0);
// scene.add(plane);
// plane.receiveShadow = true;



// ----- Physics world -----
const physicsWorld = new CANNON.World({
	gravity: new CANNON.Vec3(0, 0, 0),
	frictionGravity: 0,
	allowSleep: true,

});
// // ground
// const groundBody = new CANNON.Body({
// 	type: CANNON.Body.STATIC,
// 	// infinite geometric plane
// 	shape: new CANNON.Plane(),
// });
// physicsWorld.addBody(groundBody);


const cannonDebugger = new CannonDebugger(scene, physicsWorld);

// paddle pos

// print all vertices of the circle
// console.log(circle.geometry.getAttribute('position').l);


// Controls
const controls = new OrbitControls(camera, renderer.domElement);




// ------- Creation
const pongGame = new Game(scene, physicsWorld, camera);

// ------- Update
camera.position.z = 100;
var keysdown = [];
let time = Date.now();
function animate() {
	window.requestAnimationFrame( animate );
	// controls.update();
	const currentTime = Date.now();
	const deltaTime = currentTime - time;
	time = currentTime;
	pongGame.update(deltaTime, keysdown);


	// phsyics
	physicsWorld.fixedStep(1/constants.FPS);
	cannonDebugger.update();

	renderer.render( scene, camera );
}

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
    keysdown[keyCode] = true;
};
document.addEventListener("keyup", onDocumentKeyUp, false);
function onDocumentKeyUp(event) {
	var keyCode = event.which;
	keysdown[keyCode] = false;
};

animate();
