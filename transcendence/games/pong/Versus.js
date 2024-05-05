import AIPlayer from './AIPlayer.js';
import Game from './Game'
import HumanPlayer from './HumanPlayer.js';
import createText from './createText.js';
import * as constants from './constants.js';
import Menu from './Menu.js';
import translation from './languages.js';


export var forceStopGame = null;

export default class Versus extends Game {
	constructor(scene, physicsWorld, camera, font, humanPlayersName, AIPlayerNb, language) {
		forceStopGame = false;
		super(scene, physicsWorld, camera, humanPlayersName.length, AIPlayerNb);
		this.font = font;
		this.language = language;
		this.menu = new Menu(scene, camera, font, this, humanPlayersName, AIPlayerNb, language);
		// this.createNewRound();
		// camera.position.z = 100;
	}

	// createPlayers() {
	// 	if (constants.SKIP_PLAYER_SELECTION) {
	// 		for (var i = 0; i < constants.SEGMENTS-1; i++) {
	// 			this.addPlayer(this.createAiPlayer(i));
	// 		}
	// 	}
	// 	this.addPlayer(this.createHumanPlayer(constants.SEGMENTS-1));
	// }

	closeDeadPlayersGoal(dt) {
		this.players.forEach((player) => {
			if (player.health <= 0) {
				player.closeGoal(dt);
			}
		});
	}

	isOnlyAIAlive() {
		for (let player of this.players) {
			if (!(player instanceof AIPlayer) && player.health > 0) {
				return false;
			}
		}
		return true;
	}

	isOnlyOnePlayerAlive() {
		var alivePlayers = 0;
		this.players.forEach((player) => {
			if (player.health > 0) {
				alivePlayers++;
			}
		});
		return alivePlayers === 1;
	}

	showWinnerText() {
		if (!this.isWinnerTextCreated) {
			for (let player of this.players) {
				if (player.health > 0) {
					if (player instanceof AIPlayer) {
						var text = translation['lostAgainstAI'][this.language];
					} else
						var text = player.name + " " + translation['won'][this.language];
					var winnerText = createText({font: this.font, message: text, size: 8, shadow: true});
					winnerText.position.z = 8;
					this.scene.add(winnerText);
					var continueText = createText({font: this.font, message: translation['pressEnterToContinue'][this.language], size: 6, sideColor: "#000000", fontColor: "#ffffff", shadow: true});
					continueText.position.z = 8;
					continueText.position.y = -16;
					this.scene.add(continueText);
					break;
				}
			}
			this.isWinnerTextCreated = true;
		}
	}

	update(dt, keysdown, keysJustPressed) {
		if (this.menu.update(keysJustPressed) == true)
			return true;
		super.update(dt, keysdown);

		if (this.getGoalPlayer() != null) {
			this.createNewRound();
		}

		this.closeDeadPlayersGoal(dt);
		if (this.isOnlyOnePlayerAlive() || this.isOnlyAIAlive()) {
			this.showWinnerText();
			if (keysdown.includes(13)) {
				return false;
			}
		}
		if (forceStopGame) {
			// ? TODO free
			return false;
		}
		return true;
	}
}
