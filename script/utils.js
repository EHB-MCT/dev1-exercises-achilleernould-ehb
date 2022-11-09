"use strict";

import context from "../script/context.js";

/**
 *
 * @param {Number} x1 x from start
 * @param {Number} y1 y from start
 * @param {Number} x2 x from end
 * @param {Number} y2 y from end
 */

export function drawLine(x1, y1, x2, y2) {
	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.stroke();
}

/**
 *
 * @param {Number} x x from start
 * @param {Number} y y from start
 * @param {Number} size grootte van de cirkel
 */

export function strokeCircle(x, y, size) {
	context.beginPath();
	context.arc(x, y, size, 0, 2 * Math.PI);
	context.stroke();
}

/**
 *
 * @param {Number} x
 * @param {Number} y
 * @param {Number} size
 */
export function fillCircle(x, y, size) {
	context.beginPath();
	context.ellipse(x, y, size, size, 0, 0, 2 * Math.PI);
	context.fill();
}

/**
 *
 * @param {Number} r
 * @param {Number} g
 * @param {Number} b
 * @returns
 */

export function rgb(r, g, b) {
	return "rgb(" + r + "," + g + "," + b + ")";
}

export function rgba(r, g, b, a) {
	return "rgb(" + r + "," + g + "," + b + "," + a + ")";
}
