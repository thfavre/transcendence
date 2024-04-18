import * as THREE from 'three';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';

export default function createLine({points, color='#3CD6EB', lineWidth=0.008}) {
	const geometry = new LineGeometry();
	geometry.setPositions(points);
	const material = new LineMaterial({
		color: color,
		linewidth: lineWidth, // in pixels
		dashed: false,
		// alphaToCoverage: true,
	});
	const line = new Line2(geometry, material);
	return line;
}
