import * as THREE from 'three';
import { OBB } from 'three/addons/math/OBB.js';


var FIELD_WIDTH = 2000;
var FIELD_LENGTH = 2000;

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Sizes
const sizes = {
	width: 800,
	height: 600
}

// Screne
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xAAAAAA);

// Camera
const camera = new THREE.PerspectiveCamera( 90, sizes.width / sizes.height, 0.1, 10000);
scene.add( camera );


// Renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
renderer.setSize( sizes.width, sizes.height );
renderer.shadowMap.enabled = true;
document.body.appendChild( renderer.domElement );

// light
var light = new THREE.SpotLight( 0xFFFFFF, 3);
var light2 = new THREE.HemisphereLight( 0xFFFFFF, 'darkslategrey', 2);
light.position.set(0, 1, 0);
light.intensity = 4;
light.penumbra = 0.4;
light.castShadow = true;
// light2.position.set(0, 0, 20 ); // position of the HemisphereLight doesn't matter
scene.add(light);
scene.add(light2);

// plane
const planeGeometry = new THREE.BoxGeometry(FIELD_LENGTH, FIELD_WIDTH, 5, 1, 1, 1);
const planeMaterial = new THREE.MeshPhongMaterial({ color: '#badc58' });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
// plane.getVertexPosition(3, v);
plane.translateY(0);
scene.add(plane);
plane.receiveShadow = true;

let SEGMENTS = 3;
const geometry = new THREE.CircleGeometry( FIELD_WIDTH/2, SEGMENTS );
const material = new THREE.MeshBasicMaterial( { color: 0x550000 } );
const circle = new THREE.Mesh( geometry, material );
circle.translateZ(3);
scene.add( circle );
// print all vertices of the circle
// console.log(circle.geometry.getAttribute('position').l);
var fieldVertices = [];
for (var i = 0; i < SEGMENTS+1; i++) {
	let v = new THREE.Vector3();
	circle.getVertexPosition(i, v);
	// console.log(v);
	// draw a circle at each vertex
	const geometry = new THREE.CircleGeometry( 10, 32 );
	const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
	const vertex = new THREE.Mesh( geometry, material );
	vertex.position.copy(v);
	vertex.translateZ(10);
	scene.add( vertex );
	fieldVertices.push(v);
}



//Create a helper for the shadow camera (optional)
// const helper = new THREE.CameraHelper( light.shadow.camera );
// scene.add( helper );


// ------- Pong game

class Ball {
	constructor() {
		this.radius = 20;
		const geometry = new THREE.SphereGeometry(this.radius, 16, 16);
		const material = new THREE.MeshPhongMaterial({ color: '#f0932b' });
		this.mesh = new THREE.Mesh(geometry, material);
		scene.add(this.mesh);
		this.mesh.position.x = 0;
		this.mesh.position.y = 0;
		this.mesh.position.z = this.radius;
		this.mesh.castShadow = true;
		this.moveSpeed = 0.3;
		this.mesh.rotateZ(Math.PI/4 + 0.4);
		if (this.mesh.rotation.z < 0)
			this.mesh.rotation.z += 2*Math.PI;
		this.previousPosition = new THREE.Vector3();

		// this.direction = new THREE.Vector3(1, 1);
		// helper
		var axe = new THREE.AxesHelper(2112);
		axe.translateZ(3);
		axe.renderOrder = 2;
		this.mesh.add(axe);
		// grid
		// var grid = new THREE.GridHelper( FIELD_LENGTH, 20, 0x000000, 0x000000 );
		// // grid.translateZ(3);
		// grid.renderOrder = 1;
		// this.mesh.add(grid);

	}

	// isSideCollision()
	// {
	// 	return this.mesh.position.y > FIELD_WIDTH/2 || this.mesh.position.y < -FIELD_WIDTH/2;
	// }
	move(dt) {
		this.previousPosition = this.mesh.position.clone();
		this.mesh.translateX(this.moveSpeed * dt);
		// console.log("a", this.mesh.position);
		// this.mesh.position.x += this.direction.x * this.moveSpeed * dt;
		// this.mesh.position.y += this.direction.y * this.moveSpeed * dt;
		// if (this.isSideCollision()) {
		// 	this.direction.y *= -1;
		// }
		// if (this.mesh.position.z > 3 || this.mesh.position.z < -3) {
		// 	this.direction.z *= -1;
		// }

	}

	// paddleBounce(paddleMesh) {
	// 	const paddleBox = new THREE.Box3().setFromObject(paddleMesh);
	// 	const ballBox = new THREE.Box3().setFromObject(this.mesh);

	// 	let paddleSize = new THREE.Vector3();
	// 	paddleBox.getSize(paddleSize)
	// 	let ballSize = new THREE.Vector3();
	// 	ballBox.getSize(ballSize)

	// 	if (ballBox.intersectsBox(paddleBox))
	// 	{
	// 		if (this.direction.x > 0) {
	// 			this.mesh.position.x = paddleMesh.position.x - paddleSize.x/2 - ballSize.x/2;
	// 		} else if (this.direction.x < 0) {
	// 			this.mesh.position.x = paddleMesh.position.x + paddleSize.x/2 + ballSize.x/2;
	// 		}


	// 		this.bounce()
	// 	}
	// }




	bounce(angle) {
		this.mesh.position.set(this.previousPosition.x, this.previousPosition.y, this.previousPosition.z);
		console.log("paddle angle", angle, "ball angle", this.mesh.rotation.z);
		var newAngle = Math.PI + angle - this.mesh.rotation.z;
		if (newAngle < 0) newAngle = 2*Math.PI + newAngle;
		newAngle = newAngle % (2*Math.PI);
		console.log("newAngle", newAngle);

		this.mesh.rotateZ(newAngle);
	}

	update(dt) {
		this.move(dt);
	}

}

class Paddle {
	constructor(playerNb, startPos, endPos) {
		this.upKeyCode = 38; // 87, 83
		this.downKeyCode = 40;
		this.width = 40;
		this.height = 300;

		const geometry = new THREE.BoxGeometry(this.width, this.height, 50);
		const material = new THREE.MeshPhongMaterial({ color: '#686de0' });
		this.mesh = new THREE.Mesh(geometry, material);
		var dX = endPos.x - startPos.x;
		var dY = endPos.y - startPos.y;
		// this.mesh.position.x = startPos.x + dX/2;
		this.mesh.translateX(startPos.x + dX/2);
		this.mesh.translateY(startPos.y + dY/2);
		// this.mesh.position.y = startPos.y + dY/2;
		// rotate the paddle
		this.angle = 2*Math.PI/(SEGMENTS*2) +  2*Math.PI/SEGMENTS*(playerNb-1);  // TODO simplify the formula
		this.angle = this.angle % (2*Math.PI);
		this.mesh.rotateZ(this.angle);
		console.log("paddle ", playerNb, "angle", this.angle);

		// this.mesh.translateX(FIELD_LENGTH/4);
		// this.mesh.position.x = xPos;
		// this.mesh.position.z = zPos;
		this.mesh.receiveShadow = true;
		this.moveSpeed = 1;
		scene.add(this.mesh);
		this.a = false;

		//helper
		var axe = new THREE.AxesHelper(2112);
		axe.translateZ(3);
		axe.renderOrder = 2;
		this.mesh.add(axe);
		// // grid
		// var grid = new THREE.GridHelper( FIELD_LENGTH, 20, 0x000000, 0x000000 );
		// // grid.translateZ(3);
		// grid.renderOrder = 1;
		// this.mesh.add(grid);
	}

	move(dt, keysdown) {
		var dep = 0;
		if (keysdown[this.upKeyCode]) dep += this.moveSpeed;
		if (keysdown[this.downKeyCode]) dep -= this.moveSpeed;
		// this.mesh.position.y += dep * dt;
		this.mesh.translateY(dep * dt);
	}

	isOnBall(ball) {
		// const paddleBox = new THREE.Box3()
		// paddleBox.setFromObject(this.mesh);
		// OBB( center : Vector3, halfSize : Vector3, rotation : Matrix3 )
		this.mesh.geometry.computeBoundingBox();
		const paddleBoxOBB = new OBB(); //.fromBox3(this.mesh.geometry.boundingBox);
		paddleBoxOBB.halfSize.copy(this.mesh.geometry.boundingBox.getSize(new THREE.Vector3()).divideScalar(2));
		paddleBoxOBB.applyMatrix4(this.mesh.matrixWorld);
		// paddleBoxOBB.center.copy(this.mesh.position);
		// paddleBoxOBB.copy(this.mesh.geometry.boundingBox).applyMatrix4(this.mesh.matrixWorld);

		const ballBox = new THREE.Sphere(new THREE.Vector3(), ball.radius);
		ballBox.center.copy(ball.mesh.position);
		// log the boxes pos
		// console.log("b1", paddleBox);
		// paddleBox.copy(this.mesh.geometry.boundingBox).applyMatrix4(this.mesh.matrixWorld);
		// console.log("b2", paddleBox);
		if  (this.a==false)
		{
			this.a = true;
			return false;
		}
		if (paddleBoxOBB.intersectsSphere(ballBox)) {
			ball.mesh.material.color.set(0xff000f);
			console.log("COLLISION");
			return true;
		} else {
			ball.mesh.material.color.set(0xf0932b);
		}

		// const helper = new THREE.Box3Helper( paddleBoxOBB, 0xffff00 );
		// scene.add( helper );

		return false;//ballBox.intersectsBox(paddleBox);

	}

	bounceBall(ball) {

	}

	collideBall(ball) {
		if (this.isOnBall(ball)) {
			console.log("BOUNCE");
			ball.bounce(this.angle);
		}
	}



	update(dt, keysdown, ball) {
		this.move(dt, keysdown);
		this.collideBall(ball);
	}
}

class Player {
	constructor(playerNb, startPos, endPos) {
		this.paddle = new Paddle(playerNb, startPos, endPos);
	}

	update(dt, keysdown, ball) {
		this.paddle.update(dt, keysdown, ball);
	}
}

class Pong {
	constructor() {
		this.players = [];
		for (var i = 1; i < fieldVertices.length; i++) {
			var vertex1 = fieldVertices[i];
			if (i == fieldVertices.length-1) {
				var vertex2 = fieldVertices[1];
			} else {
				var vertex2 = fieldVertices[i+1];
			}
			// console.log(vertex1, vertex2);
			this.players.push(new Player(i, vertex1, vertex2));
			// break;
		}
		// this.players.push(new Player(1, fieldVertices[1], fieldVertices[2]));
		this.ball = new Ball();
		light.target = this.ball.mesh;
	}

	// makeBallPOV() {
	// 	// camera.position.x = this.ball.mesh.position.x;
	// 	// camera.position.y = this.ball.mesh.position.y;
	// 	// camera.position.z = this.ball.mesh.position.z;

	// 	const idealOffset = new THREE.Vector3();
	// 	// idealOffset.applyQuaternion
	// 	idealOffset.add(this.ball.mesh.position);

	// 	const idealLookAt = new THREE.Vector3(this.ball.direction.x, this.ball.direction.x);
	// 	idealLookAt.add(this.ball.mesh.position);
	// 	console.log(idealLookAt)


	// 	camera.position.copy(idealOffset);
	// 	camera.lookAt(idealLookAt);


	// }

	update(dt, keysdown) {
		this.ball.update(dt);
		this.players.forEach(player => {
			player.update(dt, keysdown, this.ball);
			// this.ball.paddleBounce(player.mesh);
		});
		light.position.x = this.ball.mesh.position.x/2;
		light.position.y = this.ball.mesh.position.y/2;
		// light.lookAt(this.ball.mesh.position);
		camera.lookAt(this.ball.mesh.position);
		// this.makeBallPOV();


	}
}


// ------- Creation
const pong = new Pong();

// ------- Update

// camera.position.x = -FIELD_WIDTH/2;
// camera.position.x = 200;
camera.position.z = 1000;
// camera.rotateZ(Math.PI/2);
// camera.lookAt(0, 0, 0);
var keysdown = [];
let time = Date.now();
function animate() {
	window.requestAnimationFrame( animate );
	const currentTime = Date.now();
	const deltaTime = currentTime - time;
	time = currentTime;

	pong.update(deltaTime, keysdown);

	renderer.render( scene, camera );
}

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
    keysdown[keyCode] = true;
};
document.addEventListener("keyup", onDocumentKeyUp, false);
function onDocumentKeyUp(event) {
	var keyCode = event.which;
	keysdown[keyCode] = false;
};

animate();
