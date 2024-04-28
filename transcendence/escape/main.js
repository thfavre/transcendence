import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import * as constants from './constants.js';
import Tournement from './Tournement.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
// import Game from './Game.js';

// const loader = new FontLoader();
// loader.load( 'assets/fonts/Gugi_Regular.json', ( font ) => {
// 	console.log("Font loaded", font);
// 	FONT = font;
// });


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
        console.log('Font loading:', (onLoad.loaded / onLoad.total * 100).toFixed(2) + '%');
      },
      (onError) => {
        reject(new Error('Failed to load font'));
      }
    );
  });
}


// load fonts and then start the game
function init(playersNb, gameToWin, debug=false, callback) {
	Promise.all([loadFont(), /* Load other assets here */])
  		.then((values) => {
    		const font = values[0]; // Access the loaded font

    		// Start your game logic here
			main(playersNb, gameToWin, font, debug, callback);
  		})
  		.catch((error) => {
    		console.error('Error loading font or assets:', error);
		});
}

function main(playersNb, gameToWin, font, debug, callback) {
	constants.setDegub(debug);
	if (constants.DEBUG) {
		console.log('Debug mode');
	}

	// Canvas
	const canvas = document.querySelector('canvas.webgl');

	// Sizes
	const sizes = {
		width: 1000,
		height: 800
	}

	// Scene
	const scene = new THREE.Scene();
	scene.background = new THREE.Color('#444444');
	// const textureLoader = new THREE.TextureLoader();
	// scene.background = textureLoader.load("assets/face.jpg");
	if (constants.DEBUG) {
		const axesHelper = new THREE.AxesHelper(10);
		scene.add(axesHelper);
	}


	// Camera
	const camera = new THREE.PerspectiveCamera( 90, sizes.width / sizes.height, 0.1, 300);
	scene.add( camera );
	if (constants.DEBUG)
		camera.position.z = 40;

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


	// Lights
	const ambientLight = new THREE.AmbientLight(0xffffff, constants.ambientLightIntensity);
	scene.add(ambientLight);

	var directionalLight = new THREE.DirectionalLight( '#ffffff', constants.directionalLightIntensity);
	directionalLight.position.set(-2, -2, 14);
	directionalLight.shadow.camera.near = 8;
	directionalLight.shadow.camera.far = 26;
	directionalLight.shadow.camera.top = 40;
	directionalLight.shadow.camera.bottom = -5;
	directionalLight.shadow.camera.left = -2;
	directionalLight.shadow.camera.right = 60;
	directionalLight.castShadow = true;
	directionalLight.shadow.mapSize.width = 1024*2;
	directionalLight.shadow.mapSize.height = 1024*2;
	scene.add(directionalLight);
	if (constants.DEBUG) {
		scene.add(new THREE.CameraHelper(directionalLight.shadow.camera))
		scene.add(new THREE.DirectionalLightHelper(directionalLight, 3));
	}

	// Controls
	if (constants.DEBUG)
		new OrbitControls(camera, renderer.domElement);


	// Keys
	var keysJustPressed = [];
	document.addEventListener("keydown", onDocumentKeyDown, false);
	function onDocumentKeyDown(event) {
		var keyCode = event.which;
		keysJustPressed.push(keyCode);
	};

	// Creation
	const tournement = new Tournement(scene, camera, font, gameToWin, playersNb);


	// Main loop
	function gameLoop() {
		window.requestAnimationFrame(gameLoop);
		tournement.update(keysJustPressed);
		renderer.render(scene, camera);
		keysJustPressed = [];
		callback(tournement);
	}

	gameLoop();

}

init(4, 2, false, (tournement) => {
	if (tournement.isOver) {
		console.log('Tournement is over', tournement.scores);
	}
});


window.gameEscape = init;

