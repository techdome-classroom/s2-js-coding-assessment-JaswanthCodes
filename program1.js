/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            // Push opening brackets onto the stack
            stack.push(char);
        } else {
            // For closing brackets, check if they match the top of the stack
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        }
    }

    // If stack is empty, all brackets were matched correctly
    return stack.length === 0;
};

module.exports = { isValid };
