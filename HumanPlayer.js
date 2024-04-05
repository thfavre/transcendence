import Player from './Player.js';

export default class HumanPlayer extends Player {
	constructor(scene, physicsWorld, playerNb, startPos, endPos, fieldEdgeDiameter) {
		super(scene, physicsWorld, playerNb, startPos, endPos, fieldEdgeDiameter);
		if (playerNb%2==0)
		{
			this.upKeyCode = 38; // 87, 83 for w, s
			this.downKeyCode = 40;
		}
		else
		{
			this.upKeyCode = 87; // 87, 83 for w, s
			this.downKeyCode = 83;
		}
	}

	movePaddle(keysdown)
	{
		if (keysdown[this.upKeyCode])
			this.paddle.moveUp();
		if (keysdown[this.downKeyCode])
			this.paddle.moveDown();
	}
}
