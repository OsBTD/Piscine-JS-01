function sign(x) {
    if (x > 0) {
        return 1;
    } else if (x < 0) {
        return -1;
    } else {
        return 0;
    }
}

function sameSign(x, y) {
   return sign(x) === sign(y)
}