const { runTestCases } = require('../Test-Case-Functions')  

class Solution {
    //O(N)
    difference(nums) {
        const n = nums.length;
        const differenceArray = new Array(n).fill(0);

        let leftSum = 0;
        // O(N)
        let rightSum = nums.reduce((acc,cur) => acc + cur, 0);
        
        // O(N)
        for (let i = 0; i < nums.length; i++) {
            rightSum -= nums[i];
            differenceArray[i] = Math.abs(rightSum - leftSum)
            leftSum += nums[i]
        }

        return differenceArray
    }
}

const testCases = [
    { input: [1,2,3,4], expected: [9,6,1,6] },
    { input: [5,4,3,2,1], expected: [10,1,6,11,14] },
    { input: [5,5,5,5,5], expected: [20,10,0,10,20] },

];

const testFunction = new Solution();

runTestCases(testFunction.difference, testCases)