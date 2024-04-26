
export const EMPTY = 0;
export const PLAYER = 'p';
// export const POWERUP_SLOW = 's'; // slow powerup
// export const POWERUP_LIGHTSDOWN = 'l'; // lights down powerup
// export const POWERUP_DAZED = 'd'; // lights down powerup
export const RED = 1;
export const ORANGE = 2;
export const YELLOW = 3;
export const GREEN = 4;
export const LIGHTBLUE = 5;
export const DARKBLUE = 6;
export const WHITE = 7;
export const GRAY = 8;
export const BLACK = 9;



export const OBSTACLES = [RED, ORANGE, YELLOW, GREEN, LIGHTBLUE, DARKBLUE, WHITE, GRAY, BLACK];


export const duck = {
	backgroundColor: '#eeeeee',
	array: [
		[5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
		[5, 'p', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
		[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 5],
		[5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 5, 0, 0, 5],
		[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
		[5, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
		[5, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 3, 3, 3, 9, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
		[5, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 2, 1, 0, 5, 0, 0, 0, 0, 0, 0, 0, 5],
		[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 5, 0, 0, 0, 0, 0, 5, 0, 5],
		[5, 0, 0, 5, 0, 0, 0, 0, 0, 0, 3, 8, 3, 3, 8, 3, 3, 3, 3, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 5],
		[5, 0, 0, 0, 0, 0, 0, 0, 5, 0, 3, 3, 8, 8, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
		[5, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 5],
		[5, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 5],
		[5, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
		[5, 0, 0, 4, 0, 0, 4, 0, 0, 0, 4, 0, 0, 1, 1, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
		[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
	]
}
export const note ={
	backgroundColor: '#ffffff',
	array: [
		[5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 9, 9, 5, 5, 5],
		[5, 'p', 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 0, 5],
		[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 9, 0, 0, 9, 5],
		[5, 0, 0, 0, 0, 0, 5, 0, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 5],
		[5, 0, 0, 0, 5, 0, 0, 0, 9, 9, 9, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 5],
		[5, 0, 0, 0, 0, 0, 0, 5, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 0, 0, 0, 5],
		[5, 0, 0, 0, 0, 5, 0, 0, 9, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 0, 9, 9, 9, 9, 0, 0, 0, 5],
		[5, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 5, 9, 0, 0, 0, 0, 9, 0, 9, 9, 9, 9, 0, 0, 0, 5],
		[5, 0, 0, 0, 0, 0, 9, 9, 9, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 0, 0, 9, 9, 0, 0, 0, 0, 0],
		[5, 5, 0, 0, 0, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 9, 0, 5, 0, 0, 0, 0, 0, 0, 5],
		[5, 0, 0, 0, 0, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 5],
		[5, 0, 5, 0, 0, 0, 9, 9, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 5],
		[5, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 0, 0, 9, 9, 9, 0, 0, 0, 0, 0, 5, 0, 0, 5],
		[5, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 9, 9, 9, 9, 0, 9, 9, 9, 9, 0, 0, 5, 0, 0, 0, 0, 0, 5],
		[5, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 0, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 5, 0, 5],
		[5, 0, 0, 5, 0, 0, 0, 0, 0, 5, 5, 0, 0, 9, 9, 0, 0, 0, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
		[5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
	]
}

export const trans = {
	backgroundColor: 0xffffff,
	array: [
		[9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
		[9, 'p', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
		[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
		[9, 0, 0, 1, 1, 1, 0, 2, 2, 2, 0, 0, 0, 3, 3, 0, 0, 4, 0, 0, 4, 0, 0, 5, 5, 5, 0, 0, 6, 6, 6, 0, 5, 5, 5, 5, 0, 1, 0, 0, 1, 0, 2, 2, 2, 0, 0, 3, 3, 3, 3, 0, 4, 0, 0, 4, 0, 0, 5, 5, 5, 0, 6, 6, 6, 6, 0, 0, 9],
		[9, 0, 0, 0, 1, 0, 0, 2, 0, 0, 2, 0, 3, 0, 0, 3, 0, 4, 4, 0, 4, 0, 5, 0, 0, 0, 0, 6, 0, 0, 0, 0, 5, 0, 0, 0, 0, 1, 1, 0, 1, 0, 2, 0, 0, 2, 0, 3, 0, 0, 0, 0, 4, 4, 0, 4, 0, 5, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 9],
		[9, 0, 0, 0, 1, 0, 0, 2, 2, 2, 0, 0, 3, 3, 3, 3, 0, 4, 0, 4, 4, 0, 0, 5, 5, 0, 0, 6, 0, 0, 0, 0, 5, 5, 5, 0, 0, 1, 0, 1, 1, 0, 2, 0, 0, 2, 0, 3, 3, 3, 0, 0, 4, 0, 4, 4, 0, 5, 0, 0, 0, 0, 6, 6, 6, 0, 0, 0, 9],
		[9, 0, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 3, 0, 0, 3, 0, 4, 0, 0, 4, 0, 0, 0, 0, 5, 0, 6, 0, 0, 0, 0, 5, 0, 0, 0, 0, 1, 0, 0, 1, 0, 2, 0, 0, 2, 0, 3, 0, 0, 0, 0, 4, 0, 0, 4, 0, 5, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 9],
		[9, 0, 0, 0, 1, 0, 0, 2, 0, 0, 2, 0, 3, 0, 0, 3, 0, 4, 0, 0, 4, 0, 5, 5, 5, 0, 0, 0, 6, 6, 6, 0, 5, 5, 5, 5, 0, 1, 0, 0, 1, 0, 2, 2, 2, 0, 0, 3, 3, 3, 3, 0, 4, 0, 0, 4, 0, 0, 5, 5, 5, 0, 6, 6, 6, 6, 0, 0, 9],
		[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
		[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
		[9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
	]
}

export const usa ={
	backgroundColor: 0x000000,
	array: [
	[6, 6, 6, 6, 6, 6, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[6, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 6, 7, 7, 7, 7, 7, 7, 0, 7, 7, 7, 7, 7, 7, 7, 7, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
	[6, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7],
	[6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 6, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
	[6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
	[6, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 8, 0, 0, 0, 6, 7, 7, 7, 7, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 0, 7, 7, 7, 0, 7, 7, 7, 7, 0, 7, 7, 7],
	[6, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 7, 7, 7, 7, 0, 7, 0, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 0, 7, 7, 7],
	[6, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1],
	[6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 6, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
	[6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 6, 7, 7, 7, 7, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 7, 7, 7, 7, 0, 7, 7, 7, 7, 7, 0, 7, 7],
	[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 7, 7],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
	[1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
	[7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 0, 0, 7, 7, 7, 0, 7, 7, 7, 7, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 7, 7],
	[7, 7, 7, 7, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 7, 7, 7, 0, 7, 7, 7, 0, 7, 7, 7, 7, 7, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 7, 7],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
	[1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
	[7, 0, 7, 7, 0, 7, 0, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 7, 7, 7, 0, 7, 7, 7, 0, 7, 7, 7, 0, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 7, 7],
	[7, 0, 7, 7, 0, 7, 0, 7, 7, 7, 7, 7, 7, 7, 0, 7, 7, 7, 7, 7, 7, 7, 7, 0, 7, 7, 7, 0, 7, 7, 7, 0, 7, 7, 7, 7, 7, 0, 7, 7, 7, 0, 7, 7, 7, 7],
	[1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
	[7, 0, 7, 7, 7, 7, 7, 7, 0, 7, 7, 7, 7, 7, 0, 7, 7, 7, 7, 7, 7, 7, 7, 0, 7, 7, 7, 0, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7],
	[7, 0, 7, 7, 7, 7, 0, 0, 0, 7, 7, 7, 7, 7, 0, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
	[1, 'p', 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	]
}

export const rainbowBorder = {
	backgroundColor: 0x000000,
	array: [
		[1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 9, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6],
		[6, 'p', 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 9],
		[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5],
		[3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
		[2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
		[2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2],
		[4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
		[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4],
		[6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
		[9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
		[6, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
		[5, 0, 1, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 6],
		[4, 0, 1, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 5],
		[3, 2, 1, 2, 3, 4, 5, 6, 9, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 9, 6, 5, 4, 3, 2, 1, 2, 3, 4],
	]
}

export const fourChambers = {
	backgroundColor: '#f4eaa1',
	array: [ // needs some reworking
		[5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9],
		[5, 0, 0, 0, 0, 0, 5, 0, 0, 6, 0, 0, 6, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 9],
		[5, 0, 0, 'p', 0, 0, 5, 0, 6, 0, 0, 0, 6, 0, 7, 7, 7, 0, 7, 0, 0, 0, 8, 0, 8, 0, 0, 0, 0, 0],
		[5, 0, 0, 5, 0, 0, 5, 0, 0, 0, 6, 0, 6, 0, 0, 0, 0, 0, 7, 8, 0, 0, 0, 0, 8, 9, 0, 9, 0, 9],
		[5, 0, 0, 0, 0, 5, 5, 6, 0, 0, 0, 0, 6, 0, 0, 0, 7, 0, 7, 0, 0, 0, 0, 8, 8, 0, 0, 0, 0, 9],
		[5, 5, 5, 0, 0, 0, 5, 0, 0, 6, 6, 0, 0, 0, 0, 0, 7, 0, 7, 0, 8, 0, 0, 0, 8, 0, 0, 0, 9, 9],
		[5, 0, 0, 0, 5, 5, 5, 0, 6, 0, 0, 6, 6, 0, 0, 0, 7, 0, 7, 0, 0, 0, 8, 0, 8, 0, 9, 0, 0, 9],
		[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 9],
		[5, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 6, 0, 7, 7, 7, 0, 7, 0, 0, 0, 0, 0, 8, 9, 9, 9, 0, 9],
		[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 7, 8, 0, 0, 8, 0, 8, 0, 9, 0, 0, 9],
		[5, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 0, 6, 0, 0, 0, 7, 0, 7, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 9],
		[5, 5, 5, 0, 0, 0, 5, 0, 0, 0, 0, 0, 6, 7, 7, 0, 7, 0, 7, 0, 0, 0, 0, 0, 8, 0, 0, 0, 9, 9],
		[5, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 7, 0, 8, 0, 0, 0, 8, 0, 0, 0, 0, 9],
		[5, 0, 0, 5, 0, 0, 5, 0, 6, 0, 0, 0, 6, 0, 0, 7, 7, 7, 7, 0, 0, 0, 8, 0, 8, 0, 0, 9, 0, 9],
		[5, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 6, 7, 0, 0, 0, 0, 7, 0, 0, 0, 0, 8, 8, 9, 0, 0, 0, 9],
		[5, 0, 0, 0, 0, 0, 5, 0, 0, 6, 0, 0, 6, 7, 0, 0, 0, 0, 0, 0, 8, 8, 0, 0, 0, 0, 0, 0, 0, 9],
		[5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9],
	]
}

export const pentomino = {
	backgroundColor: '#ffffff',
	array: [
		[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
		[6, 'p', 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
		[6, 4, 4, 4, 4, 4, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 6],
		[6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 6],
		[6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 6],
		[6, 0, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
		[6, 0, 4, 4, 4, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 6],
		[6, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 6],
		[6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 6],
		[6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
		[6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 6],
		[6, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 6],
		[6, 0, 4, 4, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
		[6, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
		[6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
		[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
	]
}

export const lll = {
	backgroundColor: '#ffffff',
	array: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 'p', 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 1],
		[1, 0, 3, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 1],
		[1, 0, 0, 3, 0, 3, 0, 3, 3, 3, 3, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 3, 3, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 3, 0, 3, 3, 3, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 1],
		[1, 0, 3, 3, 3, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	]
}

export const zzz = {
	backgroundColor: '#ffffff',
	array: [
		[8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 4, 8, 8, 8, 8, 8, 8],
		[8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 8],
		[8, 'p', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 8],
		[8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
		[4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
		[8, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 8],
		[0, 0, 0, 0, 0, 0, 4, 0, 4, 4, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 4, 4, 8],
		[8, 0, 0, 0, 0, 4, 4, 0, 0, 4, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 4, 0, 8],
		[8, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
		[8, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 8],
		[8, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 4, 0, 0, 0, 8],
		[8, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 4, 0, 0, 0, 4, 0, 0, 0, 8],
		[8, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 8],
		[8, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
		[8, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 8],
		[8, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 8],
		[8, 8, 8, 8, 4, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 4, 4, 8, 8, 8, 8, 8],
	]
}

export const ironMan = {
	backgroundColor: '#b3e0f2',
	array: [
		[9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
		[9, 'p', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
		[9, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
		[9, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 9],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 9, 0, 9],
		[9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
		[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
		[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 1, 1, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
		[9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 7, 3, 7, 3, 1, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 9],
		[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 3, 3, 3, 1, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 9],
		[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
		[9, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 7, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
		[9, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 1, 3, 1, 3, 1, 3, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 9, 0, 9],
		[9, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 9, 0, 9, 0, 0, 0, 0, 0, 9],
		[9, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 1, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 9],
		[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
		[9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
	]
}

export const doubleDuck = {
	backgroundColor: '#add4ff',
	array: [
		[5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
		[5, 'p', 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 5, 5],
		[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 5],
		[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 5],
		[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 9, 3, 3, 3, 0, 0, 0, 0, 0, 0],
		[5, 0, 5, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 3, 0, 0, 5],
		[5, 0, 0, 0, 0, 0, 2, 3, 9, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 3, 3, 0, 0, 5],
		[5, 5, 5, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 3, 0, 5, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 5],
		[5, 0, 0, 5, 0, 0, 0, 0, 3, 3, 3, 0, 0, 3, 3, 0, 0, 5, 5, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5],
		[5, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 5],
		[5, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 5],
		[5, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
		[5, 0, 0, 0, 0, 5, 0, 5, 5, 3, 3, 3, 3, 3, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
		[5, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 0, 0, 0, 5],
		[5, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 5],
		[5, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
		[5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
	]
}

export const star = {
	backgroundColor: '#add4ff',
	array: [
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 0, 0, 0, 0, 0, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 8, 8, 8, 8, 8, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
		[8, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 9, 9, 0, 0, 0, 0, 0, 8, 8, 0, 0, 0, 0, 0, 'p', 8],
		[8, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 3, 3, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 8],
		[8, 0, 0, 0, 8, 0, 0, 0, 0, 8, 0, 0, 0, 9, 3, 3, 9, 0, 0, 0, 0, 0, 8, 0, 0, 8, 0, 0, 0, 8],
		[0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 9, 3, 3, 3, 3, 9, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 8],
		[8, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 3, 3, 3, 3, 9, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 8],
		[8, 0, 0, 8, 0, 0, 0, 9, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 9, 0, 0, 0, 8, 0, 0, 8],
		[8, 0, 0, 0, 0, 0, 0, 0, 9, 3, 3, 3, 3, 9, 3, 3, 9, 3, 3, 3, 3, 9, 0, 0, 0, 0, 0, 0, 0, 8],
		[8, 8, 0, 8, 0, 0, 0, 0, 0, 9, 3, 3, 3, 9, 3, 3, 9, 3, 3, 3, 9, 0, 0, 0, 0, 0, 8, 0, 8, 8],
		[8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 9, 3, 3, 9, 3, 3, 9, 3, 3, 9, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8],
		[8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 3, 3, 3, 3, 3, 3, 3, 3, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
		[8, 0, 0, 0, 0, 8, 8, 0, 0, 9, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 9, 0, 0, 8, 8, 0, 0, 0, 0, 8],
		[8, 0, 0, 0, 0, 0, 0, 0, 0, 9, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 9, 0, 0, 0, 0, 0, 0, 0, 0, 8],
		[8, 0, 8, 0, 0, 0, 8, 0, 9, 3, 3, 3, 3, 3, 9, 9, 3, 3, 3, 3, 3, 9, 0, 8, 0, 0, 0, 8, 0, 8],
		[8, 0, 0, 0, 0, 0, 0, 8, 9, 3, 3, 3, 9, 9, 0, 0, 9, 9, 3, 3, 3, 9, 8, 0, 0, 0, 0, 0, 0, 8],
		[8, 0, 0, 8, 0, 0, 0, 9, 3, 3, 9, 9, 0, 0, 0, 0, 0, 0, 9, 9, 3, 3, 9, 0, 0, 0, 8, 0, 0, 8],
		[8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 8, 8, 8, 8, 8, 8, 8],
		]
}

export const mushroom = {
	backgroundColor: '#ff474c',
	array: [
		[7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
		[7, 0, 0, 0, 7, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 0, 0, 0, 0, 0, 0, 7],
		[7, 0, 7, 0, 0, 0, 0, 0, 7, 0, 0, 0, 9, 9, 9, 9, 9, 0, 0, 0, 0, 7, 0, 0, 0, 0, 7, 'p', 0, 7],
		[7, 0, 7, 7, 0, 0, 0, 0, 0, 0, 9, 9, 1, 1, 1, 1, 0, 0, 9, 9, 0, 0, 0, 0, 0, 0, 7, 7, 0, 7],
		[7, 0, 0, 0, 0, 0, 7, 0, 0, 9, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 9, 7, 0, 0, 0, 0, 0, 0, 0, 7],
		[7, 0, 7, 0, 0, 0, 0, 0, 9, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 7],
		[7, 0, 0, 0, 0, 0, 0, 0, 9, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
		[7, 7, 0, 0, 0, 0, 0, 9, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 9, 0, 0, 7, 0, 0, 0, 7],
		[7, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 9, 0, 0, 0, 0, 0, 0, 7],
		[7, 0, 0, 0, 7, 0, 0, 9, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 7],
		[0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 9, 0, 0, 0, 0, 0, 0, 7],
		[7, 0, 0, 0, 0, 0, 0, 9, 0, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 7],
		[7, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 0, 0, 9, 0, 0, 9, 0, 0, 9, 9, 9, 0, 0, 0, 0, 0, 0, 7, 7],
		[7, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 9, 0, 0, 9, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 7, 7],
		[7, 0, 0, 7, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 7],
		[7, 0, 0, 0, 0, 0, 0, 0, 7, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
		[7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
	]
}

export const rainbow = {
	backgroundColor: '#f7b0bb',
	array: [
		[0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 9, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
		[0, 0, 0, 0, 0, 9, 1, 1, 2, 2, 2, 3, 3, 3, 2, 2, 2, 1, 1, 9, 0, 0, 0, 7, 7, 0, 0, 0, 0, 7],
		[0, 0, 0, 0, 9, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 9, 0, 0, 0, 7, 0, 0, 0, 0, 7],
		[0, 0, 0, 0, 9, 1, 2, 2, 3, 3, 9, 9, 9, 9, 9, 3, 3, 2, 2, 1, 9, 0, 0, 0, 0, 7, 0, 0, 0, 7],
		[0, 0, 0, 9, 1, 1, 2, 3, 3, 9, 0, 7, 0, 0, 0, 9, 3, 3, 2, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 7],
		[0, 0, 0, 9, 9, 9, 2, 3, 9, 0, 0, 0, 0, 7, 0, 0, 9, 3, 2, 2, 1, 9, 0, 0, 0, 0, 0, 0, 0, 7],
		[0, 0, 9, 0, 0, 0, 9, 9, 0, 9, 9, 0, 0, 0, 0, 0, 9, 3, 3, 2, 1, 9, 0, 0, 0, 0, 0, 0, 0, 7],
		[0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 7, 9, 9, 3, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 7],
		[7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 9, 0, 0, 9, 0, 0, 9, 9, 0, 0, 0, 0, 0, 0, 7],
		[7, 0, 9, 0, 0, 9, 9, 0, 0, 0, 9, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 7, 7],
		[7, 0, 0, 9, 9, 0, 0, 9, 9, 9, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 7, 7],
		[7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 7, 0, 0, 0, 7],
		[7, 7, 0, 0, 0, 0, 0, 7, 7, 7, 0, 0, 0, 7, 0, 9, 0, 0, 0, 0, 9, 9, 0, 0, 0, 0, 7, 0, 0, 7],
		[7, 0, 0, 0, 0, 0, 7, 0, 0, 7, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 7, 0, 0, 7],
		[7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
		[7, 'p', 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 7, 0, 0, 0, 0, 7],
		[7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
	]
}

export const ghost = {
	backgroundColor: '#ffffff',
	array: [
		[7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
		[7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
		[7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
		[7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
		[7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 9, 9, 0, 0, 0, 0, 0, 9, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
		[7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
		[7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
		[7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7],
		[7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 9, 0, 0, 0, 0, 9, 9, 0, 0, 0, 9, 9, 0, 0, 0, 9, 7, 7, 7, 7, 7, 7, 7, 7],
		[7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 9, 0, 0, 0, 0, 9, 0, 0, 9, 0, 9, 0, 0, 9, 0, 0, 9, 7, 7, 7, 7, 7, 7, 7, 7],
		[7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 9, 0, 0, 0, 0, 9, 0, 9, 9, 0, 9, 0, 9, 9, 0, 0, 9, 7, 7, 7, 7, 7, 7, 7, 7],
		[7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 9, 0, 0, 0, 0, 9, 9, 9, 9, 0, 9, 9, 9, 9, 0, 0, 9, 7, 7, 7, 7, 7, 7, 7, 7],
		[7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 9, 9, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 9, 9, 7, 7, 7, 7, 7, 7, 7],
		[7, 7, 7, 7, 7, 7, 7, 7, 7, 9, 0, 0, 9, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 0, 0, 0, 9, 0, 0, 9, 7, 7, 7, 7, 7, 7],
		[7, 7, 7, 7, 7, 7, 7, 7, 7, 9, 0, 0, 9, 0, 0, 0, 0, 0, 9, 0, 0, 0, 9, 0, 0, 0, 9, 0, 0, 9, 7, 7, 7, 7, 7, 7],
		[7, 7, 7, 7, 7, 7, 7, 7, 7, 9, 0, 0, 0, 9, 0, 0, 0, 0, 0, 9, 9, 9, 0, 0, 0, 9, 0, 0, 0, 9, 7, 7, 7, 7, 7, 7],
		[7, 7, 7, 7, 7, 9, 7, 7, 7, 9, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 9, 7, 7, 7, 7, 7, 7],
		[7, 7, 7, 7, 9, 0, 9, 7, 7, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 7, 7, 7, 7, 7, 7, 7],
		[7, 7, 7, 9, 0, 0, 9, 7, 7, 7, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 7, 7, 7, 7, 7, 7, 7, 7],
		[7, 7, 7, 9, 0, 0, 0, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7],
		[7, 7, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7],
		[7, 7, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
		[7, 7, 7, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
		[7, 7, 7, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
		[7, 7, 7, 7, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
		[7, 7, 7, 7, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
		[7, 7, 7, 7, 7, 7, 9, 9, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 9, 0, 0, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
		[7, 7, 7, 7, 7, 7, 7, 7, 9, 9, 'p', 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
		[7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 9, 9, 0, 9, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
		[7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
		[7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
		[7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
	]
}

export const speedySquare = {
	backgroundColor: '#ae4e4a',
	array: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 'p', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 1],
		[1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1],
		[1, 0, 2, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 2, 0, 1],
		[1, 0, 2, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 2, 0, 1],
		[1, 0, 2, 0, 3, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 3, 0, 2, 0, 1],
		[1, 0, 2, 0, 3, 0, 4, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 4, 0, 3, 0, 2, 0, 1],
		[1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 4, 0, 3, 0, 2, 0, 1],
		[1, 0, 2, 0, 3, 0, 4, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 4, 0, 3, 0, 2, 0, 1],
		[1, 0, 2, 0, 3, 0, 4, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 4, 0, 3, 0, 2, 0, 1],
		[1, 0, 2, 0, 3, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 0, 0, 0, 0, 0, 4, 0, 3, 0, 2, 0, 1],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 4, 0, 3, 0, 2, 0, 1],
		[1, 0, 2, 0, 3, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 3, 0, 2, 0, 1],
		[1, 0, 2, 0, 3, 0, 4, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 4, 0, 3, 0, 2, 0, 1],
		[1, 0, 2, 0, 3, 0, 4, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 8, 8, 0, 0, 0, 0, 0, 4, 0, 3, 0, 2, 0, 1],
		[1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 4, 0, 3, 0, 2, 0, 1],
		[1, 0, 2, 0, 3, 0, 4, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 4, 0, 3, 0, 2, 0, 1],
		[1, 0, 2, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 4, 0, 3, 0, 2, 0, 1],
		[1, 0, 2, 0, 3, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 4, 0, 3, 0, 2, 0, 1],
		[1, 0, 2, 0, 3, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 3, 0, 2, 0, 1],
		[1, 0, 2, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 2, 0, 1],
		[1, 0, 2, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 2, 0, 1],
		[1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1],
		[1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	]
}


// --- tournements ---
export const randomTournamentMap = [
	duck,
	note,
	usa,
	rainbowBorder,
	fourChambers,
	pentomino,
	zzz,
	ironMan,
	doubleDuck,
	star,
	mushroom,
	rainbow,
	ghost,
	speedySquare,
]
