function resolvePath(path) {
    let inputArr = path.split("/");

    let stack = [];
    console.log(inputArr);

    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] !== "" && inputArr[i] !== ".." && inputArr[i] !== ".")
            stack.push(inputArr[i]);
        else if (inputArr[i] === "..")
            stack.pop();
    }

    let res = "/";
    if (stack.length === 1) {
        return `/${stack[0]}`;
    }
    else if (stack.length !== 1) {
        for (let i = 0; i < stack.length; i++) {
            if (res !== "/")
                res = res + "/";
            res += stack[i];
        }
    }
    return res;
}

console.log(resolvePath("/home////foo/"));