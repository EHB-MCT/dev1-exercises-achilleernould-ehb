"use strict";
import context from "../../script/context.js";
import * as Utils from "../../script/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalLines();
}

function drawDiagonalLines() {
    let i = 0;
    while (i <= 6) {
        Utils.drawLine(50 + (25 * i), 200 + (25 * i), 200 + (25 * i), 50 + (25 * i));
        i += 1 ;
    }
}