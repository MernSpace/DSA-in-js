function twoSum(arr, n) {
    let sum = new Map();
    for (let i = 0; i < arr.length; i++) {
        let remainder = n - arr[i]
        if (sum.has(remainder)) {
            return [sum.get(remainder), i];
        }
        else {
            sum.set(arr[i], i);
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 26)); // [0, 1]
