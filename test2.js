const smallestMissingPositiveInteger = require('./program2');

function testSmallestMissingPositiveInteger() {
    console.log(smallestMissingPositiveInteger([3, 4, -1, 1]) === 2);  // Output should be true
    console.log(smallestMissingPositiveInteger([1, 2, 0]) === 3);  // Output should be true
    console.log(smallestMissingPositiveInteger([-1, -3, 4, 2]) === 1);  // Output should be true
}

// Run the test cases
testSmallestMissingPositiveInteger();



