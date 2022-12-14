"use strict";
import context from "../../script/context.js";
import * as Utils from "../../script/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

//drawDots();
drawFlag();

function drawDots() {
	for (let i = 0; i < 30000; i++) {
		let x = Math.random() * width;
		let y = Math.random() * height;
		let distance = Utils.calculateDistance(width / 2, height / 2, x, y);
		if (i < 50 || distance > 100) {
			context.fillStyle = "blue";
		} else {
			context.fillStyle = "red";
		}
		Utils.fillCircle(x, y, 5);
	}
}

function drawFlag() {
	for (let i = 0; i < 30000; i++) {
		let x = Math.random() * width;
		let y = Math.random() * height;
		if (x < width / 3) {
			context.fillStyle = "black";
		} else if (x > (width / 3) * 2) {
			context.fillStyle = "red";
		} else {
			context.fillStyle = "yellow";
		}
		Utils.fillCircle(x, y, 5);
	}
}
