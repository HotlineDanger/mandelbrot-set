function thinger(z, c, i) {
    if (i > 10) {
        return;
    }
    const next = Math.pow(z, 2) + c;
    console.log(next);
    return thinger(next, c, i += 1);
}

thinger(0, -1, 0);