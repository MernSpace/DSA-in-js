function factorial(n){
    let result = 1;
    for(let i = 2; i <= n; i++){
        result = result * i;
    }
    return result;
}

console.log(factorial(4))
console.log(factorial(14))
console.log(factorial(27))
console.log(factorial(12))
console.log(factorial(9))
