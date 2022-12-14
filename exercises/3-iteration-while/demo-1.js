"use strict";
import context from "../../script/context.js";
import * as Utils from "../../script/utils.js";

draw();

function draw() {
	context.lineWidth = 2;
	context.strokeStyle = "white";
	context.fillStyle = "#3498DB";
	context.fillRect(50, 50, 300, 300);
	itertest();
}

function itertest() {
	let s = "";
	for (let i = 0; i < 3; i++) {
		s += i;
		for (let j = 0; j < 2; j++) {
			s += j;
			console.log(j, "J");
		}
		s += "!";
		console.log(i, "i");
	}
	console.log(s, "s");
}
