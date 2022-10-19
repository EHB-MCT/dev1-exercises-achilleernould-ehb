"use strict";
import context from "../../script/context.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalSquares();
}

function drawDiagonalSquares() {
    let i = 0 ;
    while ( i <= 6) {
        context.strokeRect(75 + (25* i), 75 + (25* i) , 100, 100);
        i += 1;
    }
}