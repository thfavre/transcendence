import * as maps from './maps/maps.js';


export default class MapData {
	constructor(mapArray) {
		this._mapArray = mapArray;
		this._height = mapArray.length;
		this._width = mapArray[0].length;
	}

	isOutOfBounds(x, y) {
		return x < 0 || x >= this.getWidth() || y < 0 || y >= this.getHeight();
	}

	getCell(x, y) {
		if (this.isOutOfBounds(x, y)) {
			return null; // out of bounds
		}
		return this._mapArray[this._height-y-1][x];
	}

	getHeight() {
		return this._height;
	}

	getWidth() {
		return this._width;
	}

}
