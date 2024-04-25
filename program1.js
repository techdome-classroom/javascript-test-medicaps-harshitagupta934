function longestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    let charIndexMap = {};

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (charIndexMap[char] >= start) {
            start = charIndexMap[char] + 1;
        }
        charIndexMap[char] = i;
        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
}

module.exports = { longestSubstring };

// Test cases
console.log(longestSubstring("abcabcbb")); // Output: 3

