"use strict";


function drawBox() {

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

// layer 1

context.lineWidth = 2;
context.strokeStyle = "black";
context.fillStyle = "#7ad0f0";
context.beginPath();
context.fillRect(50, 50, 300, 300);
context.strokeRect(50, 50, 300, 300);

// layer 2

context.lineWidth = 2;
context.strokeStyle = "black";
context.fillStyle = "#7ad0f0";
context.beginPath();
context.fillRect(50, 50, 250, 250);
context.strokeRect(50, 50, 250, 250);

// layer 3 

context.lineWidth = 2;
context.strokeStyle = "black";
context.fillStyle = "#7ad0f0";
context.beginPath();
context.fillRect(100, 50, 200, 200);
context.strokeRect(100, 50, 200, 200);

//layer 4

context.lineWidth = 2;
context.strokeStyle = "black";
context.fillStyle = "#7ad0f0";
context.beginPath();
context.fillRect(150, 100, 150, 150);
context.strokeRect(150, 100, 150, 150);

//layer 5

context.lineWidth = 2;
context.strokeStyle = "black";
context.fillStyle = "#7ad0f0";
context.beginPath();
context.fillRect(150, 150, 100, 100);
context.strokeRect(150, 150, 100, 100);


}

drawBox();  