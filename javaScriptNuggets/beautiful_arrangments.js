var countArrangement = function(n) {
    let count = 0;
    let visited = [];
    
    var calculate = function(pos) {
        if(pos > n)
            count++;
        
        for(let i=1; i<=n; i++) {
            if(!visited[i] && (pos % i == 0 || i % pos == 0)) {
                visited[i] = true;
                calculate(pos+1)
                visited[i] = false;
            }
        }
    }
    
    calculate(1);
    return count;
};