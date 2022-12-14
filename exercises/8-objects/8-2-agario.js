"use strict";
import context from "../../script/context.js";
import * as Utils from "../../script/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let gameOver = false;

let mousePosX = 0;
let mousePosY = 0;

let playerSize = 10;

let enemies = [];

window.onmousemove = mainDot;

randomEnemies();
update();

function randomEnemies() {
	for (let i = 0; i < 60; i++) {
		let enemie = {
			x: Utils.randomNumber(20, width - 20),
			y: Utils.randomNumber(20, height - 20),
			size: Utils.randomNumber(5, 90),
			hue: Utils.hsl(Utils.randomNumber(10, 150), 100, 50),
			xSpeed: 6,
			ySpeed: 6,
		};
		enemies[i] = enemie;
	}
}

/**
 *
 * @param {MouseEvent} eventData
 */
function mainDot(eventData) {
	mousePosX = eventData.pageX;
	mousePosY = eventData.pageY;
	enemieColision();
}

function drawEnenmy(x, y, size, hue) {
	context.strokeStyle = Utils.hsl(hue, 100, 20);
	context.fillStyle = hue;
	Utils.fillAndStrokeCircle(x, y, size);
}

function update() {
	if (gameOver != true) {
		// white background
		context.fillStyle = "white";
		context.fillRect(0, 0, width, height);

		// draw enemies
		for (let i = 0; i < enemies.length; i++) {
			let enemie = enemies[i];

			drawEnenmy(enemie.x, enemie.y, enemie.size, enemie.hue);
			
			 enemie.x += Utils.randomNumber(-5, 5);
			 enemie.y += Utils.randomNumber(-5, 5);
		}

		// player Circle
		context.fillStyle = Utils.hsla(0, 100, 50, 50);
		Utils.fillAndStrokeCircle(mousePosX, mousePosY, playerSize);

		
		requestAnimationFrame(update);
		context.font = "30px Arial";
		context.fillText("player size = " + playerSize, 50, 50);
	} else {
		// white background
		context.fillStyle = "white";
		context.fillRect(0, 0, width, height);
		context.fillStyle = "black";
		context.font = "60px Arial";
		context.fillText("Game over", width / 2, height / 2);
		context.font = "40px Arial";
		context.fillText(
			"your score is: " + playerSize,
			width / 2,
			height / 2 + 40
		);
	}
}

function enemieColision() {
	for (let i = 0; i < enemies.length; i++) {
		let enemie = enemies[i];
		if (
			Utils.calculateDistance(mousePosX, mousePosY, enemie.x, enemie.y) <
			enemie.size
		) {
			if (playerSize > enemie.size) {
				playerSize += 5;
				enemie.size = 0;
			} else {
				gameOver = true;
			}
		}
	}
}
