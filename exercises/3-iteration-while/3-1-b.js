"use strict";
import context from "../../script/context.js";
import * as Utils from "../../script/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawGrid();
}

function drawGrid() {
    let i = 3 ;
    while (i < 14) {
        let x = 25 ;
        let y = x;
        Utils.drawLine(75, y * i, 325, y * i);
        Utils.drawLine(x * i, 75, x * i, 325);
        i += 2 ;
    }
}