ch = "aaabcdeeeeee";

/* let obj = {};
max = 0;
carac = "";

for (let i = 0; i < ch.length; i++) {
    obj[ch[i]] = obj[ch[i]] + 1 || 1;

    if (obj[ch[i]] > max) {
        max = obj[ch[i]];
        carac = ch[i] ;
    }
}
console.log(carac) ;

console.log(obj);
 */


m = new Map() ;
maxC = 0 ;
newCarac = "" ;

for(let i = 0; i<ch.length; i++) {
    if(m.has(ch[i]))
        m.set(ch[i],m.get(ch[i])+1) ;
    else
        m.set(ch[i],1) ;
    
    if(maxC<m.get(ch[i])) {
        max = m.get(ch[i]) ;
        newCarac = ch[i];
    }
}

console.log(newCarac) ;