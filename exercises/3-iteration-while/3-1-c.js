"use strict";
import context from "../../script/context.js";
import * as Utils from "../../script/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawCross();
}

function drawCross() {
    let i = 0;
    while (i < 5) {
        let step = 25 ;
        Utils.drawLine(50,150 + (step * i) , 350, 150 + (step * i) );
        Utils.drawLine(150 + (step * i), 50,150 + (step * i), 350);
        i += 1;
    }
}