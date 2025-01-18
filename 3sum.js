
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    
    const result = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate values for the 'i' index
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum < 0) {
                left++; // We need a larger sum, move left pointer to the right
            } else if (sum > 0) {
                right--; // We need a smaller sum, move right pointer to the left
            } else {
                result.push([nums[i], nums[left], nums[right]]);
                
                // Skip duplicate values for the 'left' pointer
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                
                // Skip duplicate values for the 'right' pointer
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }
                
                // Move both pointers after finding a valid triplet
                left++;
                right--;
            }
        }
    }
    
    return result;
};


console.log(threeSum([-1,0,1,2,-1,-4])); // [[-1,-1,2],[-1,0,1]]