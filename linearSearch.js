function linearSearch(array, terget){
    for(let i = 0; i < array.length; i++){
        if(array[i] === terget){
            return i;
        }
    }
    return 0;
}


console.log(linearSearch([1,2,3,4,5], 3));  // 2    

console.log(linearSearch([1,2,3,4,5], 6));  // 0

console.log(linearSearch([], 3));  // 0