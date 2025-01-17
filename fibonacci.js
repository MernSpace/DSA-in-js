function fibonacci(n){
    let fib =[0,1];
    for(let i=2; i<=n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;

}

console.log(fibonacci(6))
console.log(fibonacci(40))
console.log(fibonacci(46))
console.log(fibonacci(86))
console.log(fibonacci(26))
console.log(fibonacci(16))
