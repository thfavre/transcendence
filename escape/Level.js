import * as THREE from 'three';
import * as maps from './maps/maps.js';
import Cube from './Cube.js';
import Player from './Player.js';

import MapData from './MapData.js';
import * as powerups from './powerups.js';



export default class Level {
	constructor(scene, mapArray, playersNb, particlesSystem) {
		this.scene = scene;
		this.mapData = new MapData(mapArray);
		this.particlesSystem = particlesSystem;
		[this.walls, this.players, this.powerups] = this.loadMap(this.mapData, playersNb);

		// this.activateSpawnAnimation();
		this.createPlane()
	}

	createPlane(walls) {
		const geometry = new THREE.PlaneGeometry(100, 100);
		const material = new THREE.MeshStandardMaterial({color: 0xffffff, side: THREE.DoubleSide});
		const plane = new THREE.Mesh(geometry, material);
		plane.position.z = -0.5;
		plane.receiveShadow = true;
		this.scene.add(plane);

	}

	activateSpawnAnimation(duration=4) {
		this.spawnAnimationFallHeight = 10;
		for (let i = 0; i < this.walls.length; i++) {
			let wall = this.walls[i];
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
		if (!this.showSpawnAnimation)
			return;
		var haveAllWallsFallen = true;
		// make walls fall
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

	loadMap(mapData, playersNb) {
		const walls = [];
		const players = [];
		const _powerups = [];
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
					for (let i = 0; i < playersNb; i++) {
						const player = new Player({scene: this.scene, x: x, y: y, presetNb: i, particlesSystem: this.particlesSystem});
						players.push(player);
					}
				} else if (cell === maps.POWERUP_SLOW) {
					_powerups.push(new powerups.SlowPowerup({scene: this.scene, x: x, y: y, players: players, particlesSystem: this.particlesSystem}));
				} else if (cell === maps.POWERUP_LIGHTSDOWN) {
					_powerups.push(new powerups.LightsDownPowerup({scene: this.scene, x: x, y: y, players: players, particlesSystem: this.particlesSystem}));
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
		return [walls, players, _powerups];
	}

	/** Stack players on top of each other when they are on the same position */
	stackPlayers(dt) {
		for (let i=0; i<this.players.length; i++)
		{
			let player1 = this.players[i];
			for (let j=i+1; j<this.players.length; j++) {
				let player2 = this.players[j];
				if (player1.mesh.position.x == player2.mesh.position.x && player1.mesh.position.y == player2.mesh.position.y) {
					if (player2.mesh.position.z < player1.mesh.position.z+player1.depth) {
						player2.mesh.position.z =  Math.min(player1.mesh.position.z+player1.depth, player2.mesh.position.z + 18 * dt);
					}
				}
			}
		}
		// make the gravity
		for (let player of this.players) {
			if (player.mesh.position.z > 0) {
				player.mesh.position.z -= 6 * dt;
				if (player.mesh.position.z < 0)
					player.mesh.position.z = 0;
			}
		}
	}

	update(dt, keysJustPressed) {
		this.spawnAnimation(dt);
		for (let player of this.players) {
			player.update(dt, keysJustPressed, this.mapData, this.powerups);
		}
		this.stackPlayers(dt);
		for (let powerup of this.powerups) {
			powerup.update(dt);
		}

	}
}
