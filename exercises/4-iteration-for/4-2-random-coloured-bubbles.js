"use strict";
import context from "../../script/context.js";
import * as Utils from "../../script/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

draw();

function draw() {
	context.lineWidth = 2;
	context.strokeStyle = "white";
	context.fillStyle = "black";
	context.fillRect(0, 0, width, height);
	drawCircles();
}

function drawCircles() {
	let kleur = "green";
	for (let i = 0; i < 200; i++) {
		let xPos = Math.floor(Math.random() * width - 200);
		let yPos = Math.floor(Math.random() * height - 200);
		let cirklGroot = Math.floor(Math.random() * 50);
		context.fillStyle = "green";
		Utils.fillCircle(300 + xPos, 300 + yPos, cirklGroot);
	}
}
