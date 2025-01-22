const { runTestCases } = require('../Test-Case-Functions')  

class Solution {
    // Time Comlexity is O(N) where N is the length of the array because it must traverse through the entire array 1 time in order to calculate the running sum
    runningSum(nums) {
        const result = new Array(nums.length);
        // TODO: Write your code here
        let runningSum = 0;
        
        for (let i = 0; i < nums.length; i++) {
            runningSum += nums[i];
            result[i] = runningSum;
        }

        return result;
    }
}

const testCases = [
    { input: [3,1,4,2,2], expected: [3,4,8,10,12] },
    { input: [0,0,0,0,0], expected: [0,0,0,0,0] },
    { input: [1,2,3,4,5], expected: [1,3,6,10,15] },
    { input: [1], expected: [1] },
    { input: [-4,2], expected: [-4,-2] }
];

const testFunction = new Solution();

runTestCases(testFunction.runningSum, testCases)