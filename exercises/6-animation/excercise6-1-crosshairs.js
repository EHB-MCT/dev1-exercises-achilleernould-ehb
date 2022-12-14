"use strict";
import context from "../../script/context.js";
import * as Utils from "../../script/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = cross;
window.onclick = headShot;

/**
 *
 * @param {MouseEvent} eventData
 */

let score = 0;
function headShot(eventData) {
	score += 10;
	context.font = "30px Arial";
	context.fillText("headshot + 10pt -> je score is:" + score, 50, 50);
	//alert("je score is " + score);
}

function pause() {
	alert("je score is " + score);
}

/**
 *
 * @param {MouseEvent} eventData
 */
function cross(eventData) {
	let x = eventData.pageX;
	let y = eventData.pageY;
	let backimage =
		// black background

		(context.fillStyle = "black");
	context.fillRect(0, 0, width, height);
	// sniper viser

	// color viser
	context.fillStyle = Utils.hsla((x + y) / 2, 100, 50, 100);
	Utils.fillCircle(x, y, 200);

	// viser contour
	context.strokeStyle = "red";
	context.lineWidth = 5;
	Utils.strokeCircle(x, y, 200);
	context.strokeStyle = "black";

	// cross in visor
	Utils.drawLine(x, 0, x, height);
	Utils.drawLine(0, y, width, y);

	// viser center
	context.fillStyle = "red";
	Utils.fillCircle(x, y, 10);
}
