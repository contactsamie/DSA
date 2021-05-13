let hash = {};

function fibWithMemo(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    if (n == 2) {
        return 1;
    }
    if (n > 2) {
        if (!hash[n]) {
            let result = fibWithMemo(n - 2) + fibWithMemo(n - 1);
            hash[n] = result;
            return result;
        } else {
            return hash[n];
        }
    }
}

console.log(fibWithMemo(1))
console.log(fibWithMemo(2))
console.log(fibWithMemo(3))
console.log(fibWithMemo(4))
console.log(fibWithMemo(5))
console.log(fibWithMemo(6))
console.log(fibWithMemo(6000))
console.log(fibWithMemo(5000))
console.log(fibWithMemo(6000))
