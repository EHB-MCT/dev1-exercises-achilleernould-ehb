"use strict";


function drawBox() {

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

// 2 red border boxes

context.lineWidth = 1;
context.strokeStyle = "red";

context.beginPath();
context.rect(50, 50, 150, 150);
context.stroke();

context.beginPath();
context.rect(200, 200, 150, 150);
context.stroke();

// big Black box 

context.lineWidth = 1;
context.strokeStyle = "red";
context.beginPath();
context.fillRect(125, 125, 150, 150);
context.strokeRect(125, 125, 150, 150);


// little white box

context.beginPath();
context.rect(275, 75, 50, 50);
context.stroke();

context.beginPath();
context.rect(75, 275, 50, 50);
context.stroke();   

// little black box 

context.beginPath();
context.fillRect(50, 325, 25, 25);

context.beginPath();
context.fillRect(325, 50, 25, 25);

}

drawBox();  