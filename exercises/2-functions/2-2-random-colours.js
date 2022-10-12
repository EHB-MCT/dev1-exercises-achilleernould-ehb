"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let width = context.canvas.width;

let height = context.canvas.height;

let r = Math.floor(Math.random() * 255);

let g = Math.floor(Math.random() * 255);

let b = Math.floor(Math.random() * 255);

drawRectangle(25, 400);
drawRectangle(50, 350);
drawRectangle(75, 300);
drawRectangle(100, 250);
drawRectangle(125, 200);
drawRectangle(150, 150);
drawRectangle(175, 100);

function drawRectangle(coo, size) {

let r = Math.floor(Math.random() * 255);

let g = Math.floor(Math.random() * 255);

let b = Math.floor(Math.random() * 255);

let color = "rgb(" + r + "," + g + "," + b +")";

context.fillStyle = color;

context.fillRect(coo, coo, size, size);



}

