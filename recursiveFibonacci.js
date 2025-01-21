function recursiveFactorial(n){
    if (n <2){
        return n;
    }

    return recursiveFactorial(n-1) + recursiveFactorial(n-2);
}



console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(7));


// Time complexity: O(2^N)
// Space complexity: O(N) due to the recursion stack


//way two
function recursiveFactorial(n){
    if(n===0){
        return 1;
    }

    return n * recursiveFactorial(n-1)
}

console.log(recursiveFactorial(0));