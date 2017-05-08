function thinger(zr, zi, cr, ci, iterations) {
    if (iterations > 10) {
        return;
    }
    const nextr = (zr * zr) - (zi * zi) + cr;
    const nexti = ((zr * zi) * 2) + ci;
    console.log(next);
    return thinger(nextr, nexti cr, ci iterations += 1);
}

thinger(0, -1, 0);

const