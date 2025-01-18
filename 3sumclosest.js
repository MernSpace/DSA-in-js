
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);  // Sort the array
    let closestSum = Infinity;  // Initialize closest sum as infinity
    
    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate values for the 'i' index
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            // Update the closest sum if this triplet is closer to the target
            if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum;
            }
            
            // Move the pointers based on the comparison with the target
            if (sum < target) {
                left++;  // Increase the sum by moving left pointer right
            } else if (sum > target) {
                right--;  // Decrease the sum by moving right pointer left
            } else {
                return sum;  // If exact match, return the sum immediately
            }
        }
    }
    
    return closestSum;
};


console.log(threeSumClosest([-1,2,1,-4], 1));  // 2