"use strict";

drawCircle();

function drawCircle() {

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

// orange bg

context.fillStyle = "orange";
context.beginPath();
context.fillRect(50, 50, 300, 300);


// blue part

context.fillStyle = "blue";
context.beginPath();
context.fillRect(50, 250, 300, 100);

// circle

context.fillStyle = "yellow";
context.beginPath();
context.ellipse(200, 250, 100, 50, Math.PI / 1, 0, Math.PI);
context.fill();
}