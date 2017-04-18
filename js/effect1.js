const canvas = document.getElementById("can_1");
const context = canvas.getContext("2d");
const imageData = context.createImageData(canvas.width, canvas.height);

const indexToCoord = (index) => {
    // divide by 4 to get an absolute pixel. This number 
    // represents the pixel location where 0 is the upper left 
    // and the highest index is in the lower right
    index = Math.floor(index / 4);

    const coord = {
        // x is the modulo of the index and the width of the canvas
        x: index % canvas.width,
        // y is the floored index divided by the canvas width
        y: Math.floor(index / canvas.width)
    };

    return coord;
}

for(let i = 0; i < imageData.data.length; i += 4 ) {
    // imageData.data[i] = Math.random() * 255;
    imageData.data[i] = 0;  // red channel
    imageData.data[i + 1] = 0;    // blue channel
    imageData.data[i + 2] = 255;    // green channel
    imageData.data[i + 3] = 255;  // alpha channel
}

context.putImageData(imageData, 0, 0);


