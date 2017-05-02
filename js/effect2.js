function Graph(canvasId) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d");
    var imageData = ctx.createImageData(canvas.width, canvas.height);
    const aspectRatio = canvas.height / canvas.width;

    this.r = 4;
    this.center = {
        x: 0,
        y: 0
    };

    const indexToCoord = function(index) {
        index /= 4;
        coord = {
            x: index % canvas.width,
            y: Math.floor(index / canvas.width)
        };
        coord.x = (((coord.x * this.r / canvas.width) - this.r / 2) + (this.center * aspectRatio)) / aspectRatio;
        coord.y = ((((coord.y * this.r / canvas.height) - this.r / 2) * -1) + this.center.y);

        return coord;
    }.bind(this);

    this.render = function(predicate) {
        for (var i = 0; i < canvas.width * canvas.height * 4; i += 4) {
            set = predicate(indexToCoord(i)) ? 255 : 0;
            imageData.data[i]     = 0; // R
            imageData.data[i + 1] = 0; // G
            imageData.data[i + 2] = 0; // B
            imageData.data[i + 3] = set; // Alpha
        }
        context.putImageData(imageData, 0, 0);
    }
}

const graph = new Graph();
graph.r = 500;
graph.render(function(coord) {
    
});

graph.render();