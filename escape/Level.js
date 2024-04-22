import * as THREE from 'three';
import * as maps from './maps/maps.js';
import Cube from './Cube.js';
import Player from './Player.js';

import MapData from './MapData.js';


export default class Level {
	constructor(scene, mapArray) {
		this.scene = scene;
		this.mapData = new MapData(mapArray);
		this.playersNb = 4;

		[this.walls, this.players] = this.loadMap(this.mapData);
		// spawn animation

		this.activateSpawnAnimation();
	}

	activateSpawnAnimation(duration=4) {
		this.spawnAnimationFallHeight = 10;
		for (let i = 0; i < this.walls.length; i++) {
			let wall = this.walls[i];
			wall.mesh.visible = false;
			wall.mesh.position.z = this.spawnAnimationFallHeight;
			wall.mesh.material.opacity = 0;

		}
		this.showSpawnAnimation = true;
		this.currentSpawnAnimationTime = 0;
		this.spawnAnimationDuration = duration;
		// put all players invisible
		for (let player of this.players) {
			player.mesh.visible = false;
		}
	}

	desactivateSpawnAnimation() {
		this.showSpawnAnimation = false;
		for (let player of this.players) {
			player.mesh.visible = true;
		}
	}

	spawnAnimation(dt) {
		var haveAllWallsFallen = true;
		// make walls fall
		if (this.showSpawnAnimation) {
			for (let i = 0; i < this.walls.length; i++) {
				if (this.currentSpawnAnimationTime < i/this.walls.length*this.spawnAnimationDuration)
					continue;
				let wall = this.walls[i];
				wall.mesh.position.z -= 0.15;
				if (wall.mesh.position.z < 0)
					wall.mesh.position.z = 0;
				wall.mesh.material.opacity = 1 - wall.mesh.position.z/this.spawnAnimationFallHeight;

				if (wall.mesh.position.z > 0)
					haveAllWallsFallen = false;
			}
		}
		// check if the spawn animation is over
		if (this.currentSpawnAnimationTime > this.spawnAnimationDuration) {
			if (haveAllWallsFallen)
				this.desactivateSpawnAnimation();
		} else { // make walls appear
			this.currentSpawnAnimationTime += dt;
			for (let i = 0; i < this.walls.length; i++) {
				let wall = this.walls[i];
				wall.mesh.visible = this.currentSpawnAnimationTime > i/this.walls.length*this.spawnAnimationDuration;
				wall.mesh.material.transparent = true;
				// console.log(wall.mesh.position.z);
			}
		}
	}

	loadMap(mapData) {
		const walls = [];
		const players = [];
		var mapHeight = mapData.getHeight();
		var mapWidth = mapData.getWidth();
		for (let y = 0; y < mapHeight; y++) {
			for (let x = 0; x < mapWidth; x++) {
				var cell = mapData.getCell(x, y);
				var color = null;
				if (cell === maps.RED)
					color = new THREE.Color(1, 0, 0);
				else if (cell === maps.ORANGE)
					color = new THREE.Color(1, 0.5, 0);
				else if (cell === maps.YELLOW)
					color = new THREE.Color(1, 1, 0);
				else if (cell === maps.GREEN)
					color = new THREE.Color(0, 1, 0);
				else if (cell === maps.UNKNOWN)
					color = new THREE.Color(0.6, 0.2, 0.6);
				else if (cell === maps.UNKNOWN2)
					color = new THREE.Color(0, 0.2, 1);
				else if (cell === maps.LIGHTBLUE)
					color = new THREE.Color(0, 1, 1);
				else if (cell === maps.GRAY)
					color = new THREE.Color(0.5, 0.5, 0.5);
				else if (cell === maps.BLACK)
					color = new THREE.Color(0, 0, 0);

				if (color) {
					const wall = new Cube({scene: this.scene, x: x, y: y, color: color});
					walls.push(wall);
				}
				else if (cell === maps.PLAYER) {
					for (let i = 0; i < this.playersNb; i++) {
						const player = new Player({scene: this.scene, x: x, y: y, presetNb: i});
						players.push(player);
					}
				}
			}
		}
		// for (let y = 0; y < mapArray.length; y++) {
		// 	for (let x = 0; x < mapArray[y].length; x++) {
		// 		if (mapArray[y][x] === maps.WALL) {
		// 			const wall = new Cube({scene: this.scene, x: x, y: y, color: 0x00c0c0+x*20+y*20});
		// 			walls.push(wall);
		// 		}
		// 		else if (mapArray[y][x] === maps.PLAYER) {
		// 			const player = new Player({scene: this.scene, x: x, y: y});
		// 			players.push(player);
		// 		}
		// 	}
		// }
		return [walls, players];
	}

	update(dt, keysJustPressed) {
		this.spawnAnimation(dt);
		for (let player of this.players) {
			player.update(dt, keysJustPressed, this.mapData);
		}
	}
}
