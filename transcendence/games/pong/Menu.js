import * as THREE from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

import * as CANNON from 'cannon-es';
import Player from './Player.js';
import HumanPlayer from './HumanPlayer.js';
import createText from './createText.js';
import * as constants from './constants.js';
import translation from './languages.js';

class PlayerCreator {
	constructor(scene, camera, game, playerNb, playerName, font, language) {
		this.scene = scene;
		this.camera = camera;
		this.game = game;
		this.playerName = playerName;
		this.font = font;
		this.language = language;
		this.player = this.game.createHumanPlayer(playerNb, playerName);
		this.game.addPlayer(this.player);
		this.player.paddle.mesh.position.z = 230; // 230

		this.fallSpeed = 0;
		this.gravity = 400;


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
		if (this.textObj) {
			this.textObj.traverse( function (child) {
				if (child.geometry)
					child.geometry.dispose();
			} );
			this.scene.remove(this.textObj);
		}
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
			text: this.playerName + translation['askKeyUp'][this.language],
			x: 0, y: 22, z: 270,
		});
		if (keysJustPressed.length > 0 && keysJustPressed[0] != this.keyDown && this.ifKeyValid(keysJustPressed[0]))
		{
			this.keyUp = keysJustPressed[0];
			this.player.setUpKeyCode(this.keyUp);
		}
	}

	askDownKey(keysJustPressed) {
		this.setText({
			text: this.playerName + translation['askKeyDown'][this.language],
			x: 0, y: 22, z: 270
		});
		if (keysJustPressed.length > 0 && keysJustPressed[0] != this.keyUp && this.ifKeyValid(keysJustPressed[0]))
		{
			this.keyDown = keysJustPressed[0];
			this.player.setDownKeyCode(this.keyDown);

		}
	}

	askPaddleMaterial(keysJustPressed) {
		const keyDownStr = this.keyDown == 40 ?  translation['directionalKeyDown'][this.language] : String.fromCharCode(this.keyDown);
		const keyUpStr = this.keyUp == 38 ?  translation['directionalKeyUp'][this.language] : String.fromCharCode(this.keyUp);

		this.setText({
			text:this.playerName + translation['askPaddleSkin'][this.language] +
					" (" + keyUpStr + "/"+ keyDownStr + ")",
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
			this.player.paddle.mesh.position.z -= this.fallSpeed * dt;
			this.fallSpeed += this.gravity * dt;
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
	constructor(scene, camera, font, game , humanPlayersName, AIPlayerNb, language) {
		this.scene = scene;
		this.camera = camera;
		this.game = game;
		this.font = font;
		this.language = language;
		this.humanPlayersName = humanPlayersName;
		this.humanPlayerNb = humanPlayersName.length;
		this.AIPlayerNb = AIPlayerNb;
		this.playersNb = this.humanPlayerNb + AIPlayerNb;

		this.clock = new THREE.Clock();

		this.camera.position.z = 308;
		this.isDesactivated = false;


		// this.currentPlayerCreation = 0;

		// this.game.addHumanPlayer(this.currentPlayerCreation);
		// this.getCurrentPlayer().paddle.mesh.position.z = +200;
		// this.state = "up key";
		this.currentPlayer = 0;
		this.players = [];
		// if (!constants.SKIP_PLAYER_SELECTION)
		if (this.humanPlayerNb > 0) {
			var humanPlayerName = this.humanPlayersName.shift();
			this.currentPlayerCreator = new PlayerCreator(scene, camera, game, this.currentPlayer, humanPlayerName, font, language);
			this.humanPlayerNb--;
		} else {
			this.currentPlayer--;
		}


	}


	zoomTo(dt, value)
	{
		if (this.camera.position.z > value)
		{
			this.camera.position.z -= 200 * dt;
			return false;
		}

		this.camera.position.z = value;
		return true;
	}

	// createPlayer(dt, keydown) {
	// 	this.currentPlayerCreator.update(dt, keydown);

	// }

	update(keysJustPressed)
	{
		if (this.isDesactivated)
			return false;
		var dt = this.clock.getDelta();
		this.game.background.update(dt);
		// this.createPlayer(dt, keysJustPressed);


		// if (constants.SKIP_PLAYER_SELECTION)
		// {
		// 	this.game.createNewRound();
		// 	// this.game.newRoundTimer();
		// 	this.camera.position.z = 100;
		// 	return true;
		// }

		if (this.currentPlayer < this.playersNb || (this.playersNb==2 && this.currentPlayer==2))
		{
			if (!this.currentPlayerCreator || this.currentPlayerCreator.update(dt, keysJustPressed))
			{
				this.currentPlayer++;
				if (this.playersNb==2 && this.currentPlayer==1) { // special 2 player map
					this.currentPlayer++;
				}
				if (this.currentPlayer < this.playersNb || (this.playersNb==2 && this.currentPlayer==2)) {
					if ((this.currentPlayer%2!=0 && this.AIPlayerNb > 0) || this.humanPlayerNb == 0) {
						this.game.addPlayer(this.game.createAiPlayer(this.currentPlayer));
						this.AIPlayerNb--;
					} else {
						var humanPlayerName = this.humanPlayersName.shift();
						this.currentPlayerCreator = new PlayerCreator(this.scene, this.camera, this.game, this.currentPlayer, humanPlayerName, this.font, this.language);
						this.humanPlayerNb--;
					}
				}

			// 	delete this.currentPlayerCreator;
			// 	if (this.AIPlayerNb > 0) {
			// 		console.log("AIPlayerNb", this.AIPlayerNb, this.currentPlayer, this.humanPlayerNb);
			// 		this.game.addPlayer(this.game.createAiPlayer(this.currentPlayer));
			// 		this.currentPlayer++;
			// 		this.AIPlayerNb--;
			// 	}
			// 	if (this.humanPlayerNb > 0) {
			// 		console.log("humanPlayerNb", this.humanPlayerNb, this.currentPlayer, this.AIPlayerNb);
			// 		this.currentPlayerCreator = new PlayerCreator(this.scene, this.camera, this.game, this.currentPlayer, this.font);
			// 		// this.currentPlayer++;
			// 		this.humanPlayerNb--;
			// 	}
			// }
			// if (this.humanPlayerNb == 0)
			// {
			// 	for (var i = 0; i < this.AIPlayerNb; i++) {
			// 		console.log("aAIPlayerNb", this.AIPlayerNb, this.currentPlayer);
			// 		this.game.addPlayer(this.game.createAiPlayer(this.currentPlayer));
			// 		// this.AIPlayerNb--;
			// 		this.currentPlayer++;
			// 	}

			}
		}
		else if (this.zoomTo(dt, 100))
			{
				this.game.createNewRound();
				this.isDesactivated = true;
				// this.game.newRoundTimer();
				return true;
			}
		return true;
	}
}
