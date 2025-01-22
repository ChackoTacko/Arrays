const { runTestCases } = require('../Test-Case-Functions')  

class Solution {
    // Time complexity is O(N) where N is equal to the length of nums. At worst every element in the array is unique causing us to insert a new value in the set for each element. Set lookups are constant
    containsDuplicate(nums) {
       const uniqueSet = new Set();

       for (let i = 0; i < nums.length; i++) {
          if (uniqueSet.has(nums[i])) {
              return true
          }  

          uniqueSet.add(nums[i])
       }

       return false;
    }
  }
  
  const testCases = [
    { input: [3,1,4,2,2], expected: true },
    { input: [0,0,0,0,0], expected: true },
    { input: [1,2,3,4,5], expected: false },
    { input: [1], expected: false },
    { input: [-4,2], expected: false },
    { input: [-4,2,-4], expected: true }
];

const testFunction = new Solution();

runTestCases(testFunction.containsDuplicate, testCases)