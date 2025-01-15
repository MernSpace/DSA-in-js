function findMissingNumber(arra){
    let total = ((arra.length + 1) * (arra.length + 2)) / 2;
    for(let i = 0; i < arra.length; i++){
        total = total - arra[i];
    }
    return total;
}


console.log(findMissingNumber([1, 2, 3, 4, 6, 7, 8])); // 5
console.log(findMissingNumber([10, 20, 30, 40, 60, 70, 80])); // -274
console.log(findMissingNumber([100, 200, 300, 400, 600, 700, 800])); // -3064