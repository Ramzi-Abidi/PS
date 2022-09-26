/* function combinations(ch, prefix, res) {
    if (ch === "") {
        if (pal(prefix)) {
            res.push(prefix);
            return;
        }
    }
    else {
        combinations(ch.slice(1), [...prefix, ch[0]], res);
        combinations(ch.slice(1), prefix, res);
    }
}

let res = [];
combinations("aab", [], res);

console.log(res); */


function pal(s, start, end) {
    while (start < end) {
        if (s[start] !== s[end]) return false;
        start++;
        end--;
    }
    return true;
}

const dfs = (i, s, prefix) => {
    if (i === s.length) {
        result.push(prefix.slice());
        return;
    }
    
    for (let j = i; j < s.length; j++) {
        if (pal(s, i, j)) {
            prefix.push(s.slice(i, j + 1));
            dfs(j + 1, s, prefix);
            prefix.pop();
        }
    }
}

var partition = function (s) {
    let result = [];

    dfs(0, s, []);
    return result;
};