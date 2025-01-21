function recursiveBinartSearch(array,target){
    return search(array,target,0,array.length-1);
}

function search(array, target, low, high){
    if(low > high){
        return -1;
    }
    const mid = Math.floor((low + high) / 2);
    if(array[mid] === target){
        return mid;
    }
    if(target < array[mid]){
        return search(array, target, low, mid-1);
    }else{
        return search(array, target, mid +1, high);
    }
}

console.log(recursiveBinartSearch([1,2,3,4,5], 3));  // 2

console.log(recursiveBinartSearch([1,2,3,4,5], 6));  // -1

console.log(recursiveBinartSearch([1,2,3,4,5,5,5,5,5,5,5], 5));  // 4