function thinger(cr, ci) {
    const zr = cr;
    const zi = ci;
   
    for(let i = 0; i < 100; i += 1) {
        if(zr ** 2 + zi ** 2 > 4) {
            return false;
        }

        newzr = (zr * zr) - (zi * zi) + cr;
        newzi = ((zr * zi) *2) + ci;
        zr = newzr;
        zi = newzi; 
    }

    return true;
}

thinger(0, -1, 0);

const