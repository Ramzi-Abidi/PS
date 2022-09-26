function fct(a, b) {
    return function (c, d) {
        return a * b + c * d;
    }
}

console.log(fct(3, 2)(1,3)); 