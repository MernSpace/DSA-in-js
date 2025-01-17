function mergeSortedArrays(arra1,arra2){
    let i = 0, j = 0;
    const mergedArray = [];
  

    while (i < arra1.length && j < arra2.length) {
      if (arra1[i] < arra2[j]) {
        mergedArray.push(arra1[i]);
        i++;
      } else {
        mergedArray.push(arra2[j]);
        j++;
      }
    }
    while (i < arra1.length) {
        mergedArray.push(arra1[i]);
        i++;
      }

      while (j < arra2.length) {
        mergedArray.push(arra2[j]);
        j++;
      }
    
      return mergedArray;

}



console.log(mergeSortedArrays([3,4,31],[4,6,30,60,70,80,90])) 