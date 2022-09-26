
var reverse = function (x) {
    let chres = "";

    ok = true       //means positive
    if (x < 0) {
        x = x * (-1);
        ok = false;
    }

    let ch = String(x);

    for (let i = 0; i < ch.length; i++) {
        chres = ch[i] + chres;
    };

    let y = Number(chres);

    if (y > Math.pow(2, 31)) {
        return 0;
    }
    else
        if (ok)
            return y;
        else
            if (!ok)
                return y * (-1);
}

reverse(123);


console.log(reverse(-2147483648));
console.log(reverse(1534236469)); 
