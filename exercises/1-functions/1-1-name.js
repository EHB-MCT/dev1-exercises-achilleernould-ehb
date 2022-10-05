"use strict";


function drawLine() {

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

// letter a
  
context.beginPath();
context.lineWidth = 8;
context.strokeStyle = "blue";
context.moveTo(100, 100);
context.lineTo(150, 50);
context.lineTo(200, 100);
context.stroke();

context.beginPath();
context.moveTo(100, 75);
context.lineTo(200, 75);
context.stroke();

// letter c

context.beginPath();
context.moveTo(300, 50);
context.lineTo(250, 75);
context.lineTo(300, 100);
context.stroke();

// letter h

context.beginPath();
context.moveTo(350, 50);
context.lineTo(350, 100);
context.stroke();

context.beginPath();
context.moveTo(400, 50);
context.lineTo(400, 100);
context.stroke();

context.beginPath();
context.moveTo(350, 75);
context.lineTo(400, 75);
context.stroke();

// letter i

context.beginPath();
context.moveTo(450, 70);
context.lineTo(450, 100);
context.stroke();

context.beginPath();
context.moveTo(450, 50);
context.lineTo(450, 60);
context.stroke();

// letter l x2

context.beginPath();
context.moveTo(500, 50);
context.lineTo(500, 100);
context.lineTo(550, 100);
context.stroke();

context.beginPath();
context.moveTo(600, 50);
context.lineTo(600, 100);
context.lineTo(650, 100);
context.stroke();

// letter e 

context.beginPath();
context.moveTo(750, 50);
context.lineTo(700, 75);
context.lineTo(750, 100);
context.stroke();

context.beginPath();
context.moveTo(700, 75);
context.lineTo(750, 75);
context.stroke();

}

drawLine();  