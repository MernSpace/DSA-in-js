function kthLargest(arr,n){
    const minHeap = [];
  
    for (let num of arr) {
      minHeap.push(num);
      minHeap.sort((a, b) => a - b);
      if (minHeap.length > n) {
        minHeap.shift();
      }
    }
    
    return minHeap[0]; 
}


console.log(kthLargest([1, 23, 12, 9, 30, 2, 50], 3))