var reverse = function (x) {

    let y = 0;

    if (x < 0) {
        x = x * (-1);
        while (x != 0) {
            y = (y * 10);
            y = y + (x % 10);
            x = Math.floor(x / 10);
        };
        
        if(y>Math.pow(2,31)) {
            return 0 ;
        }
        else
            return y * (-1);
    }
    else {
        while (x != 0) {
            y = (y * 10);
            y = y + (x % 10);
            x = Math.floor(x / 10);
        };

        if(y>Math.pow(2,31)) {
            return 0 ;
        }
        else
            return y;
    }
}