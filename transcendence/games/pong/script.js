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
import Tournament from './Tournament.js';



const fontLoader = new FontLoader();
// Define a function to load the font
function loadFont(e) {
  return new Promise((resolve, reject) => {
    fontLoader.load(
      // Path to your font file
      'pong/assets/fonts/Gugi_Regular.json',
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
export default function init(humanPlayersName, AIPlayerNb, gameMode="versus", selector, debug=false, callback) {
	constants.setDebug(debug);
	Promise.all([loadFont(), /* Load other assets here */])
  		.then((values) => {
    		const font = values[0]; // Access the loaded font

    		// Start your game logic here
			main(humanPlayersName, AIPlayerNb, gameMode, selector, font, callback);
  		})
  		.catch((error) => {
    		console.error('Error loading font or assets:', error);
		});
}

function main(humanPlayersName, AIPlayerNb, gameMode, selector, font, callback) {
	// Canvas
	const canvas = document.querySelector(selector);

	// Scene
	const scene = new THREE.Scene();
	scene.background = new THREE.Color('#000000');
	if (constants.DEBUG) {
		const axesHelper = new THREE.AxesHelper(10);
		scene.add(axesHelper);
	}
	// scene background


	// Camera
	const camera = new THREE.PerspectiveCamera( 90, canvas.clientWidth / canvas.clientHeight, 0.1, 10000);
	scene.add( camera );


	// Renderer
	const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
	// renderer.setSize( sizes.width, sizes.height);
	// document.body.appendChild( renderer.domElement );
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
	const bloomPass = new UnrealBloomPass(new THREE.Vector2(canvas.clientWidth, canvas.clientHeight), 0.3, 0.08, 0.5);
	composer.addPass(bloomPass);
	// ouputPass
	const outputPass = new OutputPass(scene, camera);
	composer.addPass(outputPass);




	// resize
	window.addEventListener("resize", onCanvasResize, false);
  	function onCanvasResize() {
		var width = canvas.clientWidth;
		var height = canvas.clientHeight;
		if (width == 0 || height == 0) {
			width = 1000;
			height = 800;
		}
		// update camera
		camera.aspect = width / height;
		camera.updateProjectionMatrix();
		// update bloom
		bloomPass.setSize(width, height, false);
		// update composer
		composer.setSize(width, height);
		// update outputPass
		outputPass.setSize(width, height);
		// update renderer
		renderer.setSize(width, height, false);
  	}
  	onCanvasResize(); // call it once to set canvas size




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
	if (gameMode == 'versus')
		var pongGame = new Versus(scene, physicsWorld, camera, font, humanPlayersName, AIPlayerNb);
	else if (gameMode == 'tournament')
		var pongGame = new Tournament(scene, physicsWorld, camera, font, humanPlayersName, AIPlayerNb);
	else
		throw new Error('Unknown game mode: ' + gameMode, 'Available modes are: versus, tournament');
	// 	menu = new Menu(scene, physicsWorld, camera, pongGame, font);

	// Main Loop
	const clock = new THREE.Clock();
	function gameLoop() {
		var dt = clock.getDelta();
		// phsyics
		physicsWorld.step(dt);
		if (constants.DEBUG)
			cannonDebugger.update();

		if (!pongGame.update(dt, keysdown, keysJustPressed)){
			callback(pongGame);
			return;
		}



		renderer.render( scene, camera );
		composer.render();
		keysJustPressed = [];
		window.requestAnimationFrame( gameLoop );
	}


	gameLoop();
}



// versus : playerNb, iaNb, {nom1, guest1, guest2}, debug, callback
// tournament : playerNb, 0, {nom1, nom2, noms} ,debug, callback


// init(['Tjom','Bob'], 1, 'tournament', '#webgl', false, (game) => {
// 	console.log('Game is over', game);
// 	game.time;
// });
