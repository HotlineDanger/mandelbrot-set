function Graph(canvasId) {
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext("2d");
    var imageData = ctx.createImageData(canvas.width, canvas.height);
    var aspectRatio = canvas.height / canvas.width
    this.r = 4
    this.center = {
        x: 0,
        y: 0
    };
    var indexToCoord = function(index) {
        index /= 4;
        coord =  {
            x: index % canvas.width,
            y: Math.floor(index / canvas.width)
        }
        coord.x = (((coord.x * this.r / canvas.width) - this.r / 2) + (this.center.x * aspectRatio)) / aspectRatio;
        coord.y = ((((coord.y * this.r / canvas.height) - this.r / 2) * -1) + this.center.y);
        return coord;
    }.bind(this)
    
    this.render = function(predicate) {
        for (var i = 0; i < canvas.width * canvas.height * 4; i += 4) {
            set = predicate(indexToCoord(i)) ? 255 : 0;
            imageData.data[i]     = 0;
            imageData.data[i + 1] = 0;
            imageData.data[i + 2] = 0;
            imageData.data[i + 3] = set;
        }
        ctx.putImageData(imageData, 0, 0);
    }
}

var graph = new Graph("can_1");
graph.r = 500;
graph.render(function(coord) {
    return (coord.x > 100 && coord.y > -27);
});