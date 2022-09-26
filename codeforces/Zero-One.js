
const { readline, print } = require('@ip-algorithmics/codeforces-io');

let numberOfLines = parseInt(readline());

console.log(numberOfLines);

while(numberOfLines--) {

    t = readline().trim().split(" ");
    
    t.map((el, i) => {
        t[i] = parseInt(t[i]);
    });
    
    [x,y,n] = t ;
    
    
    let a = readline().trim().split()[0];
    let b = readline().trim().split()[0];
    
    /* console.log(x);
    console.log(y);
    console.log(n);
    console.log(a);
    console.log(b); */
}
