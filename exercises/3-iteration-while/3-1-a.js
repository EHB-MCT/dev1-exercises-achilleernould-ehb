"use strict";
import context from "../../script/context.js";
import * as Utils from "../../script/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawLines();
}

function drawLines() {
    let i = 3;
    let hoogte = 25;
    while (i<14) {
        Utils.drawLine(75,hoogte * i, 325,hoogte * i);
        
        i += 1;
    }
}