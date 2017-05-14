
function Mandelbrot(canvasId, x, y, r) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d");
    const imageData = ctx.createImageData(canvas.width, canvas.height);
    const aspectRatio = canvas.height / canvas.width
    // The more iterations we do the finer the grqin is in the rendering
    this.iterations = 100;
    this.r = r
    this.center = {
        x: x,
        y: y
    };
    const indexToCoord = function(index) {
        index /= 4;
        coord =  {
            x: index % canvas.width,
            y: Math.floor(index / canvas.width)
        }
        coord.x = (((coord.x * this.r / canvas.width) - this.r / 2) + (this.center.x * aspectRatio)) / aspectRatio;
        coord.y = ((((coord.y * this.r / canvas.height) - this.r / 2) * -1) + this.center.y);
        return coord;
    }.bind(this)
    const isMandlebrot = function(coord) {
        const cr = coord.x
        const ci = coord.y
        let zr = coord.x
        let zi = coord.y
        
        for (let i = 0; i < this.iterations; i++) {
            if (zr**2 + zi**2 > 4) {
                return false;
            }
            newzr = (zr * zr) - (zi * zi) + cr;
            newzi = ((zr * zi) *2) + ci
            zr = newzr
            zi = newzi
        }
        return [true, i];
    }.bind(this);
    this.render = function() {
        for (let i = 0; i < canvas.width * canvas.height * 4; i += 4) {
            const thing = isMandlebrot(indexToCoord(i));
            const set =  thing[0] ?  0 : (thing[1] / this.iterations) * 0xffffff;
            
            imageData.data[i]     = (set & 0xff0000) >> 16;
            imageData.data[i + 1] = (set & 0x00ff00) >> 8;
            imageData.data[i + 2] = set & 0x0000ff;
            imageData.data[i + 3] = 255;
        }
        ctx.putImageData(imageData, 0, 0);
    }.bind(this)
}

const graph = new Mandelbrot("can_1", -0.7463, 0.1102, 0.005);
const graph2 = new Mandelbrot("can_2", -0.7453, 0.1127, 0.00065);
const graph3 = new Mandelbrot("can_3", -1.25066, 0.02012, 0.0005);
const graph4 = new Mandelbrot("can_4", -0.16, 1.0405, 0.046);

graph.render();
graph2.render();
graph3.render();
graph4.render(); 