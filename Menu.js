import * as THREE from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

import * as CANNON from 'cannon-es';
import Player from './Player.js';
import HumanPlayer from './HumanPlayer.js';
import createText from './createText.js';
import * as constants from './constants.js';



class PlayerCreator {
	constructor(scene, physicsWorld, camera, game, playerNb, font) {
		this.scene = scene;
		this.physicsWorld = physicsWorld;
		this.camera = camera;
		this.game = game;
		this.playerNb = playerNb;
		this.font = font;

		this.player = this.game.createHumanPlayer(playerNb);
		this.game.addPlayer(this.player);
		this.player.paddle.mesh.position.z = 230; // 230

		this.fallSpeed = 0;
		this.gravity = 9.8;


		// this.keyUp = null;
		// this.keyDown = null;

		// text
		// const loader = new FontLoader();
		// loader.load( 'assets/fonts/Bronco_Regular.json', ( font ) => {
		// 	const geometry = new TextGeometry( 'Player ' + (playerNb+1), {
		// 		font: font,
		// 		size: 10,
		// 		height: 5,
		// 	} );
		// 	const textMesh = new THREE.Mesh( geometry, [
		// 		new THREE.MeshPhongMaterial( { color: 0xffffff } ), // front
		// 		new THREE.MeshPhongMaterial( { color: 0xffffff } ) // side
		// 	] );
		// 	textMesh.castShadow = true;
		// 	textMesh.position.x = -30;
		// 	textMesh.position.y = 20;
		// 	textMesh.position.z = 10;
		// 	this.scene.add( textMesh );
		// }

		// );
		// let text = "Player " + (playerNb+1) + ", press a key to go up";
		// this.textObj = createText({font: font, message: text});
		// this.textObj.position.z = 250;
		// this.textObj.position.y += 30;
		// scene.add(this.textObj);
		// this.textObj = null;



	}

	setText({text, font=this.font, x=0, y=0, z=0}) {
		if (this.currentText == text)
			return;
		this.scene.remove(this.textObj);
		this.textObj = createText({font: font, message: text});
		this.textObj.position.x = x;
		this.textObj.position.y = y;
		this.textObj.position.z = z;
		this.scene.add(this.textObj);
		this.currentText = text;
	}

	ifKeyValid(keyCode) {
		return keyCode >= 65 && keyCode <= 90 || keyCode >= 37 && keyCode <= 40;
	}

	askUpKey(keysJustPressed) {
		this.setText({
			text: "Player " + (this.playerNb+1) + ", press a key to go UP",
			x: 0, y: 22, z: 270
		});
		if (keysJustPressed.length > 0 && keysJustPressed[0] != this.keyDown && this.ifKeyValid(keysJustPressed[0]))
		{
			this.keyUp = keysJustPressed[0];
			this.player.setUpKeyCode(this.keyUp);
		}
	}

	askDownKey(keysJustPressed) {
		this.setText({
			text: "Player " + (this.playerNb+1) + ", press a key to go DOWN",
			x: 0, y: 22, z: 270
		});
		if (keysJustPressed.length > 0 && keysJustPressed[0] != this.keyUp && this.ifKeyValid(keysJustPressed[0]))
		{
			this.keyDown = keysJustPressed[0];
			this.player.setDownKeyCode(this.keyDown);

		}
	}

	askPaddleMaterial(keysJustPressed) {
		this.setText({
			text: "Player " + (this.playerNb+1) +
					", choose your paddle color (" + String.fromCharCode(this.keyDown) + "/"+String.fromCharCode(this.keyUp) + ")",
				x: 0, y: 26, z: 263});
		// draw the previous and next paddle
		// if (!this.nextPaddleMesh || this.nextPaddleMesh.material != this.player.paddle.getNextMaterial())
		// {
		// 	if (this.nextPaddleMesh)
		// 		this.scene.remove(this.nextPaddleMesh);
		// 	this.nextPaddleMesh = this.player.paddle.mesh.clone();
		// 	this.nextPaddleMesh.material = this.player.paddle.getNextMaterial();
		// 	this.nextPaddleMesh.position.z += 10;
		// 	// this.nextPaddleMesh.position.y -= 10;
		// 	this.scene.add(this.nextPaddleMesh);
		// }

		if (keysJustPressed.length > 0)
		{
			if (keysJustPressed.includes(this.keyUp))
				this.player.paddle.changeMaterial(1);
			else if (keysJustPressed.includes(this.keyDown))
				this.player.paddle.changeMaterial(-1);
			else if (keysJustPressed[0] == 13)
			{
				this.color = true;
			}
		}
	}

	makePaddleFall(dt) {
		this.scene.remove(this.textObj);
		if (this.player.paddle.mesh.position.z > this.player.paddle.body.position.z)
		{
			this.player.paddle.mesh.position.z -= this.fallSpeed;
			this.fallSpeed += this.gravity * dt/1000;
			return true;
		}
		this.player.paddle.mesh.position.z = this.player.paddle.body.position.z;
		return false;
	}

	update(dt, keysJustPressed)
	{
		if (this.keyUp == null)
			this.askUpKey(keysJustPressed);
		else if (this.keyDown == null)
			this.askDownKey(keysJustPressed);
		else if (!this.color)
			this.askPaddleMaterial(keysJustPressed);
		else if (!this.makePaddleFall(dt))
			return true;
		return false;
	}

}

export default class Menu {
	constructor(scene, physicsWorld, camera, game, font) {
		this.scene = scene;
		// this.physicsWorld = physicsWorld;
		this.camera = camera;
		this.game = game;
		this.font = font;
		this.camera.position.z = 308;

		// this.currentPlayerCreation = 0;

		// this.game.addHumanPlayer(this.currentPlayerCreation);
		// this.getCurrentPlayer().paddle.mesh.position.z = +200;
		// this.state = "up key";
		this.currentPlayer = 0;
		this.currentPlayerCreator = new PlayerCreator(scene, physicsWorld, camera, game, this.currentPlayer, font);

	}

	// getCurrentPlayer()
	// {
	// 	return this.game.players[this.currentPlayerCreation];
	// }

	// askUpKey(keysJustPressed)
	// {
	// 	// get the key pressed
	// 	if (keysJustPressed.length > 0)
	// 		console.log("press on the key to go up", keysJustPressed[0]);

	// }

	// makePaddleFall()
	// {
	// 	if (this.getCurrentPlayer().paddle.mesh.position.z > this.getCurrentPlayer().paddle.body.position.z)
	// 	{
	// 		this.getCurrentPlayer().paddle.mesh.position.z -= 1;
	// 	}
	// }
	zoomTo(value)
	{
		if (this.camera.position.z > value)
		{
			this.camera.position.z -= 1;
			return false;
		}

		this.camera.position.z = value;
		return true;
	}

	update(dt, keydown, keysJustPressed)
	{
		if (constants.SKIP_PLAYER_SELECTION)
		{
			this.game.finishRound();
			this.game.startNewRound();
			this.camera.position.z = 100;
			return true;
		}

		if (this.currentPlayer < constants.SEGMENTS)
		{
			if (this.currentPlayerCreator.update(dt, keysJustPressed))
			{
				delete this.currentPlayerCreator;
				this.currentPlayer++;
				if (this.currentPlayer < constants.SEGMENTS)
					this.currentPlayerCreator = new PlayerCreator(this.scene, this.physicsWorld, this.camera, this.game, this.currentPlayer, this.font);
			}
		}
		else
		{
			if (this.zoomTo(100))
			{
				this.game.finishRound();
				this.game.startNewRound();
				return true;
			}
		}
		return false;
	}
}
