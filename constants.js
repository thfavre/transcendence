// import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader.js';
import * as THREE from 'three';



export const FPS = 60;

export const SEGMENTS = 3; // number of players
export const FIELD_DIAMETER = 130;


export const SKIP_PLAYER_SELECTION = true; // HumanPlayers will move with w/s

export const DEBUG = true;

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
