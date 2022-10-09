"use strict";


function drawBox() {

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

// box

context.lineWidth = 5;
context.strokeStyle = "red";
context.beginPath();
context.moveTo(50, 50);
context.lineTo(200, 200);
context.stroke();

context.beginPath();
context.moveTo(200, 50);
context.lineTo(50, 200);
context.stroke();

context.beginPath();
context.lineWidth = 8;
context.strokeStyle = "blue";
context.moveTo(50, 50);
context.lineTo(200, 50);
context.lineTo(200, 200);
context.lineTo(50, 200);
context.lineTo(50, 46);
context.stroke();



}

drawBox();  