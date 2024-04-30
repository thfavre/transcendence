import * as THREE from 'three';
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { RenderPass} from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';


import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as CANNON from 'cannon-es';
import CannonDebugger from 'cannon-es-debugger';

// import {Ball} from './Ball.js';
import Versus from './Versus.js';
import Menu from './Menu.js';
import * as constants from './constants.js';
import { VelocityShader } from 'three/examples/jsm/Addons.js';



const fontLoader = new FontLoader();
// Define a function to load the font
function loadFont(e) {
  return new Promise((resolve, reject) => {
    fontLoader.load(
      // Path to your font file
      'assets/fonts/Gugi_Regular.json',
      (font) => {
        // Font loaded successfully
        resolve(font);
      },
      (onLoad) => {
        // console.log('Font loading:', (onLoad.loaded / onLoad.total * 100).toFixed(2) + '%');
      },
      (onError) => {
        reject(new Error('Failed to load font'));
      }
    );
  });
}

// load fonts and then start the game
function init(humanPlayerNb, AIPlayerNb, gameMode="versus", debug=false, callback) {
	Promise.all([loadFont(), /* Load other assets here */])
  		.then((values) => {
    		const font = values[0]; // Access the loaded font

    		// Start your game logic here
			main(humanPlayerNb, AIPlayerNb, gameMode, font, debug, callback);
  		})
  		.catch((error) => {
    		console.error('Error loading font or assets:', error);
		});
}

function main(humanPlayerNb, AIPlayerNb, gameMode, font, debug, callback) {
	// Canvas
	const canvas = document.querySelector('#webgl');

	// Sizes
	const sizes = {
		width: 1000,
		height: 800
	}

	// Scene
	const scene = new THREE.Scene();
	scene.background = new THREE.Color('#000000');
	// scene.background = constants.textureLoader.load("assets/textures/space.jpg");
	if (constants.DEBUG) {
		const axesHelper = new THREE.AxesHelper(10);
		scene.add(axesHelper);
	}
	// scene background


	// Camera
	const camera = new THREE.PerspectiveCamera( 90, sizes.width / sizes.height, 0.1, 10000);
	scene.add( camera );


	// Renderer
	const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
	renderer.setSize( sizes.width, sizes.height );
	document.body.appendChild( renderer.domElement );
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.VSMShadowMap;
	renderer.toneMapping = THREE.CineonToneMapping; // ReinhardToneMapping
	renderer.toneMappingExposure = 1.5;
	renderer.setPixelRatio(window.devicePixelRatio);

	// postprocessing
	const renderScene = new RenderPass(scene, camera);
	const composer = new EffectComposer(renderer);
	composer.addPass(renderScene);
	// bloom
	const bloomPass = new UnrealBloomPass(new THREE.Vector2(sizes.width, sizes.height), 0.3, 0.08, 0.5);
	composer.addPass(bloomPass);
	// ouputPass
	const outputPass = new OutputPass(scene, camera);
	composer.addPass(outputPass);




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

	// Keys
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


	// ------- Creation
	var pongGame = new Versus(scene, physicsWorld, camera, font, humanPlayerNb, AIPlayerNb);
	// 	menu = new Menu(scene, physicsWorld, camera, pongGame, font);

	// Main Loop
	function gameLoop() {
		// controls.update();
		if (!pongGame.update(keysdown, keysJustPressed)){
			callback(pongGame);
			return;
		}


		// phsyics
		physicsWorld.fixedStep(1/constants.FPS);
		if (constants.DEBUG)
			cannonDebugger.update();

		renderer.render( scene, camera );
		composer.render();
		keysJustPressed = [];
		window.requestAnimationFrame( gameLoop );
	}


	// function init(font)
	// {
	// 	pongGame = new Versus(scene, physicsWorld, camera, font);
	// 	menu = new Menu(scene, physicsWorld, camera, pongGame, font);
	// 	animateMenu();

	// }

	// ------- Update
	// camera.position.z = 100;


	// function animateMenu() {
	// 	if (menu.update(keysdown, keysJustPressed) == true)
	// 		animateGame();
	// 	else
	// 		window.requestAnimationFrame( animateMenu );

	// 	renderer.render( scene, camera );
	// 	composer.render();
	// 	keysJustPressed = [];

	// }

	// function animateGame() {
	// 	window.requestAnimationFrame( animateGame );
	// 	// controls.update();
	// 	pongGame.update(keysdown);


	// 	// phsyics
	// 	physicsWorld.fixedStep(1/constants.FPS);
	// 	if (constants.DEBUG)
	// 		cannonDebugger.update();

	// 	renderer.render( scene, camera );
	// 	composer.render();
	// 	keysJustPressed = [];

	// }
	gameLoop();
}




init(2, 0, 'versus', true, (game) => {
	console.log('Game is over', game);
	game.time;
});
