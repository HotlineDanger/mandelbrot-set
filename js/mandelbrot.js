function isMandelbrot(coord) {
    const cr = coord.x;
    const ci = coord.y;
    const zr = cr;
    const zi = ci;
    for (var i = 0; i < 100; i++) {
        if (zr**2 + zi**2 > 4) {
            return false;
        }
        newzr = (zr * zr) - (zi * zi) + cr;
        newzi = ((zr * zi) *2) + ci;
        zr = newzr;
        zi = newzi;
    }
    return true;
}
var graph = new Graph("ex12");
graph.render(isMandlebrot); 