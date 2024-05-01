// import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader.js';
import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';





export const FPS = 60;

// export const SEGMENTS = 3; // number of players
export const FIELD_DIAMETER = 130;


export const SKIP_PLAYER_SELECTION = true; // HumanPlayers will move with w/s

export const AI_VISION_DELAY =3; // The AI will see the ball every Xs

export var DEBUG;
export function setDebug(value) {
	DEBUG = value;
}

// textures // TODO ? put in a class? other file ..?
export const textureLoader = new THREE.TextureLoader();
// crate
export const textureCratesBaseColor = textureLoader.load("assets/textures/crate.gif");

// Metal 003 (https://3dtextures.me/)
export const textureMetalBaseColor = textureLoader.load("assets/textures/metal-003/Metal_Tiles_003_basecolor.jpg");
export const textureMetalNormalMap = textureLoader.load("assets/textures/metal-003/Metal_Tiles_003_normal.jpg");
export const textureMetalHeightMap = textureLoader.load("assets/textures/metal-003/Metal_Tiles_003_height.png");
export const textureMetalRoughnessMap = textureLoader.load("assets/textures/metal-003/Metal_Tiles_003_roughness.jpg");
export const textureMetalAmbientOcclusionMap = textureLoader.load("assets/textures/metal-003/Metal_Tiles_003_ambientOcclusion.jpg");
export const textureMetallic = textureLoader.load("assets/textures/metal-003/Metal_Tiles_003_metallic.jpg");


// model
// Basket Ball by Zsky [CC-BY] via Poly Pizza
// export const modelBasketBall = "assets/models/Basket Ball.glb";
export const ballsModel = "assets/models/balls/drone.glb";



// COLORS!!
// https://mycolor.space/?hex=%233CD6EB&sub=1
