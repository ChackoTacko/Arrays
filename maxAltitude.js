const { runTestCases } = require('../Test-Case-Functions')  

class Solution {
    maxAltitude(gain) {
        let currentAtitude = 0;
        let maxAltitude = 0;
        
        // O(N)
        for (let i of gain) {
            currentAtitude += i;
            maxAltitude = Math.max(currentAtitude, maxAltitude)
        }

        return maxAltitude
    }
}

const testCases = [
    { input: [-5,1,5,0,-7], expected: 1 },
    { input: [4,-3,2,-1,-2], expected: 4 },
    { input: [2,2,-3,-1,2,1,-5], expected: 4 },
];

const testFunction = new Solution();

runTestCases(testFunction.maxAltitude, testCases)