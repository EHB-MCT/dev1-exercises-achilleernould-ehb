"use strict";
import context from "../../script/context.js";
import * as Utils from "../../script/utils.js";

draw();

function draw() {
	context.lineWidth = 2;
	context.strokeStyle = "white";
	context.fillStyle = "#3498DB";
	context.fillRect(50, 50, 300, 300);
	drawWormhole();
}

function drawWormhole() {
	let i = 0;
	while (i < 310) {
		Utils.drawLine(200, 200, 50 + i, 50);
		Utils.drawLine(200, 200, 50 + i, 350);
		Utils.drawLine(200, 200, 350, 50 + i);
		Utils.drawLine(200, 200, 50, 50 + i);
		i += 10;
	}
}
