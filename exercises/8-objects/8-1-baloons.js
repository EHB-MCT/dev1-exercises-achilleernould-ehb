"use strict";
import context from "../../script/context.js";
import * as Utils from "../../script/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let ballons = [];

setup();

update();

function setup() {
	for (let i = 0; i < 20; i++) {
		let baloon = {
			x: width / 2,
			y: height / 2,
			hue: 100,
		};
		baloon.x += Utils.randomNumber(-10, 10);
		baloon.y += Utils.randomNumber(-10, 10);
		ballons[i] = baloon;
	}
	console.log(ballons);
}

function update() {
	for (let i = 0; i < ballons.length; i++) {
		drawBaloon(ballons.x, ballons.y, ballons.hue);
	}
}

function drawBaloon(x, y, hue) {
	context.fillStyle = Utils.hsl(30, 100, hue);
	Utils.fillEllipse(x, y, 50, 75);
}
