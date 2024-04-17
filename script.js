import * as THREE from 'three';
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';


import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as CANNON from 'cannon-es';
import CannonDebugger from 'cannon-es-debugger';

// import {Ball} from './Ball.js';
import Game from './Game.js';
import Menu from './Menu.js';
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
// scene.background = new THREE.Color(0xAAAAAA);
scene.background = constants.textureLoader.load("assets/textures/space.jpg");
const axesHelper = new THREE.AxesHelper(10);
scene.add(axesHelper);
// scence background


// Camera
const camera = new THREE.PerspectiveCamera( 90, sizes.width / sizes.height, 0.1, 10000);
scene.add( camera );


// Renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
renderer.setSize( sizes.width, sizes.height );
document.body.appendChild( renderer.domElement );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.VSMShadowMap;

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
var menu;
var pongGame;
function init(font)
{
	pongGame = new Game(scene, physicsWorld, camera);
	menu = new Menu(scene, physicsWorld, camera, pongGame, font);
	animateMenu();

}

// ------- Update
// camera.position.z = 100;
var keysdown = [];
var keysJustPressed = [];
document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
	keysJustPressed.push(keyCode);
	if (keysdown.includes(keyCode))
		return;
    keysdown.push(keyCode);
};
document.addEventListener("keyup", onDocumentKeyUp, false);
function onDocumentKeyUp(event) {
	var keyCode = event.which;
	keysdown.splice(keysdown.indexOf(keyCode), 1);

};

let time = Date.now();
function animateMenu() {
	const currentTime = Date.now();
	const deltaTime = currentTime - time;
	time = currentTime;
	if (menu.update(deltaTime, keysdown, keysJustPressed) == true)
		animateGame();
	else
		window.requestAnimationFrame( animateMenu );

	renderer.render( scene, camera );
	keysJustPressed = [];

}

function animateGame() {
	window.requestAnimationFrame( animateGame );
	// controls.update();
	const currentTime = Date.now();
	const deltaTime = currentTime - time;
	time = currentTime;
	pongGame.update(deltaTime, keysdown);


	// phsyics
	physicsWorld.fixedStep(1/constants.FPS);
	// cannonDebugger.update();

	renderer.render( scene, camera );
	keysJustPressed = [];

}



// animateGame();
function loadFont()
{
	const loader = new FontLoader();
	loader.load( 'assets/fonts/BroncoPersonalUse.json', ( font ) => {
		console.log("Font loaded", font);
		init(font)
	});
}

loadFont();
