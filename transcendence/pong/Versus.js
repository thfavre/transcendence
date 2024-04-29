import AIPlayer from './AIPlayer.js';
import Game from './Game'
import HumanPlayer from './HumanPlayer.js';
import createText from './createText.js';


export default class Versus extends Game {
	constructor(scene, physicsWorld, camera, font) {
		super(scene, physicsWorld, camera);
		this.font = font;
	}


	closeDeadPlayersGoal(dt) {
		this.players.forEach((player) => {
			if (player.health <= 0) {
				player.closeGoal(dt);
			}
		});
	}

	isOnlyAIAlive() {
		this.players.forEach((player) => {
			if (player instanceof HumanPlayer && player.health > 0) {
				return false
			}
		});
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
						var text = "You lost against the AI...";
					} else
						var text = "Player " + player.playerNb + " wins!";
					var winnerText = createText({font: this.font, message: text, size: 8, sideColor: "#000000", fontColor: "#ffffff"});
					winnerText.position.z = 8;
					this.scene.add(winnerText);
					var continueText = createText({font: this.font, message: "Press Enter to continue", size: 6, sideColor: "#000000", fontColor: "#ffffff"});
					continueText.position.z = 8;
					continueText.position.y = -16;
					this.scene.add(continueText);
					break;
				}
			}
			this.isWinnerTextCreated = true;
		}
	}

	update(keysdown) {
		var dt = this.dt;
		super.update(keysdown);
		this.closeDeadPlayersGoal(dt);
		if (this.isOnlyOnePlayerAlive() || this.isOnlyAIAlive()) {
			this.showWinnerText();
			if (keysdown.includes(13)) {
				return false;
			}
		}
		return true;
	}
}
