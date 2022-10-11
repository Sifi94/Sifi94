function getmax(a, b, c) {
    max = 0;
    if (a > b && a > c) {
        return a;

    }
    if (b > a && b > c) {
        return b
    }
    if (c > a && c > b) {
        return c;
    }
}
console.log(getmax(3,2,1));