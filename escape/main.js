import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import * as constants from './constants.js';
import Game from './Game.js';




// Canvas
const canvas = document.querySelector('canvas.webgl');

// Sizes
const sizes = {
	width: 1000,
	height: 800
}

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#FFFFFF');
// const textureLoader = new THREE.TextureLoader();
// scene.background = textureLoader.load("assets/face.jpg");
if (constants.DEBUG) {
	const axesHelper = new THREE.AxesHelper(10);
	scene.add(axesHelper);
}


// Camera
const camera = new THREE.PerspectiveCamera( 90, sizes.width / sizes.height, 0.1, 10000);
scene.add( camera );
camera.position.z = 20;
// camera.position.x = 15;
// camera.position.y = 8;

// camera.rotation.z = Math.PI;

// Renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
renderer.setSize( sizes.width, sizes.height );
document.body.appendChild( renderer.domElement );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.VSMShadowMap;
// renderer.toneMapping = THREE.CineonToneMapping; // ReinhardToneMapping
// renderer.toneMappingExposure = 1.5;
renderer.setPixelRatio(window.devicePixelRatio);


// Controls
const controls = new OrbitControls(camera, renderer.domElement);


// Keys
var keysJustPressed = [];
document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
	keysJustPressed.push(keyCode);
};

// Creation
const game = new Game(scene);


// Main loop
function gameLoop() {
	window.requestAnimationFrame(gameLoop);
	game.update(keysJustPressed);
	renderer.render(scene, camera);
	keysJustPressed = [];
	controls.update();

}

gameLoop();
