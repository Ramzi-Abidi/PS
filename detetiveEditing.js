
const { readline, print } = require('@ip-algorithmics/codeforces-io');

let numberOfLines = parseInt(readline());

while(numberOfLines--) {

/*     let t = readline().trim().split(" ");
    t.map((el,i) => {
        t[i] = parseInt(el) ;
    }); */

    let [ch, ch1] = readline().trim().split(" ");

        let mp = new Map();
        let mp1 = new Map();

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

        let s = "";

        for (let i = 0; i < ch.length; i++) {
            if (mp.get(ch[i]) <= mp1.get(ch[i]))
                s += ch[i];
            else
                mp.set(ch[i], mp.get(ch[i]) - 1);
        }

        if (s == ch1)
            print("YES");
        else
            print("NO");
}

//console.log(numberOfLines);