function ispowerOfTwo(n){
    if(n < 1){return false;};
    while(n > 1){
      if(n%2!=0){return false;};
      n = n/2;
    }
  return true;
}

console.log(ispowerOfTwo(16));  // true


function ispowerOfTwoBit(n){
    if(n < 1){return false;};
    return (n & (n-1)) === 0;
}


console.log(ispowerOfTwoBit(16));  // true