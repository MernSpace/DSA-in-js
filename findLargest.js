function findLargest(arra){
    return arra ? Math.max(...arra) : 0;
}


console.log(findLargest([1, 3, 7, 2, 9])); // 9
console.log(findLargest())
console.log(findLargest([1, 3, 7, 2, 9])); // 9
console.log(findLargest([1, 3, 7, 2, 9, 11, 13, 17, 19, 21, 23, 27, 29])); // 29