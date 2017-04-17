const canvas = document.getElementById("can_1");
const context = canvas.getContext("2d");

// Fill up the canvas with a random color
context.beginPath();
context.rect(0, 0, canvas.width, canvas.height);
context.fillStyle = randColor();
context.fill();

// init style for main lines
initStroke(context, 30);
// main vertical line
drawLine(context, canvas.width / 2, 0, canvas.width / 2, canvas.height); 
// main horizontal line
drawLine(context, 0, canvas.height / 2, canvas.width, canvas.height / 2); 

// init style for small borders
initStroke(context, 5);
// vertical borders left
drawLine(context, canvas.width / 2 - 17.5, 0, canvas.width / 2 - 17.5, canvas.height / 2 - 20);
drawLine(context, canvas.width / 2 - 17.5, canvas.height / 2 + 20, canvas.width / 2 - 17.5, canvas.height);
// vertical borders right
drawLine(context, canvas.width / 2 + 17.5, 0, canvas.width / 2 + 17.5, canvas.height / 2 - 20);
drawLine(context, canvas.width / 2 + 17.5, canvas.height / 2 + 20, canvas.width / 2 + 17.5, canvas.height);

// horizontal borders left
drawLine(context, 0, canvas.height / 2 - 17.5, canvas.width / 2 - 15, canvas.height / 2 - 17.5);
drawLine(context, 0, canvas.height / 2 + 17.5, canvas.width / 2 - 15, canvas.height / 2 + 17.5);

// horizontal borders left
drawLine(context, canvas.width / 2 + 15, canvas.height / 2 - 17.5, canvas.width, canvas.height / 2 - 17.5);
drawLine(context, canvas.width / 2 + 15, canvas.height / 2 + 17.5, canvas.width, canvas.height / 2 + 17.5);


function initStroke(ctx, lineWidth, lineColor) {
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = randColor();
}

function drawLine(ctx, startX, startY, endX, endY) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}

function randColor() {
    return "#" + Math.random().toString(16).slice(2, 8).toUpperCase();
}