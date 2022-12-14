"use strict";
import context from "../../script/context.js";
import * as Utils from "../../script/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let maxNumbers;
let numbersSave = [];

fillArray();

calculateAverage(numbersSave);

function fillArray() {
	for (let i = 0; i < 1000; i++) {
		numbersSave[i] = Math.floor(Math.random() * 100);
	}
	console.log(numbersSave);
}

function calculateAverage(array) {
	let som = 0;
	let average;
	for (let i = 0; i < array.length; i++) {
		som += array[i];
	}

	average = som / array.length;
	console.log(average, "average");
	console.log(som, "som");
}
