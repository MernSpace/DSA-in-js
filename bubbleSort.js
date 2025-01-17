function bubbleSort(arra){
    let swapped;
    do {
        swapped = false;
        for (let i=0; i < arra.length-1; i++) {
            if (arra[i] > arra[i+1]) {
                let temp = arra[i];
                arra[i] = arra[i+1];
                arra[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arra;
}

console.log(bubbleSort([5, 3, 8, 4, 2]));console.log(bubbleSort([15, 13, 18, 14, 12]))
console.log(bubbleSort([25, 23, 28, 24, 22]))
console.log(bubbleSort([35, 33, 38, 34, 32]))
console.log(bubbleSort([45, 43, 48, 44, 42]))
