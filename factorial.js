function factorial(n) {
    console.log("calculating " + n + "!");
    if (n == 0 || n == 1) {
        return 1;
    }
    let result = 1;
    if (n > 0) { 
        result = factorial(n - 1);
    }
    console.log("computing for " + n);
    return n * result;
}

console.log(factorial(4))
console.log([...Array(5).keys()].filter(x=>x!==0).reduce((a,b)=>a * b))
