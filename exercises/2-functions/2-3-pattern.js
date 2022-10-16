"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let width = context.canvas.width;

let height = context.canvas.height;

let xpos = width/9;



let widthx = width * 0.2;



drawPattern();


function drawPattern() {

context.beginPath();
context.fillStyle = "#ECF0F1";
context.fillRect(xpos, 100, widthx*3.78, 500);


context.beginPath();
context.fillStyle = "#2C3E50";
context.fillRect(xpos, 100, widthx, 400);
context.fillRect(xpos*6, 100, widthx, 400);

context.beginPath();
context.fillStyle = "#E74C3C";
context.fillRect(xpos, 200, widthx * 3.78, 200);

context.beginPath();
context.fillStyle = "#3498DB";
context.fillRect(xpos, 500, widthx, 100);
context.fillRect(xpos*6, 500, widthx, 100);





}