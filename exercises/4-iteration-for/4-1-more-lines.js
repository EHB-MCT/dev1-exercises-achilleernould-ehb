"use strict";
import context from "../../script/context.js";
import * as Utils from "../../script/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

draw();

function draw() {
	context.lineWidth = 2;
	context.strokeStyle = "white";
	context.fillStyle = "orange";
	context.fillRect(0, 0, width, height);
	drawMoreLines();
}

function drawMoreLines() {
	let step = 10;
	let amountX = width / step;
	let amountY = height / step;
	for (let i = 0; i < amountX; i++) {
		Utils.drawLine(0 + step * i, 0, width - step * i, height);
	}
	for (let i = 0; i < amountY; i++) {
		Utils.drawLine(0, 0 + step * i, width, height - 10 * i);
	}
}
