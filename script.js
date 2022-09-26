
let t = Number(prompt());
/* 
for (let i = 0; i < t; i++) { */
    
    let mp = new Map();
    let mp1 = new Map();
    
    let ch = prompt();
    let ch1 = prompt();
    
    for (let i = 0; i < ch.length; i++) {
        if (mp.has(ch[i]))
            mp.set(ch[i], mp.get(ch[i]) + 1);
        else
            mp.set(ch[i], 1);
    }

    for (let i = 0; i < ch1.length; i++) {
        if (mp1.has(ch1[i]))
        mp1.set(ch1[i], mp1.get(ch1[i]) + 1);
        else
        mp1.set(ch1[i], 1);
    }

    s = "";

    for (let i = 0; i < ch.length; i++) {
        if (mp.get(ch[i]) <= mp1.get(ch[i]))
        s += ch[i];
        else
        mp.set(ch[i], mp.get(ch[i]) - 1);
    }

    if (s == ch1)
        console.log("YES");
    else
        console.log("NO");

/* } */
/* console.log(mp);
console.log(mp1); */