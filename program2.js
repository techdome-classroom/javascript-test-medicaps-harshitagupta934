function smallestMissingPositiveInteger(nums) {
  const n = nums.length;
  
  // Step 1: Convert all negative numbers and zero to n + 1
  for (let i = 0; i < n; i++) {
      if (nums[i] <= 0) {
          nums[i] = n + 1;
      }
  }
  
  // Step 2: Mark visited indices
  for (let i = 0; i < n; i++) {
      const num = Math.abs(nums[i]);
      if (num <= n) {
          nums[num - 1] = -Math.abs(nums[num - 1]);
      }
  }
  
  // Step 3: Find the first positive number
  for (let i = 0; i < n; i++) {
      if (nums[i] > 0) {
          return i + 1;
      }
  }
  
  // Step 4: If all numbers are present, return n + 1
  return n + 1;
}

module.exports = smallestMissingPositiveInteger;

// Test cases
console.log(smallestMissingPositiveInteger([3, 4, -1, 1])); // Output: 2
console.log(smallestMissingPositiveInteger([1, 2, 0]));      // Output: 3
console.log(smallestMissingPositiveInteger([-1, -3, 4, 2])); // Output: 1
