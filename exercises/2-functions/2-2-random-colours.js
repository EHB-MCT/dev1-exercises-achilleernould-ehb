"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let width = context.canvas.width;

let height = context.canvas.height;

drawLine();


function drawLine() {

context.beginPath();
context.moveTo(1, 2);

context.stroke();

}