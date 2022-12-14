"use strict";
import context from "../../script/context.js";
import * as Utils from "../../script/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawMaze();

function drawMaze() {
	for (let j = 0; j < 1000; j++) {
		for (let i = 0; i < 1000; i++) {
			let hazard = Math.floor(Math.random() * 2);
			let x = i * 10;
			let y = j * 10;
			if (hazard == 0) {
				Utils.drawLine(x, y, x - 10, y + 10);
			} else {
				Utils.drawLine(x, y, x + 10, y + 10);
			}
			context.lineWidth = 5;
		}
	}
}
