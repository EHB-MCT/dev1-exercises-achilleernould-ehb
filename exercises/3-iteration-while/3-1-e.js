"use strict";
import context from "../../script/context.js";
import * as Utils from "../../script/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalGrid();
}

function drawDiagonalGrid() {
    let i = 0 ;
    let spacing = 25;
    while (i <= 6 ) {
        Utils.drawLine(50 + (spacing * i), 200 + (spacing * i), 200 + (spacing * i), 50 + (spacing * i));
        Utils.drawLine(50 + (spacing * i), 200 - (spacing * i), 200 + (spacing * i), 350 - (spacing * i));
        i += 1;
    }
}