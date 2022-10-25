"use strict";
import context from "../../script/context.js";
import * as Utils from "../../script/utils.js";

draw();

function draw() {
	context.lineWidth = 2;
	context.strokeStyle = "white";
	context.fillStyle = "#3498DB";
	context.fillRect(50, 50, 300, 300);
	drawMoreConcentricCircles();
}

function drawMoreConcentricCircles() {
	context.lineWidth = 2;
	let i = 0;
	while (i <= 12) {
		Utils.strokeCircle(200, 200, 15 + 15 * i);
		i += 1;
	}
}
